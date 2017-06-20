<script type="text/javascript">
    function submitAlterarSenhaUserFormCadastro() {
        $("#AltSenha_Btn_AlterarSenha").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#AltSenha_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#AltSenha_Form_Cadastro').ajaxForm(options);

    });

    function validateForm(formData, jqForm, options) {

        enableSubmitBtn();
        var senhaAtual = $('input[name=senha_atual]').val();
        var senha = $('input[name=senha]').val();
        var senha2 = $('input[name=senha2]').val();

        if (!senhaAtual || !senha || !senha2) {
            alert('Preencha todos os campos!');
            return false;
        } else {
            if (senha != senha2) {
                alert('As senhas não são iguais!');
                return false;
            } else {
                $("#pageLoader").fadeIn(200);
            }
        }
    }

    function enableSubmitBtn() {
        $("#AltSenha_Btn_AlterarSenha").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind('click').click(function () {
            submitAlterarSenhaUserFormCadastro();
        });
    }

    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        $("#pageLoader").fadeOut(200);
        if (responseText === 'SenhaUserAlteradaSucesso') {
            document.getElementById("AltSenha_Form_Cadastro").reset();
            notificar('ok', 'Senha alterada com sucesso');
        } else {
            if (responseText == 'ErroSenhaUser') {
                notificar('erro', "Erro ao alterar a senha");
            } else {
                alert(responseText);
            }
        }

    }


</script>
<div class="pageTitle">Alteração de senha</div>
<div id="pageContent">
    <form id="AltSenha_Form_Cadastro" action="" method="post">
        <div class="box">
            <div class="boxIcon iconSenha"></div>
            <div class="boxTitulo">Alteração de senha</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Senha Atual:</div>
                    <div class="item">
                        <div class="input"><input type="password" name="senha_atual" value="" style="width: 200px"
                                                  required/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Nova Senha:</div>
                    <div class="item">
                        <div class="input"><input type="password" name="senha" value="" style="width: 200px" required/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Repetir Nova Senha:</div>
                    <div class="item">
                        <div class="input"><input type="password" name="senha2" value="" style="width: 200px" required/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="botoes">
            <div id="AltSenha_Btn_AlterarSenha" class="buttonForm btnSave"
                 onclick="submitAlterarSenhaUserFormCadastro()">
                <div></div>
                Salvar
            </div>
        </div>
        <input type='hidden' name='controller' value='Usuario'/>
        <input type='hidden' name='action' value='AlterarSenhaUsuario'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>

    </form>
</div>