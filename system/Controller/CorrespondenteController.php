<?php

class CorrespondenteController
{

    public function CadastrarCorrespondenteViewAction()
    {
        $cadastrarCorrespView = new ViewLib();
        if (isset($_POST['conteudoDoCampo'])) {
            $correspondente = new EmpresaModel();
            $correspondente->setId($_POST['conteudoDoCampo']);
            $arrCorrespondentes = CorrespondenteController::ObterArrayEmpresasCorrespondentesPorFiltro($correspondente);
            $arrParams['correspondente'] = $arrCorrespondentes[0];

        }
        $arrParams['ufs'] = FormularioDAO::ObterUfsBrasil();
        $cadastrarCorrespView->setParams($arrParams);
        $cadastrarCorrespView->setView("../system/View/cadastrar_correspondente.php");
        $cadastrarCorrespView->MostraConteudo();
    }

    public function PesquisarCorrespondenteViewAction()
    {
        $cadastrarCorrespView = new ViewLib();
        $cadastrarCorrespView->setView("../system/View/pesquisar_correspondente.php");
        $cadastrarCorrespView->MostraConteudo();
    }

    public static function CadastrarCorrespondenteEObterSeuID(EmpresaModel $correspondente)
    {
        return EmpresaDAO::CadastrarEmpresaEObterSeuId($correspondente);
    }


    public static function EditarCorrespondente(EmpresaModel $correspondente)
    {
        return EmpresaDAO::EditarEmpresaPorIdEmpresa($correspondente);
    }

    public static function ExcluirCorrespondenteAction()
    {
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            $idCorrespondente = $_POST['id_correspondente'];
            //return EmpresaDAO::ExcluirCorrespondentePorId($idCorrespondente);
            echo "CorrespDeleted";
        }
    }

    public static function ObterArrayEmpresasCorrespondentesPorFiltro(EmpresaModel $correspondente)
    {
        return EmpresaDAO::ObterArrayEmpresasCorrespondentesPorFiltro($correspondente);
    }

    public function CadastrarCorrespondenteAction()
    {
        $insertedId = "";

        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            $correspondente = new EmpresaModel();

            //Requests Posts dos dados do participante
            if (isset($_POST['razao_social']))
                $correspondente->setRazaoSocial($_POST['razao_social']);
            if (isset($_POST['nome_fantasia']))
                $correspondente->setNomeFantasia($_POST['nome_fantasia']);
            if (isset($_POST['cnpj']))
                $correspondente->setCNPJ($_POST['cnpj']);
            if (isset($_POST['inscricao_estadual']))
                $correspondente->setInscricaoEstadual($_POST['inscricao_estadual']);
            if (isset($_POST['tel1']))
                $correspondente->setTelefoneContato1($_POST['tel1']);
            if (isset($_POST['tel2']))
                $correspondente->setTelefoneContato2($_POST['tel2']);
            //if (isset($_POST['tel3']))
//                $correspondente->setTel3($_POST['tel3']);
//            if (isset($_POST['tel4']))
//                $correspondente->setTel4($_POST['tel4']);
            if (isset($_POST['email1']))
                $correspondente->setEmail($_POST['email1']);
            //if (isset($_POST['email2']))
//                $correspondente->setEmail2($_POST['email2']);
            if (isset($_POST['site']))
                $correspondente->setSite($_POST['site']);
            //endereco
            $endereco = new EnderecoModel();
            if (isset($_POST['cep']))
                $endereco->setCep($_POST['cep']);
            if (isset($_POST['logradouro']))
                $endereco->setLogradouro($_POST['logradouro']);
            if (isset($_POST['numero']))
                $endereco->setNumero($_POST['numero']);
            if (isset($_POST['complemento']))
                $endereco->setComplemento($_POST['complemento']);
            if (isset($_POST['bairro']))
                $endereco->setBairro($_POST['bairro']);
            if (isset($_POST['cidade']))
                $endereco->setCidade($_POST['cidade']);
            if (isset($_POST['uf']))
                $endereco->setUf($_POST['uf']);

            $correspondente->setEndereco($endereco);
            $correspondente->setTipoEmpresa(1);


            $insertedId = self::CadastrarCorrespondenteEObterSeuID($correspondente);

        }

        if ($insertedId != 0) {
            echo "CadCorrespSucesso";
        } else {
            echo "CadCorrespErro";
        }
    }

    public function AtualizarCorrespondenteAction()
    {
        $insertedId = "";

        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            $correspondente = new EmpresaModel();
            $correspondente->setId($_POST['id_correspondente']);

            //Requests Posts dos dados do participante
            if (isset($_POST['razao_social']))
                $correspondente->setRazaoSocial($_POST['razao_social']);
            if (isset($_POST['nome_fantasia']))
                $correspondente->setNomeFantasia($_POST['nome_fantasia']);
            if (isset($_POST['cnpj']))
                $correspondente->setCNPJ($_POST['cnpj']);
            if (isset($_POST['inscricao_estadual']))
                $correspondente->setInscricaoEstadual($_POST['inscricao_estadual']);
            if (isset($_POST['tel1']))
                $correspondente->setTelefoneContato1($_POST['tel1']);
            if (isset($_POST['tel2']))
                $correspondente->setTelefoneContato2($_POST['tel2']);
            //if (isset($_POST['tel3']))
//                $correspondente->setTel3($_POST['tel3']);
//            if (isset($_POST['tel4']))
//                $correspondente->setTel4($_POST['tel4']);
            if (isset($_POST['email1']))
                $correspondente->setEmail($_POST['email1']);
            //if (isset($_POST['email2']))
//                $correspondente->setEmail2($_POST['email2']);
            if (isset($_POST['site']))
                $correspondente->setSite($_POST['site']);
            //endereco
            $endereco = new EnderecoModel();
            if (isset($_POST['cep']))
                $endereco->setCep($_POST['cep']);
            if (isset($_POST['logradouro']))
                $endereco->setLogradouro($_POST['logradouro']);
            if (isset($_POST['numero']))
                $endereco->setNumero($_POST['numero']);
            if (isset($_POST['complemento']))
                $endereco->setComplemento($_POST['complemento']);
            if (isset($_POST['bairro']))
                $endereco->setBairro($_POST['bairro']);
            if (isset($_POST['cidade']))
                $endereco->setCidade($_POST['cidade']);
            if (isset($_POST['uf']))
                $endereco->setUf($_POST['uf']);

            $correspondente->setEndereco($endereco);
            $correspondente->setTipoEmpresa(1);


            $insertedId = self::EditarCorrespondente($correspondente);

        }

        if ($insertedId != 0) {
            echo "CadCorrespSucesso";
        } else {
            echo "CadCorrespErro";
        }
    }


    public function PesquisarCorrespondenteAction()
    {
        $correspondente = new EmpresaModel();
        $arrCorrespondente = self::ObterArrayEmpresasCorrespondentesPorFiltro($correspondente);
        echo json_encode($arrCorrespondente);
    }

}

?>
