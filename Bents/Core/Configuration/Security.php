<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {


    use Bents\Core\Utils\Session;

    class Security
    {

        /**
         * @var bool
         */
        protected $useRoles;

        /**
         * @var bool
         */
        protected $useIndividualPermissions;

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
         * Fixed salt fos security
         * @var
         */
        protected $fixedSalt;
        /**
         * SystemBehavior constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->useRoles = $obj->Security->useRoles;
            $this->useIndividualPermissions = $obj->Security->useIndividualPermissions;
            $this->loginController = $obj->Security->loginController;
            $this->loginAction = $obj->Security->loginAction;
            $this->fixedSalt = $obj->Security->fixedSalt;
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

        /**
         * @return bool
         */
        public function UseRoles(): bool
        {
            return $this->useRoles;
        }

        /**
         * @return bool
         */
        public function UseIndividualPermissions(): bool
        {
            return $this->useIndividualPermissions;
        }

        /**
         * @return string
         */
        public function GetFixedSalt(): string
        {
            return $this->fixedSalt;
        }

    }
}