<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 5:20 PM
 */

namespace Bents\Core\DAO {


    use Bents\Core\DAO;
    use Bents\Core\Model\Filter;

    class ModelDAO extends DAO
    {
        private $table;


        /**
         * @param $id string|int
         * @param $class mixed
         * @return null|mixed
         */
        public function GetById($class, $id)
        {
            $pdo = self::$dbConn;

            $pieces = explode('\\', $class);
            $table = end($pieces);

            $sql = "SELECT * 
                    FROM $table
                    WHERE id$table = :id
                    LIMIT 0,1";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':id', $id);


            try {
                $stmt->execute();

                while ($row = $stmt->fetch()) {
                    return new $class($row);
                }

            } catch (Exception $e) {
                Log::SaveLog($e);
                http_response_code(500);
            }
            return null;
        }

        /**
         * @param string $class
         * @param Filter $filter
         * @return array
         */
        public function FindByFilter($class, Filter $filter)
        {
            $pdo = self::$dbConn;

            $pieces = explode('\\', $class);
            $table = end($pieces);

            $sql = 'SELECT ' . join(',', $filter->fields) . " FROM $table ";
            $i = 0;
            foreach ($filter->where as $key => $item) {
                if ($i == 0) {
                    $sql .= 'WHERE';
                } else {
                    $sql .= " $filter->logicalOperator ";
                }
                $sql .= " $key $item[1] '$item[0]'";
                $i++;
            }
            $i = 0;
            if (count($filter->orderBy) > 0) {
                $sql .= " ORDER BY ";
                //$order[0] = field, $order[1] Asc|Desc
                foreach ($filter->orderBy as $order) {
                    if (is_array($order)) {
                        $sql .= (($i > 0) ? "," : "") . " $order[0] " . ($order[1]??'ASC');
                    } else {
                        $sql .= (($i > 0) ? "," : "") . " $order ASC";
                    }
                    $i++;
                }
            }

            if ($filter->limit != null) {
                $sql .= " LIMIT 0,$filter->limit";
            }

            $stmt = $pdo->prepare($sql);

            $arrayResults = array();
            try {
                $stmt->execute();

                while ($row = $stmt->fetch()) {
                    $arrayResults[] = new $class($row);
                }

            } catch (Exception $e) {
                Log::SaveLog($e);
                http_response_code(500);
            }
            return $arrayResults;
        }
    }
}