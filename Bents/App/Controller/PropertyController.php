<?php

namespace Bents\App\Controller {

    use Bents\App\DAO\FeatureDAO;
    use Bents\App\DAO\LaundryDAO;
    use Bents\App\DAO\ParkingDAO;
    use Bents\App\DAO\TypeDAO;
    use Bents\App\Model\Laundry;
    use Bents\Application;
    use Bents\Core\Controller;
    use Bents\Core\Globalization\Globalization;
    use Bents\Core\View;

    /**
     * Class PropertyController
     * @package Bents\App\Controller
     *
     */
    class PropertyController extends Controller
    {

        /**
         *
         * @authorize
         *
         */
        public function Add()
        {
            //sleep(2);



            $language = Globalization::GetLanguage();

            //getting the types
            $TypeDAO = new TypeDAO();
            View::$bag['types'] = $TypeDAO->GetAllTypes();

            //getting all features
            $FeaturesDAO = new FeatureDAO();
            View::$bag['features'] = $FeaturesDAO->GetAllFeatures();

            //getting all parking types
            $ParkingDAO = new ParkingDAO();
            View::$bag['parkingTypes'] = $ParkingDAO->GetAllParkingTypes();

            //getting all laundry types
            $LaundryDAO = new LaundryDAO();
            View::$bag['laundryTypes'] = $LaundryDAO->GetAllLaundryTypes();


            $this->RenderView();

        }

        public function Save(){

//            foreach ($_POST['image'] as $image){
//                $outputfile = Application::$publicPath.rand(0,9287391827398).'.jpg';
//                    /* read data (binary) */
//                    /* encode & write data (binary) */
//                    $ifp = fopen( $outputfile, "wb" );
//                    fwrite( $ifp, base64_decode(explode('base64,',$image)[1]) );
//                    fclose( $ifp );
//                    /* return output filename */
//                    //return( $outputfile );
//
//            }

            echo '<pre>';
            print_r($_POST);
            echo '</pre>';

        }



    }
}