<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Profile;
    use Bents\Core\DAO;

    class ProfileDAO extends DAO
    {
        /**
         * @param $idUser int
         * @return int
         */
        public function GetIdProfileByUserId($idUser)
        {
            $pdo = self::$dbConn;
            $sql = "SELECT idProfile FROM Profile where idUser = :idUser";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':idUser',$idUser);

            $stmt->execute();

            $row = $stmt->fetch();


            return $row['idProfile'];
        }
    }
}