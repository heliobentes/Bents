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

            $style[] = 'css/bootstrap.min.css';
            $style[] = 'css/font-awesome.min.css';
            $style[] = 'css/styles.css';

            return $style;
        }

        public function JavaScriptBundle()
        {
            $script = array();

            $script[] = 'scripts/jquery-3.2.1.min.js';
            $script[] = 'scripts/bootstrap.min.js';
            $script[] = 'scripts/scripts.js';


            return $script;
        }
    }
}