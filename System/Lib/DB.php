<?php

/**
 * Document : DBConnectLib.php
 * Created on : 03/06/2013, 12:14
 * Author : Helio Bentes
 * Description: Arquivo de COnexao com o banco de dados
 */

namespace Lib {
    class DB
    {

        public static $dbCon = null;

        /**
         * DB constructor.
         */
        public function __construct()
        {
            self::getInstance();
        }

        static function getInstance()
        {

            if (self::$dbCon == null) {
                $dbtype = 'mysql';
                $username = 'coban_cobanusr';
                $password = 'l@mb0rgh1n1v3n3n0';
                $hostname = '127.0.0.1';
                $dbName = 'db_name';

                $dsn = $dbtype . ":host=" . $hostname . ";dbname=" . $dbName;

                try {
                    self::$dbCon = new PDO($dsn, $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT));//ERRMODE_WARNING
                } catch (PDOException $e) {
                    echo "Error!: " . $e->getMessage();
                    die();
                }
            }
        }
    }
}