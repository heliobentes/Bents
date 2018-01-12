<?php

namespace Bents\App\Controller {

    use Bents\App\DAO\ImageDAO;
    use Bents\App\Model\Image;
    use Bents\Application;
    use Bents\Core\Controller;
    use Bents\Core\Globalization\Globalization;
    use Bents\Core\Utils\GUID;

    /**
     * Class ImageController
     * @package Bents\App\Controller
     *
     */
    class ImageController extends Controller
    {

        /**
         * @authorize
         *
         */
        public function UploadPropertyPicture()
        {
            if(isset($_FILES)){
                $allowedTypes = ['image/jpeg','image/png','image/gif'];

                $temp = $_FILES['image']['tmp_name'];
                $fileSize = $_FILES['image']['size'];
                $newFileName = GUID::NewGuid().'.jpeg';
                $destination = Application::$publicPath.'images/property/'.$newFileName;

                $fileType = mime_content_type($temp);

                if(in_array($fileType,$allowedTypes)){
                    if ($fileSize < 1000000) {
                        //Compressing and saving image to the disc
                        $this->CompressAndSaveImage($temp,$destination,80);
                        //saving to the database
                        $Image = new Image(['idProperty'=>$_POST['idProperty'],'label'=>$_POST['label'],'isPrincipal'=>$_POST['isPrincipal']]);
                        $ImageDao = new ImageDAO();
                        $id = $ImageDao->SaveImageToProperty($Image);
                        die('{"status":true,"lastId":'.$id.',"error":""}');
                    } else  {
                        die('{"status":false,"lastId":0,"error":"'.Globalization::Resource('This file is too big. The max file size is 10MB').'"}');
                    }
                } else {
                    die('{"status":false,"lastId":0,"error":"'.Globalization::Resource('File not permitted. Only .JPG, .PNG and .GIF files are allowed.').'"}');
                }
            } else {
                die('{"status":false,"lastId":0,"error":"No file was uploaded."}');
            }

        }

        /**
         * @param $source string
         * @param $destination string
         * @param $quality int
         */
        private function CompressAndSaveImage($source, $destination, $quality) {

            $info = getimagesize($source);

            if ($info['mime'] == 'image/jpeg')
                $image = imagecreatefromjpeg($source);

            elseif ($info['mime'] == 'image/gif')
                $image = imagecreatefromgif($source);

            elseif ($info['mime'] == 'image/png')
                $image = imagecreatefrompng($source);

            imagejpeg($image, $destination, $quality);
        }




    }
}