<?php

namespace Bents\Core {
    class Controller
    {
        /**
         * List Actions that will bypass login check
         * @var array
         */
        protected $unprotectedActions = array();

        /**
         * @var $action string
         * @return bool
         */
        public function isProtectedAction($action): bool
        {
            return !in_array($action, $this->unprotectedActions);
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
            DAO::$dbCon == null;
        }

    }

}