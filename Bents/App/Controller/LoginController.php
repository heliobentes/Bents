<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\View;

    class LoginController extends Controller
    {
        protected $unprotectedActions = array('');

        public function Login()
        {
            View::$bag['destination'] = filter_var($_GET['destination'], FILTER_VALIDATE_URL);

            $this->RenderView();

        }

    }
}