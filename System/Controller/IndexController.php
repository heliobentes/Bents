<?php
require_once 'Model/ModelUsuario.php';

class IndexController
{
    //private $usuario;

    function __construct()
    {
//            $this->usuario = new ModelUsuario();
//            $this->usuario->setLogin($_SESSION['loginUsuarioLogado']);
//            $this->usuario->setId($_SESSION['idUsuarioLogado']);
//            $this->usuario->setIdTipoUsuario($_SESSION['tipoUsuario']);
    }


    public function indexAction()
    {
        //redirecionando para a pagina de login
        header('Location: ?controller=Login&action=Login');
    }


}

?>