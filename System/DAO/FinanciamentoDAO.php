<?php

class FinanciamentoDAO
{

    private static $dbConn = null;

    function __construct()
    {
        //parent::__construct();
        self::initializeConnection();
    }

    private static function initializeConnection()
    {
        if (is_null(self::$dbConn)) {
            self::$dbConn = DatabasePDO::getInstance();
        }
    }

    private static function getConnection()
    {
        self::initializeConnection();
        return self::$dbConn;
    }

    public static function CadastrarFinanciamentoEObterSeuID(FinanciamentoModel $financiamento)
    {
        $pdo = self::getConnection();

        //1)Dados Básicos do financiamento
        $sql = "INSERT INTO financiamentos
                    (id_usuario_cadastro, valor_solicitado, valor_aprovado, data_solicitacao, id_banco,  id_imovel)
                VALUES
                    (:id_usuario_cadastro, :valor_solicitado, :valor_aprovado, SYSDATE(), :id_banco,  :id_imovel)";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_usuario_cadastro', $financiamento->getUsuarioCorrespondente()->getId());
        $stmt->bindValue(':valor_solicitado', $financiamento->getValorSolicitado());
        $stmt->bindValue(':valor_aprovado', $financiamento->getValorAprovado());
        $stmt->bindValue(':id_banco', $financiamento->getBanco()->getIdBanco());
        $stmt->bindValue(':id_imovel', $financiamento->getImovel()->getId());

        try {
            $stmt->execute();

            $ultimoIdFinanciamentoInserido = '';
            $ultimoIdFinanciamentoInserido = $pdo->lastInsertId('id');

            $financiamento->setId($ultimoIdFinanciamentoInserido);
            $financiamento->getStatusFinanciamento()->setIdFinanciamento($ultimoIdFinanciamentoInserido);

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        //2)Cadastrando os documentos anexados
        self::CadastrarDocumentosDoFinanciamento($financiamento);

        //3)Cadastrando os dados de interação do financiamento
        //No caso de um novo financimaneto, deverá ser inserida uma interação padrão.
        self::CadastrarInteracaoFinanciamentoEObterSeuId($financiamento->getStatusFinanciamento());

        //4) Cadastrando relação de participante com financiamento
        self::CadastrarRelacoesParticipantesFinanciamentos($financiamento);

        return $ultimoIdFinanciamentoInserido;
    }

    private static function CadastrarDocumentosDoFinanciamento(FinanciamentoModel $financiamento)
    {
        $pdo = self::getConnection();

        foreach ($financiamento->getArrayDocumentos() as $documento) {

            $sql = "INSERT INTO documentos_financiamentos
                    (nome, nome_arquivo, data_envio, nome_unico_do_arquivo, id_tipo_documento, id_financiamento)
                VALUES
                    (:nome, :nome_arquivo, SYSDATE(), :nome_unico_do_arquivo, (SELECT id FROM tipos_documento WHERE nome =:descricao_tipo_documento), :id_financiamento)";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':nome', $documento->getNome());
            $stmt->bindValue(':nome_arquivo', $documento->getNomeArquivo());
            $stmt->bindValue(':descricao_tipo_documento', $documento->getDescricaoTipoDocumento());
            $stmt->bindValue(':id_financiamento', $financiamento->getId());
            $stmt->bindValue(':nome_unico_do_arquivo', $documento->getNomeUnicoDoArquivo());

            try {
                $stmt->execute();

            } catch (Exception $e) {

                echo $e->getMessage();
            }
        }
    }

    public static function CadastrarOcorrenciaFinanciamentoEObterSeuId(OcorrenciasFinanciamentoModel $ocorrencia)
    {
        $pdo = self::getConnection();

        $sql = "INSERT INTO financiamentos_ocorrencias
                    (descricao,data_ocorrencia,id_financiamento,id_usuario_cadastro)
                VALUES
                    (:descricao,SYSDATE(),:id_financiamento,:id_usuario_cadastro)";

        $stmt = $pdo->prepare($sql);


        $stmt->bindValue(':descricao', $ocorrencia->getDescricao());
        $stmt->bindValue(':id_financiamento', $ocorrencia->getIdFinanciamento());
        $stmt->bindValue(':id_usuario_cadastro', $ocorrencia->getIdUsuarioCadastroOcorrencia());

        try {
            $stmt->execute();


        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $pdo->lastInsertId('id');
    }

    public static function CadastrarInteracaoFinanciamentoEObterSeuId(StatusInteracaoModel $status)
    {

        $pdo = self::getConnection();


        $sql = "INSERT INTO interacoes_financiamentos
                        (data_status, id_financiamento, id_interacao_atual, id_proxima_interacao,
                        id_status_financiamento,
                        id_usuario_cadastro_iteracao)
                    VALUES
                        (SYSDATE(), :id_financiamento, :id_interacao_atual, :id_proxima_interacao,
                        :id_status_financiamento,
                        :id_usuario_cadastro_iteracao)";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_financiamento', $status->getIdFinanciamento());
        $stmt->bindValue(':id_interacao_atual', $status->getIdInteracaoAtual());
        $stmt->bindValue(':id_proxima_interacao', $status->getIdProximaInteracao());
        $stmt->bindValue(':id_status_financiamento', $status->getIdStatusInteracao());
        $stmt->bindValue(':id_usuario_cadastro_iteracao', $status->getIdUsuarioCadastroInteracao());

        try {
            $stmt->execute();


        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $pdo->lastInsertId('id');
    }

    private static function CadastrarRelacoesParticipantesFinanciamentos(FinanciamentoModel $financiamento)
    {
        $pdo = self::getConnection();


        foreach ($financiamento->getArrayParticipantes() as $participante) {

            $sql = "INSERT INTO participantes_financiamentos
                        (id_tipo_participante,id_participante,id_financiamento)
                    VALUES
                        (:id_tipo_participante,:id_participante,:id_financiamento)";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':id_financiamento', $financiamento->getId());
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_tipo_participante', $participante->getIdTipoParticipante());

            try {
                $stmt->execute();

            } catch (Exception $e) {

                echo $e->getMessage();
            }
        }
    }

    /**
     * @return FinanciamentoModel[]
     */
    public static function ObterArrayFinanciamentosPorFiltro(FinanciamentoModel $financiamento)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    financ.id,part.nome,tipo_par.id id_tipo_participante,tipo_par.tipo descricao_tipo_participante,
                    interacoes_financ.id_status_financiamento,stat.descricao descricao_status_financiamento,
                    interacoes.descricao,financ.data_solicitacao,bancos.nome nome_banco,emp.nome_fantasia,
                    (SELECT COUNT(1) FROM financiamentos_ocorrencias WHERE id_financiamento = financ.id) qtd_ocorrencias
                FROM
                    financiamentos financ
                    JOIN participantes_financiamentos par_financ ON (financ.id=par_financ.id_financiamento)
                    JOIN participantes part ON (part.id=par_financ.id_participante)
                    LEFT JOIN interacoes_financiamentos interacoes_financ ON (interacoes_financ.id_financiamento = financ.id)
                    LEFT JOIN interacoes ON (interacoes.id=interacoes_financ.id_interacao_atual)
                    LEFT JOIN status_financiamento stat ON (stat.id=interacoes_financ.id_status_financiamento)
                    LEFT JOIN bancos ON (bancos.id=financ.id)
                    LEFT JOIN usuarios usu ON (usu.id=financ.id_usuario_cadastro)
                    LEFT JOIN empresas emp ON (emp.id=usu.id_empresa_gestora)
                    LEFT JOIN tipo_participante tipo_par ON (tipo_par.id=par_financ.id_tipo_participante)
                WHERE
                    1=1
                    AND tipo_par.tipo='Comprador'
                    AND interacoes_financ.data_status=(SELECT MAX(data_status) FROM interacoes_financiamentos WHERE id_financiamento=financ.id) ";

        $arrParticipantes = $financiamento->getArrayParticipantes();

        if ($arrParticipantes) {
            if ($arrParticipantes[0]->getNome())
                $sql .= "AND part.nome LIKE :nome ";
        }

        if ($financiamento->getBanco()->getIdBanco())
            $sql .= "AND bancos.id = :id_banco ";

        if ($financiamento->getIdStatusFinanciamento())
            $sql .= "AND id_status_financiamento = :id_status_financiamento ";

        if ($financiamento->getEmpresaCorrespondente()->getNomeFantasia())
            $sql .= "AND emp.nome_fantasia LIKE :nome_fantasia ";

        $stmt = $pdo->prepare($sql);

        //Só posso adicionar os bindValue depois que a query estiver completa,
        //por isso não é possível usar os "ifs" acima para colocar os bindValue abaixo
        //-------------------------------------------------------------------------------

        if ($arrParticipantes) {
            if ($arrParticipantes[0]->getNome())
                $stmt->bindValue(':nome', "%" . $financiamento->getArrayParticipantes()[0]->getNome() . "%");
        }

        if ($financiamento->getBanco()->getIdBanco())
            $stmt->bindValue(':id_banco', $financiamento->getBanco()->getIdBanco());

        if ($financiamento->getIdStatusFinanciamento())
            $stmt->bindValue(':id_status_financiamento', $financiamento->getIdStatusFinanciamento());

        if ($financiamento->getEmpresaCorrespondente()->getNomeFantasia())
            $stmt->bindValue(':nome_fantasia', "%" . $financiamento->getEmpresaCorrespondente()->getNomeFantasia() . "%");
        //-------------------------------------------------------------------------------


        $arrFinanciamentosEncontrados = Array();

        try {
            $stmt->execute();

            $arrParticipantesEncontrados = Array();

            while ($row = $stmt->fetch()) {
                $financiamentoEncontrado = new FinanciamentoModel($row);

                $participante = new ParticipanteModel($row);
                $arrParticipantesEncontrados[] = $participante;
                $financiamentoEncontrado->setArrayParticipantes($arrParticipantesEncontrados);
                $arrFinanciamentosEncontrados[] = $financiamentoEncontrado;
            }

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrFinanciamentosEncontrados;
    }

    /**
     * @return StatusFinanciamentoModel[]
     */
    public static function ObterTodasInteracoesPorIdFinanciamento($idFinanciamento)
    {
        $pdo = self::getConnection();

        $sql = "SELECT 
                    (SELECT descricao FROM interacoes WHERE id = itera_financ.id_interacao_atual) descricao_interacao_atual,
                    itera_financ.data_status,
                    (SELECT descricao FROM interacoes WHERE id = itera_financ.id_proxima_interacao) descricao_proxima_interacao,
                    stat.descricao descricao_status_interacao,
                    itera_financ.id_financiamento,
                    stat.id id_status_interacao,
                    DATEDIFF(SYSDATE(),itera_financ.data_status) dias_ate_hoje
                FROM
                    interacoes_financiamentos itera_financ
                    LEFT JOIN status_financiamento stat ON (stat.id=itera_financ.id_status_financiamento) 
                WHERE
                    id_financiamento=:id_financiamento
                ORDER BY data_status ASC";

        $arrParticipantesEncontrados = Array();

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_financiamento', $idFinanciamento);

        $arrsStatusFinanciamentoEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $statusFinanciamentoEncontrado = new StatusInteracaoModel($row);
                $arrsStatusFinanciamentoEncontrados[] = $statusFinanciamentoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrsStatusFinanciamentoEncontrados;
    }

    /**
     * @return OcorrenciasFinanciamentoModel[]
     */
    public static function ObterArraysOcorrenciasPorIdFinanciamento($idFinanciamento)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id,descricao,data_ocorrencia,id_financiamento,
                    id_usuario_cadastro
                FROM
                    financiamentos_ocorrencias
                WHERE
                    id_financiamento = :id_financiamento
                ORDER BY data_ocorrencia ASC";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_financiamento', $idFinanciamento);

        $arrOcorrenciasEncontradas = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $ocorrenciaEncontrada = new OcorrenciasFinanciamentoModel($row);
                $arrOcorrenciasEncontradas[] = $ocorrenciaEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrOcorrenciasEncontradas;
    }

    /**
     * @return DocumentacaoFinanciamentoModel[]
     */
    public static function ObterArraysDocumentosPorIdFinanciamento($idFinanciamento)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    docs.id,docs.nome,docs.nome_arquivo,docs.data_envio,
                    docs.nome_unico_do_arquivo,docs.id_financiamento,
                    tipos.id id_tipo_documento,tipos.nome descricao_tipo_documento
                FROM
                    documentos_financiamentos docs
                    LEFT JOIN tipos_documento tipos ON (tipos.id=docs.id_tipo_documento)
                WHERE
                    id_financiamento=:id_financiamento";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_financiamento', $idFinanciamento);

        $arrDocumentosEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $documentoEncontrado = new DocumentacaoFinanciamentoModel($row);
                $arrDocumentosEncontrados[] = $documentoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrDocumentosEncontrados;
    }

    /**
     * @return string
     */
    public static function ObterIdStatusFinanciamentoPorDescricao($descricaoStatus)
    {
        $pdo = self::getConnection();

        $sql = "SELECT id FROM status_financiamento WHERE descricao = :descricao_status";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':descricao_status', $descricaoStatus);

        try {
            $stmt->execute();

            $row = $stmt->fetch();

            $statusFinanciamentoEncontrado = $row['id'];

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $statusFinanciamentoEncontrado;
    }

    /**
     * @return string
     */
    public static function ObterIdDescricaoInteracaoPorDescricao($descricaoInteracao)
    {
        $pdo = self::getConnection();

        $sql = "SELECT id FROM interacoes WHERE descricao = :descricao_status";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':descricao_status', $descricaoInteracao);

        try {
            $stmt->execute();

            $row = $stmt->fetch();

            $descricaoInteracaoEncontrada = $row['id'];

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $descricaoInteracaoEncontrada;
    }

    /**
     * @return string
     */
    public static function ExcluirOcorrenciaFinanciamentoPorIdOcorrencia($idOcorrencia)
    {
        $pdo = self::getConnection();

        $sql = "DELETE FROM financiamentos_ocorrencias WHERE id=:id_ocorrencia";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_ocorrencia', $idOcorrencia);

        try {
            $stmt->execute();
            return MensagensSistemaModel::MENSAGEM_SUCESSO;

        } catch (Exception $e) {

        }

        return MensagensSistemaModel::MENSAGEM_ERRO;
    }

    /**
     * @return string
     */
    public static function ExcluirFinanciamentoPorSeuId($idFinanciamento)
    {
        $pdo = self::getConnection();

        $sql = "DELETE FROM financiamentos WHERE id=:id_financiamento";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_financiamento', $idFinanciamento);

        try {
            $stmt->execute();
            return MensagensSistemaModel::MENSAGEM_SUCESSO;

        } catch (Exception $e) {

        }

        return MensagensSistemaModel::MENSAGEM_ERRO;
    }


}