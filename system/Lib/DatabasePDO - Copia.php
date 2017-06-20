<?php

/**
 * Document : DBConnectLib.php
 * Created on : 03/06/2013, 12:14
 * Author : Helio Bentes
 * Description: Arquivo de COnexao com o banco de dados
 */
class DatabasePDO
{
    private static $_instance = array();

    static function getInstance($dbName = 'correspondente_bancario')
    {
        if (!array_key_exists($dbName, self::$_instance)) {
            $dbtype = 'mysql';
            $username = 'coban';
            $password = '31635071';
            $hostname = 'cobandb.cywqmbdbwhq4.us-west-2.rds.amazonaws.com';
            $dsn = $dbtype . ":host=" . $hostname . ";dbname=" . $dbName;
            try {
                self::$_instance[$dbName] = new PDO($dsn, $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));//ERRMODE_WARNING
            } catch (PDOException $e) {
                echo "Error!: " . $e->getMessage();
                die();
            }
        }
        return self::$_instance[$dbName];
    }
}
