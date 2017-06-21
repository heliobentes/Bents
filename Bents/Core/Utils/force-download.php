<?php
session_start();
// Allow direct file download (hotlinking)?
// Empty - allow hotlinking
// If set to nonempty value (Example: example.com) will only allow downloads when referrer contains this text
define('ALLOWED_REFERRER', '');

if (!(isset($_SESSION['token']) && isset($_GET['token']) && $_GET['token'] == $_SESSION['token'])) {
    die("Internal server error. Please contact App administrator.");
}

$file_path = $_GET['file'];
//Adicionado para baixar com nome original
$originalFileName = $_GET['name'];
// required for IE, otherwise Content-disposition is ignored
if (ini_get('zlib.output_compression'))
    ini_set('zlib.output_compression', 'Off');

//strrchr Encontra a ultima ocorrência de um caractere em uma string
$file_extension = strtolower(substr(strrchr($file_path, "."), 1));

if ($file_path == "") {
    echo "<html><title>Download</title><body>ERRO</body></html>";
    exit;
} elseif (!file_exists($file_path)) {
    echo "<html><title>Download</title><body>ERRO</body></html>";
    exit;
}

if (ALLOWED_REFERRER !== ''
    && (!isset($_SERVER['HTTP_REFERER']) || strpos(strtoupper($_SERVER['HTTP_REFERER']), strtoupper(ALLOWED_REFERRER)) === false)
) {
    die("Internal server error. Please contact App administrator.");
};

// Allowed extensions list in format 'extension' => 'mime type'
// If myme type is set to empty string then script will try to detect mime type 
// itself, which would only work if you have Mimetype or Fileinfo extensions
// installed on server.
$allowed_ext = array(

    // archives
    'zip' => 'application/zip',

    // documents
    'pdf' => 'application/pdf',
    'doc' => 'application/msword',
    'xls' => 'application/vnd.ms-excel',
    'ppt' => 'application/vnd.ms-powerpoint',

    // executables
    'exe' => 'application/octet-stream',

    // images
    'gif' => 'image/gif',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',

    // audio
    'mp3' => 'audio/mpeg',
    'wav' => 'audio/x-wav',

    // video
    'mpeg' => 'video/mpeg',
    'mpg' => 'video/mpeg',
    'mpe' => 'video/mpeg',
    'mov' => 'video/quicktime',
    'avi' => 'video/x-msvideo'
);

// Nullbyte hack fix
if (strpos($_GET['file'], "\0") !== FALSE) die('');

// check if allowed extension
if (!array_key_exists($file_extension, $allowed_ext)) {
    die("Not allowed file type.");
}

// get mime type
if ($allowed_ext[$file_extension] == '') {
    $mtype = '';
    // mime type is not set, get from server settings
    if (function_exists('mime_content_type')) {
        $mtype = mime_content_type($file_path);
    } else if (function_exists('finfo_file')) {
        $finfo = finfo_open(FILEINFO_MIME); // return mime type
        $mtype = finfo_file($finfo, $file_path);
        finfo_close($finfo);
    }
    if ($mtype == '') {
        $mtype = "application/force-download";
    }
} else {
    // get mime type defined by admin
    $mtype = $allowed_ext[$file_extension];
}

header("Pragma: public"); // required
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private", false); // required for certain browsers
header("Content-Description: File Transfer");
header("Content-Type: $mtype");
// change, added quotes to allow spaces in filenames, by Rajkumar Singh
header("Content-Disposition: attachment; filename=\"" . $originalFileName . "\";");
header("Content-Transfer-Encoding: binary");
header("Content-Length: " . filesize($file_path));
readfile($file_path);
exit();
//Código abaixo provavelmente para ter o progresso de download correto
//$file = @fopen($file_path,"rb");
//if ($file) {
//  while(!feof($file)) {
//    print(fread($file, 1024*8));
//    flush();
//    if (connection_status()!=0) {
//      @fclose($file);
//      die();
//    }
//  }
//  @fclose($file);
//}


?>