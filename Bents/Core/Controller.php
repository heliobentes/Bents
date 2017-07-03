<?php

namespace Bents\Core {

    use Bents\Core\StartUp\StartUp;

    class Controller
    {

        public static function RedirectToRequest($controller, $action)
        {
            $current_url = urlencode((isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
            header('Location:/' . $controller . '/' . $action . '?destination=' . $current_url);
        }

        public static function RedirectToAction($controller, $action)
        {
            StartUp::InitRequest($controller, $action);
        }


        /**
         * @param mixed $model
         * @param string $viewName
         */
        public function RenderView($model = null, $viewName = null)
        {
            $view = new View();
            $view->SetView($viewName);

            echo $view->Render($model);

            //closing the connection
            DAO::$dbConn == null;
        }

    }

}