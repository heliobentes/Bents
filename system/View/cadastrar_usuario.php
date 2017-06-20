<?php
$params = $this->getParams();

/**
 * @var FuncoesSistemaModel[] $arrayFuncoesSistema
 */
$arrayFuncoesSistema = $params['funcoes_sistema'];

if (isset($params['usuario']))
    $usuario = $params['usuario'];
?>
<script type="text/javascript">


    function CadUser_Fun_exibeCampos(value) {
        if (value === '2') {
            $('#CadUser_Div_Corresp').fadeIn('fast');
        } else {
            $('#CadUser_Div_Corresp').fadeOut('fast');
            $('#CadUser_Div_Corresp input').val("");
        }
    }


    $(document).ready(function () {
        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#CadUser_Form_Cadastro').ajaxForm(options);
        conteudoDoFormularioAoAbrir = $('#CadUser_Form_Cadastro').serialize();
        <?php if(isset($usuario)){ ?>
        setaCamposSelect();
        <?php } ?>
    });

    $('#marcar_todos').on('change', function (event) {
        $('div.ckbs_modulos input[type=checkbox]').prop('checked', $(this).prop('checked'));
    });


    function validateForm(formData, jqForm, options) {

        enableSubmitBtn();
        var nome = $('input[name=nome]').val();
        var login = $('input[name=login]').val();
        var senha = $('input[name=senha]').val();
        var senha2 = $('input[name=senha2]').val();

        var tipoUsuario = $('select[name=tipo_usuario]').val();
        var correspondente = $('input[name=correspondente]').val();
        if (!nome || <?php if(!isset($usuario)){ ?>!senha || !senha2 || !login ||<?php } ?> !tipoUsuario) {


            alert('Preencha todos os campos!');
            return false;

        } else {
            if (senha != senha2) {
                alert('As senhas não são iguais!');
                return false;
            } else {
                if (tipoUsuario == 'Correspondente' && !correspondente) {
                    alert('Você deve escolher um Correspondente!');
                    return false;
                } else {
                    $("#pageLoader").fadeIn(200);
                }
            }

        }
    }

    function enableSubmitBtn() {
        $("#CadUser_Btn_CadastrarUsuario").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind('click').click(function () {
            submitCadUserFormCadastro();
        });
    }

    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        $("#pageLoader").fadeOut(200);
        if (responseText === 'CadUserSucesso') {
            document.getElementById("CadUser_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
        } else {
            if (responseText === 'ErroCadUser') {
                notificar('erro', "Erro ao cadastrar usuário");
            } else {
                if (responseText === 'ErroEditUser') {
                    notificar('erro', "Erro ao editar usuário");
                } else {
                    alert(responseText);
                }
            }
        }

    }
    <?php if(isset($usuario)){ ?>
    function setaCamposSelect() {
        $('select[name=tipo_usuario]').val("<?php echo $usuario->getIdTipoUsuario(); ?>");
    }
    <?php }?>
</script>
<div class="pageTitle">Cadastrar Usuário</div>
<div id="pageContent">
    <form id="CadUser_Form_Cadastro" action="" class="askSave" method="POST">
        <div class="box">
            <div class="boxIcon iconPessoa"></div>
            <div class="boxTitulo">Dados do Usuário</div>
            <div class="boxContent">

                <div class="campo">
                    <div class="label">Nome Completo:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome" autofocus
                                                  value="<?php if (isset($usuario)) echo $usuario->getNome(); ?>"
                                                  style="width: 400px"
                                                  tabindex="1" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Login (email):</div>
                    <div class="item">
                        <div class="input"><input type="email" name="login"
                                                  value="<?php if (isset($usuario)) echo $usuario->getLogin(); ?>"
                                                  style="width:400px" tabindex="1" required <?php if (isset($usuario)) {
                                echo 'disabled';
                            } ?>/>
                        </div>
                    </div>
                </div>
                <?php if (!isset($usuario)) { ?>
                    <div class="clear"></div>
                    <div class="campo">
                        <div class="label">Senha:</div>
                        <div class="item">
                            <div class="input"><input type="password" name="senha" value="" style="width:160px"
                                                      tabindex="1" required/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Repetir Senha:</div>
                        <div class="item">
                            <div class="input"><input type="password" name="senha2" value="" style="width:160px"
                                                      tabindex="1" required/></div>
                        </div>
                    </div>
                <?php } ?>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Tipo de usuário:</div>
                    <div class="item">
                        <div class="input">
                            <select name="tipo_usuario" style="width: 180px" tabindex="15"
                                    onchange="CadUser_Fun_exibeCampos(this.value);" required>
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_usuario'] as $tipoUsuario) { ?>
                                    <option
                                            value="<?php echo $tipoUsuario->getIdTipoUsuario(); ?>"><?php echo $tipoUsuario->getTipoUsuario(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>

                <div class="campo" id="CadUser_Div_Corresp" style="display: none;">
                    <div class="label">Correspondente:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="id_correspondente"
                                                  value="<?php if (isset($usuario)) echo $usuario->getCorrespondente(); ?>"
                                                  style="width:400px"
                                                  tabindex="1" required/></div>
                    </div>
                </div>


            </div>
            <div class="box">
                <br/>
                <br/>
                <div class="boxIcon iconSenha"></div>
                <div class="boxTitulo">Permissões</div>
                <div class="boxContent">
                    <div class="campo">
                        <div class="label"><input type="checkbox" value="1" id="marcar_todos"><strong>Marcar
                                Todos</strong></div>

                    </div>
                    <div class="clear"></div>
                    <div class="ckbs_modulos">
                        <?php

                        $ultimaFuncaoEscrita = '';

                        foreach ($arrayFuncoesSistema as $funcao) {

                            if ($ultimaFuncaoEscrita != $funcao->getModuloSistema()->getNome()) {
                                $ultimaFuncaoEscrita = $funcao->getModuloSistema()->getNome();
                                ?>

                                <input type="checkbox" value="<?php echo $funcao->getModuloSistema()->getId(); ?>"
                                       name="ckb_modulos" style="position: relative; float: left;">
                                <h1 style="position: relative; float: left; margin-left: 5px;"> <?php echo $funcao->getModuloSistema()->getNome(); ?></h1>
                                <div class="clear"></div>
                            <?php } ?>

                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>


        <div class="botoes">
            <?php if (isset($usuario)) { ?>
                <div id="CadUser_Btn_SalvarUsuario" class="buttonForm btnSave" onclick="submitCadUserFormCadastro()">
                    <div></div>
                    Salvar Usuário
                </div>
            <?php } else { ?>
                <div id="CadUser_Btn_CadastrarUsuario" class="buttonForm btnCad" onclick="submitCadUserFormCadastro()">
                    <div></div>
                    Cadastrar Usuário
                </div>
            <?php } ?>
        </div>
        <?php if (isset($usuario)) { ?>
            <input type='hidden' name='controller' value='Usuario'/>
            <input type='hidden' name='action' value='EditarUsuario'/>
            <input type='hidden' name='id_usuario' value="<?php echo $usuario->getId(); ?>"/>
        <?php } else { ?>
            <input type='hidden' name='controller' value='Usuario'/>
            <input type='hidden' name='action' value='CadastrarUsuario'/>
        <?php } ?>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
</div>
