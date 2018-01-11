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
     * @table Profile
     */
    class Profile extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idProfile;
        /**
         * @var string
         */
        public $picture;
        /**
         * @var string
         */
        public $aboutMe;
        /**
         * @var string
         */
        public $phoneNumber;
        /**
         * @var int
         */
        public $idUser;
        /**
         * @var string
         */
        public $name;

        /**
         * User constructor.
         * @param $Profile array
         */
        public function __construct($Profile = null)
        {
            if (isset($Profile['idProfile']) && $Profile['idProfile']!='') $this->idProfile = filter_var($Profile['idProfile'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Profile['picture'])) $this->picture = filter_var($Profile['picture'],FILTER_SANITIZE_STRING);
            if (isset($Profile['aboutMe'])) $this->aboutMe = filter_var($Profile['aboutMe'],FILTER_SANITIZE_STRING);
            if (isset($Profile['phoneNumber'])) $this->phoneNumber = filter_var($Profile['phoneNumber'],FILTER_SANITIZE_STRING);
            if (isset($Profile['idUser']) && $Profile['idUser']!='') $this->idUser =filter_var( $Profile['idUser'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Profile['name'])) $this->name = filter_var($Profile['name'],FILTER_SANITIZE_STRING);
        }


    }
}