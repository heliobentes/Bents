<?php

/**
 * Document : BaseController.php
 * Created on : 03/06/2013, 16:14
 * Author : Helio Bentes
 * Description: Controller da base
 */
class BaseController
{
    public function PrincipalAction()
    {
        $view = new ViewLib();
        $view->setView("../system/View/base.php");
        $view->MostraConteudo();
    }

    public function CarregaViewAction()
    {
        $view = new ViewLib();
        $view->setView($_REQUEST['view']);
        $view->MostraConteudo();

    }

    public function DashboardAction()
    {
        $view = new ViewLib();
        $view->setView("../system/View/dashboard.php");
        $view->MostraConteudo();
    }

    /**
     * Mantem a sessão ativa
     * Ajax envia essa requisição de 10 em 10 minutos
     *
     */
    public function KeepSessionAlive()
    {
        die();
    }

}