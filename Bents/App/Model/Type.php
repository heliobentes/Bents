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
     * @table Type
     */
    class Type extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idType;
        /**
         * @var string
         */
        public $type;
        /**
         * @var string
         */
        public $language;

        /**
         * User constructor.
         * @param $type array
         */
        public function __construct($type = null)
        {
            if (isset($type['idType'])) $this->idType = $type['idType'];
            if (isset($type['type'])) $this->type = $type['type'];
            if (isset($type['language'])) $this->language = $type['language'];
        }


    }
}