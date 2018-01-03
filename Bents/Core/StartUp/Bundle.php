<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/21/17
 * Time: 9:11 PM
 */

namespace Bents\Core\StartUp {

    use Bents\Core\Globalization\Globalization;

    class Bundle
    {
        public function CSSBundle()
        {
            $style = array();

            $style[] = 'css/fontawesome-all.min.css';
            $style[] = 'css/jquery.dropdown.min.css';
            $style[] = 'https://fonts.googleapis.com/css?family=Roboto:400,700';
            $style[] = 'css/flat/green.css';
            $style[] = 'css/flag-icon.min.css';
            $style[] = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css';
            $style[] = 'css/styles.css';

            return $style;
        }

        public function JavaScriptBundle()
        {
            $script = array();

            $language = preg_split('~-~',Globalization::GetLanguage())[0];

            $script[] = 'scripts/jquery-3.2.1.min.js';
            $script[] = 'scripts/jquery.dropdown.min.js';
            $script[] = 'scripts/icheck.min.js';
            $script[] = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js';
            $script[] = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/i18n/'.$language.'.js';
            $script[] = 'scripts/jquery.spinner.min.js';
            $script[] = 'scripts/scripts.js';


            return $script;
        }
    }
}