<?php
//require_once 'Model/ModelUsuario.php';
//require_once 'Model/ModelEmpresa.php';
//require_once 'DAO/DAOUsuario.php';
//require_once 'Controller/EmpresaController.php';

class UsuarioController
{
    public static function CadastrarUsuarioEObterSeuID(UsuarioModel $usuario)
    {
        return UsuarioDAO::CadastrarUsuarioEObterSeuID($usuario);
    }

    public static function ObterArrayUsuariosPorFiltro(UsuarioModel $usuario)
    {
        return UsuarioDAO::ObterArrayUsuariosPorFiltro($usuario);
    }

    public static function ObterArrayTipoUsuario()
    {
        return UsuarioDAO::ObterArrayTipoUsuario();
    }

    public function EditarUsuarioPorIdUsuario(UsuarioModel $usuario)
    {
        return UsuarioDAO::EditarUsuarioPorIdUsuario($usuario);
    }

    public function DeletarUsuarioPorIdUsuario($idUsuario)
    {
        return UsuarioDAO::DeletarUsuarioPorIdUsuario($idUsuario);
    }

    public function CadastrarUsuarioViewAction()
    {
        $cadastrarUsuarioView = new View();
        $cadastrarUsuarioView->setView("../System/View/cadastrar_usuario.php");
        $arrParams['tipos_usuario'] = FormularioDAO::ObterTiposUsuario();
        $arrParams['funcoes_sistema'] = UsuarioDAO::ObterTodasFuncoesDoSistema();

        if (isset($_POST['conteudoDoCampo'])) {
            $usuario = new UsuarioModel();
            $usuario->setId($_POST['conteudoDoCampo']);
            $arrUsuarios = UsuarioDAO::ObterArrayUsuariosPorFiltro($usuario);
            $arrParams['usuario'] = $arrUsuarios[0];
        }
        $cadastrarUsuarioView->setParams($arrParams);
        $cadastrarUsuarioView->MostraConteudo();
    }

    public function AlterarSenhaViewAction()
    {
        $cadastrarUsuarioView = new View();
        $cadastrarUsuarioView->setView("../System/View/alterar_senha.php");
        $cadastrarUsuarioView->MostraConteudo();
    }

    public function PesquisarUsuarioViewAction()
    {
        $cadastrarUsuarioView = new View();
        $cadastrarUsuarioView->setView("../System/View/pesquisar_usuario.php");
        $arrParams['tipos_usuario'] = FormularioDAO::ObterTiposUsuario();
        $cadastrarUsuarioView->setParams($arrParams);
        $cadastrarUsuarioView->MostraConteudo();
    }

    public function CadastrarUsuarioAction()
    {
        $insertedId = "";
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            $usuario = new UsuarioModel();

            //Requests Posts dos dados do participante
            if (isset($_POST['nome']))
                $usuario->setNome($_POST['nome']);
            if (isset($_POST['login']))
                $usuario->setLogin($_POST['login']);

            if (isset($_POST['tipo_usuario']))
                $usuario->setIdTipoUsuario($_POST['tipo_usuario']);
            //criando a senha codificada
            $senha = '';
            if (isset($_POST['senha']))
                $senha = $_POST['senha'];
            $salt = PasswordUtils::GeraSalt();
            $usuario->setSalt($salt);

            $digest = PasswordUtils::CodificarSenha($senha, $salt);

            $usuario->setSenha($digest);

            if (isset($_POST['id_correspondente'])) {
                $correspondente = new EmpresaModel();
                $correspondente->setId($_POST['id_correspondente']);
                $usuario->setCorrespondente($correspondente);
            }

            $insertedId = self::CadastrarUsuarioEObterSeuID($usuario);
        }

        if ($insertedId != 0) {
            echo "CadUserSucesso";
        } else {
            echo "ErroCadUser";
        }
    }

    public function EditarUsuarioAction()
    {

        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            $usuario = new UsuarioModel();

            //Requests Posts dos dados do participante
            if (isset($_POST['id_usuario']))
                $usuario->setId($_POST['id_usuario']);

            if (isset($_POST['nome']))
                $usuario->setNome($_POST['nome']);

            if (isset($_POST['tipo_usuario']))
                $usuario->setIdTipoUsuario($_POST['tipo_usuario']);


            if (isset($_POST['id_correspondente'])) {
                $correspondente = new EmpresaModel();
                $correspondente->setId($_POST['id_correspondente']);
                $usuario->setCorrespondente($correspondente);
            }

            $insertedId = self::EditarUsuarioPorIdUsuario($usuario);
        }

        if ($insertedId != 0) {
            echo "EditUserSucesso";
        } else {
            echo "ErroEditUser";
        }
    }

    public function DeletaUsuarioAction()
    {
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            $usuario = new UsuarioModel();
            $usuario->setId($_POST['id_usuario']);
            if (UsuarioDAO::DeletaUsuario($usuario))
                die('UserDeleted');
        }
    }

    public function PesquisarUsuarioAction()
    {

        $usuario = new UsuarioModel();
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {
            if (isset($_POST['nome']))
                $usuario->setNome($_POST['nome']);
            if (isset($_POST['login']))
                $usuario->setLogin($_POST['login']);
            if (isset($_POST['id_tipo_usuario']))
                $usuario->setIdTipoUsuario($_POST['id_tipo_usuario']);
            //if(isset($_POST['correspondente']))
            //$usuario->setCorrespondente($_POST['correspondente']);
            $arrParticipantes = UsuarioDAO::ObterArrayUsuariosPorFiltro($usuario);
            echo json_encode($arrParticipantes);
        }

    }

    public function AlterarSenhaUsuarioAction()
    {
        $insertedId = false;
        if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

            //setando a nova senha codificada
            $senha = '';
            if (isset($_POST['senha']))
                $senha = $_POST['senha'];
            $salt = PasswordUtils::GeraSalt();
            $digest = PasswordUtils::CodificarSenha($senha, $salt);

            $usuario = new UsuarioModel();
            $usuario->setSenha($_POST['senha_atual']);
            $usuario->setSalt($salt);
            $usuario->setNovaSenha($digest);
            $usuario->setId($_SESSION['id_usuario']);

            if (PasswordUtils::VerificarSenhaAtual($usuario->getSenha())) {
                $insertedId = UsuarioDAO::AlterarSenhaPorIdUsuario($usuario);
            } else {
                die("Senha Atual não confere!");
            }
        }

        if ($insertedId) {
            echo "SenhaUserAlteradaSucesso";
        } else {
            echo "ErroSenhaUser";
        }
    }

    public static function ObterFuncoesPermitidasPorIdUsuario($idUsuario)
    {
        return UsuarioDAO::ObterFuncoesPermitidasPorIdUsuario($idUsuario);
    }

    public static function ObterModulosPermitidosPorIdUsuario($idUsuario)
    {
        return UsuarioDAO::ObterModulosPermitidosPorIdUsuario($idUsuario);
    }

    public static function UsuarioTemPermissaoAoModulo($idUsuario, $descricaoModulo)
    {
        return UsuarioDAO::UsuarioTemPermissaoAoModulo($idUsuario, $descricaoModulo);
    }

    public static function UsuarioTemPermissaoAFuncao($idUsuario, $descricaoModulo, $descricaoFuncao)
    {
        return UsuarioDAO::UsuarioTemPermissaoAFuncao($idUsuario, $descricaoModulo, $descricaoFuncao);
    }

}

?>
