<?php

class ParticipanteDAO
{
    private static $dbConn = null;

    function __construct()
    {
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

    //<editor-fold desc="CADASTROS...">
    //----------------------------------------------------------------------------------------------------------------

    public static function CadastrarParticipanteEObterSeuID(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        /*1) Cadastrando dados básicos do participante*/
        $sql = "INSERT INTO participantes
                            (
                                nome, data_nascimento, cpf, cnpj,
                                inscricao_estadual, email, tel_residencial, tel_celular, tel_comercial, tel_outro,
                                site, logradouro, complemento, numero,
                                bairro, cidade, uf, cep, eh_participante_ativo,
                                data_cadastro, sexo, id_grau_instrucao,
                                rg, orgao_emissor_rg, uf_orgao_emissor_rg,
                                nome_mae, nome_pai, id_regime_casamento,
                                data_casamento, id_estado_civil, profissao,
                                numero_pis_pasep, nacionalidade,
                                naturalidade, uf_naturalidade, id_tipo_participante
                            )
                        VALUES
                            (
                                :nome, :data_nascimento, :cpf, :cnpj,
                                :inscricao_estadual, :email, :tel_residencial, :tel_celular, :tel_comercial, :tel_outro,
                                :site, :logradouro, :complemento, :numero,
                                :bairro, :cidade, :uf, :cep, :eh_participante_ativo,
                                SYSDATE(), :sexo, :id_grau_instrucao,
                                :rg, :orgao_emissor_rg, :uf_orgao_emissor_rg,
                                :nome_mae, :nome_pai,:id_regime_casamento,
                                :data_casamento,:id_estado_civil,:profissao,
                                :numero_pis_pasep, :nacionalidade,
                                :naturalidade, :uf_naturalidade, :id_tipo_participante
                            )";
        try {
            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind do participante...">
            $stmt->bindValue(':nome', $participante->getNome());
            $stmt->bindValue(':data_nascimento', $participante->getDataNascimento());
            $stmt->bindValue(':cpf', $participante->getCpf());
            $stmt->bindValue(':cnpj', $participante->getCnpj());
            $stmt->bindValue(':inscricao_estadual', $participante->getInscricaoEstadual());
            $stmt->bindValue(':email', $participante->getEmail());
            $stmt->bindValue(':tel_residencial', $participante->getTelefoneResidencial());
            $stmt->bindValue(':tel_celular', $participante->getTelefoneCelular());
            $stmt->bindValue(':tel_comercial', $participante->getTelefoneComercial());
            $stmt->bindValue(':tel_outro', $participante->getTelefoneOutro());
            $stmt->bindValue(':site', $participante->getSite());
            $stmt->bindValue(':logradouro', $participante->getLogradouro());
            $stmt->bindValue(':complemento', $participante->getComplemento());
            $stmt->bindValue(':numero', $participante->getNumero());
            $stmt->bindValue(':bairro', $participante->getBairro());
            $stmt->bindValue(':cidade', $participante->getCidade());
            $stmt->bindValue(':uf', $participante->getUf());
            $stmt->bindValue(':cep', $participante->getCep());
            $stmt->bindValue(':eh_participante_ativo', '1');
            $stmt->bindValue(':sexo', $participante->getSexo());
            $stmt->bindValue(':id_grau_instrucao', $participante->getIdGrauInstrucao());
            $stmt->bindValue(':rg', $participante->getRg());
            $stmt->bindValue(':orgao_emissor_rg', $participante->getOrgaoEmissorRg());
            $stmt->bindValue(':uf_orgao_emissor_rg', $participante->getUfOrgaoEmissorRg());
            $stmt->bindValue(':nome_mae', $participante->getNomeMae());
            $stmt->bindValue(':nome_pai', $participante->getNomePai());
            if ($participante->getIdRegimeCasamento() != '') {
                $stmt->bindValue(':id_regime_casamento', $participante->getIdRegimeCasamento());
            } else {
                $stmt->bindValue(':id_regime_casamento', null);
            }
            $stmt->bindValue(':data_casamento', $participante->getDataCasamento());
            $stmt->bindValue(':id_estado_civil', $participante->getIdEstadoCivil());
            $stmt->bindValue(':profissao', $participante->getProfissao());
            $stmt->bindValue(':numero_pis_pasep', $participante->getNumeroPisPasep());
            $stmt->bindValue(':nacionalidade', $participante->getNacionalidade());
            $stmt->bindValue(':naturalidade', $participante->getNaturalidade());
            $stmt->bindValue(':uf_naturalidade', $participante->getUfNaturalidade());
            $stmt->bindValue(':id_tipo_participante', $participante->getIdTipoParticipante());

            //</editor-fold>
            //die($sql);


            $stmt->execute();

            $ultimoIdParticipanteInserido = '';
            $ultimoIdParticipanteInserido = $pdo->lastInsertId('id');

            $participante->setId($ultimoIdParticipanteInserido);


            /*2) Cadastrando dados de Fonte de Renda*/
            self::CadastrarFontesRendaParticipante($participante);

            /*3) Cadastrando dados de Parentesco*/
            self::CadastrarParentescosParticipante($participante);

            /*4) Cadastrando dados de Aplicação Financeira*/
            self::CadastrarAplicacoesFinanceirasParticipante($participante);

            /*5) Cadastrando dados de Residência*/
            self::CadastrarDadosResidenciaParticipante($participante);

            /*6) Cadastrando dados de Contas Bancárias*/
            self::CadastrarDadosContasBancariasParticipante($participante);

            /*7) Cadastrando dados de Compromissos Financeiros*/
            self::CadastrarCompromissosFinanceirosParticipante($participante);

            /*8) Cadastrando dados de Cartões de Crédito*/
            self::CadastrarCartoesCreditoParticipante($participante);

            /*9) Cadastrando dados dos veículos */
            self::CadastrarVeiculosParticipante($participante);

            /*10) Cadastrando dados dos imóveis */
            self::CadastrarImoveisParticipante($participante);

            /*11) Cadastrando os documentos  */
            self::CadastrarDocumentosParticipante($participante);

            /*12) Cadastrando dados profissionais  */
            if (count($participante->getArrayDadosProfissionais()) > 0) {
                self::CadastrarDadosProfissionaisParticipante($participante);
            }

            /* 13) Cadastrando dados de liberação de crédito */
            if ($participante->getDadosLiberacaoCredito()->getNumeroAgencia() != "") {
                self::CadastrarDadosLiberacaoCreditoParticipante($participante);
            }

        } catch (Exception $e) {

            echo $e->getMessage();

        }


        return $ultimoIdParticipanteInserido;
    }

    private static function CadastrarFontesRendaParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayFontesRenda() as $fonteRenda) {


            $sql = "INSERT INTO participante_fontes_renda
                            (
                                id_participante, eh_fonte_comprovada, descricao_fonte,
                                cargo, valor_bruto, valor_liquido, data_inicio
                            )
                        VALUES
                            (
                                :id_participante, :eh_fonte_comprovada, :descricao_fonte,
                                :cargo, :valor_bruto, :valor_liquido, :data_inicio
                            )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind das fontes de renda...">
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':eh_fonte_comprovada', $fonteRenda->getEhFonteComprovada());
            $stmt->bindValue(':descricao_fonte', $fonteRenda->getDescricaoFonte());
            $stmt->bindValue(':cargo', $fonteRenda->getCargo());
            $stmt->bindValue(':valor_bruto', $fonteRenda->getValorBruto());
            $stmt->bindValue(':valor_liquido', $fonteRenda->getValorLiquido());
            $stmt->bindValue(':data_inicio', $fonteRenda->getDataInicio());
            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    private static function CadastrarParentescosParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayDadosParentesco() as $parentesco) {

            $sql = "INSERT INTO participante_parentesco
                        (
                            id_participante,id_parente,id_tipo_parentesco,compoe_renda
                        )
                    VALUES
                        (
                            :id_participante,:id_parente, :id_tipo_parentesco, :compoe_renda
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind de parentesco...">
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_parente', $parentesco->getIdParente());
            $stmt->bindValue(':id_tipo_parentesco', $parentesco->getIdTipoParentesco());
            $stmt->bindValue(':compoe_renda', $parentesco->getCompoeRenda());
            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    private static function CadastrarAplicacoesFinanceirasParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayAplicacoesFinanceiras() as $aplicacaoFinanceira) {

            $sql = "INSERT INTO participantes_aplicacoes_financeiras
                        (
                            id_participante, id_banco, id_tipo_aplicacao_financeira, valor
                        )
                    VALUES
                        (
                            :id_participante,
                            :id_banco,
                            :id_tipo_aplicacao_financeira,
                            :valor
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind de Aplicações Financeiras...">
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_banco', $aplicacaoFinanceira->getInstituicaoBancaria()->getIdBanco());
            $stmt->bindValue(':id_tipo_aplicacao_financeira', $aplicacaoFinanceira->getIdTipoAplicacao());
            $stmt->bindValue(':valor', $aplicacaoFinanceira->getValor());
            //</editor-fold>


            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    private static function CadastrarDadosResidenciaParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        /* @var $residencia ResidenciaModel */
        $residencia = $participante->getResidencia();


        $sql = "INSERT INTO participante_residencia
                        (
                            id_participante, valor_aluguel, id_tipo_residencia
                        )
                    VALUES
                        (
                            :id_participante, :valor_aluguel, :id_tipo_residencia
                        )
                    ";

        $stmt = $pdo->prepare($sql);

        //<editor-fold desc="Dados de bind de Residencia...">
        $stmt->bindValue(':id_participante', $participante->getId());
        $stmt->bindValue(':valor_aluguel', $residencia->getValorAluguel());
        $stmt->bindValue(':id_tipo_residencia', $residencia->getIdTipoResidencia());
        //</editor-fold>

        try {

            $stmt->execute();

        } catch (Exception $e) {

            throw $e;
        }

    }

    private static function CadastrarDadosContasBancariasParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayDadosBancarios() as $dadosBancarios) {

            $sql = "INSERT INTO participante_contas_banco
                        (
                            id_participante, id_tipo_conta_bancaria, limite, id_banco
                        )
                    VALUES
                        (
                            :id_participante, :id_tipo_conta_bancaria, :limite, :id_banco
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind de Constas Bancárias...">
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_tipo_conta_bancaria', $dadosBancarios->getIdTipoConta());
            $stmt->bindValue(':limite', $dadosBancarios->getLimite());
            $stmt->bindValue(':id_banco', $dadosBancarios->getInstituicaoBancaria()->getIdBanco());
            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    private static function CadastrarCompromissosFinanceirosParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayCompromissosFinanceiros() as $compromissoFinanceiro) {

            $sql = "INSERT INTO participante_compromissos_financeiros
                        (
                            id_participante, id_tipo_compromisso_financeiro, numero_parcelas, numero_parcelas_pagas, valor_parcela
                        )
                    VALUES
                        (
                            :id_participante, :id_tipo_compromisso_financeiro, :numero_parcelas, :numero_parcelas_pagas, :valor_parcela
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind de Compromissos Financeiros...">
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_tipo_compromisso_financeiro', $compromissoFinanceiro->getIdTipoCompromisso());
            $stmt->bindValue(':numero_parcelas', $compromissoFinanceiro->getNumeroParcelas());
            $stmt->bindValue(':numero_parcelas_pagas', $compromissoFinanceiro->getNumeroParcelasPagas());
            $stmt->bindValue(':valor_parcela', $compromissoFinanceiro->getValorParcela());
            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    private static function CadastrarCartoesCreditoParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayCartoesCredito() as $cartaoCredito) {

            $sql = "INSERT INTO participantes_cartoes_credito
                        (
                            id_participante, limite, id_bandeira, id_banco
                        )
                    VALUES
                        (
                            :id_participante,:limite, :id_bandeira, :id_banco
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind de Cartões de Crédito...">
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_bandeira', $cartaoCredito->getIdBandeira());
            $stmt->bindValue(':limite', $cartaoCredito->getLimite());
            $stmt->bindValue(':id_banco', $cartaoCredito->getInstituicaoBancaria()->getIdBanco());
            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    private static function CadastrarVeiculosParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayVeiculos() as $veiculo) {

            $sql = "INSERT participante_veiculos
                        (
                            ano,valor_mercado,numero_parcelas,numero_parcelas_pagas,
                            valor_parcela,id_participante,id_tipo_veiculo,id_situacao_veiculo
                        )
                    VALUES
                        (
                            :ano,:valor_mercado,:numero_parcelas,:numero_parcelas_pagas,
                            :valor_parcela,:id_participante,:id_tipo_veiculo,:id_situacao_veiculo
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind de Cartões de Crédito...">

            $stmt->bindValue(':ano', $veiculo->getAno());
            $stmt->bindValue(':valor_mercado', $veiculo->getValorMercado());
            $stmt->bindValue(':numero_parcelas', $veiculo->getNumeroParcelas());
            $stmt->bindValue(':numero_parcelas_pagas', $veiculo->getNumeroParcelasPagas());
            $stmt->bindValue(':valor_parcela', $veiculo->getValorParcela());
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_tipo_veiculo', $veiculo->getIdTipoVeiculo());
            $stmt->bindValue(':id_situacao_veiculo', $veiculo->getIdSituacaoVeiculo());

            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    public static function CadastrarImoveisParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayImoveis() as $imovel) {

            $sql = "INSERT INTO participante_imoveis
                        (
                            cidade,uf,valor,id_participante,id_tipo_imovel, matricula, id_usuario_cadastro,data_cadastro
                        )
                    VALUES
                        (
                            :cidade,:uf,:valor,:id_participante,:id_tipo_imovel, :matricula, :id_usuario_cadastro, SYSDATE()
                        )";

            $stmt = $pdo->prepare($sql);

            //<editor-fold desc="Dados de bind dos Imóveis...">

            $stmt->bindValue(':cidade', $imovel->getCidade());
            $stmt->bindValue(':uf', $imovel->getUf());
            $stmt->bindValue(':valor', $imovel->getValor());
            $stmt->bindValue(':id_participante', $imovel->getIdParticipante());
            $stmt->bindValue(':id_tipo_imovel', $imovel->getIdTipoImovel());
            $stmt->bindValue(':matricula', $imovel->getMatricula());
            $stmt->bindValue(':id_usuario_cadastro', $imovel->getIdUsuarioCadastro());

            //</editor-fold>

            try {

                $stmt->execute();

            } catch (Exception $e) {

                throw $e;
            }
        }
    }

    public static function CadastrarDocumentosParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        foreach ($participante->getArrayDocumentos() as $documento) {

            $sql = "INSERT INTO participante_documentos
                        (nome, nome_arquivo, data_envio, nome_unico_do_arquivo, id_participante, id_usuario_cadastro,id_tipo_documento_participante)
                    VALUES
                        (:nome, :nome_arquivo, SYSDATE(), :nome_unico_do_arquivo, :id_participante, :id_usuario_cadastro, :id_tipo_documento_participante)";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':nome', $documento->getNome());
            $stmt->bindValue(':nome_arquivo', $documento->getNomeArquivo());
            $stmt->bindValue(':nome_unico_do_arquivo', $documento->getNomeUnicoDoArquivo());
            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':id_usuario_cadastro', $documento->getIdUsuarioCadastro());
            $stmt->bindValue(':id_tipo_documento_participante', $documento->getIdTipoDocumento());

            try {
                $stmt->execute();

            } catch (Exception $e) {

                echo $e->getMessage();
            }
        }
    }

    public static function CadastrarDocumentosImovelParticipante(ImovelParticipanteModel $imovel)
    {
        $pdo = self::getConnection();

        foreach ($imovel->getArrayDocumentos() as $documento) {

            $sql = "INSERT INTO documentos_imovel
                        (nome, nome_arquivo, data_envio, nome_unico_do_arquivo, id_imovel, id_usuario_cadastro,id_tipo_documento_imovel)
                    VALUES
                        (:nome, :nome_arquivo, SYSDATE(), :nome_unico_do_arquivo, :id_imovel, :id_usuario_cadastro, :id_tipo_documento_imovel)";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':nome', $documento->getNome());
            $stmt->bindValue(':nome_arquivo', $documento->getNomeArquivo());
            $stmt->bindValue(':nome_unico_do_arquivo', $documento->getNomeUnicoDoArquivo());
            $stmt->bindValue(':id_imovel', $imovel->getId());
            $stmt->bindValue(':id_usuario_cadastro', $documento->getIdUsuarioCadastro());
            $stmt->bindValue(':id_tipo_documento_imovel', $documento->getIdTipoDocumento());


            try {
                $stmt->execute();

            } catch (Exception $e) {

                echo $e->getMessage();
            }
        }
    }

    public static function CadastrarDadosProfissionaisParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        /**
         * @var DadosProfissionaisModel $dadoProfissional
         */
        foreach ($participante->getArrayDadosProfissionais() as $dadoProfissional) {

            $sql = "INSERT INTO dados_profissionais
                        (
                            id_participante,profissao,empresa_empregador,cnpj,
                            natureza_ocupacao,nivel_cargo,renda_bruta_mensal,data_referencia_renda,data_inicio_ocupacao_cargo
                        )
                        VALUES
                        (
                            :id_participante,:profissao,:empresa_empregador,:cnpj,
                            :natureza_ocupacao,:nivel_cargo,:renda_bruta_mensal,:data_referencia_renda,:data_inicio_ocupacao_cargo
                        )";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':id_participante', $participante->getId());
            $stmt->bindValue(':profissao', $dadoProfissional->getProfissao());
            $stmt->bindValue(':empresa_empregador', $dadoProfissional->getEmpresaEmpregador());
            $stmt->bindValue(':cnpj', $dadoProfissional->getCnpj());
            $stmt->bindValue(':natureza_ocupacao', $dadoProfissional->getNaturezaOcupacao());
            $stmt->bindValue(':nivel_cargo', $dadoProfissional->getNivelCargo());
            $stmt->bindValue(':renda_bruta_mensal', $dadoProfissional->getValorRendaBrutaMensal());
            $stmt->bindValue(':data_referencia_renda', $dadoProfissional->getDataReferencia());
            $stmt->bindValue(':data_inicio_ocupacao_cargo', $dadoProfissional->getDataInicioOcupacao());


            try {
                $stmt->execute();

            } catch (Exception $e) {

                echo $e->getMessage();
            }
        }
    }

    public static function CadastrarDadosLiberacaoCreditoParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();


        $sql = "INSERT INTO participante_liberacao_credito
                        (
                            id_participante, id_banco, credito_no_banco_brasil,
                            numero_agencia, numero_conta_corrente, cpf_cnpj_titular_conta, porcentagem_credito
                        )
                        VALUES
                        (
                            :id_participante, :id_banco, :credito_no_banco_brasil,
                            :numero_agencia, :numero_conta_corrente, :cpf_cnpj_titular_conta, :porcentagem_credito
                        )";

        $stmt = $pdo->prepare($sql);


        $stmt->bindValue(':id_participante', $participante->getId());
        $stmt->bindValue(':id_banco', $participante->getDadosLiberacaoCredito()->getInstituicaoBancaria()->getIdBanco());
        $stmt->bindValue(':credito_no_banco_brasil', $participante->getDadosLiberacaoCredito()->getEhCreditoNoBancoDoBrasil());
        $stmt->bindValue(':numero_agencia', $participante->getDadosLiberacaoCredito()->getNumeroAgencia());
        $stmt->bindValue(':numero_conta_corrente', $participante->getDadosLiberacaoCredito()->getNumeroContaCorrente());
        $stmt->bindValue(':cpf_cnpj_titular_conta', $participante->getDadosLiberacaoCredito()->getCpfCnpjTitular());
        $stmt->bindValue(':porcentagem_credito', $participante->getDadosLiberacaoCredito()->getPorcentagemCredito());


        try {
            $stmt->execute();

        } catch (Exception $e) {

            echo $e->getMessage();
        }
    }

    ////</editor-fold>
    //----------------------------------------------------------------------------------------------------------------

    public static function ObterArrayParticipantesPorFiltro(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        id,nome,cpf,cnpj,inscricao_estadual,
                        email,
                        site,logradouro,complemento,numero,
                        bairro,cidade,uf,cep,id_tipo_participante
                FROM
                        participantes
                WHERE
                        1=1 ";

        if ($participante->getId())
            $sql .= "AND id = :id ";

        if ($participante->getNome())
            $sql .= "AND nome LIKE :nome ";

        if ($participante->getCpf())
            $sql .= "AND cpf LIKE :cpf ";

        if ($participante->getCnpj())
            $sql .= "AND cnpj LIKE :cnpj ";

        if ($participante->getInscricaoEstadual())
            $sql .= "AND inscricao_estadual LIKE :inscricao_estadual ";

        if ($participante->getEmail())
            $sql .= "AND email LIKE :email ";

        if ($participante->getSite())
            $sql .= "AND site LIKE :site ";

        if ($participante->getLogradouro())
            $sql .= "AND logradouro LIKE :logradouro ";

        if ($participante->getComplemento())
            $sql .= "AND complemento LIKE :complemento ";

        if ($participante->getNumero())
            $sql .= "AND numero LIKE :numero ";

        if ($participante->getBairro())
            $sql .= "AND bairro LIKE :bairro ";

        if ($participante->getCidade())
            $sql .= "AND cidade LIKE :cidade ";

        if ($participante->getUf())
            $sql .= "AND uf LIKE :uf ";

        if ($participante->getCep())
            $sql .= "AND cep LIKE :cep ";

        if ($participante->getEhParticipanteAtivo())
            $sql .= "AND eh_participante_ativo = :eh_participante_ativo ";

        $arrParticipantesEncontrados = Array();

        $stmt = $pdo->prepare($sql);

        //Só posso adicionar os bindValue depois que a query estiver completa,
        //por isso não é possível usar os "ifs" acima para colocar os bindValue abaixo
        //-------------------------------------------------------------------------------

        if ($participante->getId())
            $stmt->bindValue(':id', $participante->getId());

        if ($participante->getNome())
            $stmt->bindValue(':nome', "%" . $participante->getNome() . "%");

        if ($participante->getCpf())
            $stmt->bindValue(':cpf', $participante->getCpf());

        if ($participante->getCnpj())
            $stmt->bindValue(':cnpj', $participante->getCnpj());

        if ($participante->getInscricaoEstadual())
            $stmt->bindValue(':inscricao_estadual', "%" . $participante->getInscricaoEstadual() . "%");

        if ($participante->getEmail())
            $stmt->bindValue(':email', "%" . $participante->getEmail() . "%");

        if ($participante->getSite())
            $stmt->bindValue(':site', "%" . $participante->getSite() . "%");

        if ($participante->getLogradouro())
            $stmt->bindValue(':logradouro', "%" . $participante->getLogradouro() . "%");

        if ($participante->getComplemento())
            $stmt->bindValue(':complemento', "%" . $participante->getComplemento() . "%");

        if ($participante->getNumero())
            $stmt->bindValue(':numero', "%" . $participante->getNumero() . "%");

        if ($participante->getBairro())
            $stmt->bindValue(':bairro', "%" . $participante->getBairro() . "%");

        if ($participante->getCidade())
            $stmt->bindValue(':cidade', "%" . $participante->getCidade() . "%");

        if ($participante->getUf())
            $stmt->bindValue(':uf', "%" . $participante->getUf() . "%");

        if ($participante->getCep())
            $stmt->bindValue(':cep', "%" . $participante->getCep() . "%");

        if ($participante->getEhParticipanteAtivo())
            $stmt->bindValue(':eh_participante_ativo', $participante->getEhParticipanteAtivo());
        //-------------------------------------------------------------------------------

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

    public static function ObterArrayParticipantesEDadosFinanciamentosPorFiltro(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT 
                    par.id, par.nome, par.data_nascimento, par.cpf, par.cnpj, 
                    par.inscricao_estadual, par.email, par.tel_residencial, 
                    par.tel_celular, par.tel_comercial, par.tel_outro, par.site, 
                    par.logradouro, par.complemento, par.numero, par.bairro, 
                    par.cidade, par.uf, par.cep, par.eh_participante_ativo, par.data_cadastro, 
                    par.sexo, par.rg, par.orgao_emissor_rg, par.uf_orgao_emissor_rg, 
                    par.nome_mae, par.nome_pai, par.data_casamento, par.profissao, 
                    par.numero_pis_pasep, par.nacionalidade, par.naturalidade, par.uf_naturalidade, 
                    par.id_estado_civil, par.id_regime_casamento, par.id_grau_instrucao,
                    instrucao.descricao grau_instrucao,reg_casamento.descricao descricao_regime_casamento,
					est_civil.descricao descricao_estado_civil,
                    residencia.valor_aluguel,tipo_residencia.id id_tipo_residencia,tipo_residencia.tipo tipo_residencia
                FROM
                    participantes par
                    LEFT JOIN grau_instrucao instrucao ON (instrucao.id=par.id_grau_instrucao)
                    LEFT JOIN regime_casamento reg_casamento ON (reg_casamento.id=par.id_regime_casamento)
                    LEFT JOIN estado_civil est_civil ON (est_civil.id=par.id_estado_civil)
                    LEFT JOIN participante_residencia residencia ON (residencia.id_participante=par.id)
                    LEFT JOIN tipo_residencia ON (tipo_residencia.id=residencia.id_tipo_residencia)
                WHERE
                    1=1 ";
        //<editor-fold desc="Binds...">
        if ($participante->getId())
            $sql .= "AND par.id = :id";

        if ($participante->getNome())
            $sql .= "AND nome LIKE :nome ";

        if ($participante->getDataNascimento())
            $sql .= "AND data_nascimento = :data_nascimento ";

        if ($participante->getCpf())
            $sql .= "AND cpf LIKE :cpf ";

        if ($participante->getCnpj())
            $sql .= "AND cnpj LIKE :cnpj ";

        if ($participante->getInscricaoEstadual())
            $sql .= "AND inscricao_estadual LIKE :inscricao_estadual ";

        if ($participante->getEmail())
            $sql .= "AND email LIKE :email ";

        if ($participante->getTelefoneResidencial())
            $sql .= "AND tel_residencial LIKE :tel_residencial ";

        if ($participante->getTelefoneCelular())
            $sql .= "AND tel_celular LIKE :tel_celular ";

        if ($participante->getTelefoneComercial())
            $sql .= "AND tel_comercial LIKE :tel_comercial ";

        if ($participante->getTelefoneOutro())
            $sql .= "AND tel_outro LIKE :tel_outro ";

        if ($participante->getSite())
            $sql .= "AND site LIKE :site ";

        if ($participante->getLogradouro())
            $sql .= "AND logradouro LIKE :logradouro ";

        if ($participante->getComplemento())
            $sql .= "AND complemento LIKE :complemento ";

        if ($participante->getNumero())
            $sql .= "AND numero LIKE :numero ";

        if ($participante->getBairro())
            $sql .= "AND bairro LIKE :bairro ";

        if ($participante->getCidade())
            $sql .= "AND cidade LIKE :cidade ";

        if ($participante->getUf())
            $sql .= "AND uf LIKE :uf ";

        if ($participante->getCep())
            $sql .= "AND cep LIKE :cep ";

        if ($participante->getEhParticipanteAtivo())
            $sql .= "AND eh_participante_ativo =:eh_participante_ativo ";

        if ($participante->getDataCadastro())
            $sql .= "AND data_cadastro > :data_cadastro ";

        if ($participante->getSexo())
            $sql .= "AND sexo = :sexo ";

        if ($participante->getRg())
            $sql .= "AND rg LIKE :rg ";

        if ($participante->getOrgaoEmissorRg())
            $sql .= "AND orgao_emissor_rg LIKE :orgao_emissor_rg ";

        if ($participante->getUfOrgaoEmissorRg())
            $sql .= "AND uf_orgao_emissor_rg LIKE :uf_orgao_emissor_rg ";

        if ($participante->getNomeMae())
            $sql .= "AND nome_mae LIKE :nome_mae ";

        if ($participante->getNomePai())
            $sql .= "AND nome_pai LIKE :nome_pai ";

        if ($participante->getDataCasamento())
            $sql .= "AND data_casamento = :data_casamento ";

        if ($participante->getProfissao())
            $sql .= "AND profissao LIKE :profissao ";

        if ($participante->getNumeroPisPasep())
            $sql .= "AND numero_pis_pasep LIKE :numero_pis_pasep ";

        if ($participante->getNacionalidade())
            $sql .= "AND nacionalidade LIKE :nacionalidade ";

        if ($participante->getNaturalidade())
            $sql .= "AND naturalidade LIKE :naturalidade ";

        if ($participante->getUfNaturalidade())
            $sql .= "AND uf_naturalidade LIKE :uf_naturalidade ";

        if ($participante->getGrauInstrucao())
            $sql .= "AND instrucao.descricao LIKE :descricao_grau_instrucao ";

        if ($participante->getRegimeCasamento())
            $sql .= "AND reg_casamento.descricao LIKE :descricao_regime_casamento ";

        if ($participante->getDescricaoEstadoCivil())
            $sql .= "AND est_civil.descricao LIKE :descricao_estado_civil ";

        if ($participante->getResidencia()->getValorAluguel())
            $sql .= "AND residencia.valor_aluguel LIKE :valor_aluguel ";

        if ($participante->getResidencia()->getTipoResidencia())
            $sql .= "AND tipo_residencia.tipo LIKE :tipo_residencia ";

        $stmt = $pdo->prepare($sql);

        //Só posso adicionar os bindValue depois que a query estiver completa,
        //por isso não é possível usar os "ifs" acima para colocar os bindValue abaixo
        //-------------------------------------------------------------------------------
        if ($participante->getId())
            $stmt->bindValue(':id', $participante->getId());

        if ($participante->getNome())
            $stmt->bindValue(':nome', "%" . $participante->getNome() . "%");

        if ($participante->getDataNascimento())
            $stmt->bindValue(':data_nascimento', $participante->getDataNascimento());

        if ($participante->getCpf())
            $stmt->bindValue(':cpf', "%" . $participante->getCpf() . "%");

        if ($participante->getCnpj())
            $stmt->bindValue(':cnpj', "%" . $participante->getCnpj() . "%");

        if ($participante->getInscricaoEstadual())
            $stmt->bindValue(':inscricao_estadual', "%" . $participante->getInscricaoEstadual() . "%");

        if ($participante->getEmail())
            $stmt->bindValue(':email', "%" . $participante->getEmail() . "%");

        if ($participante->getTelefoneResidencial())
            $stmt->bindValue(':tel_residencial', "%" . $participante->getTelefoneResidencial() . "%");

        if ($participante->getTelefoneCelular())
            $stmt->bindValue(':tel_celular', "%" . $participante->getTelefoneCelular() . "%");

        if ($participante->getTelefoneComercial())
            $stmt->bindValue(':tel_comercial', "%" . $participante->getTelefoneComercial() . "%");

        if ($participante->getTelefoneOutro())
            $stmt->bindValue(':tel_outro', "%" . $participante->getTelefoneOutro() . "%");

        if ($participante->getSite())
            $stmt->bindValue(':site', "%" . $participante->getSite() . "%");

        if ($participante->getLogradouro())
            $stmt->bindValue(':logradouro', "%" . $participante->getLogradouro() . "%");

        if ($participante->getComplemento())
            $stmt->bindValue(':complemento', "%" . $participante->getComplemento() . "%");

        if ($participante->getNumero())
            $stmt->bindValue(':numero', "%" . $participante->getNumero() . "%");

        if ($participante->getBairro())
            $stmt->bindValue(':bairro', "%" . $participante->getBairro() . "%");

        if ($participante->getCidade())
            $stmt->bindValue(':cidade', "%" . $participante->getCidade() . "%");

        if ($participante->getUf())
            $stmt->bindValue(':uf', "%" . $participante->getUf() . "%");

        if ($participante->getCep())
            $stmt->bindValue(':cep', "%" . $participante->getCep() . "%");

        if ($participante->getEhParticipanteAtivo())
            $stmt->bindValue(':eh_participante_ativo', $participante->getEhParticipanteAtivo());

        if ($participante->getDataCadastro())
            $stmt->bindValue(':data_cadastro', "%" . $participante->getDataCadastro() . "%");

        if ($participante->getSexo())
            $stmt->bindValue(':sexo', $participante->getSexo());

        if ($participante->getRg())
            $stmt->bindValue(':rg', "%" . $participante->getRg() . "%");

        if ($participante->getOrgaoEmissorRg())
            $stmt->bindValue(':orgao_emissor_rg', "%" . $participante->getOrgaoEmissorRg() . "%");

        if ($participante->getUfOrgaoEmissorRg())
            $stmt->bindValue(':uf_orgao_emisso_rg', "%" . $participante->getUfOrgaoEmissorRg() . "%");

        if ($participante->getNomeMae())
            $stmt->bindValue(':nome_mae', "%" . $participante->getNomeMae() . "%");

        if ($participante->getNomePai())
            $stmt->bindValue(':nome_pai', "%" . $participante->getNomePai() . "%");

        if ($participante->getDataCasamento())
            $stmt->bindValue(':data_casamento', $participante->getDataCasamento());

        if ($participante->getProfissao())
            $stmt->bindValue(':profissao', "%" . $participante->getProfissao() . "%");

        if ($participante->getNumeroPisPasep())
            $stmt->bindValue(':numero_pis_pasep', "%" . $participante->getNumeroPisPasep() . "%");

        if ($participante->getNacionalidade())
            $stmt->bindValue(':nacionalidade', "%" . $participante->getNacionalidade() . "%");

        if ($participante->getNaturalidade())
            $stmt->bindValue(':naturalidade', "%" . $participante->getNaturalidade() . "%");

        if ($participante->getUfNaturalidade())
            $stmt->bindValue(':uf_naturalidade', "%" . $participante->getUfNaturalidade() . "%");

        if ($participante->getGrauInstrucao())
            $stmt->bindValue(':grau_instrucao', "%" . $participante->getGrauInstrucao() . "%");

        if ($participante->getRegimeCasamento())
            $stmt->bindValue(':regime_casamento', "%" . $participante->getRegimeCasamento() . "%");

        if ($participante->getDescricaoEstadoCivil())
            $stmt->bindValue(':descricao_estado_civil', "%" . $participante->getDescricaoEstadoCivil() . "%");

        if ($participante->getResidencia()->getValorAluguel())
            $stmt->bindValue(':valor_aluguel', "%" . $participante->getResidencia()->getValorAluguel() . "%");

        if ($participante->getResidencia()->getTipoResidencia())
            $stmt->bindValue(':tipo_residencia', "%" . $participante->getResidencia()->getTipoResidencia() . "%");
        //-------------------------------------------------------------------------------
        //</editor-fold>

        /**
         * @var ParticipanteModel[] $arrParticipantesEncontrados
         */
        $arrParticipantesEncontrados = Array();

        //1) Obtendo dados básicos do participante...
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $participanteEncontrado = new ParticipanteModel($row);
                $arrParticipantesEncontrados[] = $participanteEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }


        //Preenchendo dados adicionais de cada participante encontrado
        for ($contador = 0; $contador < count($arrParticipantesEncontrados); $contador++) {
            //2) Obtendo dados de compromissos financeiros
            $arrParticipantesEncontrados[$contador]->setArrayCompromissosFinanceiros(self::ObterCompromissorFinanceirosPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //3) Obtendo dados de financiamentos
            $arrParticipantesEncontrados[$contador]->setArrayFinanciamentos(self::ObterFinanciamentosPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //4) Obtendo participantes dos financiamentos
            //Para cada financiamento encontrado, preciso encontrar seus participantes...
            for ($contadorFinanc = 0; $contadorFinanc < count($arrParticipantesEncontrados[$contador]->getArrayFinanciamentos()); $contadorFinanc++) {
                //Apenas para diminuir o código...
                $idFinanciamento = $arrParticipantesEncontrados[$contador]->getArrayFinanciamentos()[$contadorFinanc]->getId();

                $arrParticipantesEncontrados[$contador]->getArrayFinanciamentos()[$contadorFinanc]->setArrayParticipantes
                ((self::ObterParticipantesPorFinanciamento($arrParticipantesEncontrados[$contador]->getId(), $idFinanciamento)));
            }

            //5) Obtendo dados de fontes de renda
            $arrParticipantesEncontrados[$contador]->setArrayFontesRenda(self::ObterFontesRendaPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //6) Obtendo dados de cartão de crédito
            $arrParticipantesEncontrados[$contador]->setArrayCartoesCredito(self::ObterCartoesCreditoPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //7) Obtendo dados de contas bancárias
            $arrParticipantesEncontrados[$contador]->setArrayDadosBancarios(self::ObterDadosBancariosPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //8) Obtendo dados de aplicações financeiras
            $arrParticipantesEncontrados[$contador]->setArrayAplicacoesFinanceiras(self::ObterDadosAplicacoesFinanceirasPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //9) Obtendo dados de imóveis do participante
            $arrParticipantesEncontrados[$contador]->setArrayImoveis(self::ObterImoveisPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //10) Obtendo dados de veículos do participante
            $arrParticipantesEncontrados[$contador]->setArrayVeiculos(self::ObterVeiculosPorIdParticipante($arrParticipantesEncontrados[$contador]->getId()));

            //11) Obtendo dados de parentesco
            $arrParticipantesEncontrados[$contador]->setArrayDadosParentesco(self::ObterArrayParentescoPorIdParticipante($arrParticipantesEncontrados[$contador]));

            //12) Obtendo dados de liberação de crédito
            $arrParticipantesEncontrados[$contador]->setDadosLiberacaoCredito(self::ObterDadosLiberacaoCreditoPorIdParticipante($arrParticipantesEncontrados[$contador]));

        }

        return $arrParticipantesEncontrados;
    }

    public static function ObterArrayParentescoPorIdParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    par.id, par.nome, par.data_nascimento, par.cpf, par.cnpj,
                    par.inscricao_estadual, par.email, par.tel_residencial,
                    par.tel_celular, par.tel_comercial, par.tel_outro, par.site,
                    par.logradouro, par.complemento, par.numero, par.bairro,
                    par.cidade, par.uf, par.cep, par.eh_participante_ativo, par.data_cadastro,
                    par.sexo, par.rg, par.orgao_emissor_rg, par.uf_orgao_emissor_rg,
                    par.nome_mae, par.nome_pai, par.data_casamento, par.profissao,
                    par.numero_pis_pasep, par.nacionalidade, par.naturalidade, par.uf_naturalidade,
                    par.id_estado_civil, par.id_regime_casamento, par.id_grau_instrucao,
                    instrucao.descricao grau_instrucao,reg_casamento.descricao descricao_regime_casamento,
                    est_civil.descricao descricao_estado_civil,
                    residencia.valor_aluguel,tipo_residencia.id id_tipo_residencia,tipo_residencia.tipo tipo_residencia,
                    parent.id id_tipo_parentesco,parent.nome descricao_tipo_parentesco
                FROM
                    participantes par
                    LEFT JOIN grau_instrucao instrucao ON (instrucao.id=par.id_grau_instrucao)
                    LEFT JOIN regime_casamento reg_casamento ON (reg_casamento.id=par.id_regime_casamento)
                    LEFT JOIN estado_civil est_civil ON (est_civil.id=par.id_estado_civil)
                    LEFT JOIN participante_residencia residencia ON (residencia.id_participante=par.id)
                    LEFT JOIN tipo_residencia ON (tipo_residencia.id=residencia.id_tipo_residencia)
                    LEFT JOIN participante_parentesco pat_pa ON (par.id=pat_pa.id_parente)
                    LEFT JOIN parentesco parent ON (parent.id=pat_pa.id_tipo_parentesco)
                WHERE
                    1=1
                    AND pat_pa.id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $participante->getId());

        $arrParentescoEncontrado = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $parentesco = new ParentescoModel($row);
                $arrParentescoEncontrado[] = $parentesco;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrParentescoEncontrado;
    }

    public static function ObterArrayImoveisPorFiltro(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id id_imovel,cidade cidade_imovel,uf uf_imovel,valor,matricula,data_cadastro,id_participante,id_tipo_imovel,id_usuario_cadastro
                FROM
                    participante_imoveis
                WHERE
                    1=1";


        if ($participante->getId()) {
            $sql .= " AND id_participante=:id_participante";
        }

        if ($participante->getArrayImoveis()) {
            $sql .= " AND id=:id_imovel";
        }

        $stmt = $pdo->prepare($sql);

        if ($participante->getId())
            $stmt->bindValue(':id_participante', $participante->getId());

        if ($participante->getArrayImoveis())
            $stmt->bindValue(':id_imovel', $participante->getArrayImoveis()[0]->getId());

        $arrImoveisEncontrados = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $imovel = new ImovelParticipanteModel($row);
                $arrImoveisEncontrados[] = $imovel;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrImoveisEncontrados;
    }

    public static function ObterArrayParticipantesParaAutocomplete($termoPesquisa, $tipo)
    {
        $id_tipo_participante = "";
        switch ($tipo) {
            case "Todos":
                $id_tipo_participante = "";
                break;
            case "Compradores":
                $id_tipo_participante = "1";
                break;
            case "Vendedores":
                $id_tipo_participante = "3";
                break;
        }
        $pdo = self::getConnection();

        $sql = "SELECT
                        id,nome,cpf
                FROM
                        participantes
                WHERE
                        (nome LIKE :termoPesquisa
                        OR id LIKE :termoPesquisa)";

        if ($id_tipo_participante != "")
            $sql .= " AND
                        id_tipo_participante = $id_tipo_participante";

        $arrParticipantesEncontrados = Array();

        $stmt = $pdo->prepare($sql);

        if ($termoPesquisa <> '')
            $stmt->bindValue(':termoPesquisa', "%" . $termoPesquisa . "%");

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

    private static function ObterCompromissorFinanceirosPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    part_comp_financ.id_participante, part_comp_financ.numero_parcelas,
                    part_comp_financ.numero_parcelas_pagas, part_comp_financ.valor_parcela,
                    part_comp_financ.id_tipo_compromisso_financeiro id_tipo_compromisso,
                    tipo_comp.nome tipo_compromisso
                FROM
                    participante_compromissos_financeiros part_comp_financ
                    LEFT JOIN tipo_compromisso_financeiro tipo_comp ON (tipo_comp.id=part_comp_financ.id_tipo_compromisso_financeiro)
                WHERE
                    id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);
        $arrCompromissosFinanceirosEncontrados = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $compromissoFinanceiroEncontrado = new CompromissoFinanceiroModel($row);
                $arrCompromissosFinanceirosEncontrados[] = $compromissoFinanceiroEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrCompromissosFinanceirosEncontrados;
    }

    private static function ObterFinanciamentosPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    financ.id,financ.id_usuario_correspondente,financ.valor_solicitado,
                    financ.valor_aprovado,financ.data_solicitacao,financ.id_banco,
                    bancos.numero,bancos.nome
                FROM
                    financiamentos financ
                    JOIN participantes_financiamentos part_financ ON (financ.id=part_financ.id_financiamento)
                    LEFT JOIN bancos ON (bancos.id=financ.id_banco)
                WHERE
                    part_financ.id_participante=:id_participante
                ORDER BY data_solicitacao DESC";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);
        $arrFinanciamentosEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $financiamentoEncontrado = new FinanciamentoModel($row);
                $arrFinanciamentosEncontrados[] = $financiamentoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrFinanciamentosEncontrados;
    }

    private static function ObterParticipantesPorFinanciamento($idParticipante, $idFinanciamento)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    par.id, par.nome, par.data_nascimento, par.cpf, par.cnpj,
                    par.inscricao_estadual, par.email, par.tel_residencial,
                    par.tel_celular, par.tel_comercial, par.tel_outro, par.site,
                    par.logradouro, par.complemento, par.numero, par.bairro,
                    par.cidade, par.uf, par.cep, par.eh_participante_ativo, par.data_cadastro,
                    par.sexo, par.rg, par.orgao_emissor_rg, par.uf_orgao_emissor_rg,
                    par.nome_mae, par.nome_pai, par.data_casamento, par.profissao,
                    par.numero_pis_pasep, par.nacionalidade, par.naturalidade, par.uf_naturalidade,
                    par.id_estado_civil, par.id_regime_casamento, par.id_grau_instrucao,
                    parentesco.id,parentesco.nome,
                    instrucao.descricao descricao_grau_instr,reg_casamento.descricao descricao_reg_casamento,est_civil.descricao descricao_est_civil,
                    residencia.valor_aluguel,tipo_residencia.tipo tipo_residencia
                FROM
                    participantes par
                    JOIN participantes_financiamentos part_financ ON (par.id=part_financ.id_participante)
                    LEFT JOIN grau_instrucao instrucao ON (instrucao.id=par.id_grau_instrucao)
                    LEFT JOIN regime_casamento reg_casamento ON (reg_casamento.id=par.id_regime_casamento)
                    LEFT JOIN estado_civil est_civil ON (est_civil.id=par.id_estado_civil)
                    LEFT JOIN participante_parentesco part_parentesco ON (part_parentesco.id_parente=par.id)
                    LEFT JOIN parentesco ON (parentesco.id=part_parentesco.id_tipo_parentesco)
                    LEFT JOIN participante_residencia residencia ON (residencia.id_participante=par.id)
                    LEFT JOIN tipo_residencia ON (tipo_residencia.id=residencia.id_tipo_residencia)
                WHERE
                    part_financ.id_financiamento=:id_financiamento
                    AND part_financ.id_participante<>:id_participante"; /*Todos os participantes que "eu" não seja o solicitante */

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);
        $stmt->bindValue(':id_financiamento', $idFinanciamento);

        $arrFinanciamentosEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $financiamentoEncontrado = new FinanciamentoModel($row);
                $arrFinanciamentosEncontrados[] = $financiamentoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrFinanciamentosEncontrados;
    }

    private static function ObterFontesRendaPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id_participante,eh_fonte_comprovada,descricao_fonte,
                    cargo,valor_bruto,valor_liquido,data_inicio
                FROM
                    participante_fontes_renda
                WHERE
                    id_participante=:id_participante
                ORDER BY data_inicio ASC";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);

        $arrFontesRendaEncontradas = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $fonteRendaEncontrada = new FonteRendaModel($row);
                $arrFontesRendaEncontradas[] = $fonteRendaEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrFontesRendaEncontradas;
    }

    private static function ObterCartoesCreditoPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    p_cartao.id_participante,p_cartao.limite,p_cartao.id_bandeira id_bandeira_cartao_credito,p_cartao.id_banco,
                    band.bandeira bandeira_cartao_credito,
                    banco.id id_banco,banco.numero numero_banco,banco.nome nome_banco
                FROM
                    participantes_cartoes_credito p_cartao
                    LEFT JOIN  bandeira_cartao_credito band ON (band.id=p_cartao.id_bandeira)
                    LEFT JOIN bancos banco ON (banco.id=p_cartao.id_banco)
                WHERE
                    id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);
        $arrCartoesCreditoEncontrados = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $cartaoCreditoEncontrado = new CartaoCreditoModel($row);
                $arrCartoesCreditoEncontrados[] = $cartaoCreditoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrCartoesCreditoEncontrados;
    }

    private static function ObterDadosBancariosPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    p_cont.id_participante,p_cont.limite,p_cont.id_tipo_conta_bancaria id_tipo_conta,p_cont.id_banco,
                    banco.numero numero_banco,banco.nome nome_banco,tipo_conta.tipo tipo_conta
                FROM
                    participante_contas_banco p_cont
                    LEFT JOIN bancos banco ON (p_cont.id_banco=banco.id)
                    LEFT JOIN tipo_conta_bancaria tipo_conta ON (tipo_conta.id=p_cont.id_tipo_conta_bancaria)
                WHERE
                    p_cont.id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);
        $arrContasBancoEncontradas = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $contaBancoEncontrada = new DadoBancarioModel($row);
                $arrContasBancoEncontradas[] = $contaBancoEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrContasBancoEncontradas;
    }

    private static function ObterDadosAplicacoesFinanceirasPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    p_aplic_financ.id_participante,p_aplic_financ.valor,p_aplic_financ.id_banco,
                    p_aplic_financ.id_tipo_aplicacao_financeira id_tipo_aplicacao,
                    banco.numero numero_banco,banco.nome nome_banco, banco.id id_banco,
                    tipo_aplicacao.tipo tipo_aplicacao
                FROM
                    participantes_aplicacoes_financeiras p_aplic_financ
                    LEFT JOIN bancos banco ON (banco.id=p_aplic_financ.id_banco)
                    LEFT JOIN tipo_aplicacao_financeira tipo_aplicacao ON (p_aplic_financ.id_tipo_aplicacao_financeira=tipo_aplicacao.id)
                WHERE
                    id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);

        $arrAplicacoesFinanceirasEncontradas = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $aplicacaoFinanceiraEncontrada = new AplicacaoFinanceiraModel($row);
                $arrAplicacoesFinanceirasEncontradas[] = $aplicacaoFinanceiraEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrAplicacoesFinanceirasEncontradas;
    }

    private static function ObterImoveisPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    p_imoveis.id,p_imoveis.cidade cidade_imovel,p_imoveis.uf,p_imoveis.valor,
                    tipo.id id_tipo_imovel,tipo.tipo
                FROM
                    participante_imoveis p_imoveis
                    LEFT JOIN tipo_imovel tipo ON (tipo.id=p_imoveis.id_tipo_imovel)
                WHERE
                    id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);

        $arrImoveisEncontrados = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $imovelEncontrado = new ImovelParticipanteModel($row);
                $arrImoveisEncontrados[] = $imovelEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrImoveisEncontrados;
    }

    private static function ObterVeiculosPorIdParticipante($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    p_veiculos.id id_veiculo,p_veiculos.ano,p_veiculos.valor_mercado,p_veiculos.numero_parcelas,
                    p_veiculos.numero_parcelas_pagas,p_veiculos.valor_parcela,
                    tipo.id id_tipo_veiculo,tipo.tipo, situacao.id id_situacao_veiculo, situacao.situacao
                FROM
                    participante_veiculos p_veiculos
                    LEFT JOIN tipo_veiculo tipo ON (tipo.id=p_veiculos.id_tipo_veiculo)
                    LEFT JOIN situacao_veiculo situacao ON (situacao.id=p_veiculos.id_situacao_veiculo)
                WHERE
                    id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);

        $arrVeiculosEncontrados = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $veiculoEncontrado = new VeiculoParticipanteModel($row);
                $arrVeiculosEncontrados[] = $veiculoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrVeiculosEncontrados;
    }

    private static function ObterDadosEmpresaGestoraPorIdFinanciamento($idFinanciamento)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    emp.id, emp.nome_fantasia, emp.razao_social, emp.cnpj, 
                    emp.inscricao_estadual, emp.email, emp.tel_contato_1, 
                    emp.tel_contato_2, emp.nome_pessoa_contato, emp.site, 
                    emp.logradouro, emp.numero, emp.cidade, emp.uf, 
                    emp.bairro, emp.cep, emp.tipo, 
                    emp.eh_empresa_ativa, emp.data_cadastro
                FROM
                    empresas emp
                    JOIN usuarios usu ON (usu.id_empresa_gestora=emp.id)
                    JOIN financiamentos financ ON (financ.id_usuario_correspondente=usu.id)
                WHERE
                    financ.id=:id_financiamento";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_financiamento', $idFinanciamento);

        try {
            $stmt->execute();

            $row = $stmt->fetch();
            $empresaEncontrada = new EmpresaModel($row);

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $empresaEncontrada;
    }

    public static function ObterDocumentosParticipantePorFiltro(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    docs.id, docs.nome_arquivo, docs.nome_unico_do_arquivo, docs.data_envio, docs.nome,
                    docs.id_participante, docs.id_usuario_cadastro,
                    tipo.id id_tipo_documento,tipo.tipo descricao_tipo_documento
                FROM
                    participante_documentos docs
                    JOIN tipos_documento_participante tipo ON (tipo.id=docs.id_tipo_documento_participante)
                WHERE
                    1=1  ";

        if ($participante->getId())
            $sql .= " AND docs.id_participante=:id_participante";

        $stmt = $pdo->prepare($sql);

        if ($participante->getId())
            $stmt->bindValue(':id_participante', $participante->getId());
        $arrDocumentosEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $documentoEncontrado = new DocumentoParticipanteModel($row);
                $arrDocumentosEncontrados[] = $documentoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrDocumentosEncontrados;
    }

    public static function ObterDocumentosImovelPorFiltro(ImovelParticipanteModel $imovel)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    docs.id, docs.nome_arquivo, docs.nome_unico_do_arquivo, docs.data_envio, docs.nome,
                    docs.id_imovel, docs.id_usuario_cadastro,
                    tipo.id id_tipo_documento,tipo.tipo descricao_tipo_documento
                FROM
                    documentos_imovel docs
                    JOIN tipos_documento_imovel tipo ON (tipo.id=docs.id_tipo_documento_imovel)
                    JOIN participante_imoveis part_imov ON (part_imov.id=docs.id_imovel)
                WHERE
                    1=1  ";

        if ($imovel->getId())
            $sql .= " AND docs.id_imovel=:id_imovel";

        if ($imovel->getMatricula())
            $sql .= " AND part_imov.matricula=:matricula";

        $stmt = $pdo->prepare($sql);

        if ($imovel->getId())
            $stmt->bindValue(':id_imovel', $imovel->getId());

        if ($imovel->getMatricula())
            $stmt->bindValue(':matricula', $imovel->getMatricula());

        $arrDocumentosEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $documentoEncontrado = new DocumentoImovelModel($row);
                $arrDocumentosEncontrados[] = $documentoEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrDocumentosEncontrados;
    }

    public static function ObterDadosLiberacaoCreditoPorIdParticipante(ParticipanteModel $participante)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                    id_participante,credito_no_banco_brasil,
                    numero_agencia,numero_conta_corrente,
                    cpf_cnpj_titular_conta,porcentagem_credito
                FROM
                    participante_liberacao_credito
                WHERE
                    id_participante=:id_participante";


        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $participante->getId());

        try {
            $stmt->execute();

            $row = $stmt->fetch();
            $dadosLiberacaoCredito = new LiberacaoCreditoModel($row);

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $dadosLiberacaoCredito;
    }

    /**
     * @return string
     */
    public static function ExcluirParticipantePorSeuId($idParticipante)
    {
        $pdo = self::getConnection();

        $sql = "DELETE FROM participantes WHERE id=:id_participante";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_participante', $idParticipante);

        try {
            $stmt->execute();
            return MensagensSistemaModel::MENSAGEM_SUCESSO;

        } catch (Exception $e) {

        }

        return MensagensSistemaModel::MENSAGEM_ERRO;
    }

    public static function AtualizarParticipantePorId(ParticipanteModel $participante)
    {

        $pdo = self::getConnection();


        $sql = "UPDATE
                  participantes
                SET
                  id=:id";


        //<editorfold desc="Binds do update...">
        if ($participante->getNome()) {
            $sql .= ", nome=:nome";
        }

        if ($participante->getDataNascimento()) {
            $sql .= ", data_nascimento=:data_nascimento";
        }

        if ($participante->getCpf()) {
            $sql .= ", cpf=:cpf";
        }

        if ($participante->getCnpj()) {
            $sql .= ", cnpj=:cnpj";
        }

        if ($participante->getInscricaoEstadual()) {
            $sql .= ", inscricao_estadual=:inscricao_estadual";
        }

        if ($participante->getEmail()) {
            $sql .= ", email=:email";
        }

        if ($participante->getTelefoneResidencial()) {
            $sql .= ", tel_residencial=:tel_residencial";
        }

        if ($participante->getTelefoneCelular()) {
            $sql .= ", tel_celular=:tel_celular";
        }

        if ($participante->getTelefoneComercial()) {
            $sql .= ", tel_comercial=:tel_comercial";
        }

        if ($participante->getTelefoneOutro()) {
            $sql .= ", tel_outro=:tel_outro";
        }

        if ($participante->getSite()) {
            $sql .= ", site=:site";
        }

        if ($participante->getLogradouro()) {
            $sql .= ", logradouro=:logradouro";
        }

        if ($participante->getComplemento()) {
            $sql .= ", complemento=:complemento";
        }

        if ($participante->getNumero()) {
            $sql .= ", numero=:numero";
        }

        if ($participante->getBairro()) {
            $sql .= ", bairro=:bairro";
        }

        if ($participante->getCidade()) {
            $sql .= ", cidade=:cidade";
        }

        if ($participante->getUf()) {
            $sql .= ", uf=:uf";
        }

        if ($participante->getCep()) {
            $sql .= ", cep=:cep";
        }

        if ($participante->getEhParticipanteAtivo()) {
            $sql .= ", eh_participante_ativo=:eh_participante_ativo";
        }

        if ($participante->getDataCadastro()) {
            $sql .= ", data_cadastro=:data_cadastro";
        }

        if ($participante->getSexo()) {
            $sql .= ", sexo=:sexo";
        }

        if ($participante->getRg()) {
            $sql .= ", rg=:rg";
        }

        if ($participante->getOrgaoEmissorRg()) {
            $sql .= ", orgao_emissor_rg=:orgao_emisso_rg";
        }

        if ($participante->getUfOrgaoEmissorRg()) {
            $sql .= ", uf_orgao_emissor_rg=:uf_orgao_emissor";
        }

        if ($participante->getNomeMae()) {
            $sql .= ", nome_mae=:nome_mae";
        }

        if ($participante->getNomePai()) {
            $sql .= ", nome_pai=:nome_pai";
        }

        if ($participante->getDataCadastro()) {
            $sql .= ", data_casamento=:data_casamento";
        }

        if ($participante->getProfissao()) {
            $sql .= ", profissao=:profissao";
        }

        if ($participante->getNumeroPisPasep()) {
            $sql .= ", numero_pis_pasep=:numero_pis_pasep";
        }

        if ($participante->getNacionalidade()) {
            $sql .= ", nacionalidade=:nacionalidade";
        }

        if ($participante->getNaturalidade()) {
            $sql .= ", naturalidade=:naturalidade";
        }

        if ($participante->getUfNaturalidade()) {
            $sql .= ", uf_naturalidade=:uf_naturalidade";
        }

        if ($participante->getIdEstadoCivil()) {
            $sql .= ", id_estado_civil=:id_estado_civil";
        }

        if ($participante->getIdRegimeCasamento()) {
            $sql .= ", id_regime_casamento=:id_regime_casamento";
        }

        if ($participante->getIdGrauInstrucao()) {
            $sql .= ", id_grau_instrucao=:id_grau_instrucao";
        }
        //</editorfold>

        $stmt = $pdo->prepare($sql);

        if ($participante->getNome()) {
            $stmt->bindValue(':nome', $participante->getNome());
        }

        if ($participante->getDataNascimento()) {
            $stmt->bindValue(':data_nascimento', $participante->getDataNascimento());
        }

        if ($participante->getCpf()) {
            $stmt->bindValue(':cpf', $participante->getCpf());
        }

        if ($participante->getCnpj()) {
            $stmt->bindValue(':cnpj', $participante->getCnpj());
        }

        if ($participante->getInscricaoEstadual()) {
            $stmt->bindValue(':inscricao_estadual', $participante->getInscricaoEstadual());
        }

        if ($participante->getEmail()) {
            $stmt->bindValue(':email', $participante->getEmail());
        }

        if ($participante->getTelefoneResidencial()) {
            $stmt->bindValue(':tel_residencial', $participante->getTelefoneResidencial());
        }

        if ($participante->getTelefoneCelular()) {
            $stmt->bindValue(':tel_celular', $participante->getTelefoneCelular());
        }

        if ($participante->getTelefoneComercial()) {
            $stmt->bindValue(':tel_comercial', $participante->getTelefoneComercial());
        }

        if ($participante->getTelefoneOutro()) {
            $stmt->bindValue(':tel_outro', $participante->getTelefoneOutro());
        }

        if ($participante->getSite()) {
            $stmt->bindValue(':site', $participante->getSite());
        }

        if ($participante->getLogradouro()) {
            $stmt->bindValue(':logradouro', $participante->getLogradouro());
        }

        if ($participante->getComplemento()) {
            $stmt->bindValue(':complemento', $participante->getComplemento());
        }

        if ($participante->getNumero()) {
            $stmt->bindValue(':numero', $participante->getNumero());
        }

        if ($participante->getBairro()) {
            $stmt->bindValue(':bairro', $participante->getBairro());
        }

        if ($participante->getCidade()) {
            $stmt->bindValue(':cidade', $participante->getCidade());
        }

        if ($participante->getUf()) {
            $stmt->bindValue(':uf', $participante->getUf());
        }

        if ($participante->getCep()) {
            $stmt->bindValue(':cep', $participante->getCep());
        }

        if ($participante->getEhParticipanteAtivo()) {
            $stmt->bindValue(':eh_participante_ativo', $participante->getEhParticipanteAtivo());
        }

        if ($participante->getDataCadastro()) {
            $stmt->bindValue(':data_cadastro', $participante->getDataCadastro());
        }

        if ($participante->getSexo()) {
            $stmt->bindValue(':sexo', $participante->getSexo());
        }

        if ($participante->getRg()) {
            $stmt->bindValue(':rg', $participante->getRg());
        }

        if ($participante->getOrgaoEmissorRg()) {
            $stmt->bindValue(':orgao_emissor_rg', $participante->getOrgaoEmissorRg());
        }

        if ($participante->getUfOrgaoEmissorRg()) {
            $stmt->bindValue(':uf_orgao_emissor_rg', $participante->getUfOrgaoEmissorRg());
        }

        if ($participante->getNomeMae()) {
            $stmt->bindValue(':nome_mae', $participante->getNomeMae());
        }

        if ($participante->getNomePai()) {
            $stmt->bindValue(':nome_pai', $participante->getNomePai());
        }

        if ($participante->getDataCadastro()) {
            $stmt->bindValue(':data_casamento', $participante->getDataCadastro());
        }

        if ($participante->getProfissao()) {
            $stmt->bindValue(':profissao', $participante->getProfissao());
        }

        if ($participante->getNumeroPisPasep()) {
            $stmt->bindValue(':numero_pis_pasep', $participante->getNumeroPisPasep());
        }

        if ($participante->getNacionalidade()) {
            $stmt->bindValue(':nacionalidade', $participante->getNacionalidade());
        }

        if ($participante->getNaturalidade()) {
            $stmt->bindValue(':naturalidade', $participante->getNaturalidade());
        }

        if ($participante->getUfNaturalidade()) {
            $stmt->bindValue(':uf_naturalidade', $participante->getUfNaturalidade());
        }

        if ($participante->getIdEstadoCivil()) {
            $stmt->bindValue(':id_estado_civil', $participante->getIdEstadoCivil());
        }

        if ($participante->getIdRegimeCasamento()) {
            $stmt->bindValue(':id_regime_casamento', $participante->getIdRegimeCasamento());
        }

        if ($participante->getIdGrauInstrucao()) {
            $stmt->bindValue(':id_grau_instrucao', $participante->getIdGrauInstrucao());
        }

        try {
            $stmt->execute();

        } catch (Exception $e) {

            echo $e->getMessage();
        }

    }
}

?>
