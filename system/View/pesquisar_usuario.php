<?php
$params = $this->getParams();
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

    function submitPesqUserFormCadastro() {
        $("#PesquUser_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            dataType: 'json',
            beforeSubmit: function () {
                $("#pageLoaderResults").fadeIn(200);
            },
            success: processJson

        };

        $('#PesquUser_Form_Cadastro').ajaxForm(options);

    });

    function deletaUser(id_user) {
        if (confirm('Deseja Excluir este usuário?\n\nTodas suas informações serao perdidas e não poderão mais ser recuperadas.')) {
            var data = {
                controller: 'Usuario',
                action: 'DeletaUsuario',
                id_usuario: id_user,
                token: $('input[name=token]').val()
            };
            $.ajax({
                url: 'index.php',
                type: 'POST',
                data: data
            }).done(function (content) {
                if (content === 'userNotLogged') {
                    userNotLogged = true;
                    window.location = 'index.php';
                } else {
                    if (content === 'UserDeleted') {
                        $('#PesquUser_Tr_User' + id_user).remove();
                    } else {
                        notificar('erro', "Erro ao excluir usuário");
                    }
                }
            });
        }
    }
    /* Resultado de usuários com as propriedades com mesmo nome do objeto Usuario */
    function processJson(data) {
        $("#pageLoaderResults").fadeOut(200);
        $("#PesquUser_Div_ResultsInTable table").remove();
        var usuario = data;
        var result = '<table class="item">' +
            '<thead>' +
            '<th>Nome</th>' +
            '<th>Login</th>' +
            '<th>Tipo Usuario</th>' +
            '<th>Correspondente</th>' +
            '<th>Ações</th>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < data.length; i++) {
            result += '<tr id="PesquUser_Tr_User' + usuario[i].id + '">' +
                '<td>' + usuario[i].nome + '</td>' +
                '<td>' + usuario[i].login + '</td>' +
                '<td>' + usuario[i].tipoUsuario + '</td>' +
                '<td>' + usuario[i].correspondente + '</td>' +
                '<td>' +
                '<div class="acao acaoEditar" onclick="carregarViewRapida(\'Usuario\', \'CadastrarUsuarioView\', ' + usuario[i].id + ');">' +
                '</div><div class="acao acaoExcluir" onclick="deletaUser(' + usuario[i].id + ');"></div>' +
                '</td>' +
                '</tr>';
        }
        result += '</tbody>' +
            '</table>';

        $('#PesquUser_Div_ResultsInTable').append(result);
    }

</script>
<div class="pageTitle">Pesquisar Usuário</div>
<div id="pageContent">
    <form id="PesquUser_Form_Cadastro" action="" method="POST">
        <div class="box">
            <div class="boxIcon iconPessoa"></div>
            <div class="boxTitulo">Dados do Usuário</div>
            <div class="boxContent">

                <div class="campo">
                    <div class="label">Nome:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome" value="" style="width: 400px" tabindex="1"/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Login (email):</div>
                    <div class="item">
                        <div class="input"><input type="text" name="login" value="" style="width:400px" tabindex="1"/>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Tipo de usuário:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_tipo_usuario" style="width: 180px" tabindex="15"
                                    onchange="CadUser_Fun_exibeCampos(this.value);">
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
                        <div class="input"><input type="text" name="correspondente" value="" style="width:400px"
                                                  tabindex="1"/></div>
                    </div>
                </div>


            </div>
        </div>


        <div class="botoes">
            <div id="PesquUser_Btn_PesquisarUsuario" class="buttonFormBlue btnSearch"
                 onclick="submitPesqUserFormCadastro()">
                <div></div>
                Pesquisar Usuários
            </div>
        </div>
        <input type='hidden' name='controller' value='Usuario'/>
        <input type='hidden' name='action' value='PesquisarUsuario'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
    <div class="resultsInTable" id="PesquUser_Div_ResultsInTable">
        <div id="pageLoaderResults">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>

    </div>
</div>