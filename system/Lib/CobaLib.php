<?php

/**
 * Document : GsampiLib.php
 * Created on : 10/05/2013, 17:39
 * Author : Helio Bentes
 * Description: Classe geral do gsampi
 */
class CobaLib
{

    /**
     * Caminho padrao do sistema
     * @var string
     */
    public static $path = '../system/';

    /**
     * Usada para guardar p nome da classe de controle
     * (Controller) a ser executada
     * @var string
     */
    protected $controller;

    /**
     * Usada para quardar o nome do metodo da
     * clase de controle (Controller) que deverá ser executada
     * @var string
     */
    protected $action;

    /**
     * Instancia classe referente ao Controlador (Controller) e executa
     * método referente e  acao (Action)
     * @throws Exception
     */
    public function dispatch()
    {

        error_reporting(E_ALL);

        $this->loadRoute();
        $this->VerificaExecucaoTeste();
        if ($this->controller != 'Site') {
            $this->verificaStatusLogado();
        }

        //verificando se o arquivo de controle existe
        $controller_file = self::$path . 'Controller/' . $this->controller . 'Controller.php';

        if (file_exists($controller_file)) {

            require_once $controller_file;
        } else {
            throw new Exception('Arquivo ' . $controller_file . ' nao encontrado!');
        }

        //verificando se a classe existe
        $class = $this->controller . 'Controller';
        if (class_exists($class)) {
            $o_class = new $class;
        } else {

            header("Location: ?sair");
        }
        //verificando se o metodo existe
        $method = $this->action . 'Action';
        if (method_exists($o_class, $method)) {
            $o_class->$method();
        } else {
            header("Location: ?sair");
        }
    }

    /**
     * Verifica se os parametros de controlador (Controller) e acao (Action) foram
     * passados via parametros "Post" ou "Get" e os carrega tais dados
     * nos respectivos atributos da classe
     */
    private function loadRoute()
    {
        /**
         * Se o controller nao for passado
         * assume-se como padrão o controler de login
         */
        $this->controller = isset($_REQUEST['controller']) ? $_REQUEST['controller'] : 'Login';
        /**
         * Se a action nao for passada
         * assume-se como padrão a action de login
         */
        $this->action = isset($_REQUEST['action']) ? $_REQUEST['action'] : 'Login';
    }

    /**
     * verifica se o usuário está logado
     */
    private function verificaStatusLogado()
    {
        if (!(isset($_SESSION['token']) and $_SESSION['token'] != null)) {
            if ($this->action != 'Login' and $this->action != 'FazerLogin') {
                /**
                 * Veio de Ajax
                 */
                if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
                    $fromAjax = true;
                } else {
                    $fromAjax = false;
                }
                self::GoToLogin($fromAjax);
            }
        }
    }

    /**
     * Redireciona a chamada http para outra pagina
     * se $fromAjax for true, mata a execução para redirecionar via javascript
     *
     * @param bool $fromAjax
     */
    public static function GoToLogin($fromAjax = false)
    {
        if ($fromAjax) {
            die("userNotLogged");
        } else {
            $view = new ViewLib();
            $view->setView("../system/View/login.php");
            $view->setParams(array('msg' => 'Digite seu login e senha!'));
            $view->MostraConteudo();
            die();
        }
    }

    private function VerificaExecucaoTeste()
    {
        if (isset($_GET['teste'])) {
            $view = new ViewLib();
            $view->GeraView("teste");
            die();
        }
    }

}

