<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {


    use Bents\Core\Utils\Session;

    class SystemBehavior
    {
        /**
         * Choose if you want to remove white spaces, line breaks, comments etc from HTML pages
         * @var bool
         */
        protected $sanitizeHTML;

        /**
         * Define what Controller deals with login stuff like login form
         * @var string
         */
        protected $loginController;
        /**
         * Define what Action is to show the login form
         * @var string
         */
        protected $loginAction;

        /**
         * List Controllers that will bypass login check
         * @var array
         */
        protected $unprotectedControllers;

        /**
         * SystemBehavior constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->sanitizeHTML = $obj->SystemBehavior->sanitizeHTML;
            $this->loginController = $obj->SystemBehavior->loginController;
            $this->loginAction = $obj->SystemBehavior->loginAction;
            $this->unprotectedControllers = $obj->SystemBehavior->unprotectedControllers;
        }

        /**
         * @return bool
         */
        public function IsHTMLSanitizable(): bool
        {
            return $this->sanitizeHTML;
        }

        /**
         * @return bool
         */
        public function GetUnprotectedControllers(): array
        {
            return $this->unprotectedControllers;
        }

        /**
         * @return string
         */
        public function GetLoginController(): string
        {
            return $this->loginController;
        }

        /**
         * @return string
         */
        public function GetLoginAction(): string
        {
            return $this->loginAction;
        }
    }
}