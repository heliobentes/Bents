<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\App\Model\Type;
    use Bents\Core\Config;
    use Bents\Core\DAO;
    use Bents\Core\Globalization\Globalization;

    class TypeDAO extends DAO
    {
        public function GetAllTypesByLanguage($language)
        {
            $pdo = self::$dbConn;
            $sql = "SELECT * FROM Type WHERE language = :language";

            $stmt1 = $pdo->prepare($sql);

            $stmt1->bindValue(':language', $language);

            $stmt1->execute();
            $rows = $stmt1->fetchAll();

            $types = array();

            if(count($rows)==0){
                $sql = "SELECT * FROM Type WHERE language = :language";

                $stmt1 = $pdo->prepare($sql);

                $stmt1->bindValue(':language', Globalization::GetDefaultLanguage());

                $stmt1->execute();
                $rows = $stmt1->fetchAll();
            }

            foreach ($rows as $row){
                $types[] = new Type($row);
            }


            return $types;
        }
    }
}