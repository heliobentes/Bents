<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Image;
    use Bents\Core\DAO;
    use Bents\Core\Utils\Error;

    class ImageDAO extends DAO
    {
        /**
         * @param $Image Image
         * @return int
         */
        public function SaveImageToProperty($Image)
        {
            $pdo = self::$dbConn;
            $sql = "INSERT INTO Image 
                          (url,
                          createdAt,
                          updatedAt,
                          idProperty,
                          isPrincipal,
                          label) 
                    VALUES
                    (:url,
                          :createdAt,
                          :updatedAt,
                          :idProperty,
                          :isPrincipal,
                          :label)";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':url',$Image->url);
            $stmt->bindValue(':createdAt',strftime("%Y-%m-%d %H:%M:%S"));
            $stmt->bindValue(':updatedAt',strftime("%Y-%m-%d %H:%M:%S"));
            $stmt->bindValue(':idProperty',$Image->idProperty);
            $stmt->bindValue(':isPrincipal',$Image->isPrincipal);
            $stmt->bindValue(':label',$Image->label);

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

        /**
         * @return Image[]
         */
        public function GetAllImagesByPropertyId($id)
        {
            $pdo = self::$dbConn;

            $sql = "SELECT idImage,
                           label,
                           url 
                    FROM Image    
                    WHERE idProperty = :id
                    ORDER BY isPrincipal";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':id',$id);

            $stmt->execute();
            $rows = $stmt->fetchAll();

            $Images = array();

            foreach ($rows as $row){
                $Images[] = new Image($row);
            }


            return $Images;
        }
    }
}