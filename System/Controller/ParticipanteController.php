<?php

class ParticipanteController
{

    public static function CadastrarParticipanteEObterSeuID(ParticipanteModel $participante)
    {
        return ParticipanteDAO::CadastrarParticipanteEObterSeuID($participante);
    }

    public static function ObterArrayParticipantesPorFiltro(ParticipanteModel $participante)
    {
        return ParticipanteDAO::ObterArrayParticipantesPorFiltro($participante);
    }

    public static function ObterArrayParticipantesEDadosFinanciamentosPorFiltro(ParticipanteModel $participante)
    {
        return ParticipanteDAO::ObterArrayParticipantesEDadosFinanciamentosPorFiltro($participante);
    }

    //$tipo "Todos" ou "Compradores" ou "Vendedores"
    public static function ObterArrayParticipantesParaAutocomplete($termo, $tipo)
    {
        return ParticipanteDAO::ObterArrayParticipantesParaAutocomplete($termo, $tipo);
    }

    public static function ObterArrayDocumentacoesPorIdParticipante(ParticipanteModel $participante)
    {
        return ParticipanteDAO::ObterDocumentosParticipantePorFiltro($participante);
    }

    public static function ObterArrayDocumentacoesImovelPorFiltro(ImovelParticipanteModel $imovel)
    {
        return ParticipanteDAO::ObterDocumentosImovelPorFiltro($imovel);
    }

    public static function ObterArrayImoveisPorFiltro(ParticipanteModel $participante)
    {
        return ParticipanteDAO::ObterArrayImoveisPorFiltro($participante);
    }

    public static function CadastrarDocumentosParticipante(ParticipanteModel $participante)
    {
        return ParticipanteDAO::CadastrarDocumentosParticipante($participante);
    }

    public static function CadastrarDocumentosImovelParticipante(ImovelParticipanteModel $imovel)
    {
        return ParticipanteDAO::CadastrarDocumentosImovelParticipante($imovel);
    }


    public static function CadastrarImoveisParticipante(ParticipanteModel $participante)
    {
        return ParticipanteDAO::CadastrarImoveisParticipante($participante);
    }


    public function DocumentacoesParticipanteViewAction()
    {
        $documentacoes = new View();
        if (isset($_POST['conteudoDoCampo'])) {

            $participante = new ParticipanteModel();
            $participante->setId($_POST['conteudoDoCampo']);
            $participanteEncontrado = self::ObterArrayParticipantesPorFiltro($participante);

            $arrParams['participante'] = $participanteEncontrado[0];

            $documentacoes->setParams($arrParams);
        }


        $documentacoes->setView("../System/View/documentacao_participante.php");
        $documentacoes->MostraConteudo();
    }

    public function ImoveisParticipanteViewAction()
    {
        $imoveis = new View();
        //$documentacoesEImovel->setParams($arrParams);
        $imoveis->setView("../System/View/imovel_participante.php");
        $imoveis->MostraConteudo();
    }

    public function CadastrarDocsImovelViewAction()
    {
        $imoveis = new View();
        $arrImoveis = Array();
        $imovel = new ImovelParticipanteModel();
        $imovel->setId($_POST['conteudoDoCampo']);
        $arrImoveis[] = $imovel;
        $participanteFiltro = new ParticipanteModel();
        $participanteFiltro->setArrayImoveis($arrImoveis);

        $imovelEncontrado = self::ObterArrayImoveisPorFiltro($participanteFiltro);

        $arrParams['imovel'] = $imovelEncontrado[0];
        $imoveis->setParams($arrParams);
        $imoveis->setView("../System/View/cadastrar_docs_imovel.php");
        $imoveis->MostraConteudo();
    }


    public function CadastrarCompradorViewAction()
    {
        $cadastrarParticView = new View();
        $cadastrarParticView->setView("../System/View/cadastrar_comprador.php");
        if (isset($_POST['conteudoDoCampo'])) {
            //É um ID de um participante, usado na edição
            if (DataValidator::isNumeric($_POST['conteudoDoCampo'])) {
                $participante = new ParticipanteModel();
                $participante->setId($_POST['conteudoDoCampo']);
                $participanteEncontrado = self::ObterArrayParticipantesEDadosFinanciamentosPorFiltro($participante);
                $arrParams['comprador'] = $participanteEncontrado[0];
            } else {
                //Veio uma string, então é o nome do parente a ser cadastrado. Seto parâmetro para que ao abrir a View, ela sabia que é cadastro de parente
                $arrParams['parenteDoComprador'] = true;
            }
            // echo '<pre>',print_r($arrParams['participante']->getArrayDadosParentesco(),1),'</pre>';

            // die();
        }


        $arrParams['grau_instrucao'] = FormularioDAO::ObterGrausInstrucao();
        $arrParams['estados_civis'] = FormularioDAO::ObterEstadoCivis();
        $arrParams['regimes_casamento'] = FormularioDAO::ObterRegimesCasamento();
        $arrParams['tipos_residencia'] = FormularioDAO::ObterTiposResidencia();
        $arrParams['bancos'] = FormularioDAO::ObterBancos();
        $arrParams['bandeiras'] = FormularioDAO::ObterBandeirasCartaoCredito();
        $arrParams['tipos_aplicacao_financeira'] = FormularioDAO::ObterTiposAplicacaoFinanceira();
        $arrParams['tipos_parentesco'] = FormularioDAO::ObterTiposParentesco();
        $arrParams['tipos_conta'] = FormularioDAO::ObterTiposConta();
        $arrParams['tipos_compromissos_financeiros'] = FormularioDAO::ObterTiposCompromissoFianceiro();
        $arrParams['tipos_imovel'] = FormularioDAO::ObterTiposImovel();
        $arrParams['tipos_situacao_veiculo'] = FormularioDAO::ObterTiposSituacaoVeiculo();
        $arrParams['tipos_veiculos'] = FormularioDAO::ObterTiposVeiculo();
        $arrParams['ufs'] = FormularioDAO::ObterUfsBrasil();
        //$arrParams['tipos_documentos'] = FormularioDAO::ObterTiposDocumentosParticipantePessoaFisica();
        $cadastrarParticView->setParams($arrParams);

        $cadastrarParticView->MostraConteudo();
    }


    public function CadastrarVendedorViewAction()
    {
        $cadastrarParticView = new View();
        $cadastrarParticView->setView("../System/View/cadastrar_vendedor.php");
        if (isset($_POST['conteudoDoCampo'])) {
            //É um ID de um participante, usado na edição
            if (DataValidator::isNumeric($_POST['conteudoDoCampo'])) {
                $participante = new ParticipanteModel();
                $participante->setId($_POST['conteudoDoCampo']);
                $participanteEncontrado = self::ObterArrayParticipantesEDadosFinanciamentosPorFiltro($participante);
                $arrParams['vendedor'] = $participanteEncontrado[0];
            } else {
                //Veio uma string, então é o nome do cônjuge a ser cadastrado. Seto parâmetro para que ao abrir a View, ela sabia que é cadastro de cônjuge
                $arrParams['conjugeDoVendedor'] = true;
            }
            // echo '<pre>',print_r($arrParams['participante']->getArrayDadosParentesco(),1),'</pre>';

            // die();
        }

        $arrParams['grau_instrucao'] = FormularioDAO::ObterGrausInstrucao();
        $arrParams['estados_civis'] = FormularioDAO::ObterEstadoCivis();
        $arrParams['regimes_casamento'] = FormularioDAO::ObterRegimesCasamento();
        $arrParams['tipos_residencia'] = FormularioDAO::ObterTiposResidencia();
        $arrParams['bancos'] = FormularioDAO::ObterBancos();
        $arrParams['bandeiras'] = FormularioDAO::ObterBandeirasCartaoCredito();
        $arrParams['tipos_aplicacao_financeira'] = FormularioDAO::ObterTiposAplicacaoFinanceira();
        $arrParams['tipos_parentesco'] = FormularioDAO::ObterTiposParentesco();
        $arrParams['tipos_conta'] = FormularioDAO::ObterTiposConta();
        $arrParams['tipos_compromissos_financeiros'] = FormularioDAO::ObterTiposCompromissoFianceiro();
        $arrParams['tipos_imovel'] = FormularioDAO::ObterTiposImovel();
        $arrParams['tipos_situacao_veiculo'] = FormularioDAO::ObterTiposSituacaoVeiculo();
        $arrParams['tipos_veiculos'] = FormularioDAO::ObterTiposVeiculo();
        $arrParams['ufs'] = FormularioDAO::ObterUfsBrasil();
        $cadastrarParticView->setParams($arrParams);

        $cadastrarParticView->MostraConteudo();
    }

    public function CadastrarParticipanteAction()
    {
        $insertedId = "";
        $error = "";
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            $participante = new ParticipanteModel();

            if (isset($_POST['tipo_participante']) && $_POST['tipo_participante'] == 'Vendedor') {
                $participante->setIdTipoParticipante(3);

            } else
                if (isset($_POST['tipo_participante']) && $_POST['tipo_participante'] == 'Comprador') {
                    $participante->setIdTipoParticipante(1);
                } else {
                    die("Erro ao Cadastrar Participante");
                }

            //Requests Posts dos dados do participante
            if (isset($_POST['cpf'])) $participante->setCpf(DataManipulator::RemoverCharsNaoNumericos($_POST['cpf']));
            if (isset($_POST['nome'])) $participante->setNome($_POST['nome']);
            if (isset($_POST['sexo'])) $participante->setSexo($_POST['sexo']);
            if (isset($_POST['data_nascimento'])) $participante->setDataNascimento(DataManipulator::ConverterDataParaDB($_POST['data_nascimento']));

            if (isset($_POST['id_grau_instrucao'])) $participante->setIdGrauInstrucao($_POST['id_grau_instrucao']);

            if (isset($_POST['rg'])) $participante->setRg($_POST['rg']);
            if (isset($_POST['orgao_emissor_rg'])) $participante->setOrgaoEmissorRg($_POST['orgao_emissor_rg']);
            if (isset($_POST['uf_orgao_emissor_rg'])) $participante->setUfOrgaoEmissorRg($_POST['uf_orgao_emissor_rg']);

            if (isset($_POST['data_emissao_rg'])) $participante->setUfOrgaoEmissorRg($_POST['data_emissao_rg']);

            if (isset($_POST['id_estado_civil'])) $participante->setIdEstadoCivil($_POST['id_estado_civil']);
            if (isset($_POST['id_regime_casamento'])) $participante->setIdRegimeCasamento($_POST['id_regime_casamento']);
            if (isset($_POST['data_casamento'])) $participante->setDataCasamento(DataManipulator::ConverterDataParaDB($_POST['data_casamento']));
            if (isset($_POST['nacionalidade'])) $participante->setNacionalidade($_POST['nacionalidade']);
            if (isset($_POST['naturalidade'])) $participante->setNaturalidade($_POST['naturalidade']);
            if (isset($_POST['uf_naturalidade'])) $participante->setUfNaturalidade($_POST['uf_naturalidade']);
            if (isset($_POST['profissao'])) $participante->setProfissao($_POST['profissao']);
            if (isset($_POST['pis_pasep'])) $participante->setNumeroPisPasep($_POST['pis_pasep']);
            if (isset($_POST['nome_mae'])) $participante->setNomeMae($_POST['nome_mae']);
            if (isset($_POST['nome_pai'])) $participante->setNomePai($_POST['nome_pai']);

            //Requests Posts do endereço do participante
            if (isset($_POST['endereco_cep'])) $participante->setCep($_POST['endereco_cep']);
            if (isset($_POST['endereco_logradouro'])) $participante->setLogradouro($_POST['endereco_logradouro']);
            if (isset($_POST['endereco_numero'])) $participante->setNumero($_POST['endereco_numero']);
            if (isset($_POST['endereco_complemento'])) $participante->setComplemento($_POST['endereco_complemento']);
            if (isset($_POST['endereco_bairro'])) $participante->setBairro($_POST['endereco_bairro']);
            if (isset($_POST['endereco_cidade'])) $participante->setCidade($_POST['endereco_cidade']);
            if (isset($_POST['endereco_uf'])) $participante->setUf($_POST['endereco_uf']);

            if (isset($_POST['endereco_id_tipo_residencia'])) {
                $residencia = new ResidenciaModel();
                $residencia->setIdTipoResidencia($_POST['endereco_id_tipo_residencia']);
                if (isset($_POST['endereco_valor_aluguel'])) {
                    $residencia->setValorAluguel(DataManipulator::FormatarNumeroParaDB($_POST['endereco_valor_aluguel']));
                }
                $participante->setResidencia($residencia);

            }


            //Requests Posts das informações de contato do participante
            if (isset($_POST['contato_tel_residencial'])) $participante->setTelefoneResidencial(DataManipulator::RemoverCharsNaoNumericos($_POST['contato_tel_residencial']));
            if (isset($_POST['contato_tel_celular'])) $participante->setTelefoneCelular(DataManipulator::RemoverCharsNaoNumericos($_POST['contato_tel_celular']));
            if (isset($_POST['contato_tel_comercial'])) $participante->setTelefoneComercial(DataManipulator::RemoverCharsNaoNumericos($_POST['contato_tel_comercial']));
            if (isset($_POST['contato_tel_outro'])) $participante->setTelefoneOutro(DataManipulator::RemoverCharsNaoNumericos($_POST['contato_tel_outro']));
            if (isset($_POST['contato_email'])) $participante->setEmail($_POST['contato_email']);
            if (isset($_POST['contato_site'])) $participante->setSite($_POST['contato_site']);

            /*
                            forma_pagamento
                            [id_instituicao]

            dados_liberacao_cred[0][num_agencia]
            "dados_liberacao_cred[0][num_conta_corrente]

            "dados_liberacao_cred[0][cpf_cnpj_titular]
            "dados_liberacao_cred[0][porcento_credito] */

            if (isset($_POST['dados_liberacao_cred']) && $_POST['tipo_participante'] == 'Vendedor') {
                $dadosLiberacaoCredPost = $_POST['dados_liberacao_cred'][0];

                if ($dadosLiberacaoCredPost['id_instituicao'] == '-1') {
                    die("Selecione um banco para liberação de crédito");
                } else {
                    $dadosLiberacaoCred = new LiberacaoCreditoModel();
                    $instituicaoBancaria = new InstituicaoBancariaModel();
                    $instituicaoBancaria->setIdBanco($dadosLiberacaoCredPost['id_instituicao']);
                    $dadosLiberacaoCred->setInstituicaoBancaria($instituicaoBancaria);

                    if ($dadosLiberacaoCredPost['porcento_credito'] == '') {
                        $dadosLiberacaoCredPost['porcento_credito'] = "0";
                    }


                    if ($dadosLiberacaoCredPost['forma_pagamento'] == '1')
                        $dadosLiberacaoCred->setEhCreditoNoBancoDoBrasil(1);
                    else
                        $dadosLiberacaoCred->setEhCreditoNoBancoDoBrasil(0);

                    $dadosLiberacaoCred->setNumeroAgencia($dadosLiberacaoCredPost['num_agencia']);
                    $dadosLiberacaoCred->setNumeroContaCorrente($dadosLiberacaoCredPost['num_conta_corrente']);
                    $dadosLiberacaoCred->setCpfCnpjTitular($dadosLiberacaoCredPost['cpf_cnpj_titular']);
                    $dadosLiberacaoCred->setPorcentagemCredito($dadosLiberacaoCredPost['porcento_credito']);
                    $participante->setDadosLiberacaoCredito($dadosLiberacaoCred);

                }


            }

            /*
             "dados_profiss[0][profissao]"
			"dados_profiss[0][empresa]"
			"dados_profiss[0][cnpj]"
			"dados_profiss[0][nat_ocupacao]"
			"dados_profiss[0][nivel_cargo]"
			"dados_profiss[0][data_inic_ocup]"
			"dados_profiss[0][renda_mensal]"
			"dados_profiss[0][data_ref]"
             */
            if (isset($_POST['dados_profiss']) && $_POST['tipo_participante'] == 'Comprador') {
                $arrDadosProfissionaisPost = $_POST['dados_profiss'];
                $arrDadosProfissionais = Array();
                foreach ($arrDadosProfissionaisPost as $dadosProfissionaisPost) {
                    //Validações
                    //Se não há nenhuma descrição na profissao, aborto este dado profissional // Melhor validar mais campos, pois estou validando só um
                    if ($dadosProfissionaisPost['profissao'] == '') {
                        continue;
                    }
                    if ($dadosProfissionaisPost['renda_mensal'] == '') {
                        $dadosProfissionaisPost['renda_mensal'] = "0,00";
                    }
                    if ($dadosProfissionaisPost['data_inic_ocup'] == '') {
                        $dadosProfissionaisPost['data_inic_ocup'] = "00/00/0000";
                    }
                    if ($dadosProfissionaisPost['data_ref'] == '') {
                        $dadosProfissionaisPost['data_ref'] = "00/00/0000";
                    }
                    $dadosProfissionais = new DadosProfissionaisModel();
                    $dadosProfissionais->setProfissao($dadosProfissionaisPost['profissao']);
                    $dadosProfissionais->setEmpresaEmpregador($dadosProfissionaisPost['empresa']);
                    $dadosProfissionais->setCnpj($dadosProfissionaisPost['cnpj']);
                    $dadosProfissionais->setNaturezaOcupacao($dadosProfissionaisPost['nat_ocupacao']);
                    $dadosProfissionais->setNivelCargo($dadosProfissionaisPost['nivel_cargo']);
                    $dadosProfissionais->setDataInicioOcupacao(DataManipulator::ConverterDataParaDB($dadosProfissionaisPost['data_inic_ocup']));
                    $dadosProfissionais->setValorRendaBrutaMensal(DataManipulator::FormatarNumeroParaDB($dadosProfissionaisPost['renda_mensal']));
                    $dadosProfissionais->setDataReferencia(DataManipulator::ConverterDataParaDB($dadosProfissionaisPost['data_ref']));

                    $arrDadosProfissionais[] = $dadosProfissionais;
                }
                $participante->setArrayDadosProfissionais($arrDadosProfissionais);

            }


            //Requests Posts das informações financeiras do participante

            if (isset($_POST['fontes_renda'])) {
                $arrFonteRendaPost = $_POST['fontes_renda'];
                $arrFonteRenda = Array();
                foreach ($arrFonteRendaPost as $fonteRendaPost) {
                    //Validações
                    //Se não há nenhuma descrição na fonte de renda, aborto esta fonte
                    if ($fonteRendaPost['descricao'] == '') {
                        continue;
                    }
                    if ($fonteRendaPost['valor_bruto'] == '') {
                        $fonteRendaPost['valor_bruto'] = "0,00";
                    }
                    if ($fonteRendaPost['valor_liquido'] == '') {
                        $fonteRendaPost['valor_liquido'] = "0,00";
                    }
                    if ($fonteRendaPost['data_inicio'] == '') {
                        $fonteRendaPost['data_inicio'] = "00/00/0000";
                    }
                    $fonteRenda = new FonteRendaModel();
                    $fonteRenda->setDescricaoFonte($fonteRendaPost['descricao']);
                    $fonteRenda->setCargo($fonteRendaPost['cargo']);
                    $fonteRenda->setEhFonteComprovada($fonteRendaPost['fonte_comprovada']);
                    $fonteRenda->setValorBruto(DataManipulator::FormatarNumeroParaDB($fonteRendaPost['valor_bruto']));
                    $fonteRenda->setValorLiquido(DataManipulator::FormatarNumeroParaDB($fonteRendaPost['valor_liquido']));
                    $fonteRenda->setDataInicio(DataManipulator::ConverterDataParaDB($fonteRendaPost['data_inicio']));
                    $arrFonteRenda[] = $fonteRenda;
                }
                $participante->setArrayFontesRenda($arrFonteRenda);
            }

            if (isset($_POST['contas_bancarias'])) {
                $arrContasBancariasPost = $_POST['contas_bancarias'];
                $arrContasBancarias = Array();
                foreach ($arrContasBancariasPost as $contaBancariaPost) {
                    //Validações
                    //Se não há instituição bancária e tipo de conta selecionados, aborto. Pode acontecer quando usuário clicar em "Adicionar Renda" e não preencher
                    if ($contaBancariaPost['id_instituicao'] == '' && $contaBancariaPost['id_tipo_conta'] == '') {
                        continue;
                    }
                    //O echo é exibido como javascript:alert na View
                    if ($contaBancariaPost['id_instituicao'] != '' && $contaBancariaPost['id_tipo_conta'] == '') {
                        echo "Selecione o tipo de conta.";
                        die();
                    }
                    if ($contaBancariaPost['id_instituicao'] == '' && $contaBancariaPost['id_tipo_conta'] != '') {
                        echo "Selecione a instituição bancária.";
                        die();
                    }
                    if ($contaBancariaPost['limite'] == '') {
                        $contaBancariaPost['limite'] = "0,00";
                    }
                    $contaBancaria = new DadoBancarioModel();
                    $instituicaoBancaria = new InstituicaoBancariaModel();
                    $instituicaoBancaria->setIdBanco($contaBancariaPost['id_instituicao']);
                    $contaBancaria->setInstituicaoBancaria($instituicaoBancaria);
                    $contaBancaria->setIdTipoConta($contaBancariaPost['id_tipo_conta']);
                    $contaBancaria->setLimite(DataManipulator::FormatarNumeroParaDB($contaBancariaPost['limite']));
                    $arrContasBancarias[] = $contaBancaria;
                }
                $participante->setArrayDadosBancarios($arrContasBancarias);
            }

            if (isset($_POST['aplicacoes'])) {
                $arrAplicacoesPost = $_POST['aplicacoes'];
                $arrAplicacoes = Array();
                foreach ($arrAplicacoesPost as $aplicacaoPost) {
                    if ($aplicacaoPost['id_instituicao'] == '' && $aplicacaoPost['id_tipo_aplicacao'] == '') {
                        continue;
                    }
                    if ($aplicacaoPost['id_instituicao'] != '' && $aplicacaoPost['id_tipo_aplicacao'] == '') {
                        echo "Selecione o tipo de aplicação.";
                        die();
                    }
                    if ($aplicacaoPost['id_instituicao'] == '' && $aplicacaoPost['id_tipo_aplicacao'] != '') {
                        echo "Selecione a instituição bancária.";
                        die();
                    }
                    if ($aplicacaoPost['valor'] == '') {
                        $aplicacaoPost['valor'] = "0,00";
                    }
                    $aplicacao = new AplicacaoFinanceiraModel();
                    $instituicaoBancaria = new InstituicaoBancariaModel();
                    $instituicaoBancaria->setIdBanco($aplicacaoPost['id_instituicao']);
                    $aplicacao->setInstituicaoBancaria($instituicaoBancaria);
                    $aplicacao->setIdTipoAplicacao($aplicacaoPost['id_tipo_aplicacao']);
                    $aplicacao->setValor(DataManipulator::FormatarNumeroParaDB($aplicacaoPost['valor']));

                    $arrAplicacoes[] = $aplicacao;
                }
                $participante->setArrayAplicacoesFinanceiras($arrAplicacoes);
            }


            if (isset($_POST['cartoes_credito'])) {
                $arrCartoesPost = $_POST['cartoes_credito'];
                $arrCartoes = Array();
                foreach ($arrCartoesPost as $cartaoPost) {
                    if ($cartaoPost['id_instituicao'] == '' && $cartaoPost['id_bandeira'] == '') {
                        continue;
                    }
                    if ($cartaoPost['id_instituicao'] != '' && $cartaoPost['id_bandeira'] == '') {
                        echo "Selecione a bandeira do cartão.";
                        die();
                    }
                    if ($cartaoPost['id_instituicao'] == '' && $cartaoPost['id_bandeira'] != '') {
                        echo "Selecione a instituição bancária.";
                        die();
                    }
                    if ($cartaoPost['limite'] == '') {
                        $cartaoPost['limite'] = "0,00";
                    }
                    $cartao = new CartaoCreditoModel();
                    $instituicaoBancaria = new InstituicaoBancariaModel();
                    $instituicaoBancaria->setIdBanco($cartaoPost['id_instituicao']);
                    $cartao->setInstituicaoBancaria($instituicaoBancaria);
                    $cartao->setIdBandeira($cartaoPost['id_bandeira']);
                    $cartao->setLimite(DataManipulator::FormatarNumeroParaDB($cartaoPost['limite']));
                    $arrCartoes[] = $cartao;

                }
                $participante->setArrayCartoesCredito($arrCartoes);

            }

            if (isset($_POST['compromissos_financ'])) {
                $arrCompromFinancPost = $_POST['compromissos_financ'];
                $arrCompromFinanc = Array();
                foreach ($arrCompromFinancPost as $compromFinancPost) {
                    if ($compromFinancPost['id_tipo'] == '' && $compromFinancPost['num_parcelas'] == '' && $compromFinancPost['parcelas_pagas'] == '') {
                        continue;
                    }
                    if ($compromFinancPost['id_tipo'] != '' && $compromFinancPost['num_parcelas'] == '') {
                        echo "Digite o número de parcelas.";
                        die();
                    }
                    if ($compromFinancPost['id_tipo'] != '' && $compromFinancPost['parcelas_pagas'] == '') {
                        echo "Digite o número de parcelas pagas.";
                        die();
                    }
                    if ($compromFinancPost['id_tipo'] != '' && $compromFinancPost['parcelas_pagas'] == '' && $compromFinancPost['num_parcelas'] == '') {
                        echo "Digite o número de parcelas e parcelas pagas.";
                        die();
                    }
                    if ($compromFinancPost['id_tipo'] == '' && $compromFinancPost['num_parcelas'] != '') {
                        echo "Selecione o tipo de compromisso.";
                        die();
                    }
                    if ($compromFinancPost['valor_parcela'] == '') {
                        $compromFinancPost['valor_parcela'] = "0,00";
                    }
                    $compromFinanc = new CompromissoFinanceiroModel();
                    $compromFinanc->setIdTipoCompromisso($compromFinancPost['id_tipo']);
                    $compromFinanc->setNumeroParcelas($compromFinancPost['num_parcelas']);
                    $compromFinanc->setNumeroParcelasPagas($compromFinancPost['parcelas_pagas']);
                    $compromFinanc->setValorParcela(DataManipulator::FormatarNumeroParaDB($compromFinancPost['valor_parcela']));
                    $arrCompromFinanc[] = $compromFinanc;

                }
                $participante->setArrayCompromissosFinanceiros($arrCompromFinanc);
            }

            if (isset($_POST['imoveis'])) {
                $arrImoveisPost = $_POST['imoveis'];
                $arrImoveis = Array();
                foreach ($arrImoveisPost as $imoveisPost) {
                    if ($imoveisPost['id_tipo'] == '' && $imoveisPost['cidade'] == '' && $imoveisPost['uf'] == '') {
                        continue;
                    }
                    if ($imoveisPost['id_tipo'] != '' && $imoveisPost['cidade'] == '') {
                        echo "Digite a cidade em Patrimônios - Imóveis.";
                        die();
                    }
                    if ($imoveisPost['id_tipo'] != '' && $imoveisPost['uf'] == '') {
                        echo "Selecione a UF em Patrimônios - Imóveis.";
                        die();
                    }
                    if ($imoveisPost['id_tipo'] != '' && $imoveisPost['uf'] == '' && $imoveisPost['cidade'] == '') {
                        echo "Selecione a cidade e a UF em Patrimônios - Imóveis.";
                        die();
                    }
                    if ($imoveisPost['valor'] == '') {
                        $imoveisPost['valor'] = "0,00";
                    }
                    $imovel = new ImovelParticipanteModel();
                    $imovel->setIdTipoImovel($imoveisPost['id_tipo']);
                    $imovel->setCidade($imoveisPost['cidade']);
                    $imovel->setUf($imoveisPost['uf']);
                    $imovel->setValor($imoveisPost['valor']);
                    $arrImoveis[] = $imovel;
                }
                $participante->setArrayImoveis($arrImoveis);
            }

            if (isset($_POST['veiculos'])) {
                $arrVeiculosPost = $_POST['veiculos'];
                $arrVeiculos = Array();
                foreach ($arrVeiculosPost as $veiculosPost) {
                    if ($veiculosPost['id_tipo'] == '') {
                        continue;
                    }
                    if ($veiculosPost['id_tipo'] != '' && $veiculosPost['id_situacao'] == '') {
                        echo "Selecione a situação do veículo.";
                        die();
                    }
                    if ($veiculosPost['id_tipo'] != '' && $veiculosPost['num_parcelas'] == '') {
                        echo "Digite o número de parcelas.";
                        die();
                    }
                    if ($veiculosPost['id_tipo'] != '' && $veiculosPost['parcelas_pagas'] == '') {
                        echo "Digite o número de parcelas pagas.";
                        die();
                    }
                    if ($veiculosPost['id_tipo'] != '' && $veiculosPost['parcelas_pagas'] == '' && $veiculosPost['num_parcelas'] == '') {
                        echo "Digite o número de parcelas e parcelas pagas.";
                        die();
                    }
                    if ($veiculosPost['valor_parcela'] == '') {
                        $veiculosPost['valor_parcela'] = "0,00";
                    }
                    if ($veiculosPost['valor_mercado'] == '') {
                        $veiculosPost['valor_mercado'] = "0,00";
                    }
                    $veiculo = new VeiculoParticipanteModel();
                    $veiculo->setIdTipoVeiculo($veiculosPost['id_tipo']);
                    $veiculo->setIdSituacaoVeiculo($veiculosPost['id_situacao']);
                    if ((!DataValidator::isNumeric($veiculosPost['ano']) || strlen($veiculosPost['ano']) != 4)) {
                        echo "Ano do veículo em formato incorreto.";
                        die();
                    }
                    $veiculo->setAno($veiculosPost['ano']);
                    $veiculo->setValorMercado($veiculosPost['valor_mercado']);
                    $veiculo->setNumeroParcelas($veiculosPost['num_parcelas']);
                    $veiculo->setNumeroParcelasPagas($veiculosPost['parcelas_pagas']);
                    $veiculo->setValorParcela($veiculosPost['valor_parcela']);
                    $arrVeiculos[] = $veiculo;


                }
                $participante->setArrayVeiculos($arrVeiculos);
            }

            if (isset($_POST['parentesco'])) {

                $arrParentescosPost = $_POST['parentesco'];
                $arrParentescos = Array();
                foreach ($arrParentescosPost as $parentescosPost) {
                    if ($parentescosPost['id'] == '') {
                        continue;
                    }
                    if ($parentescosPost['id'] != '' && $parentescosPost['id_parentesco'] == '') {
                        echo "Selecione grau de parentesco.";
                        die();
                    }
                    $parentesco = new ParentescoModel();
                    $parentesco->setIdParente($parentescosPost['id']);
                    $parentesco->setIdTipoParentesco($parentescosPost['id_parentesco']);
                    if ($_POST['tipo_participante'] == 'Vendedor') {
                        $parentesco->setCompoeRenda("0");

                    }

                    if (isset($parentescosPost['compoe_renda']) && $parentescosPost['compoe_renda'] == '1') {
                        $parentesco->setCompoeRenda("1");
                    }
                    $arrParentescos[] = $parentesco;
                }
                $participante->setArrayDadosParentesco($arrParentescos);
            }

            //Requests Posts dos relacionamentos de parentesco do participante
            // echo '<pre>',print_r($participante,1),'</pre>';

            // die();
            try {
                $insertedId = self::CadastrarParticipanteEObterSeuID($participante);

            } catch (Exception $e) {
                $error = $e->getMessage();
            }


        }

        if ($insertedId != 0) {
            echo "CadParticipSucesso#" . $insertedId;
        } else {
            echo "CadParticipErro";
        }
    }

    public function SalvarDocumentacaoParticipanteAction()
    {
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            if (isset($_POST['documentos']) and isset($_FILES['documentos']) and isset($_POST['id_participante']) and $_POST['id_participante'] != '') {

                if (!is_dir("../public_html/documentacoes/participantes/" . $_POST['id_participante'])) {
                    mkdir("../public_html/documentacoes/participantes/" . $_POST['id_participante']);
                }

                $participante = new ParticipanteModel();
                $participante->setId($_POST['id_participante']);
                $arrDocumentosPost = $_POST['documentos'];
                $arrDocumentos = Array();

                foreach ($arrDocumentosPost as $key => $documentoPost) {

                    $n = $_FILES['documentos']['name'][$key]['file'];
                    $s = $_FILES['documentos']['size'][$key]['file'];

                    $documentacao = new DocumentoParticipanteModel();


                    $documentacao->setIdTipoDocumento(1);
                    $documentacao->setNome($documentoPost['titulo_documento']);
                    //Guardo o nome do arquivo, para futuras consultas
                    $documentacao->setNomeArquivo($_FILES['documentos']['name'][$key]['file']);
                    $extensaoArquivo = pathinfo($_FILES['documentos']['name'][$key]['file'], PATHINFO_EXTENSION);
                    //Mas gravo em disco um nome randomico para que não haja sobrescrita de arquivos
                    $documentacao->setNomeUnicoDoArquivo(md5(uniqid(rand(), true)) . "." . $extensaoArquivo);
                    $documentacao->setIdUsuarioCadastro($_SESSION['id_usuario']);

                    $arrDocumentos[] = $documentacao;


                    $tmpFile = $_FILES['documentos']['tmp_name'][$key]['file'];

                    if (move_uploaded_file($tmpFile, "../public_html/documentacoes/participantes/" . $participante->getId() . "/" . $documentacao->getNomeUnicoDoArquivo())) {
                        echo "<br>Arquivo enviado: $n ($s bytes)";
                    } else {
                        die("Erro ao salvar documento");
                    }


                }
                $participante->setArrayDocumentos($arrDocumentos);
                self::CadastrarDocumentosParticipante($participante);


            }

        }

    }

    public function SalvarDocumentacaoImovelParticipanteAction()
    {
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            if (isset($_POST['documentos']) and isset($_FILES['documentos']) and isset($_POST['id_imovel']) and $_POST['id_imovel'] != '') {

                if (!is_dir("../public_html/documentacoes/imoveis/" . $_POST['id_imovel'])) {
                    mkdir("../public_html/documentacoes/imoveis/" . $_POST['id_imovel']);
                }

                $imovel = new ImovelParticipanteModel();
                $imovel->setId($_POST['id_imovel']);
                $arrDocumentosPost = $_POST['documentos'];
                $arrDocumentos = Array();

                foreach ($arrDocumentosPost as $key => $documentoPost) {

                    $n = $_FILES['documentos']['name'][$key]['file'];
                    $s = $_FILES['documentos']['size'][$key]['file'];

                    $documentacao = new DocumentoImovelModel();

                    $documentacao->setIdTipoDocumento(1);
                    $documentacao->setNome($documentoPost['titulo_documento']);
                    //Guardo o nome do arquivo, para futuras consultas
                    $documentacao->setNomeArquivo($_FILES['documentos']['name'][$key]['file']);
                    $extensaoArquivo = pathinfo($_FILES['documentos']['name'][$key]['file'], PATHINFO_EXTENSION);
                    //Mas gravo em disco um nome randomico para que não haja sobrescrita de arquivos
                    $documentacao->setNomeUnicoDoArquivo(md5(uniqid(rand(), true)) . "." . $extensaoArquivo);
                    $documentacao->setIdUsuarioCadastro($_SESSION['id_usuario']);
                    $documentacao->setIdTipoDocumento(1);
                    $arrDocumentos[] = $documentacao;


                    $tmpFile = $_FILES['documentos']['tmp_name'][$key]['file'];

                    if (move_uploaded_file($tmpFile, "../public_html/documentacoes/imoveis/" . $imovel->getId() . "/" . $documentacao->getNomeUnicoDoArquivo())) {
                        echo "<br>Arquivo enviado: $n ($s bytes)";
                    } else {
                        die("Erro ao salvar documento");
                    }


                }
                $imovel->setArrayDocumentos($arrDocumentos);
                self::CadastrarDocumentosImovelParticipante($imovel);


            }

        }

    }

    public function CadastrarImovelParticipanteEObterArrayImoveisAction()
    {
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            if (isset($_POST['imovel_matricula']) and isset($_POST['imovel_valor']) and isset($_POST['id_participante']) and $_POST['id_participante'] != '') {
                $imovel = new ImovelParticipanteModel();
                $imovel->setMatricula($_POST['imovel_matricula']);
                $imovel->setValor(DataManipulator::FormatarNumeroParaDB($_POST['imovel_valor']));
                $imovel->setIdParticipante($_POST['id_participante']);
                $imovel->setIdTipoImovel(1);
                $imovel->setIdUsuarioCadastro($_SESSION['id_usuario']);
                $arrImoveis = Array();
                $arrImoveis[] = $imovel;
                $participante = new ParticipanteModel();
                $participante->setArrayImoveis($arrImoveis);

                self::CadastrarImoveisParticipante($participante);
                $this->PesquisarImoveisParticipanteAction();
            }

        }
    }

    public function PesquisarParticipanteViewAction()
    {

        $cadastrarParticView = new View();
        $cadastrarParticView->setView("../System/View/pesquisar_participante.php");
        $cadastrarParticView->MostraConteudo();
    }

    public function PesquisarParticipanteAction()
    {
        //echo '{ "message": "Hello" }';
        $participante = new ParticipanteModel();
        if (isset($_POST['cpf'])) $participante->setCpf(DataManipulator::RemoverCharsNaoNumericos($_POST['cpf']));
        if (isset($_POST['nome'])) $participante->setNome($_POST['nome']);
        //if (isset($_POST['correpondente'])) $participante->setCorrespondente($_POST['correpondente']);
        $arrParticipantes = self::ObterArrayParticipantesPorFiltro($participante);
        echo json_encode($arrParticipantes);
    }

    //Essa função é chamada por AJAX, no on select autocompleteDocumentacoes
    public function PesquisarDocumentacoesAction()
    {

        $participante = new ParticipanteModel();
        if (isset($_POST['conteudoDoCampo'])) $participante->setId($_POST['conteudoDoCampo']);
        if (isset($_POST['id_participante'])) $participante->setId($_POST['id_participante']);

        if ($participante->getId()) {
            $arrDocumentacoes = self::ObterArrayDocumentacoesPorIdParticipante($participante);
            echo json_encode($arrDocumentacoes);
        }
    }

    //Essa função é chamada por AJAX, no on select autocompleteDocumentacoes
    public function PesquisarTiposDocumentacaoAction()
    {
        $participante = new ParticipanteModel();
        if (isset($_POST['conteudoDoCampo'])) $participante->setId($_POST['conteudoDoCampo']);
        if (isset($_POST['id_participante'])) $participante->setId($_POST['id_participante']);

        $participanteCompleto = self::ObterArrayParticipantesPorFiltro($participante);

        $arrTiposDocumentacao = FormularioDAO::ObterTiposDocumentosParticipantePorTipoParticipante($participanteCompleto[0], "1");

        $tipoDocStr = '<option value="-1">Selecione</option>';
        foreach ($arrTiposDocumentacao as $tipoDocumentacao) {
            $tipoDocStr .= "<option value=" . $tipoDocumentacao->getId() . ">" . $tipoDocumentacao->getDescricaoTipoDocumento() . "</option>";
        }
        echo $tipoDocStr;

    }


    public function PesquisarImoveisParticipanteAction()
    {

        $participante = new ParticipanteModel();
        if (isset($_POST['conteudoDoCampo'])) $participante->setId($_POST['conteudoDoCampo']);
        if (isset($_POST['id_participante'])) $participante->setId($_POST['id_participante']);

        if ($participante->getId()) {
            $arrImoveis = self::ObterArrayImoveisPorFiltro($participante);
            echo json_encode($arrImoveis);
        }
    }


    //Essa função é chamada por AJAX, ao carregar ao view de cadastro de docs do imovel, via submit de form
    public function PesquisarDocumentacoesImovelAction()
    {

        $imovelParticipante = new ImovelParticipanteModel();
        if (isset($_POST['conteudoDoCampo'])) $imovelParticipante->setId($_POST['conteudoDoCampo']);
        if (isset($_POST['id_imovel'])) $imovelParticipante->setId($_POST['id_imovel']);
        $arrDocumentacoes = self::ObterArrayDocumentacoesImovelPorFiltro($imovelParticipante);
        echo json_encode($arrDocumentacoes);
    }

    public function PesquisarCompradorParaAutocompleteAction()
    {
        $termo = "";
        if (isset($_REQUEST['term'])) {
            $termo = trim($_REQUEST['term']);
            $arrParticipantes = self::ObterArrayParticipantesParaAutocomplete($termo, "Compradores");
        }

        echo json_encode($arrParticipantes);
    }

    public function PesquisarVendedorParaAutocompleteAction()
    {
        $termo = "";
        if (isset($_REQUEST['term'])) {
            $termo = trim($_REQUEST['term']);
            $arrParticipantes = self::ObterArrayParticipantesParaAutocomplete($termo, "Vendedores");
        }

        echo json_encode($arrParticipantes);
    }

    public function PesquisarParticipanteParaAutocompleteAction()
    {
        $termo = "";
        if (isset($_REQUEST['term'])) {
            $termo = trim($_REQUEST['term']);
            $arrParticipantes = self::ObterArrayParticipantesParaAutocomplete($termo, "Todos");
        }

        echo json_encode($arrParticipantes);
    }


}

?>
