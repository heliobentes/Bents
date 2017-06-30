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
        protected $language;

        /**
         * Globalization constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->language = $obj->Globalization->language;
        }

        /**
         * @return string
         */
        public function GetLanguage(): string
        {
            return $this->language;
        }


    }
}