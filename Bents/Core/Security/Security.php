<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/23/17
 * Time: 8:29 PM
 */

namespace Bents\Core\Security {


    use Bents\Core\Config;
    use Bents\Core\View;

    class Security
    {
        /**
         * Check if user is logged in
         */
        public static function Protect()
        {
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
                View::RedirectToAction(Config::systemBehavior()->getLoginController(), Config::systemBehavior()->getLoginAction());
            }
        }
    }
}