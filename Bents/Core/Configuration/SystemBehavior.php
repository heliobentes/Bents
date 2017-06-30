<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {


    use Bents\Application;
    use Bents\Core\Utils\Session;

    class SystemBehavior
    {
        /**
         * Choose if you want to remove white spaces, line breaks, comments etc from HTML pages
         * @var bool
         */
        protected $sanitizeHTML;

        protected $errorPages;

        /**
         * @var bool
         */
        protected $useMigration;

        /**
         * SystemBehavior constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->sanitizeHTML = $obj->SystemBehavior->sanitizeHTML;
            $this->errorPages = $obj->SystemBehavior->errorPages;
            $this->useMigration = $obj->SystemBehavior->useMigration;
        }

        /**
         * @return bool
         */
        public function IsHTMLSanitizable(): bool
        {
            return $this->sanitizeHTML;
        }

        /**
         * @param int $error
         * @return string
         */
        public function GetErrorPage($error): string
        {

            if (isset($this->errorPages->$error)) {
                return Application::$publicPath . 'error/' . $this->errorPages->$error;
            } else {
                return Application::$publicPath . 'error/default.html';
            }
        }

        /**
         * @return bool
         */
        public function UseMigration()
        {
            return $this->useMigration;
        }

    }
}