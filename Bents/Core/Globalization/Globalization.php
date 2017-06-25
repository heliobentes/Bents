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
        public static function Res()
        {
            $json = file_get_contents(Application::$resPath . Config::Globalization()->GetLang() . '.json');
            return json_decode($json);
        }
    }
}