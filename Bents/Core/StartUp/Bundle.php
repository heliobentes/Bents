<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/21/17
 * Time: 9:11 PM
 */

namespace Bents\Core\StartUp {

    class Bundle
    {
        public function CSSBundle()
        {
            $style = array();

            $style[] = 'css/fontawesome-all.min.css';
            $style[] = 'css/jquery.dropdown.min.css';
            $style[] = 'https://fonts.googleapis.com/css?family=Roboto:400,700';
            $style[] = 'css/flat/green.css';
            $style[] = 'css/styles.css';

            return $style;
        }

        public function JavaScriptBundle()
        {
            $script = array();

            $script[] = 'scripts/jquery-3.2.1.min.js';
            $script[] = 'scripts/jquery.dropdown.min.js';
            $script[] = 'scripts/icheck.min.js';
            $script[] = 'scripts/scripts.js';


            return $script;
        }
    }
}