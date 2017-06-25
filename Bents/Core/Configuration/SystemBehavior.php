<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {


    use Bents\Core\Utils\Session;

    class SystemBehavior
    {
        /**
         * Choose if you want to remove white spaces, line breaks, comments etc from HTML pages
         * @var bool
         */
        protected $sanitizeHTML;

        /**
         * SystemBehavior constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->sanitizeHTML = $obj->SystemBehavior->sanitizeHTML;
        }

        /**
         * @return bool
         */
        public function IsHTMLSanitizable(): bool
        {
            return $this->sanitizeHTML;
        }


    }
}