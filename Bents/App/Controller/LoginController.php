<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\View;

    class LoginController extends Controller
    {
        protected $unprotectedActions = array('');

        public function Login()
        {
            View::$bag['teste'] = 'teste 2';
            $this->RenderView();

        }

    }
}