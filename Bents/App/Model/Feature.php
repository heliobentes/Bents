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
     * @table Feature
     */
    class Feature extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idFeature;
        /**
         * @var string
         */
        public $feature;

        /**
         * User constructor.
         * @param $feature array
         */
        public function __construct($feature = null)
        {
            if (isset($feature['idFeature'])) $this->idFeature = $feature['idFeature'];
            if (isset($feature['feature'])) $this->feature = $feature['feature'];
        }


    }
}