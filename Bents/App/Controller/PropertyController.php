<?php

namespace Bents\App\Controller {

    use Bents\App\DAO\FeatureDAO;
    use Bents\App\DAO\TypeDAO;
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
            View::$bag['types'] = $TypeDAO->GetAllTypesByLanguage($language);

            //getting all features
            $FeaturesDAO = new FeatureDAO();
            View::$bag['features'] = $FeaturesDAO->GetAllFeatures();


            $this->RenderView();

        }



    }
}