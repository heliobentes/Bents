<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\Globalization\Globalization;
    use Bents\Core\Model\User;
    use Bents\Core\StartUp\StartUp;
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

            $this->RenderView();

        }



    }
}