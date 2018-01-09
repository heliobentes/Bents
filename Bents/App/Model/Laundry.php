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
     * @table Laundry
     */
    class Laundry extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idLaundry;
        /**
         * @var string
         */
        public $laundry;

        /**
         * User constructor.
         * @param $Laundry array
         */
        public function __construct($Laundry = null)
        {
            if (isset($Laundry['idLaundry'])) $this->idLaundry = $Laundry['idLaundry'];
            if (isset($Laundry['laundry'])) $this->laundry = $Laundry['laundry'];
        }


    }
}