<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/23/17
 * Time: 9:03 PM
 */

namespace Bents\Core\Globalization {


    use Bents\Application;
    use Bents\Core\Config;

    class Globalization
    {
        /**
         * Return the asked resource ($res) in the current language.
         * If this resource is not available in the current language it will be searched into the default language
         * if it still not found $res will be returned
         * @param string $res
         * @return string|int|mixed
         */
        public static function Resource($res)
        {
            $json = file_get_contents(Application::$resPath . self::GetLanguage() . '.json');
            $obj = json_decode($json);

            if (isset($obj->$res)) {
                return $obj->$res;
            } else {
                $json = file_get_contents(Application::$resPath . Config::Globalization()->GetDefaultLanguage() . '.json');
                $obj = json_decode($json);
                if (isset($obj->$res)) {
                    return $obj->$res;
                } else {
                    return $res;
                }
            }
        }

        /**
         * Get current language based on a Cookie or, if it's not present, on the browser's language
         * if it's still not present, return the default language
         * @return string
         */
        public static function GetLanguage()
        {
            if (isset($_COOKIE['language']) and file_exists(Application::$resPath . $_COOKIE['language'] . '.json')) {

                return $_COOKIE['language'];
            } else {
                if (file_exists(Application::$resPath . $_SERVER['HTTP_ACCEPT_LANGUAGE'] . '.json')) {
                    return $_SERVER['HTTP_ACCEPT_LANGUAGE'];
                } else {
                    $lang = explode(",", $_SERVER['HTTP_ACCEPT_LANGUAGE'])[0];
                    if (file_exists(Application::$resPath . $lang . '.json')) {
                        return $lang;
                    } else {
                        return Config::Globalization()->GetDefaultLanguage();
                    }
                }
            }
        }

        public static function SetLanguage(string $language = '')
        {
            if ($language != '') {
                setcookie('language', $language,0,'/');
            }
        }

        public static function GetDefaultLanguage(){
            return Config::Globalization()->GetDefaultLanguage();
        }

        public function GenerateJSResource(){
            return file_get_contents(Application::$resPath . self::GetLanguage() . '.json');
        }
    }
}