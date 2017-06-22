<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\View;

    class HomeController extends Controller
    {

        public function Index()
        {
            View::$bag['teste'] = 'teste';
            $this->RenderView();

        }

    }
}