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
        public static $dbCon = null;

        /**
         * DB constructor.
         */
        public function __construct()
        {
            $this->getInstance();
        }

        function getInstance()
        {

            if (self::$dbCon == null) {

                $dsn = Config::$dbType . ":host=" . Config::$hostName . ";dbname=" . Config::$dbName;

                try {
                    self::$dbCon = new PDO($dsn, Config::$userName, Config::$password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT));//ERRMODE_WARNING
                } catch (\Exception $e) {
                    Log::SaveLog($e);
                    http_response_code(500);
                }
            }
        }

    }
}