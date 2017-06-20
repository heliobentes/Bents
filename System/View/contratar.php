<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta http-equiv="content-language" content="pt-br"/>
    <meta name="author"
          content="Imovi Sistemas, contato@imovi.com.br :: (32)88625537 / (32)91308008 / (32) 2102-3435 ramal 240 :: www.imovi.com.br"/>
    <title>imovi :. COBA</title>
    <?php echo
        '<style type="text/css" media="all" >' .
        file_get_contents('../System/View/css/reset.css') .
        file_get_contents('../System/View/css/pages.css') .
        file_get_contents('../System/View/library/jquery-ui.custom/css/ui-lightness/jquery-ui.custom.min.css') .
        '</style>';
    ?>
</head>
<body>
<div id="top">
    <div id="logoSistema"></div>
    <div class="menu">
        <a href="?controller=Site&action=SaibaMais">Saiba Mais</a>
        <a href="?controller=Login&action=Login">Login</a>
    </div>
    <a href="?controller=Site&action=Contratar">
        <div id="buttonCadastrar">
            <div></div>
            Contrate!
        </div>
    </a>
</div>
<div id="content">
    <div id="news">
        <h1>Escolha seu perfil de cliente!</h1>

        <h2>Quantos usuários acessarão o sistema?</h2>
        <div id="sliderUsuariosValor">Será(ão) <strong>1</strong> pessoa(s) usando o sistema</div>
        <div id="sliderUsuarios"></div>
    </div>
    <div id="formLogin">
        <h1>Calculadora</h1>
        <h2 id="calculadoraCorrespondentes">Correspondentes: <strong>10</strong> x R$ 8,50</h2>
        <h2 id="calculadoraUsuarios">Usuários: <strong> 10</strong> x R$ 4,50</h2>
        <h3 id="calculadoraTotal">Total: R$ <strong>89,50</strong> <span>/ mês</span></h3>
    </div>

</div>
</body>
</html>

<?php

function CarregarEGerarOsJavaScriptsFundamentaisDoSitema($array)
{

    $script = "<script async defere language='javascript' type='text/javascript'> ";

    for ($x = 0; $x < sizeof($array); $x++) {
        $script .= " " . file_get_contents($array[$x]);
    }


    $script .= " </script>";

    return $script;
}

$script = array();

$script[] = "../System/View/library/jquery/jquery.js";
$script[] = "../System/View/library/jquery-ui.custom/js/jquery-ui.custom.min.js";
$script[] = "../System/View/js/pagesScripts.js";

$html = CarregarEGerarOsJavaScriptsFundamentaisDoSitema($script);

echo $html;
?>