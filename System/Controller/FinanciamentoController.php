<?php

class FinanciamentoController
{

    public function CadastrarFinanciamentoViewAction()
    {
        $cadastrarFinancView = new View();
        $cadastrarFinancView->setView("../System/View/cadastrar_financiamento.php");
        $arrParams['bancos'] = FormularioDAO::ObterBancosTrabalhadosPorCorrespondentes();
        $arrParams['tipos_participantes'] = FormularioDAO::ObterTiposParticipante();

        $cadastrarFinancView->setParams($arrParams);
        $cadastrarFinancView->MostraConteudo();
    }

    public function PesquisarFinanciamentoViewAction()
    {
        $cadastrarFinancView = new View();
        $cadastrarFinancView->setView("../System/View/pesquisar_financiamento.php");
        $arrParams['bancos'] = FormularioDAO::ObterBancosTrabalhadosPorCorrespondentes();
        $arrParams['situacoes'] = FormularioDAO::ObterTiposStatusFinanciamento();
        $cadastrarFinancView->setParams($arrParams);
        $cadastrarFinancView->MostraConteudo();

    }

    public function InteracoesViewAction()
    {
        $cadastrarFinancView = new View();

        $arrParams['interacoes'] = self::ObterTodasInteracoesPorIdFinanciamento($_POST['conteudoDoCampo']);

        $arrParams['tipos_interacoes'] = FormularioDAO::ObterTiposInteracoesFinanciamento();
        $arrParams['tipos_status_interacoes'] = FormularioDAO::ObterTiposStatusFinanciamento();
        $arrParams['id_financiamento'] = $_POST['conteudoDoCampo'];
        $cadastrarFinancView->setParams($arrParams);
        $cadastrarFinancView->setView("../System/View/interacoes_financiamento.php");
        $cadastrarFinancView->MostraConteudo();
    }

    public function DocumentacoesViewAction()
    {
        $visualizarDocumentacoes = new View();

        $arrParams['documentacoes'] = self::ObterArraysDocumentosPorIdFinanciamento($_POST['conteudoDoCampo']);


        $visualizarDocumentacoes->setParams($arrParams);
        $visualizarDocumentacoes->setView("../System/View/baixar_documentacao_financiamento.php");
        $visualizarDocumentacoes->MostraConteudo();
    }

    public static function ObterTodasInteracoesPorIdFinanciamento($idFinanciamento)
    {
        return FinanciamentoDAO::ObterTodasInteracoesPorIdFinanciamento($idFinanciamento);
    }

    public static function ObterArraysDocumentosPorIdFinanciamento($idFinanciamento)
    {
        return FinanciamentoDAO::ObterArraysDocumentosPorIdFinanciamento($idFinanciamento);
    }

    public function CadastrarInteracaoFinanciamentoAction()
    {
        $insertedId = "";
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            if (!(isset($_POST['id_passo_atual']) && isset($_POST['id_proximo_passo']) && isset($_POST['id_status']))) {
                die("Erro ao cadastrar interação. Preencha todos os campos.");
            } else {

                $statusFinanciamento = new StatusInteracaoModel();
                $statusFinanciamento->setIdFinanciamento($_POST['id_financiamento']);
                $statusFinanciamento->setIdInteracaoAtual($_POST['id_passo_atual']);
                $statusFinanciamento->setIdProximaInteracao($_POST['id_proximo_passo']);
                $statusFinanciamento->setIdStatusInteracao($_POST['id_status']);
                $statusFinanciamento->setIdUsuarioCadastroInteracao($_SESSION['id_usuario']);
                $insertedId = self::CadastrarInteracaoFinanciamentoEObterseuId($statusFinanciamento);

            }

        }
        if ($insertedId != 0) {
            echo "CadInteracaoSucesso";
        } else {
            echo "CadInteracaoErro";
        }
    }

    public static function CadastrarInteracaoFinanciamentoEObterseuId(StatusInteracaoModel $statusFinanciamento)
    {
        return FinanciamentoDAO::CadastrarInteracaoFinanciamentoEObterseuId($statusFinanciamento);
    }

    public function CadastrarOcorrenciaFinanciamentoAction()
    {

        $insertedId = "";
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {


            if (isset($_POST['descricao_ocorrencia']) && $_POST['descricao_ocorrencia'] == '') {
                die("Erro ao cadastrar ocorrência. Preencha todos os campos.");
            } else {
                $ocorrenciaFinanciamento = new OcorrenciasFinanciamentoModel();
                $ocorrenciaFinanciamento->setIdFinanciamento($_POST['id_financiamento']);
                $ocorrenciaFinanciamento->setDescricao($_POST['descricao_ocorrencia']);

                $ocorrenciaFinanciamento->setIdUsuarioCadastroOcorrencia($_SESSION['id_usuario']);
                $insertedId = self::CadastrarOcorrenciaFinanciamentoEObterSeuId($ocorrenciaFinanciamento);
            }

        }

        if ($insertedId != 0) {
            echo "CadOcorrenciaSucesso";
        } else {
            echo "CadOcorrenciaErro";
        }
    }


    public static function CadastrarOcorrenciaFinanciamentoEObterSeuId(OcorrenciasFinanciamentoModel $ocorrenciaFinanciamento)
    {
        return FinanciamentoDAO::CadastrarOcorrenciaFinanciamentoEObterSeuId($ocorrenciaFinanciamento);
    }

    public function OcorrenciasViewAction()
    {
        $cadastrarFinancView = new View();
        $arrParams['ocorrencias'] = self::ObterArraysOcorrenciasPorIdFinanciamento($_POST['conteudoDoCampo']);
        $arrParams['id_financiamento'] = $_POST['conteudoDoCampo'];
        $cadastrarFinancView->setParams($arrParams);
        $cadastrarFinancView->setView("../System/View/ocorrencias_financiamento.php");
        $cadastrarFinancView->MostraConteudo();
    }

    public static function ObterArraysOcorrenciasPorIdFinanciamento($idFinanciamento)
    {
        return FinanciamentoDAO::ObterArraysOcorrenciasPorIdFinanciamento($idFinanciamento);
    }

    public function CadastrarFinanciamentoAction()
    {
        $insertedId = "";
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            $financiamento = new FinanciamentoModel();

            if (!(isset($_POST['id_instituicao']) && isset($_POST['valor_solicitado']) && isset($_POST['id_imovel']) && isset($_POST['participantes'][0]['id'])) || !$_POST['participantes'][0]['id']) {
                die("Erro ao cadastrar Financiamento. Preencha todos os campos.");
            } else {
                $instituicaoBancaria = new InstituicaoBancariaModel();
                $instituicaoBancaria->setIdBanco($_POST['id_instituicao']);
                $financiamento->setBanco($instituicaoBancaria);
                $financiamento->setValorSolicitado($_POST['valor_solicitado']);
                $imovelPretendido = new ImovelParticipanteModel();
                $imovelPretendido->setId($_POST['id_imovel']);
                $financiamento->setImovel($imovelPretendido);
            }


            //participantes
            if (isset($_POST['participantes'])) {
                $arrParticipantesPost = $_POST['participantes'];
                $arrParticipantes = Array();
                foreach ($arrParticipantesPost as $participantePost) {
                    if ($participantePost['id'] == '') {
                        continue;
                    }
                    if ($participantePost['id_tipo_participante'] == '') {
                        die("Selecione o tipo do Paticipante.");
                    }
                    $participante = new ParticipanteModel();
                    $participante->setId($participantePost['id']);
                    $participante->setIdTipoParticipante($participantePost['id_tipo_participante']);
                    $arrParticipantes[] = $participante;
                }
                $financiamento->setArrayParticipantes($arrParticipantes);
            }
            //documentos
            if (isset($_POST['documentos']) and isset($_FILES['documentos'])) {
                $arrDocumentosPost = $_POST['documentos'];
                $arrDocumentos = Array();
                foreach ($arrDocumentosPost as $key => $documentoPost) {
                    $documentacao = new DocumentacaoFinanciamentoModel();
                    $documentacao->setDescricaoTipoDocumento("Escritura");
                    $documentacao->setNome($documentoPost['titulo_documento']);
                    //Guardo o nome do arquivo, para futuras consultas
                    $documentacao->setNomeArquivo($_FILES['documentos']['name'][$key]['file']);
                    $extensaoArquivo = pathinfo($_FILES['documentos']['name'][$key]['file'], PATHINFO_EXTENSION);
                    //Mas gravo em disco um nome randomico para que não haja sobrescrita de arquivos
                    $documentacao->setNomeUnicoDoArquivo(md5(uniqid(rand(), true)) . "." . $extensaoArquivo);
                    $documentacao->setDescricaoTipoDocumento("RG");
                    $arrDocumentos[] = $documentacao;

                }
                $financiamento->setArrayDocumentos($arrDocumentos);
            }


            $usuarioCorrespondente = new UsuarioModel();
            $usuarioCorrespondente->setId($_SESSION['id_usuario']);
            $financiamento->setUsuarioCorrespondente($usuarioCorrespondente);

            $statusFinanciamento = new StatusInteracaoModel();
            $statusFinanciamento->setIdUsuarioCadastroInteracao($_SESSION['id_usuario']);
            $idInteracaoFinanciamentoAtual = FinanciamentoDAO::ObterIdDescricaoInteracaoPorDescricao("Financiamento Cadastrado");

            $statusFinanciamento->setIdInteracaoAtual($idInteracaoFinanciamentoAtual);

            $idInteracaoFinanciamentoProximo = FinanciamentoDAO::ObterIdDescricaoInteracaoPorDescricao("Enviar Documentos ao Banco");

            $statusFinanciamento->setIdProximaInteracao($idInteracaoFinanciamentoProximo);

            $idStatusInteracao = FinanciamentoDAO::ObterIdStatusFinanciamentoPorDescricao("Cadastrado");

            $statusFinanciamento->setIdStatusInteracao($idStatusInteracao);
            $financiamento->setStatusFinanciamento($statusFinanciamento);
            $insertedId = self::CadastrarFinanciamentoEObterSeuID($financiamento);
        }

        if ($insertedId != 0 and isset($_POST['documentos']) and isset($_FILES['documentos'])) {
            //chmod("../public_html/", 0777);
            if (!is_dir("../public_html/documentacoes/financiamentos/" . $insertedId)) {
                mkdir("../public_html/documentacoes/financiamentos/" . $insertedId);
            }
            $arrDocumentosPost = $_POST['documentos'];

            if (!empty($arrDocumentosPost)) {
                //Pega o array de documentos previamente inseridos no objeto $financiamento, pois será utilizado o Path do arquivo que é um nome randomico
                foreach ($financiamento->getArrayDocumentos() as $key => $documentacao) {
                    $tmpFile = $_FILES['documentos']['tmp_name'][$key]['file'];
                    if (!move_uploaded_file($tmpFile, "../public_html/documentacoes/financiamentos/" . $insertedId . "/" . $documentacao->getNomeUnicoDoArquivo())) {
                        die("Erro ao salvar arquivo");
                    }
                }
            }
        }

        if ($insertedId != 0) {
            echo "CadFinancSucesso";
        } else {
            echo "ErroCadFincanc";
        }
    }

    public static function CadastrarFinanciamentoEObterSeuID(FinanciamentoModel $financiamento)
    {
        return FinanciamentoDAO::CadastrarFinanciamentoEObterSeuID($financiamento);
    }

    public function PesquisarFinanciamentoAction()
    {

        $financiamento = new FinanciamentoModel();
        if (isset($_POST['id_instituicao'])) {
            $instituicaoBancaria = new InstituicaoBancariaModel();
            $instituicaoBancaria->setIdBanco($_POST['id_instituicao']);
            $financiamento->setBanco($instituicaoBancaria);

        }

        if (isset($_POST['correspondente'])) {
            $correspondente = new EmpresaModel();
            $correspondente->setNomeFantasia($_POST['correspondente']);
            $financiamento->setEmpresaCorrespondente($correspondente);
        }

        if (isset($_POST['participante'])) {
            $arrParticipantes = Array();
            $participante = new ParticipanteModel();
            $participante->setNome($_POST['participante']);
            $arrParticipantes[] = $participante;
            $financiamento->setArrayParticipantes($arrParticipantes);
        }

        if (isset($_POST['id_situacao'])) {
            $financiamento->setIdStatusFinanciamento($_POST['id_situacao']);
        }
        $arrFinanciamentos = self::ObterArrayFinanciamentosPorFiltro($financiamento);
        echo json_encode($arrFinanciamentos);
    }

    public static function ObterArrayFinanciamentosPorFiltro(FinanciamentoModel $financiamento)
    {
        return FinanciamentoDAO::ObterArrayFinanciamentosPorFiltro($financiamento);
    }

    private static function DeletarFinanciamentoPorID($idFinanciamento)
    {
        return FinanciamentoDAO::ExcluirFinanciamentoPorSeuId($idFinanciamento);
    }

    public function DeletaFinanciamentoAction()
    {
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            $idFinanciamento = ($_POST['id_financiamento']);

            if (self::DeletarFinanciamentoPorID($idFinanciamento))
                die('FinancDeleted');
        }
    }

}

?>
