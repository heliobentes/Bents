<?php

namespace Bents\App\Controller {

    use Bents\App\DAO\FeatureDAO;
    use Bents\App\DAO\LaundryDAO;
    use Bents\App\DAO\ParkingDAO;
    use Bents\App\DAO\PropertyDAO;
    use Bents\App\DAO\TypeDAO;
    use Bents\App\Model\Laundry;
    use Bents\App\Model\Property;
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

            $Property = new Property($_POST['Property']);

            $Property->idAddress = 1;
            $Property->idRealEstate = 1;
            $Property->idProfile = 1;


            $PropertyDAO = new PropertyDAO();
            echo '<pre>';
            print_r($Property);
            echo '</pre>';
            print_r($PropertyDAO->SaveProperty($Property));


        }



    }
}