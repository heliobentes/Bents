<?php

namespace Framework\DAO {

    use Framework\Lib\DB;

    class Home extends DB
    {
        function __construct()
        {
            parent::__construct();
        }

        public static function ObterAjuda($controllerAjuda, $actionAjuda)
        {

            $sql = "SELECT html
                         FROM
                         ajuda
                         WHERE
                         controller = :controller
                         AND action = :action
                         LIMIT 0,1";

            $stmt = self::$dbCon->prepare($sql);

            $stmt->bindValue(':controller', $controllerAjuda);
            $stmt->bindValue(':action', $actionAjuda);

            try {
                $ajudaEncontrada = "";
                $stmt->execute();
                $row = $stmt->fetch();
                $ajudaEncontrada = $row['html'];

            } catch (Exception $e) {

                echo $e->getMessage();
            }

            return $ajudaEncontrada;
        }


    }
}