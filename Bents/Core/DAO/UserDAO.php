<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 2:44 PM
 */

namespace Bents\Core\DAO {


    use Bents\Core\DAO;
    use Bents\Core\Model\Role;

    class UserDAO extends DAO
    {
        /**
         * @param $login string
         * @return Role[]
         */
        public function GetUserRoles($login): array
        {
            $pdo = self::$dbConn;

            $sql = "SELECT R.controller, R.action 
                    FROM Role R
                    JOIN User U on R.idUser = U.idUser
                    WHERE U.login =:login";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':login', $login);

            $arrayRules = array();

            try {
                $stmt->execute();

                while ($row = $stmt->fetch()) {
                    $arrayRules[] = new Role($row);
                }

            } catch (Exception $e) {
                Log::SaveLog($e);
                http_response_code(500);
            }
            return $arrayRules;
        }
    }
}