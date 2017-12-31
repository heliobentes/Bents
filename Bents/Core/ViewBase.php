<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 8:30 PM
 */

namespace Bents\Core {


    use Bents\Application;
    use Bents\Core\Globalization\Globalization;
    use Bents\Core\StartUp\Bundle;
    use Bents\Core\StartUp\StartUp;

    class ViewBase
    {

        /**
         * Data and Parameters to be passed to the view
         * @var mixed
         */
        public static $bag = array();

        /**
         * Define page title
         * @var string
         */
        public static $title;

        /**
         * The page page will use
         * @var mixed
         */
        public static $model;

        /**
         * Add more scripts to the bundle
         * You have to push some codes here if they depends on Layouts' scripts
         * @var array
         */
        public static $jsBundle = array();

        /**
         * Add more css to the bundle
         * You have to push some codes here if they depends on Layouts' scripts
         * @var array
         */
        public static $cssBundle = array();

        /**
         * The Layout for Views
         * @var string
         */
        public static $layout = 'Shared/_Layout';

        /**
         * Saves HTML content to be injected into the Layout
         * @var string
         */
        private static $contents;

        /**
         * View to call
         * @var
         */
        private $view;

        /**
         * Render View into the Layout
         */
        public static function RenderBody()
        {
            echo self::$contents;
        }

        /**
         * Render all JavaScripts into a single file
         * Work with cached file
         */
        public static function RenderJavaScriptBundle()
        {
            $filename = Application::$publicPath . 'cache/jsbundle.js';
            if (!file_exists($filename) || Config::Debug()->IsDebugging()) {
                $bundle = new Bundle();
                $array = $bundle->JavaScriptBundle();

                $script = '';
                for ($x = 0; $x < sizeof($array); $x++) {
                    try {
                        $script .= ' ' . file_get_contents(Application::$publicPath . $array[$x]);
                    } catch (\Exception $e) {
                        Log::SaveLog($e);
                    }
                }
                foreach (self::$jsBundle as $js) {
                    preg_match_all('/(?:<script[^>]*>)([^<]*)(?:<\/script>)/', $js, $matches);

                    foreach ($matches[1] as $match) {

                        $script .= ' ' . $match;
                    }
                }
            }

            $fp = fopen($filename, 'w');
            fwrite($fp, self::SanitizeOutput($script));
            fclose($fp);
            echo '<script async defer language="javascript" type="text/javascript" src="/cache/jsbundle.js"></script>';
        }

        public static function __($string){
            $return = Globalization::Resource($string);
            if($return==''){
                $return = $string;
            }
            return $return;
        }

        private static function SanitizeOutput($buffer)
        {
            $search = array(

                '~(\s)\/\/.*~',   //remove inline comments
                '~\>[\s]+~',         //strip whitespaces after tags
                '~[\s]+\<~',         //strip whitespaces before tags
                '~:[\s]+~',          //shorten whitespaces after :
                '~;[\s]+~',          //shorten whitespaces after ;
                '~\{[\s]+~',         //shorten whitespaces after {
                '~[\s]+\{~',         //shorten whitespaces before {
                '~[\s]+\}~',         //shorten whitespaces before }
                '~\}[\s]+~',         //shorten whitespaces after }
                '~\n\s*\n~',         //remove line breaks
                '~\n~',              //remove line breaks
                '~<\!--.*?\--\>~', //remove html comments
                '~\>[\s]+\<~',       // remove whitespaces between tags
                '~(\s|&nbsp;){2,}~', //shorten multiple whitespace sequences
                '~\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/~'       //remove multi line comments
            );
            $replace = array(
                '',
                '>',
                '<',
                ':',
                ';',
                '{',
                '{',
                '}',
                '}',
                ' ',
                ' ',
                '',
                '',
                ' ',
                '',
            );
            if (Config::SystemBehavior()->IsHTMLSanitizable()) {
                $buffer = preg_replace($search, $replace, $buffer);
            }
            return $buffer;
        }

        /**
         * Render all CSSs into a single file
         * Work with cached file
         */
        public
        static function RenderCSSBundle()
        {
            $filename = Application::$publicPath . 'cache/cssbundle.css';
            if (!file_exists($filename) || Config::Debug()->isDebugging()) {
                $bundle = new Bundle();
                $array = $bundle->CSSBundle();

                $style = '';
                for ($x = 0; $x < sizeof($array); $x++) {
                    try {
                        if(preg_match('/http/',$array[$x])){
                            $style .= ' ' . file_get_contents( $array[$x]);
                        } else {
                            $style .= ' ' . file_get_contents(Application::$publicPath . $array[$x]);
                        }
                    } catch (\Exception $e) {
                        Log::SaveLog($e);
                    }
                }

                foreach (self::$cssBundle as $css) {
                    preg_match_all('/(?:<style[^>]*>)([^<]*)(?:<\/style>)/', $css, $matches);

                    foreach ($matches[1] as $match) {
                        $style .= ' ' . $match;
                    }
                }
                $fp = fopen($filename, 'w');
                $content = self::SanitizeOutput($style);
                fwrite($fp, $content);
                fclose($fp);
            }
            echo '<link rel="stylesheet" href="/cache/cssbundle.css">';
        }

        /**
         * Generate an URL based on the Action and the Controller and render a "a" tag
         * @param string $content
         * @param string $action
         * @param string|null $controller
         * @param array $htmlOptions
         * @return string
         */
        public static function ActionLink(string $content, string $action, string $controller = null, array $params = array(), array $htmlOptions = array())
        {
            if ($controller == null) {
                $controller = StartUp::$controller;
            }
            $html = '';
            foreach ($htmlOptions as $key => $htmlOption) {
                $html .= ' ' . $key . '="' . $htmlOption . ' ';
            }
            $arrParams = array();
            foreach ($params as $key => $param) {
                $arrParams[] = $key . '=' . $param;
            }
            $query = join('&', $arrParams);

            echo '<a href="/' . $controller . '/' . $action . (($query != '') ? ('?' . $query) : '') . '" ' . $html . '>' . $content . '</a>';
        }

        /**
         * Sanitizing the HTML content to be printed
         * Remove white spaces, comments, line breaks etc
         * @param $buffer string
         * @return string
         */
        //TODO: reorganize to be more intelligent

        /**
         * Define what view will be render
         * @param string $view
         */
        public function SetView($view)
        {
            //If $view is null or empty use $view as "current controller + index"
            if ($view == null || $view == '') {
                $view = StartUp::$controller . '/' . StartUp::$action;
            }

            $view = Application::$viewPath . $view . '.phtml';

            if (file_exists($view)) {
                $this->view = $view;
            } else {
                http_response_code(404);
            }
        }

        /**
         * Return a string with the content of the view injected into the Layout
         * @return string
         * @var $model mixed
         */
        public function Render($model = null)
        {
            self::$model = $model;

            ob_start();
            if (isset($this->view)) {
                require_once $this->view;
            }

            self::$contents = ob_get_contents();
            ob_end_clean();

            ob_start();
            require_once Application::$viewPath . self::$layout . '.phtml';
            $globalContent = ob_get_contents();
            ob_end_clean();

            return self::SanitizeOutput($globalContent);

        }
    }
}