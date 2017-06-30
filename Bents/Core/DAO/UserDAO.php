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
    use Bents\Core\Utils\PasswordUtils;

    class UserDAO extends DAO
    {
        /**
         * Check if the password typed by user match with the one added to the DataBase
         * @param string $password
         * @return bool
         */
        public static function ValidatePassword($password)
        {
            $pdo = self::$dbConn;
            $sql = "SELECT pwSalt FROM User WHERE idUser = :id";

            $stmt1 = $pdo->prepare($sql);

            $idUser = $_SESSION['idUser'];
            $stmt1->bindValue(':id', $idUser);

            $stmt1->execute();
            $row = $stmt1->fetch();

            $encodedPassword = PasswordUtils::EncodePassword($password, $row['salt']);

            $sql = "SELECT count(1) passworMatch FROM User WHERE idUser = :id AND pwHash = :pwHash";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':id', $idUser);
            $stmt->bindValue(':pwHash', $encodedPassword);
            $stmt->execute();
            $row = $stmt->fetch();

            if ($row['passworMatch'] > 0) {
                return true;
            } else {
                return false;
            }
        }

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