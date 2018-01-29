<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Laundry;
    use Bents\App\Model\Property;
    use Bents\Core\Config;
    use Bents\Core\DAO;
    use Bents\Core\Log;
    use Bents\Core\Utils\Error;

    class PropertyDAO extends DAO
    {

        public function GetPropertiesByFilter($PropertyFilter){
            return new Property();
        }
        public function GetPropertyById($id){
            $pdo = self::$dbConn;

            $sql = "SELECT * FROM Property WHERE idProperty=:idProperty";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':idProperty',$id);
            $stmt->execute();
            $row = $stmt->fetch();

            $Property =  new Property($row);

            return $Property;
        }

        /**
         * @param $Property Property
         * @return int
         */
        public function SaveProperty($Property)
        {
            $pdo = self::$dbConn;
            $sql = "INSERT INTO Property
                                (`idAddress`, 
                                `createdAt`, 
                                `updatedAt`, 
                                `sellingPrice`, 
                                `rentalPrice`, 
                                `condoExpenses`, 
                                `currency`, 
                                `bedrooms`, 
                                `bathrooms`, 
                                `area`, 
                                `areaUnit`, 
                                `description`, 
                                `idType`, 
                                `idParking`, 
                                `idLaundry`, 
                                `mlsNumber`, 
                                `availability`, 
                                `observations`, 
                                `buildingName`, 
                                `openHouse`, 
                                `negotiation`, 
                                `title`, 
                                `showScore`, 
                                `showMap`, 
                                `idRealEstate`, 
                                `idProfile`) 
                            VALUES 
                                (:idAddress, 
                                :createdAt, 
                                :updatedAt, 
                                :sellingPrice, 
                                :rentalPrice, 
                                :condoExpenses, 
                                :currency, 
                                :bedrooms, 
                                :bathrooms, 
                                :area, 
                                :areaUnit, 
                                :description, 
                                :idType, 
                                :idParking, 
                                :idLaundry, 
                                :mlsNumber, 
                                :availability, 
                                :observations, 
                                :buildingName, 
                                :openHouse, 
                                :negotiation, 
                                :title, 
                                :showScore, 
                                :showMap, 
                                :idRealEstate, 
                                :idProfile);";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':idAddress', $Property->idAddress);
            $stmt->bindValue(':createdAt', strftime("%Y-%m-%d %H:%M:%S"));
            $stmt->bindValue(':updatedAt', strftime("%Y-%m-%d %H:%M:%S"));
            $stmt->bindValue(':sellingPrice', $Property->sellingPrice);
            $stmt->bindValue(':rentalPrice', $Property->rentalPrice);
            $stmt->bindValue(':condoExpenses', $Property->condoExpenses);
            $stmt->bindValue(':currency', $Property->currency);
            $stmt->bindValue(':bedrooms', $Property->bedrooms);
            $stmt->bindValue(':bathrooms', $Property->bathrooms);
            $stmt->bindValue(':area', $Property->area);
            $stmt->bindValue(':areaUnit', $Property->areaUnit);
            $stmt->bindValue(':description', $Property->description);
            $stmt->bindValue(':idType', $Property->idType);
            $stmt->bindValue(':idParking', $Property->idParking);
            $stmt->bindValue(':idLaundry', $Property->idLaundry);
            $stmt->bindValue(':mlsNumber', $Property->mlsNumber);
            $stmt->bindValue(':availability', $Property->availability);
            $stmt->bindValue(':observations', $Property->observations);
            $stmt->bindValue(':buildingName', $Property->buildingName);
            $stmt->bindValue(':openHouse', $Property->openHouse);
            $stmt->bindValue(':negotiation', $Property->negotiation);
            $stmt->bindValue(':title', $Property->title);
            $stmt->bindValue(':showScore', $Property->showScore);
            $stmt->bindValue(':showMap', $Property->showMap);
            $stmt->bindValue(':idRealEstate', $Property->idRealEstate);
            $stmt->bindValue(':idProfile', $Property->idProfile);

            try {
                if($stmt->execute()) {
                    return $pdo->lastInsertId();
                } else {
                   throw new \Exception($stmt->errorInfo()[2]);
                }
            } Catch(\Exception $e){
                Error::Deal(500,$e);
            }


        }
    }
}