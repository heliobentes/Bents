<?php

namespace Bents\App\Controller {

    use Bents\App\DAO\AddressDAO;
    use Bents\App\DAO\FeatureDAO;
    use Bents\App\DAO\LaundryDAO;
    use Bents\App\DAO\ParkingDAO;
    use Bents\App\DAO\ProfileDAO;
    use Bents\App\DAO\PropertyDAO;
    use Bents\App\DAO\TypeDAO;
    use Bents\App\Model\Address;
    use Bents\App\Model\Property;
    use Bents\Core\Controller;
    use Bents\Core\Globalization\Globalization;
    use Bents\Core\Utils\Session;
    use Bents\Core\View;

    /**
     * Class PropertyController
     * @package Bents\App\Controller
     *
     */
    class PropertyController extends Controller
    {

        /**
         * @authorize
         *
         */
        public function Add()
        {

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
        /**
         * @authorize
         *
         */
        public function Save(){

            if(isset($_POST['Property'])) {
                $Property = new Property($_POST['Property']);

                //Address
                if(isset($_POST['Address'])) {
                    $Address = new Address($_POST['Address']);
                    $AddressDAO = new AddressDAO();
                    $idAddress = $AddressDAO->SaveAddress($Address);
                    $Property->idAddress = $idAddress;

                    //Real Estate
                    $Property->idRealEstate = Session::GetRealEstateId();

                    //Profile
                    $ProfileDAO = new ProfileDAO();
                    $Property->idProfile = $ProfileDAO->GetIdProfileByUserId(Session::GetUserId());


                    //Saving the property
                    $PropertyDAO = new PropertyDAO();
                    $propertyId = $PropertyDAO->SaveProperty($Property);

                    //Adding the features
                    if (isset($_POST['FeaturesIds'])) {
                        $FeatureDAO = new FeatureDAO();
                        $FeatureDAO->AddFeaturesToProperty($propertyId, $_POST['FeaturesIds']);
                    }

                    die('{"status":true,"lastId":' . $propertyId . ',"error":""}');
                } else {
                    die('{"status":false,"lastId":0,"error":"Address was empty"}');
                }
            } else {
                die('{"status":false,"lastId":0,"error":"Invalid property object"}');
            }

        }



    }
}