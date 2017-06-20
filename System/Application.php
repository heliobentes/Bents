<?php
/**
 * Document : includes.php
 * Created on : 10/05/2013, 17:26
 * Author : Helio Bentes
 * Description: Arquivo que inicia e inclui todos os arquivos necessários
 */

namespace System {
    class Application
    {
        public static function Init()
        {
            //Modificar para ir ao ar
            ini_set("display_errors", 1);
            error_reporting(E_ALL);

            session_start();
            spl_autoload_register(function ($classe) {
                $filename = "../" . str_replace('\\', '/', $classe) . ".php";
                echo $filename . "<br>";
                if (file_exists($filename)) {
                    require_once($filename);
                }
            });

            $startUp = new StartUp();
            $startUp->Dispatch();
        }
    }

}