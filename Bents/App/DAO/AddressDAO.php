<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Address;
    use Bents\Core\Config;
    use Bents\Core\DAO;
    use Bents\Core\Log;

    class AddressDAO extends DAO
    {
        /**
         * @param $Address Address
         * @return int
         */
        public function SaveAddress($Address)
        {
            $pdo = self::$dbConn;
            $sql = "INSERT INTO Address 
                          (`unitNumber`, 
                          `streetNumber`, 
                          `address`, 
                          `region`, 
                          `createdAt`, 
                          `updatedAt`, 
                          `area`, 
                          `city`, 
                          `province`, 
                          `country`, 
                          `postalCode`) 
                      VALUES 
                          (:unitNumber, 
                          :streetNumber, 
                          :address, 
                          :region, 
                          :createdAt, 
                          :updatedAt, 
                          :area, 
                          :city, 
                          :province, 
                          :country, 
                          :postalCode)";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':unitNumber',$Address->unitNumber);
            $stmt->bindValue(':streetNumber',$Address->streetNumber);
            $stmt->bindValue(':address',$Address->address);
            $stmt->bindValue(':region',$Address->region);
            $stmt->bindValue(':createdAt',strftime("%Y-%m-%d %H:%M:%S"));
            $stmt->bindValue(':updatedAt',strftime("%Y-%m-%d %H:%M:%S"));
            $stmt->bindValue(':area',$Address->area);
            $stmt->bindValue(':city',$Address->city);
            $stmt->bindValue(':province',$Address->province);
            $stmt->bindValue(':country',$Address->country);
            $stmt->bindValue(':postalCode',$Address->postalCode);

            try {
                if($stmt->execute()) {
                    return $pdo->lastInsertId();
                } else {
                    throw new \Exception($stmt->errorInfo()[2]);
                }
            } Catch(\Exception $e){
                Log::SaveLog($e);
                header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
                include Config::SystemBehavior()->GetErrorPage(500);
                exit;
            }
        }
    }
}