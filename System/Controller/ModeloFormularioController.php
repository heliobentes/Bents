<?php

class ModeloFormularioController
{

    public static function ObterArraysModelosFormulariosPorFiltro($modeloFormulario)
    {
        return ModelosFormulariosDAO::ObterArraysModelosFormulariosPorFiltro($modeloFormulario);
    }

    public function ImprimirModeloFormularioViewAction()
    {
        $cadastrarCorrespView = new View();
        $cadastrarCorrespView->setView("../System/View/imprimir_modelos_formularios.php");
        $arrParams['bancos'] = FormularioDAO::ObterBancosTrabalhadosPorCorrespondentes();
        $arrParams['categoria_modelo_documento'] = FormularioDAO::ObterCategoriasModeloDocumentos();
        $cadastrarCorrespView->setParams($arrParams);
        $cadastrarCorrespView->MostraConteudo();
    }

    public function CadastrarModeloFormularioViewAction()
    {
        $cadastrarCorrespView = new View();
        $cadastrarCorrespView->setView("../System/View/cadastrar_modelos_formularios.php");

        $arrParams['bancos'] = FormularioDAO::ObterBancosTrabalhadosPorCorrespondentes();
        $arrParams['categoria_modelo_documento'] = FormularioDAO::ObterCategoriasModeloDocumentos();

        $cadastrarCorrespView->setParams($arrParams);
        $cadastrarCorrespView->MostraConteudo();
    }

    public function PesquisarModelosFormulariosAction()
    {
        $modeloFormulario = new ModeloFormularioModel();
        $modeloFormulario->setNomeFormulario($_POST['titulo_documento']);
        $instituicao = new InstituicaoBancariaModel();
        if (isset($_POST['id_instituicao'])) {
            $instituicao->setIdBanco($_POST['id_instituicao']);
            $modeloFormulario->setBanco($instituicao);
        }
        if (isset($_POST['titulo_documento'])) {
            $modeloFormulario->setNomeArquivo($_POST['titulo_documento']);
        }

        if (isset($_POST['id_categoria_documento'])) {
            $modeloFormulario->setIdCategoriaDocumento($_POST['id_categoria_documento']);
        }

        $arrModeloFormulario = self::ObterArraysModelosFormulariosPorFiltro($modeloFormulario);

        echo json_encode($arrModeloFormulario);
        //echo '{ "message": "Hello" }';
    }


    public function CadastrarModeloFormularioAction()
    {
        $insertedId = '';
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            if (isset($_POST['modelo_documento']) and isset($_FILES['modelo_documento'])) {
                $arrDocumentosPost = $_POST['modelo_documento'];
                $arrDocumentos = Array();
                $instituicaoBancaria = new InstituicaoBancariaModel();
                $usuarioCadastro = new UsuarioModel();
                $usuarioCadastro->setId($_SESSION['id_usuario']);
                foreach ($arrDocumentosPost as $key => $documentoPost) {
                    if ($documentoPost['titulo_documento'] != '' && $documentoPost['id_instituicao'] != '' && $documentoPost['id_categoria_documento'] != '' && isset($_FILES['modelo_documento']['name'][$key]['file'])) {
                        $documentacao = new ModeloFormularioModel();
                        $instituicaoBancaria->setIdBanco($documentoPost['id_instituicao']);
                        $documentacao->setBanco($instituicaoBancaria);
                        $documentacao->setNomeFormulario($documentoPost['titulo_documento']);
                        $documentacao->setNomeArquivo($_FILES['modelo_documento']['name'][$key]['file']);
                        $documentacao->setIdCategoriaDocumento($documentoPost['id_categoria_documento']);
                        $documentacao->setUsuarioCadastro($usuarioCadastro);

                        $extensaoArquivo = pathinfo($_FILES['modelo_documento']['name'][$key]['file'], PATHINFO_EXTENSION);
                        $documentacao->setNomeUnicoDoArquivo(md5(uniqid(rand(), true)) . "." . $extensaoArquivo);
                        $tmpFile = $_FILES['modelo_documento']['tmp_name'][$key]['file'];
                        if (move_uploaded_file($tmpFile, "../public_html/formularios/" . $documentacao->getNomeUnicoDoArquivo())) {
                            $arrDocumentos[] = $documentacao;
                        }
                    }
                }
                $result = ModelosFormulariosDAO::CadastrarModeloFormulario($arrDocumentos);
            }

        }

        if ($result == MensagensSistemaModel::MENSAGEM_SUCESSO) {
            echo "CadModDocSucesso";
        } else {
            echo "CadModDocErro";
        }
    }
}

?>
