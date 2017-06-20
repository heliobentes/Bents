<?php

namespace System {
    class Controller
    {
        public function RenderView($viewName = null, $params = null)
        {
            $view = new View();
            $view->SetView($viewName);
            $view->SetParams($params);

            echo $view->GetContents();
        }

    }

}