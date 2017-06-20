<?php
/**
 * Document : includes.php
 * Created on : 10/05/2013, 17:26
 * Author : Helio Bentes
 * Description: Arquivo que inicia e inclui todos os arquivos necessários
 */

session_start();


// include dos arquivos necessarios
function __autoload($classe)
{
    $filename = "../system/Model/$classe.php";
    if (file_exists($filename)) {
        require_once $filename;
    }
    //incluindo os Controllers
    $filename = "../system/Controller/$classe.php";
    if (file_exists($filename)) {
        require_once $filename;
    }
    //Incluindo as Libs
    $filename = "../system/Lib/$classe.php";
    if (file_exists($filename)) {
        require_once $filename;
    }
    //Incluindo os DAOs
    $filename = "../system/DAO/$classe.php";
    if (file_exists($filename)) {
        require_once $filename;
    }

}

//Incluindo os Utils
require_once '../system/Utils/SessionUtils.php';
require_once '../system/Utils/PasswordUtils.php';
require_once '../system/Utils/DataManipulator.php';
require_once '../system/Utils/DataValidator.php';


$coba = new CobaLib();
$coba->dispatch();






