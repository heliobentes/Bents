<?php

namespace Bents\Core {

    use Bents\Core\Security\Security;
    use Bents\Core\StartUp\StartUp;

    class Controller
    {
        /**
         * List Actions that will bypass login check
         * @var array
         */
        protected $unprotectedActions = array();

        public static function RedirectToAction($controller, $action)
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
                http_response_code(404);
                die();
            }

            //Checking if there is such method in the Controller

            if (method_exists($o_class, $action)) {

                //Protect the Action
                if (Security::IsProtectedController($controller) and $o_class->IsProtectedAction($action)) {
                    Security::Protect();
                }

                $o_class->$action();
            } else {
                http_response_code(404);
                die();
            }
        }

        /**
         * @var $action string
         * @return bool
         */
        public function IsProtectedAction($action): bool
        {
            return !in_array($action, $this->unprotectedActions);
        }

        /**
         * @param mixed $model
         * @param string $viewName
         */
        public function RenderView($model = null, $viewName = null)
        {
            $view = new View();
            $view->SetView($viewName);

            echo $view->Render($model);

            //closing the connection
            DAO::$dbCon == null;
        }

    }

}