<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 10:16 PM
 */

namespace Bents\Core {


    class Log
    {
        /**
         * @param $e \Exception
         * Message to save in the log file
         */
        public static function SaveLog($e)
        {
            if (Config::debug()->isLogEnabled()) {
                $fp = fopen(__DIR__ . '/Logs/log.txt', 'a');

                $content = "======== ERROR ========\r\n";
                $content .= date('m-d-Y H:i:s') . "\r\n";
                $content .= $e->getFile() . " at line " . $e->getLine() . "\r\n";
                $content .= $e->getMessage() . "\r\n";
                $content .= "========================\r\n";
                $content .= "\r\n";

                fwrite($fp, $content);
                fclose($fp);
            }
        }
    }
}