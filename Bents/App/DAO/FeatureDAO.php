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
        /**
         * @return Feature[]
         */
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
        /**
         * @return Feature[]
         */
        public function GetAllFeaturesByPropertyId($id)
        {
            $pdo = self::$dbConn;

            $sql = "SELECT F.idFeature,
                           F.feature 
                    FROM Feature F  
                    JOIN PropertyFeature PF ON F.idFeature = PF.idFeature
                    WHERE PF.idProperty = :id
                    ORDER BY F.feature";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':id',$id);

            $stmt->execute();
            $rows = $stmt->fetchAll();

            $Features = array();

            foreach ($rows as $row){
                $Features[] = new Feature($row);
            }


            return $Features;
        }
        /**
         * @param $propertyId int
         * @param $features array
         */
        public function AddFeaturesToProperty($propertyId,$features){
            $pdo = self::$dbConn;

            foreach ($features as $feature) {
                $feature = filter_var($feature,FILTER_SANITIZE_NUMBER_INT);

                $sql = "INSERT INTO PropertyFeature VALUE (:propertyId,:feature)";

                $stmt = $pdo->prepare($sql);
                $stmt->bindValue(':propertyId',$propertyId);
                $stmt->bindValue(':feature',$feature);

                $stmt->execute();
            }
        }
    }
}