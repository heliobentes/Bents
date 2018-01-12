<?php

namespace Bents\Core\Utils {

    use Bents\Core\Config;
    use Bents\Core\Log;
    use Bents\Core\StartUp\StartUp;

    class Error
    {
        public static function Deal($type,$error){

            if($error=='' || $error==null){
                $error = "Unknown error, please contact us! \nAction: ".StartUp::$action."\nController: ".StartUp::$controller;
            }

            Log::SaveLog($error);

            switch ($type){
                case 500:
                    $code = 500;
                    $codeText = '500 Internal Server Error';
                    break;

                default:
                    $code = 500;
                    $codeText = '500 Internal Server Error';
            }


            header($_SERVER['SERVER_PROTOCOL'] . ' '.$codeText, true, $code);
            //Came from Ajax
            if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
                die('{"status":false,"lastId":0,"error":"'.$error.'"}');
            } else {
                include Config::SystemBehavior()->GetErrorPage($code);
                exit;
            }
        }
    }
}