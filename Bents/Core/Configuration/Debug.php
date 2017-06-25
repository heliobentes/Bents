<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/24/17
 * Time: 8:51 PM
 */

namespace Bents\Core\Configuration {

    use Bents\Core\Utils\Session;

    class Debug
    {
        /**
         * Enable debug function and disable all caches
         * Set it to false for production environment
         * @var bool
         */
        protected $debug;

        /**
         * enable or disable log. If it's enabled the system will save a file log.txt at Bents/Core/Logs
         * @var bool
         */
        protected $saveLo;

        /**
         * Report or do not report error
         * Set it to false for production environment
         * @var bool
         */
        protected $showError;

        /**
         * Debug constructor.
         */
        public function __construct()
        {
            $obj = Session::GetConfigurationFromSession();
            $this->debug = $obj->Debug->debug;
            $this->saveLog = $obj->Debug->saveLog;
            $this->showError = $obj->Debug->showError;
        }

        public function IsDebugging(): bool
        {
            return $this->debug;
        }

        /**
         * @return bool
         */
        public function IsLogEnabled(): bool
        {
            return $this->saveLog;
        }

        /**
         * @return bool
         */
        public function IsErrorEnabled(): bool
        {
            return $this->showError;
        }

    }
}