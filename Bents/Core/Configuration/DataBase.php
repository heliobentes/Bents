<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {

    use Bents\Core\Utils\Session;

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
            $obj = Session::GetConfigurationFromSession();
            $this->dbName = $obj->DataBase->dbName;
            $this->dbType = $obj->DataBase->dbType;
            $this->password = $obj->DataBase->password;
            $this->userName = $obj->DataBase->userName;
            $this->hostName = $obj->DataBase->hostName;
        }

        /**
         * @return string
         */
        public function GetDbType(): string
        {
            return $this->dbType;
        }

        /**
         * @return string
         */
        public function GetUserName(): string
        {
            return $this->userName;
        }

        /**
         * @return string
         */
        public function GetPassword(): string
        {
            return $this->password;
        }

        /**
         * @return string
         */
        public function GetHostName(): string
        {
            return $this->hostName;
        }

        /**
         * @return string
         */
        public function GetDbName(): string
        {
            return $this->dbName;
        }


    }
}