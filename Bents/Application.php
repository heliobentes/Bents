<?php
/**
 * Document : includes.php
 * Created on : 10/05/2013, 17:26
 * Author : Helio Bentes
 * Description: Arquivo que inicia e inclui todos os arquivos necessários
 */

namespace Bents {

    use Bents\Core\Config;
    use Bents\Core\StartUp;

    class Application
    {
        public static function Init()
        {

            ini_set("display_errors", 1);
            error_reporting(E_ALL);


            require_once 'Core/Config.php';

            if (Config::$showError) {
                ini_set("display_errors", 1);
                error_reporting(E_ALL);
            } else {
                ini_set("display_errors", 0);
                error_reporting(0);
            }

            date_default_timezone_set('UTC');

            session_start();
            spl_autoload_register(function ($classe) {
                $filename = "../" . str_replace('\\', '/', $classe) . ".php";

                if (file_exists($filename)) {
                    require_once($filename);
                }
            });

            new StartUp();
        }
    }

}