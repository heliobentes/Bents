<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:39 PM
 */

namespace Bents\Core {

    use PDO as PDO;

    class  DAO extends DB
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

                $dsn = $this->dbtype . ":host=" . $this->hostname . ";dbname=" . $this->dbName;

                try {
                    self::$dbCon = new PDO($dsn, $this->username, $this->password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT));//ERRMODE_WARNING
                } catch (\Exception $e) {
                    Log::SaveLog($e);

                    //TODO: Redirect to an error page
                }
            }
        }

    }
}