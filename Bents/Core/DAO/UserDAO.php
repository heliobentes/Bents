<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 2:44 PM
 */

namespace Bents\Core\DAO {


    use Bents\Core\DAO;
    use Bents\Core\Model\Permission;
    use Bents\Core\Model\Role;

    class UserDAO extends DAO
    {
        /**
         * @param $login string
         * @return Permission[]
         */
        public function GetUserPermissions($login): array
        {
            $pdo = self::$dbConn;

            $sql = "SELECT P.controller, P.action 
                    FROM Permissions P
                    JOIN User U on P.idUser = U.idUser
                    WHERE U.login =:login";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':login', $login);

            $arrayPermissions = array();

            try {
                $stmt->execute();

                while ($row = $stmt->fetch()) {
                    $arrayPermissions[] = new Permission($row);
                }

            } catch (Exception $e) {
                Log::SaveLog($e);
                http_response_code(500);
            }
            return $arrayPermissions;
        }

        /**
         * @param $login string
         * @return string
         */
        public function GetUserRole($login): string
        {
            $pdo = self::$dbConn;

            $sql = "SELECT R.role
                    FROM Role R
                    JOIN User U on R.idRole = U.idRole
                    WHERE U.login =:login";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':login', $login);

            $role = '';

            try {
                $stmt->execute();

                while ($row = $stmt->fetch()) {
                    $role = $row['role'];
                }

            } catch (Exception $e) {
                Log::SaveLog($e);
                http_response_code(500);
            }
            return $role;
        }
    }
}