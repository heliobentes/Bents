<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 9:45 PM
 */

namespace Bents\App\DAO {

    use Bents\Core\DAO;

    class HomeDAO extends DAO
    {
        public function GetDbCon()
        {
            return self::$dbCon;
        }
    }
}