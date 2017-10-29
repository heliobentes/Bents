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

            $style[] = 'css/font-awesome.min.css';
            $style[] = 'css/styles.css';
            $style[] = 'https://fonts.googleapis.com/css?family=Roboto:400,700';

            return $style;
        }

        public function JavaScriptBundle()
        {
            $script = array();

            $script[] = 'scripts/jquery-3.2.1.min.js';
            $script[] = 'scripts/scripts.js';


            return $script;
        }
    }
}