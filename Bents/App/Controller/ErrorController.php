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
    use Bents\Core\Config;
    use Bents\Core\Controller;
    use Bents\Core\Globalization\Globalization;
    use Bents\Core\Utils\Session;
    use Bents\Core\View;

    /**
     * Class ErrorController
     * @package Bents\App\Controller
     *
     */
    class ErrorController extends Controller
    {

        /**
         * @authorize
         *
         */
        public function Code($id)
        {
            include Config::SystemBehavior()->GetErrorPage($id);
            exit;


        }

    }
}