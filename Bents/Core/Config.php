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
         * Enable debug function and disable all caches
         * Set it to false for production environment
         * @var bool
         */
        public static $debug = false;
        /**
         * enable or disable log. If it's enabled the system will save a file log.txt at Bents/Core/Logs
         * @var bool
         */
        public static $saveLog = true;

        /**
         * Report or do not report error
         * Set it to false for production environment
         * @var bool
         */
        public static $showError = true;

        //DataBase
        /**
         * Type of DataBase
         * @var string
         */
        public static $dbType = 'mysql';
        /**
         * DB user
         * @var string
         */
        public static $userName = 'root';
        /**
         * Password for DB user
         * @var string
         */
        public static $password = '31635071';
        /**
         * IP or NameServer of the DB instance
         * @var string
         */
        public static $hostName = '127.0.0.1';
        /**
         * The name of the database to connect
         * @var string
         */
        public static $dbName = 'bents';

    }
}