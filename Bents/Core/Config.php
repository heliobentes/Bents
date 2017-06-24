<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/21/17
 * Time: 6:13 PM
 */

namespace Bents\Core {


    class Config
    {
        /**
         * @return Debug
         */
        public static function debug(): Debug
        {
            return new Debug();
        }

        /**
         * @return SystemBehavior
         */
        public static function systemBehavior(): SystemBehavior
        {
            return new SystemBehavior();
        }

        /**
         * @return DataBase
         */
        public static function dataBase(): DataBase
        {
            return new DataBase();
        }

    }

    //====================
    //System behavior
    //====================
    class SystemBehavior
    {

        /**
         * Choose if you want to remove white spaces, line breaks, comments etc from HTML pages
         * @var bool
         */
        private $sanitizeHTML = true;

        /**
         * Define what Controller deals with login stuff like login form
         * @var string
         */
        private $loginController = 'Login';
        /**
         * Define what Action is to show the login form
         * @var string
         */
        private $loginAction = 'Login';

        /**
         * List Controllers that will bypass login check
         * @var array
         */
        private $unprotectedControllers = array('Home');

        /**
         * @return bool
         */
        public function isSanitizableHTML(): bool
        {
            return $this->sanitizeHTML;
        }

        /**
         * @var $action string
         * @return bool
         */
        public function isProtectedController($action): bool
        {
            return !in_array($action, $this->unprotectedControllers);
        }

        /**
         * @return string
         */
        public function getLoginController(): string
        {
            return $this->loginController;
        }

        /**
         * @return string
         */
        public function getLoginAction(): string
        {
            return $this->loginAction;
        }


    }

    //====================
    //DataBase
    //====================
    class DataBase
    {
        /**
         * Type of DataBase
         * @var string
         */
        private $dbType = 'mysql';

        /**
         * DB user
         * @var string
         */
        private $userName = 'root';

        /**
         * Password for DB user
         * @var string
         */
        private $password = '31635071';

        /**
         * IP or NameServer of the DB instance
         * @var string
         */
        private $hostName = '127.0.0.1';

        /**
         * The name of the database to connect
         * @var string
         */
        private $dbName = 'bents';

        /**
         * @return string
         */
        public function getDbType(): string
        {
            return $this->dbType;
        }

        /**
         * @return string
         */
        public function getUserName(): string
        {
            return $this->userName;
        }

        /**
         * @return string
         */
        public function getPassword(): string
        {
            return $this->password;
        }

        /**
         * @return string
         */
        public function getHostName(): string
        {
            return $this->hostName;
        }

        /**
         * @return string
         */
        public function getDbName(): string
        {
            return $this->dbName;
        }


    }

    //====================
    //Debugging
    //====================
    class Debug
    {
        /**
         * Enable debug function and disable all caches
         * Set it to false for production environment
         * @var bool
         */
        private $debug = false;

        /**
         * enable or disable log. If it's enabled the system will save a file log.txt at Bents/Core/Logs
         * @var bool
         */
        private $saveLog = true;

        /**
         * Report or do not report error
         * Set it to false for production environment
         * @var bool
         */
        private $showError = true;

        public function isDebugging(): bool
        {
            return $this->debug;
        }

        /**
         * @return bool
         */
        public function isLogEnabled(): bool
        {
            return $this->saveLog;
        }

        /**
         * @return bool
         */
        public function isErrorEnabled(): bool
        {
            return $this->showError;
        }

    }
}