<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Type;
    use Bents\Core\DAO;

    class TypeDAO extends DAO
    {
        public function GetAllTypes()
        {
            $pdo = self::$dbConn;
            $sql = "SELECT * FROM Type";

            $stmt1 = $pdo->prepare($sql);

            $stmt1->execute();
            $rows = $stmt1->fetchAll();

            $Types = array();

            foreach ($rows as $row){
                $Types[] = new Type($row);
            }


            return $Types;
        }

        public function GetPropertyTypeById($id){
            $pdo = self::$dbConn;
            $sql = "SELECT * FROM Type WHERE idType = :id";

            $stmt1 = $pdo->prepare($sql);
            $stmt1->bindValue(':id',$id);

            $stmt1->execute();
            $row = $stmt1->fetch();

            $Type =  new Type($row);



            return $Type;
        }
    }
}