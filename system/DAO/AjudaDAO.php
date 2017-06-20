<?php


class AjudaDAO
{

    private static $dbConn = null;

    function __construct()
    {
        self::initializeConnection();
    }

    private static function initializeConnection()
    {
        if (is_null(self::$dbConn)) {
            self::$dbConn = DatabasePDO::getInstance();
        }
    }

    private static function getConnection()
    {
        self::initializeConnection();
        return self::$dbConn;
    }

    public static function ObterAjuda($controllerAjuda, $actionAjuda)
    {

        $pdo = self::getConnection();

        $sql = "SELECT html
         FROM
         ajuda
         WHERE
         controller = :controller
         AND action = :action
         LIMIT 0,1";

        $stmt = $pdo->prepare($sql);

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