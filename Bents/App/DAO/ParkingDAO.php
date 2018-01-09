<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Parking;
    use Bents\Core\DAO;

    class ParkingDAO extends DAO
    {
        public function GetAllParkingTypes()
        {
            $pdo = self::$dbConn;
            $sql = "SELECT * FROM Parking";

            $stmt1 = $pdo->prepare($sql);

            $stmt1->execute();
            $rows = $stmt1->fetchAll();

            $ParkingTypes = array();

            foreach ($rows as $row){
                $ParkingTypes[] = new Parking($row);
            }


            return $ParkingTypes;
        }
    }
}