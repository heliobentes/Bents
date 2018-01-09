<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Laundry;
    use Bents\Core\DAO;

    class LaundryDAO extends DAO
    {
        public function GetAllLaundryTypes()
        {
            $pdo = self::$dbConn;
            $sql = "SELECT * FROM Laundry";

            $stmt1 = $pdo->prepare($sql);

            $stmt1->execute();
            $rows = $stmt1->fetchAll();

            $LaundryTypes = array();

            foreach ($rows as $row){
                $LaundryTypes[] = new Laundry($row);
            }


            return $LaundryTypes;
        }
    }
}