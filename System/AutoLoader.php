<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 8:14 PM
 */

namespace System;


class AutoLoader
{
    public static function Load($classe)
    {
        $filename = __DIR__ . "/" . str_replace('\\', '/', $classe) . ".php";
        echo $filename . "<br>";
        if (file_exists($filename)) {
            require_once($filename);
        }
    }
}