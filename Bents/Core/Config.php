<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/21/17
 * Time: 6:13 PM
 */

namespace Bents\Core\Configuration {


    use Bents\Application;

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

        /**
         * @return Globalization
         */
        public static function globalization(): Globalization
        {
            return new Globalization();
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
            $json = file_get_contents(Application::$appPath . 'config.json');
            $obj = json_decode($json);
            $this->sanitizeHTML = $obj->SystemBehavior->sanitizeHTML;
            $this->loginController = $obj->SystemBehavior->loginController;
            $this->loginAction = $obj->SystemBehavior->loginAction;
            $this->unprotectedControllers = $obj->SystemBehavior->unprotectedControllers;
        }

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
        protected $dbType;

        /**
         * DB user
         * @var string
         */
        protected $userName;

        /**
         * Password for DB user
         * @var string
         */
        protected $password;

        /**
         * IP or NameServer of the DB instance
         * @var string
         */
        protected $hostName;

        /**
         * The name of the database to connect
         * @var string
         */
        protected $dbName;

        /**
         * DataBase constructor.
         */
        public function __construct()
        {
            $json = file_get_contents(Application::$appPath . 'config.json');
            $obj = json_decode($json);
            $this->dbName = $obj->DataBase->dbName;
            $this->dbType = $obj->DataBase->dbType;
            $this->password = $obj->DataBase->password;
            $this->userName = $obj->DataBase->userName;
            $this->hostName = $obj->DataBase->hostName;
        }

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
        protected $debug;

        /**
         * enable or disable log. If it's enabled the system will save a file log.txt at Bents/Core/Logs
         * @var bool
         */
        protected $saveLo;

        /**
         * Report or do not report error
         * Set it to false for production environment
         * @var bool
         */
        protected $showError;

        /**
         * Debug constructor.
         */
        public function __construct()
        {
            $json = file_get_contents(Application::$appPath . 'config.json');
            $obj = json_decode($json);
            $this->debug = $obj->Debug->debug;
            $this->saveLog = $obj->Debug->saveLog;
            $this->showError = $obj->Debug->showError;
        }

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

    //====================
    //Globalization
    //====================
    class Globalization
    {
        /**
         * Set System Language
         * @var string
         */
        protected $lang;

        /**
         * Globalization constructor.
         */
        public function __construct()
        {
            $json = file_get_contents(Application::$appPath . 'config.json');
            $obj = json_decode($json);
            $this->lang = $obj->Globalization->lang;
        }

        /**
         * @return string
         */
        public function getLang(): string
        {
            return $this->lang;
        }


    }
}