<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/21/17
 * Time: 9:11 PM
 */

namespace Bents\Core {

    class Bundle
    {
        public function CSSBundle()
        {
            $style = array();

            $style[] = 'css/styles.css';

            return $style;
        }

        public function JavaScriptBundle()
        {
            $script = array();

            $script[] = 'scripts/scripts.js';

            return $script;
        }
    }
}