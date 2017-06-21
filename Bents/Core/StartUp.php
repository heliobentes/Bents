<?php

/**
 * Document : StartUp.php
 * Created on : 10/05/2013, 17:39
 * Author : Helio Bentes
 * Description: Classe geral do gsampi
 */

namespace Bents\Core {

    class StartUp
    {
        /**
         * Caminho padrao do sistema
         * @var string
         */
        public static $path;

        /**
         * Usada para guardar p nome da classe de controle
         * (Controller) a ser executada
         * @var string
         */
        public static $controller;

        /**
         * Usada para quardar o nome do metodo da
         * clase de controle (Controller) que deverá ser executada
         * @var string
         */
        public static $action;

        /**
         * Instancia classe referente ao Controlador (Controller) e executa
         * método referente e  acao (Action)
         * @throws Exception
         */


        public function __construct()
        {
            self::$path = str_replace('Core', 'App', __DIR__);

            $this->LoadRoute();

            if (self::$controller != 'Home') {
                self::VerificaStatusLogado();
            }


            //verificando se a classe existe
            $class = 'Bents\\App\\Controller\\' . self::$controller . 'Controller';

            if (class_exists($class)) {
                $o_class = new $class;
            } else {
                header("Location: ?sair");
            }

            //verificando se o metodo existe
            $method = self::$action;
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
        private static function LoadRoute()
        {
            /**
             * Se o controller nao for passado
             * assume-se como padrão o controler de login
             */
            self::$controller = $_REQUEST['controller']??'Home';
            /**
             * Se a action nao for passada
             * assume-se como padrão a action de login
             */
            self::$action = $_REQUEST['action']??'Index';
        }

        /**
         * verifica se o usuário está logado
         */
        private static function VerificaStatusLogado()
        {
            if (!(isset($_SESSION['token']) and $_SESSION['token'] != null)) {
                if (self::$action != 'Login' and self::$action != 'FazerLogin') {
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
                $view = new View("Login", array('msg' => 'Digite seu login e senha!'));
                $view->MostraConteudo();
                die();
            }
        }


    }

}