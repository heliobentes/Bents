<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Feature;
    use Bents\Core\DAO;

    class FeatureDAO extends DAO
    {
        public function GetAllFeatures()
        {
            $pdo = self::$dbConn;

            $sql = "SELECT * FROM Feature ORDER BY feature";

            $stmt1 = $pdo->prepare($sql);

            $stmt1->execute();
            $rows = $stmt1->fetchAll();

            $features = array();

            foreach ($rows as $row){
                $features[] = new Feature($row);
            }


            return $features;
        }
    }
}