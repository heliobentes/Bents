<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 2:38 PM
 */

namespace Bents\App\Model {

    use Bents\Core\Model;

    /**
     * Class User
     * @package Bents\App\Model
     * @table Parking
     */
    class Parking extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idParking;
        /**
         * @var string
         */
        public $parking;

        /**
         * User constructor.
         * @param $Parking array
         */
        public function __construct($Parking = null)
        {
            if (isset($Parking['idParking'])) $this->idParking = $Parking['idParking'];
            if (isset($Parking['parking'])) $this->parking = $Parking['parking'];
        }


    }
}