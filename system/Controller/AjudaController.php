<?php

class AjudaController
{
    public function ObterAjudaAction()
    {
        if (isset($_POST['controllerAjuda']) and isset($_POST['actionAjuda']))
            echo AjudaDAO::ObterAjuda($_POST['controllerAjuda'], $_POST['actionAjuda']);
    }
}
