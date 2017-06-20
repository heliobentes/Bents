<?php

class FormularioDAO
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

    /**
     * @return GrauInstrucaoModel[]
     */
    public static function ObterGrausInstrucao()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_grau_instrucao,descricao descricao_grau_instrucao
                FROM
                    grau_instrucao";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $usuarioGrauInstrucaoEncontrado = new GrauInstrucaoModel($row);
                $arrGrauInstrucaoEncontrados[] = $usuarioGrauInstrucaoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrGrauInstrucaoEncontrados;
    }

    /**
     * @return ParticipanteModel[]
     */
    public static function ObterEstadoCivis()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_estado_civil,descricao descricao_estado_civil
                FROM
                    estado_civil";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $participanteEncontrado = new ParticipanteModel($row);
                $arrParticipantesEncontrados[] = $participanteEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrParticipantesEncontrados;
    }

    /**
     * @return ParticipanteModel[]
     */
    public static function ObterRegimesCasamento()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_regime_casamento,descricao descricao_regime_casamento
                FROM
                    regime_casamento";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $participanteEncontrado = new ParticipanteModel($row);
                $arrParticipantesEncontrados[] = $participanteEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrParticipantesEncontrados;
    }

    /**
     * @return ResidenciaModel[]
     */
    public static function ObterTiposResidencia()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_residencia,tipo tipo_residencia
                FROM
                    tipo_residencia";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoResidenciaEncontrada = new ResidenciaModel($row);
                $arrTiposResidenciaEncontradas[] = $tipoResidenciaEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposResidenciaEncontradas;
    }

    /**
     * @return InstituicaoBancariaModel[]
     */
    public static function ObterBancos()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_banco,numero numero_banco,nome nome_banco
                FROM
                    bancos";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $instituicaoBancariaEncontrada = new InstituicaoBancariaModel($row);
                $arrInstituicoesBancariasEncontradas[] = $instituicaoBancariaEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrInstituicoesBancariasEncontradas;
    }

    /**
     * @return InstituicaoBancariaModel[]
     */
    public static function ObterBancosTrabalhadosPorCorrespondentes()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_banco,numero numero_banco,nome nome_banco
                FROM
                    bancos
                WHERE
                    numero IN
                            (
                                '001','033','077','104','341','353'
                            )";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $instituicaoBancariaEncontrada = new InstituicaoBancariaModel($row);
                $arrInstituicoesBancariasEncontradas[] = $instituicaoBancariaEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrInstituicoesBancariasEncontradas;
    }

    /**
     * @return DadoBancarioModel[]
     */
    public static function ObterTiposConta()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_conta,tipo tipo_conta
                FROM
                    tipo_conta_bancaria";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $dadoBancarioEncontrado = new DadoBancarioModel($row);
                $arrDadoBancarioEncontrado[] = $dadoBancarioEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrDadoBancarioEncontrado;
    }

    /**
     * @return CompromissoFinanceiroModel[]
     */
    public static function ObterTiposCompromissoFianceiro()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_compromisso,nome tipo_compromisso
                FROM
                    tipo_compromisso_financeiro";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoCompromissoFinanceiroEncontrado = new CompromissoFinanceiroModel($row);
                $arrTiposCompromissoFinanceiroEcontrados[] = $tipoCompromissoFinanceiroEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposCompromissoFinanceiroEcontrados;
    }

    /**
     * @return ImovelParticipanteModel[]
     */
    public static function ObterTiposImovel()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                  id id_tipo_imovel, tipo descricao_tipo_imovel
                FROM
                  tipo_imovel";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoImovelEncontrado = new ImovelParticipanteModel($row);
                $arrTiposImovelEcontrados[] = $tipoImovelEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposImovelEcontrados;
    }

    /**
     * @return VeiculoParticipanteModel[]
     */
    public static function ObterTiposVeiculo()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_veiculo ,tipo descricao_tipo_veiculo
                FROM
                    tipo_veiculo";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoVeiculoEncontrado = new VeiculoParticipanteModel($row);
                $arrTiposVeiculoEcontrados[] = $tipoVeiculoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposVeiculoEcontrados;
    }

    /**
     * @return VeiculoParticipanteModel[]
     */
    public static function ObterTiposSituacaoVeiculo()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_situacao_veiculo, situacao descricao_situacao_veiculo
                FROM
                    situacao_veiculo";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoSituacaoVeiculoEncontrado = new VeiculoParticipanteModel($row);
                $arrTiposSituacaoVeiculoEcontrados[] = $tipoSituacaoVeiculoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposSituacaoVeiculoEcontrados;
    }

    /**
     * @return AplicacaoFinanceiraModel[]
     */
    public static function ObterTiposAplicacaoFinanceira()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_aplicacao,tipo tipo_aplicacao
                FROM
                    tipo_aplicacao_financeira";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoAplicacaoFinanceiraEncontrada = new AplicacaoFinanceiraModel($row);
                $arrTiposAplicacaoFinanceiraEcontradas[] = $tipoAplicacaoFinanceiraEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposAplicacaoFinanceiraEcontradas;
    }

    /**
     * @return ParentescoModel[]
     */
    public static function ObterTiposParentesco()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_parentesco,nome descricao_tipo_parentesco
                FROM
                    parentesco";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoParentescoEncontrado = new ParentescoModel($row);
                $arrTiposParentescoEncontrados[] = $tipoParentescoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposParentescoEncontrados;
    }

    /**
     * @return CartaoCreditoModel[]
     */
    public static function ObterBandeirasCartaoCredito()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_bandeira_cartao_credito,bandeira bandeira_cartao_credito
                FROM
                    bandeira_cartao_credito";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $bandeiraCartaoCreditoEncontrada = new CartaoCreditoModel($row);
                $arrBandeirasCartaoCreditoEncontradas[] = $bandeiraCartaoCreditoEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrBandeirasCartaoCreditoEncontradas;
    }

    /**
     * @return UsuarioModel[]
     */
    public static function ObterTiposUsuario()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_tipo_usuario,nome tipo_usuario
                FROM
                    tipos_usuario";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $usuarioEncontrado = new UsuarioModel($row);
                $arrUsuariosEncontrados[] = $usuarioEncontrado;

            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrUsuariosEncontrados;
    }

    /**
     * @return ParticipanteModel[]
     */
    public static function ObterTiposParticipante()
    {
        $pdo = self::getConnection();

        $sql = "SELECT 
                    id id_tipo_participante,tipo descricao_tipo_participante 
                FROM 
                    tipo_participante";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $tipoParticipanteEncontrado = new ParticipanteModel($row);
                $arrTiposParticipantesEncontrados[] = $tipoParticipanteEncontrado;

            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposParticipantesEncontrados;
    }

    /**
     * @return StatusFinanciamentoModel[]
     */
    public static function ObterTiposStatusFinanciamento()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_status_financiamento,descricao descricao_status_financiamento 
                FROM 
                    status_financiamento";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $statusFinanciamentoEncontrado = new FinanciamentoModel($row);
                $arrStatusFinanciamentoEncontrados[] = $statusFinanciamentoEncontrado;

            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrStatusFinanciamentoEncontrados;
    }

    /**
     * @return ParticipanteModel[]
     */
    public static function ObterTiposInteracoesFinanciamento()
    {
        $pdo = self::getConnection();

        $sql = "SELECT 
                    id id_interacao_atual, descricao descricao_interacao_atual
                FROM 
                    interacoes";

        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $tipoIteracaoEncontrada = new StatusInteracaoModel($row);
                $arrTiposIteracoesEncontradas[] = $tipoIteracaoEncontrada;

            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposIteracoesEncontradas;
    }

    /**
     * @return Array
     */
    public static function ObterUfsBrasil()
    {
        $pdo = self::getConnection();

        $sql = "SELECT sigla FROM ufs_brasil ORDER BY sigla ASC";

        $stmt = $pdo->prepare($sql);

        $array = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $array[] = $row['sigla'];

            }

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $array;
    }

    /**
     * @return DocumentoParticipanteModel[]
     */
    public static function ObterTiposDocumentosParticipantePorTipoParticipante(ParticipanteModel $participante, $ehPessoaFisica)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    t_doc.id,t_doc.tipo descricao_tipo_documento
                FROM
                    tipos_documento_participante t_doc
                    LEFT JOIN tipo_participante_documento t_par ON (t_par.id_tipo_documento=t_doc.id)
                WHERE
                    1=1";

        if ($ehPessoaFisica == '1') {
            $sql .= " AND t_doc.eh_para_pessoa_fisica=1";
        } else {
            $sql .= " AND t_doc.eh_para_pessoa_juridica=1";
        }

        $sql .= " AND t_par.id_tipo_participante=:id_tipo_participante
                ORDER BY t_doc.tipo ASC";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_tipo_participante', $participante->getIdTipoParticipante());

        $arrayTiposDocumentosEncontrados = '';

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $tipoDocumentoEncontrado = new  DocumentoParticipanteModel($row);
                $arrayTiposDocumentosEncontrados[] = $tipoDocumentoEncontrado;

            }

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrayTiposDocumentosEncontrados;
    }

    /**
     * @return ModeloFormularioModel[]
     */
    public static function ObterCategoriasModeloDocumentos()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_categoria_documento,categoria descricao_categoria_documento
                FROM
                    categorias_modelo_formulario";

        $stmt = $pdo->prepare($sql);

        $arrCategoriasModeloEncontrados = '';

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $categoriaModeloFormularioEncontrado = new ModeloFormularioModel($row);
                $arrCategoriasModeloEncontrados[] = $categoriaModeloFormularioEncontrado;

            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrCategoriasModeloEncontrados;
    }
}