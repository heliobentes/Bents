<?php

/**
 * Document : StartUp.php
 * Created on : 10/05/2013, 17:39
 * Author : Helio Bentes
 * Description: Classe geral do gsampi
 */

namespace Bents\Core\StartUp {

    use Bents\Core\Configuration\Config;
    use Bents\Core\Security\Security;

    class StartUp
    {

        /**
         * The Controller that should be executed
         * @var string
         */
        public static $controller;

        /**
         * The Action/Method/Function from the Controller that should be executed
         * @var string
         */
        public static $action;

        /**
         * Instantiate the Controller class and execute the Action
         * Redirect to a 404 Error if there are no Controllers or Actions related
         */
        public function __construct()
        {
            $this->LoadRoute();

            self::InitRequest(self::$controller, self::$action);
        }

        /**
         * Check if the Controller and the Action were submitted like "domain.com/Controller/Action"
         * If the Controller is null or empty it will be set as "Home"
         * If the Action is null or empty it will be set as "Index"
         */
        private static function LoadRoute()
        {
            if (isset($_REQUEST['controller']) and $_REQUEST['controller'] != '') {
                self::$controller = filter_var($_REQUEST['controller']);
            } else {
                self::$controller = 'Home';
            }

            if (isset($_REQUEST['action']) and $_REQUEST['action'] != '') {
                self::$action = filter_var($_REQUEST['action']);
            } else {
                self::$action = "Index";
            }
        }

        /**
         * Instantiate a new Controller class and invoke the Action
         * @param $controller string
         * @param $action string
         */
        public static function InitRequest($controller, $action)
        {
            StartUp::$controller = $controller;
            StartUp::$action = $action;
            //Protect the Controller
            if (Security::IsProtectedController($controller)) {
                Security::Protect();
            }

            //Checking if there is the Controller
            $class = 'Bents\\App\\Controller\\' . $controller . 'Controller';

            if (class_exists($class)) {
                /**
                 * @var $o_class Controller
                 */
                $o_class = new $class;
            } else {
                header("HTTP/1.0 404 Not Found");
                exit;
            }

            //Checking if there is such method in the Controller
            if (method_exists($o_class, $action)) {

                //Protect the Action
                if (Security::IsProtectedController($controller) and $o_class->IsProtectedAction($action)) {
                    Security::Protect();
                }
                //check permissions
                Security::CheckUserPermission($controller, $action);

                $o_class->$action();
            } else {
                header("HTTP/1.0 404 Not Found");
                exit;
            }
        }

    }

}