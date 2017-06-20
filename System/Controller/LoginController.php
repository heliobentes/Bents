<?php

namespace System\Controller {

    use System\Controller;

    class LoginController extends Controller
    {

        public function Login()
        {
            $this->RenderView();

        }

        public function FazerLoginAction()
        {

            if (isset($_POST['login']) && $_POST['login'] != '' && isset($_POST['senha']) && $_POST['senha'] != '') {

                $usuario = new UsuarioModel();

                $usuario->setLogin(htmlentities($_POST['login'], ENT_QUOTES));
                $usuario->setSenha(htmlentities($_POST['senha'], ENT_QUOTES));


                $usuarioEncontrado = UsuarioController::ObterArrayUsuariosPorFiltro($usuario);
//die(print_r($usuarioLogado));
                if (count($usuarioEncontrado) == 1) {
                    $usuarioEncontrado = $usuarioEncontrado[0];
                    //gerando o sha1
                    $senhaDoBanco = $usuarioEncontrado->getSenha();
                    $salt = $usuarioEncontrado->getSalt();
                    $saltFixo = '$6$f9Sp6p7ikww2$X5pxLlKDxiQhaakRrdIXOeRG09aOzLAlL9doHWGEIsaekoOVp8WAwnudlFhs9IUsTu0Z0zlBpVeHnT9XvXFd20';


                    $digest = sha1($_POST['senha'] . $salt . $saltFixo);

                    if ($senhaDoBanco == $digest) {
                        if (!isset($_SESSION['token'])) {
                            $_SESSION['token'] = sha1(uniqid(mt_rand(), TRUE));
                        }
                        $_SESSION['id_usuario'] = $usuarioEncontrado->getId();


                        SessionUtils::atualizarSessionDoUsuario($usuarioEncontrado->getId());

                        die ('Logando...');
                    } else {
                        die("Login e senha incorretos!");
                    }
                } else {
                    die('Usuário não encontrado!');
                }
            } else {
                die("Digite um login e uma senha!");
            }
        }

        /**
         * Sai do sistema
         */
        public function FazerLogoffAction()
        {
            $_SESSION['usuario'] = null;
            $_SESSION['token'] = null;
            $view = new View();
            $view->setView("../System/View/login.php");
            $view->MostraConteudo();
        }

    }
}