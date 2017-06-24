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

            //Protect the Controller
            if (Config::systemBehavior()->isProtectedController(self::$controller)) {
                Security::Protect();
            }


            //Checking if there is the Controller
            $class = 'Bents\\App\\Controller\\' . self::$controller . 'Controller';

            if (class_exists($class)) {
                $o_class = new $class;
            } else {
                http_response_code(404);
                die();
            }

            //Checking if there is such method in the Controller
            $method = self::$action;
            if (method_exists($o_class, $method)) {

                //Protect the Action
                if (Config::systemBehavior()->isProtectedController(self::$controller) and $o_class->isProtectedAction($method)) {
                    Security::Protect();
                }

                $o_class->$method();
            } else {
                http_response_code(404);
                die();
            }

        }

        /**
         * Check if the Controller and the Action were submitted like "domain.com/Controller/Action"
         * If the Controller is null or empty it will be set as "Home"
         * If the Action is null or empty it will be set as "Index"
         */
        private static function LoadRoute()
        {
            self::$controller = $_REQUEST['controller']??'Home';

            self::$action = ($_REQUEST['action'] == null || $_REQUEST['action'] == '') ? 'Index' : $_REQUEST['action'];
        }



    }

}