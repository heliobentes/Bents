<?php

class SiteController
{

    public function ContratarAction()
    {
        $cadastrarFinancView = new ViewLib();
        $cadastrarFinancView->setView("../system/View/contratar.php");
        $cadastrarFinancView->MostraConteudo();
    }

}

?>
