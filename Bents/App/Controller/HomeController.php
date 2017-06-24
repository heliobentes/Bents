<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\View;

    class HomeController extends Controller
    {
        protected $unprotectedActions = array('');

        public function Index()
        {
            View::$bag['teste'] = 'teste 2';
            $this->RenderView();

        }

    }
}