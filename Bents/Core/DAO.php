<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:39 PM
 */

namespace Bents\Core {

    use PDO as PDO;

    class  DAO
    {
        /**
         * @var PDO
         */
        public static $dbConn = null;

        /**
         * DB constructor.
         */
        public function __construct()
        {
            $this->getInstance();
        }

        function getInstance()
        {

            if (self::$dbConn == null) {

                $dsn = Config::DataBase()->GetDbType() . ":host=" . Config::DataBase()->GetHostName() . ";dbname=" . Config::DataBase()->GetDbName();

                try {
                    self::$dbConn = new PDO($dsn, Config::DataBase()->GetUserName(), Config::DataBase()->GetPassword(), array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT));//ERRMODE_WARNING
                } catch (\Exception $e) {
                    Log::SaveLog($e);
                    header($_SERVER['SERVER_PROTOCOL'] . '500 Internal Server Error', true, 500);
                    include Config::SystemBehavior()->GetErrorPage(500);
                    exit;
                }
            }
        }

    }
}