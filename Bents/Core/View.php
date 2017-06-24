<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 8:30 PM
 */

namespace Bents\Core {


    use Bents\Application;
    use Bents\Core\StartUp\Bundle;
    use Bents\Core\StartUp\StartUp;

    class View
    {

        /**
         * Data and Parameters to be passed to the view
         * @var mixed
         */
        public static $bag = array();

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
            if (!file_exists($filename) || Config::debug()->isDebugging()) {
                $bundle = new Bundle();
                $array = $bundle->JavaScriptBundle();

                $array[] = self::$jsBundle;

                $fp = fopen($filename, 'w');
                $script = '';
                for ($x = 0; $x < sizeof($array); $x++) {
                    try {
                        $script .= ' ' . file_get_contents(self::$publicPath . $array[$x]);
                    } catch (\Exception $e) {
                        Log::SaveLog($e);
                    }
                }

                fwrite($fp, $script);
                fclose($fp);

            }
            echo '<script async defer language="javascript" type="text/javascript" src="/cache/jsbundle.js"></script>';;
        }

        /**
         * Render all CSSs into a single file
         * Work with cached file
         */
        public static function RenderCSSBundle()
        {
            $filename = Application::$publicPath . 'cache/cssbundle.css';
            if (!file_exists($filename) || Config::debug()->isDebugging()) {
                $bundle = new Bundle();
                $array = $bundle->CSSBundle();
                $fp = fopen($filename, 'w');
                $style = '';
                for ($x = 0; $x < sizeof($array); $x++) {
                    try {
                        $style .= ' ' . file_get_contents(self::$publicPath . $array[$x]);
                    } catch (\Exception $e) {
                        Log::SaveLog($e);
                    }
                }
                fwrite($fp, $style);
                fclose($fp);
            }
            echo '<link rel="stylesheet" href="/cache/cssbundle.css">';
        }

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

            return $this->SanitizeOutput($globalContent);

        }

        /**
         * Sanitizing the HTML content to be printed
         * Remove white spaces, comments, line breaks etc
         * @param $buffer string
         * @return string
         */
        //TODO: reorganize to be more intelligent
        private function SanitizeOutput($buffer)
        {
            $search = array(
                '/\>+/s', //strip whitespaces after tags, except space
                '/[^\S]+\</s', //strip whitespaces before tags, except space
                '/:[^\S]+/s',
                '/;[^\S]+/s',
                '!/\*.*?\*/!s',
                '/\{[^\S]+/s',
                '/[^\S]+\}/s',
                '/\n\s*\n/',
                '!<\!--.*?\--\>!s',
                '/\>[^\S]+\</s',
                '/(\s)+/s' // shorten multiple whitespace sequences
            );
            $replace = array(
                '>',
                '<',
                ':',
                ';',
                '',
                '{',
                '}',
                '',
                '',
                '',
                ' '
            );
            if (Config::systemBehavior()->isSanitizableHTML()) {
                $buffer = preg_replace($search, $replace, $buffer);
            } else {
                $buffer = preg_replace('(\r|\n|\t)', '', $buffer);
            }
            return $buffer;
        }

    }
}