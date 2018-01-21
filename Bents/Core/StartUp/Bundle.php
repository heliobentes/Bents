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
            $style[] = 'plugins/trumbowyg/ui/trumbowyg.min.css';
            $style[] = 'plugins/trumbowyg/plugins/colors/ui/trumbowyg.colors.min.css';
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
            $script[] = 'plugins/trumbowyg/trumbowyg.min.js';
            $script[] = 'plugins/trumbowyg/plugins/colors/trumbowyg.colors.min.js';
            $script[] = 'https://www.gstatic.com/charts/loader.js';
            $script[] = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAebtVrx8yzcCCmOvD3n1Fr_06afhhubU&libraries=places';
            $script[] = 'scripts/jquery.mask.min.js';
            $script[] = 'plugins/fileupload/js/vendor/jquery.ui.widget.js';
            $script[] = 'plugins/fileupload/js/jquery.iframe-transport.js';
            $script[] = 'plugins/fileupload/js/jquery.fileupload.js';
            $script[] = 'scripts/scripts.js';
            $script[] = 'scripts/property-add.js';


            return $script;
        }
    }
}