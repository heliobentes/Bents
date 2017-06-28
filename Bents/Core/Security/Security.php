<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/23/17
 * Time: 8:29 PM
 */

namespace Bents\Core\Security {


    use Bents\Core\Config;
    use Bents\Core\Controller;
    use Bents\Core\DAO\UserDAO;

    class Security
    {
        /**
         * Check if user is logged in
         * @var string $controller
         * @var string|null $action
         */
        public static function Protect($controller, $action = null)
        {
            $protect = false;
            if (self::IsProtectedController($controller)) {
                $protect = true;
            } else {
                if ($action != null and $action != '') {
                    if (self::IsProtectedAction($controller, $action)) {
                        $protect = true;
                    }
                }
            }

            if ($protect) {
                if (!(isset($_SESSION['token']) and $_SESSION['token'] != null)) {

                    //Came from Ajax
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
         * @var $controller string
         * @return bool
         */
        public static function IsProtectedController($controller): bool
        {
            //return !in_array($controller, Config::Security()->GetUnprotectedControllers());
            $class = 'Bents\\App\\Controller\\' . $controller . 'Controller';


            $reflection = new \ReflectionClass($class);
            if (preg_match("/@authorize/", $reflection->getDocComment())) {
                return true;
            } else {
                return false;
            }


        }

        /**
         * @var $controller string
         * @var string $action
         * @return bool
         */
        public static function IsProtectedAction($controller, $action): bool
        {
            //return !in_array($controller, Config::Security()->GetUnprotectedControllers());
            $class = 'Bents\\App\\Controller\\' . $controller . 'Controller';
            $methodReflection = new \ReflectionMethod($class, $action);
            if (preg_match("/@authorize/", $methodReflection->getDocComment())) {
                return true;
            } else {
                return false;

            }


        }

        /**
         * Redirect the call to another page
         * if $fromAjax is true, kill the execution to redirect via javascript
         *
         * @param bool $fromAjax
         */
        public static function GoToLogin($fromAjax = false)
        {
            if ($fromAjax) {
                die("userNotLogged");
            } else {
                Controller::RedirectToRequest(Config::Security()->GetLoginController(), Config::Security()->GetLoginAction());
            }
            exit;
        }

        /**
         * @param $action string
         * @param $controller string
         */
        public static function CheckUserPermission($controller, $action)
        {
            $hasPermission = false;

            if (Config::Security()->UseIndividualPermissions()) {

                $userDAO = new UserDAO();

                $permissions = $userDAO->GetUserPermissions($_SESSION['login']);

                foreach ($permissions as $permission) {
                    if ($permission->getController() == $controller and $permission->getAction() == $action) {
                        $hasPermission = true;
                        break;
                    }
                }

            }

            if (Config::Security()->UseRoles()) {
                $userDAO = new UserDAO();

                $role = $userDAO->GetUserRole($_SESSION['login']);

                //return !in_array($controller, Config::Security()->GetUnprotectedControllers());
                $class = 'Bents\\App\\Controller\\' . $controller . 'Controller';
                $methodReflection = new \ReflectionMethod($class, $action);
                if (preg_match("/@roles\(.*\'$role\'.*\)/", $methodReflection->getDocComment())) {
                    $hasPermission = true;
                }
            }

            if (!$hasPermission) {
                header("HTTP/1.1 401 Unauthorized");

                include Config::SystemBehavior()->getErrorPage(401);
                exit;
            }
        }

    }
}
