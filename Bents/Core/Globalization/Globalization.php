<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/23/17
 * Time: 9:03 PM
 */

namespace Bents\Core\Globalization {


    use Bents\Application;
    use Bents\Core\Configuration\Config;

    class Globalization
    {
        public static function Res()
        {
            $json = file_get_contents(Application::$resPath . Config::globalization()->getLang() . '.json');
            return json_decode($json);
        }
    }
}