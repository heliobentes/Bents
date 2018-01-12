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
     * @table Image
     */
    class Image extends Model
    {
        /**
         * @var int
         * @key
         */
        public $idImage;
        /**
         * @var string
         */
        public $url;
        /**
         * @var bool
         */
        public $isPrincipal;
        /**
         * @var string
         */
        public $label;
        /**
         * @var int
         */
        public $idProperty;
        /**
         * @var string
         */
        public $createdAt;
        /**
         * @var string
         */
        public $updatedAt;

        /**
         * User constructor.
         * @param $Image array
         */
        public function __construct($Image = null)
        {
            if (isset($Image['idImage']) && $Image['idImage']!='') $this->idImage = filter_var($Image['idImage'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Image['url'])) $this->url = filter_var($Image['url'],FILTER_SANITIZE_STRING);
            if (isset($Image['isPrincipal']))$this->isPrincipal = filter_var($Image['isPrincipal'],FILTER_VALIDATE_BOOLEAN)?1:0;
            if (isset($Image['label'])) $this->label = filter_var($Image['label'],FILTER_SANITIZE_STRING);
            if (isset($Image['idProperty']) && $Image['idProperty']!='') $this->idProperty = filter_var($Image['idProperty'],FILTER_SANITIZE_NUMBER_INT);
            if (isset($Image['createdAt'])) $this->createdAt = filter_var($Image['createdAt'],FILTER_SANITIZE_STRING);
            if (isset($Image['updatedAt'])) $this->updatedAt = filter_var($Image['updatedAt'],FILTER_SANITIZE_STRING);
        }


    }
}