<?php

/* @var $usuarioNaSessao UsuarioModel */
$usuarioNaSessao = unserialize($_SESSION['usuario']);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta http-equiv="content-language" content="pt-br"/>
    <meta name="author"
          content="Imovi Tecnologia Imobiliária, contato@imovi.com.br :: (32)88625537 / (32)91308008 / (32) 2102-3435 ramal 240 :: www.imovi.com.br"/>

    <title>imovi :. COBA</title>
    <?php echo
        '<style type="text/css" media="all" >' .
        file_get_contents('../system/View/css/reset.css') .
        file_get_contents('../system/View/css/style.css') .
        file_get_contents('../system/View/library/mCustomScrollbar/jquery.mCustomScrollbar.css') .
        '</style>';
    ?>

    <script type="text/javascript" src="https://www.google.com/jsapi"></script>


</head>
<body>
<div id="systemLoader">
    <img src="img/loader.gif" width="32" height="32" alt="loader"/>
    carregando...
</div>
<div id="all">
    <!-- INICIO DO TOPO -->
    <div id="top">
        <div id="logoSistema"></div>
        <div id="sairDoSistema" class="button" onclick="window.location = '?controller=Login&action=FazerLogoff';">Sair
            do sistema
        </div>
    </div>

    <!-- FIM DO TOPO -->

    <div id="espacadorAzul"></div>
    <!-- INICIO DA NOTIFICACAO -->
    <div id="notificacoes">

    </div>
    <!-- FIM DA NOTIFICACAO -->

    <!-- INICIO DA JANELA DE CADASTRO RAPIDO -->
    <div id="lightBox">
        <div class="pageLoader">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>
        <div id="fecharJanelaDeCadastroRapido" class="button btnClose" onclick="fecharCadastroRapido();">
            <div></div>
        </div>
        <div id="lightBoxPageContent">

        </div>
    </div>
    <!-- FIM DA JANELA DE CADASTRO RAPIDO -->
    <div id="contentWrap">
        <!-- INICIO DO MENU -->
        <div id="menu">
            <?php if (UsuarioController::UsuarioTemPermissaoAoModulo($usuarioNaSessao->getId(), "Dashboard")) { ?>
                <div class="modulo" id='modulo1'>
                    <div class="menuIcon"></div>
                    <div class="menuText">Home</div>
                </div>
                <ul>
                    <li onclick="carregarView('Base', 'Dashboard');">Dashboard</li>
                </ul>
            <?php } ?>

            <?php if (UsuarioController::UsuarioTemPermissaoAoModulo($usuarioNaSessao->getId(), "Participantes")) { ?>
                <div class="modulo" id='modulo2'>
                    <div class="menuIcon"></div>
                    <div class="menuText">Participantes</div>
                </div>
                <ul>
                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Participantes", "Cadastrar vendedor")) { ?>
                        <li onclick="carregarView('Participante', 'CadastrarVendedorView');">Cadastrar vendedor</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Participantes", "Cadastrar comprador")) { ?>
                        <li onclick="carregarView('Participante', 'CadastrarCompradorView');">Cadastrar comprador</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Participantes", "Documentações")) { ?>
                        <li onclick="carregarView('Participante', 'DocumentacoesParticipanteView');">Documentações</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Participantes", "Imóveis")) { ?>
                        <li onclick="carregarView('Participante', 'ImoveisParticipanteView');">Imóveis</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Participantes", "Pesquisar")) { ?>
                        <li onclick="carregarView('Participante', 'PesquisarParticipanteView');">Pesquisar</li>
                    <?php } ?>

                </ul>
            <?php } ?>

            <?php if (UsuarioController::UsuarioTemPermissaoAoModulo($usuarioNaSessao->getId(), "Propostas")) { ?>
                <div class="modulo" id='modulo3'>
                    <div class="menuIcon"></div>
                    <div class="menuText">Propostas</div>
                </div>
                <ul>
                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Propostas", "Cadastrar")) { ?>
                        <li onclick="carregarView('Financiamento', 'CadastrarFinanciamentoView');">Cadastrar</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Propostas", "Pesquisar")) { ?>
                        <li onclick="carregarView('Financiamento', 'PesquisarFinanciamentoView');">Pesquisar</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Propostas", "Adicionar nova interação")) { ?>
                        <li onclick="carregarView('Financiamento', 'PesquisarFinanciamentoView');">Adicionar nova
                            interação
                        </li>
                    <?php } ?>

                </ul>
            <?php } ?>

            <?php if (UsuarioController::UsuarioTemPermissaoAoModulo($usuarioNaSessao->getId(), "Usuários")) { ?>
                <div class="modulo" id='modulo4'>
                    <div class="menuIcon"></div>
                    <div class="menuText">Usuários</div>
                </div>
                <ul>
                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Usuários", "Cadastrar")) { ?>
                        <li onclick="carregarView('Usuario', 'CadastrarUsuarioView');">Cadastrar</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Usuários", "Pesquisar")) { ?>
                        <li onclick="carregarView('Usuario', 'PesquisarUsuarioView');">Pesquisar</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Usuários", "Alterar Minha Senha")) { ?>
                        <li onclick="carregarView('Usuario', 'AlterarSenhaView');">Alterar Minha Senha</li>
                    <?php } ?>

                </ul>
            <?php } ?>

            <?php if (UsuarioController::UsuarioTemPermissaoAoModulo($usuarioNaSessao->getId(), "Credenciados")) { ?>
                <div class="modulo" id='modulo5'>
                    <div class="menuIcon"></div>
                    <div class="menuText">Credenciados</div>
                </div>
                <ul>
                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Credenciados", "Cadastrar")) { ?>
                        <li onclick="carregarView('Correspondente', 'CadastrarCorrespondenteView');">Cadastrar</li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Credenciados", "Pesquisar")) { ?>
                        <li onclick="carregarView('Correspondente', 'PesquisarCorrespondenteView');">Pesquisar</li>
                    <?php } ?>

                </ul>
            <?php } ?>

            <?php if (UsuarioController::UsuarioTemPermissaoAoModulo($usuarioNaSessao->getId(), "Formulários")) { ?>
                <div class="modulo" id='modulo6'>
                    <div class="menuIcon"></div>
                    <div class="menuText">Formulários</div>
                </div>
                <ul>
                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Formulários", "Cadastrar Formulários")) { ?>
                        <li onclick="carregarView('ModeloFormulario', 'CadastrarModeloFormularioView');"> Cadastrar
                            Formulários
                        </li>
                    <?php } ?>

                    <?php if (UsuarioController::UsuarioTemPermissaoAFuncao($usuarioNaSessao->getId(), "Formulários", "Imprimir Formulários")) { ?>
                        <li onclick="carregarView('ModeloFormulario', 'ImprimirModeloFormularioView');"> Imprimir
                            Formulários
                        </li>
                    <?php } ?>

                </ul>
            <?php } ?>
        </div>

        <!-- FIM DO MENU -->


        <!-- INICIO DO CONTEUDO -->

        <div id="pageLoader" class="pageLoader">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>
        <div id="content">

        </div>
        <div id='helpToggle' onclick="toggleHelp(false);"></div>
        <div id='help'>

            <div id="helpLoader">
                <img src="img/loader.gif" width="32" height="32" alt="loader"/>
                carregando...
            </div>
            <h1>Precisando de ajuda?</h1>
            <div id="helpContent">

            </div>
            <h2>Ainda com problemas?</h2>

            <h3>Entre em contato com seu Gestor para tirar suas dúvidas.</h3>
        </div>
    </div>
</div>
<!-- FIM DO CONTEUDO -->
</div>

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
$script[] = "../system/View/library/jquery/jquery.form.min.js";
$script[] = "../system/View/library/jquery-ui.custom/js/jquery-ui.custom.min.js";
$script[] = "../system/View/library/moment/moment.min.js";
$script[] = "../system/View/library/mousewheel/jquery.mousewheel.min.js";
$script[] = "../system/View/library/mCustomScrollbar/jquery.mCustomScrollbar.min.js";
$script[] = "../system/View/library/autoresize/jquery.autosize-min.js";
$script[] = "../system/View/library/masked/mask.js";
$script[] = "../system/View/library/price_format/jquery.price_format.1.8.min.js";
$script[] = "../system/View/library/cookie/jquery.cookie.js";
$script[] = "../system/View/js/scripts.js";

$html = CarregarEGerarOsJavaScriptsFundamentaisDoSitema($script);

echo $html;
?>
</body>
</html>
