<?php
/*
 * Document : login.php
 * Created on : 31/05/2013, 14:53
 * Author : Helio Bentes
 * Description: Arquivo de login do sistema
 */
?>

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
            file_get_contents('../system/View/css/reset.css') .
            file_get_contents('../system/View/css/pages.css') .
            '</style>';
        ?>
    </head>
    <body>
    <div id="notChrome">
        <div class="chromeIcon"></div>
        <div class="text">Que pena!</div>
        <div class="subText">Para acessar o sistema você deve utilizar o Google Chrome.</div>
        <div class="installChrome" onclick="window.location = 'https://www.google.com/intl/pt-BR/chrome/browser/'">
            Instalar o Google Chrome
        </div>
    </div>
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
            <img src="img/login/news.jpg" alt="" width="580">
        </div>
        <div id="formLogin">
            <div id="msgLogin"><?php
                if ($this->getParams() != '') {
                    $msg = $this->getParams();
                    if ($msg['msg']) {
                        echo $msg['msg'];
                    }
                }
                ?></div>
            <label>Login:
                <input type="email" name="login" id="login" placeholder="Digite seu login (email)"></label>
            <label>Senha:
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha">
            </label>
            <div id="buttonLogin">
                <div></div>
                Entrar
            </div>
            <div id="dicaLogin"> Não consigo acessar minha conta!</div>
            <div id="loader">
                <img src="img/loader.gif" alt="" height="32" width="32"><br>
                Aguarde, verificando seus dados...
            </div>
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

$script[] = "../system/View/library/jquery/jquery.js";
$script[] = "../system/View/js/pagesScripts.js";

$html = CarregarEGerarOsJavaScriptsFundamentaisDoSitema($script);

echo $html;
?>