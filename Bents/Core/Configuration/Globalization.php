<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {

    use Bents\Core\Utils\Session;

    class Globalization
    {
        /**
         * Set System Language
         * @var string
         */
        protected $lang;

        /**
         * Globalization constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->lang = $obj->Globalization->lang;
        }

        /**
         * @return string
         */
        public function GetLang(): string
        {
            return $this->lang;
        }


    }
}