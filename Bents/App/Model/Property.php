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
     * @table Property
     */
    class Property extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idProperty;
        /**
         * @var int
         */
        public $idAddress;
        /**
         * @var \DateTime
         */
        public $createdAt;
        /**
         * @var \DateTime
         */
        public $updatedAt;
        /**
         * @var float
         */
        public $sellingPrice;
        /**
         * @var float
         */
        public $rentalPrice;
        /**
         * @var float
         */
        public $condoExpenses;
        /**
         * @var string
         */
        public $currency;
        /**
         * @var int
         */
        public $bedrooms;
        /**
         * @var int
         */
        public $bathrooms;
        /**
         * @var float
         */
        public $area;
        /**
         * @var string
         */
        public $areaUnit;
        /**
         * @var string
         */
        public $description;
        /**
         * @var int
         */
        public $idType;
        /**
         * @var int
         */
        public $idParking;
        /**
         * @var int
         */
        public $idLaundry;
        /**
         * @var string
         */
        public $mlsNumber;
        /**
         * @var \DateTime
         */
        public $availability;
        /**
         * @var string
         */
        public $observations;
        /**
         * @var string
         */
        public $buildingName;
        /**
         * @var bool
         */
        public $openHouse;
        /**
         * @var string
         */
        public $negotiation;
        /**
         * @var string
         */
        public $title;
        /**
         * @var bool
         */
        public $showScore;
        /**
         * @var bool
         */
        public $showMap;
        /**
         * @var int
         */
        public $idRealEstate;
        /**
         * @var int
         */
        public $idProfile;

        /**
         * User constructor.
         * @param $Property array
         */
        public function __construct($Property = null)
        {
            if (isset($Property['idProperty'])) $this->idProperty = filter_var($Property['idProperty'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['idAddress']) && $Property['idAddress']!='')$this->idAddress = filter_var($Property['idAddress'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['createdAt']))$this->createdAt = filter_var($Property['createdAt'],FILTER_SANITIZE_STRING);
            if (isset($Property['updatedAt']))$this->updatedAt = filter_var($Property['updatedAt'],FILTER_SANITIZE_STRING);
            if (isset($Property['sellingPrice']))$this->sellingPrice = filter_var($Property['sellingPrice'],FILTER_SANITIZE_NUMBER_FLOAT);
            if (isset($Property['rentalPrice']))$this->rentalPrice = filter_var($Property['rentalPrice'],FILTER_SANITIZE_NUMBER_FLOAT);
            if (isset($Property['condoExpenses'])) $this->condoExpenses = filter_var($Property['condoExpenses'],FILTER_SANITIZE_NUMBER_FLOAT);
            if (isset($Property['currency']))$this->currency = filter_var($Property['currency'],FILTER_SANITIZE_STRING);
            if (isset($Property['bedrooms']))$this->bedrooms = filter_var($Property['bedrooms'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['bathrooms']))$this->bathrooms = filter_var($Property['bathrooms'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['area']))$this->area = filter_var($Property['area'],FILTER_SANITIZE_NUMBER_FLOAT);
            if (isset($Property['areaUnit']))$this->areaUnit = filter_var($Property['areaUnit'],FILTER_SANITIZE_STRING);
            if (isset($Property['description']))$this->description = addslashes($Property['description']);
            if (isset($Property['idType']) && $Property['idType']!='') $this->idType = filter_var($Property['idType'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['idParking']) && $Property['idParking']!='') $this->idParking = filter_var($Property['idParking'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['idLaundry']) && $Property['idLaundry']!='')$this->idLaundry = filter_var($Property['idLaundry'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['mlsNumber']))$this->mlsNumber = filter_var($Property['mlsNumber'],FILTER_SANITIZE_STRING);
            if (isset($Property['availability']))$this->availability = filter_var($Property['availability'],FILTER_SANITIZE_STRING);
            if (isset($Property['observations']))$this->observations = addslashes($Property['observations']);
            if (isset($Property['buildingName']))$this->buildingName = filter_var($Property['buildingName'],FILTER_SANITIZE_STRING);
            if (isset($Property['openHouse']))$this->openHouse = filter_var($Property['openHouse'],FILTER_VALIDATE_BOOLEAN);
            if (isset($Property['negotiation']))$this->negotiation = filter_var($Property['negotiation'],FILTER_SANITIZE_STRING);
            if (isset($Property['title']))$this->title = filter_var($Property['title'],FILTER_SANITIZE_STRING);
            if (isset($Property['showScore']))$this->showScore = filter_var($Property['showScore'],FILTER_VALIDATE_BOOLEAN);
            if (isset($Property['showMap']))$this->showMap = filter_var($Property['showMap'],FILTER_VALIDATE_BOOLEAN);
            if (isset($Property['idRealEstate']) && $Property['idRealEstate']!='')$this->idRealEstate = filter_var($Property['idRealEstate'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Property['idProfile']) && $Property['idProfile']!='')$this->idProfile = filter_var($Property['idProfile'],FILTER_SANITIZE_NUMBER_INT);
        }


    }
}