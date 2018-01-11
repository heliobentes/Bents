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
     * @table Address
     */
    class Address extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idAddress;
        /**
         * @var string
         */
        public $unitNumber;
        /**
         * @var string
         */
        public $streetNumber;
        /**
         * @var string
         */
        public $address;
        /**
         * @var string
         */
        public $region;
        /**
         * @var \DateTime
         */
        public $createdAt;
        /**
         * @var \DateTime
         */
        public $updatedAt;
        /**
         * @var string
         */
        public $area;
        /**
         * @var string
         */
        public $city;
        /**
         * @var string
         */
        public $province;
        /**
         * @var string
         */
        public $country;
        /**
         * @var string
         */
        public $postalCode;

        /**
         * User constructor.
         * @param $Address array
         */
        public function __construct($Address = null)
        {
            if (isset($Laundry['idAddress'])) $this->idAddress = filter_var($Address['idAddress'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Laundry['unitNumber'])) $this->unitNumber = filter_var($Address['unitNumber'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['streetNumber'])) $this->streetNumber = filter_var($Address['streetNumber'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['address'])) $this->address = filter_var($Address['address'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['region'])) $this->region = filter_var($Address['region'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['createdAt'])) $this->createdAt = filter_var($Address['createdAt'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['updatedAt'])) $this->updatedAt = filter_var($Address['updatedAt'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['area'])) $this->area = filter_var($Address['area'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['city'])) $this->city = filter_var($Address['city'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['province'])) $this->province = filter_var($Address['province'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['country'])) $this->country = filter_var($Address['country'],FILTER_SANITIZE_STRING);
            if (isset($Laundry['postalCode'])) $this->postalCode = filter_var($Address['postalCode'],FILTER_SANITIZE_STRING);
        }


    }
}