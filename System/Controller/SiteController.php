<?php

class SiteController
{

    public function ContratarAction()
    {
        $cadastrarFinancView = new View();
        $cadastrarFinancView->setView("../System/View/contratar.php");
        $cadastrarFinancView->MostraConteudo();
    }

}

?>
