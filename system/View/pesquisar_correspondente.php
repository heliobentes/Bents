<script type="text/javascript">


    function submitPesqCorrespFormCadastro() {
        $("#PesquiCorresp_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            dataType: 'json',
            beforeSubmit: function () {
                $("#pageLoaderResults").fadeIn(200);
            },
            success: processJson

        };

        $('#PesquiCorresp_Form_Cadastro').ajaxForm(options);
    });
    /* Resultado de correspondentes com as propriedades com mesmo nome do objeto Correspondente */
    function processJson(data) {

        $("#pageLoaderResults").fadeOut(200);
        $("#PesqCorresp_Div_ResultsInTable table").remove();
        var correspondente = data;
        var controller = 'Correspondente';
        var actionInterar = 'CadastrarCorrespondenteView';
        var result = '<table class="item">' +
            '<thead>' +
            '<th>Razão Social</th>' +
            '<th>CNPJ</th>' +
            '<th>Cidade</th>' +
            '<th>Ações</th>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < data.length; i++) {

            result += '<tr id="PesqCorresp_Tr_Corresp' + correspondente[i].id + '">' +
                '<td>' + correspondente[i].razaoSocial + '</td>' +
                '<td>' + correspondente[i].cnpj + '</td>' +
                '<td>2</td>' +
                '<td>' +
                '<div class="acao acaoEditar" onclick="carregarViewRapida(\'' + controller + '\', \'' + actionInterar + '\', ' + correspondente[i].id + ');"></div><div class="acao acaoExcluir" onclick="deletaCorrespondente(' + correspondente[i].id + ');"></div>' +
                '</td>' +
                '</tr>';
        }

        result += '</tbody>' +
            '</table>';

        $('#PesqCorresp_Div_ResultsInTable').append(result);
    }
    function deletaCorrespondente(id_corresp) {
        if (confirm('Deseja Excluir este correspondente?\n\nTodas suas informações serao perdidas e não poderão mais ser recuperadas.')) {
            var data = {
                controller: 'Correspondente',
                action: 'ExcluirCorrespondente',
                id_correspondente: id_corresp,
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
                    if (content === 'CorrespDeleted') {
                        $('#PesqCorresp_Tr_Corresp' + id_corresp).remove();
                    } else {
                        notificar('erro', "Erro ao excluir correspondente");
                    }
                }
            });
        }
    }

</script>
<div class="pageTitle">Pesquisar Correspondente</div>
<div id="pageContent">
    <form id="PesquiCorresp_Form_Cadastro" action="" method=POST>
        <div class="box">
            <div class="boxIcon iconPrancheta"></div>
            <div class="boxTitulo">Dados do Correspondente</div>
            <div class="boxContent">

                <div class="campo">
                    <div class="label">Razão Social:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="razao_social" value="" style="width: 400px"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nome Fantasia:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome_fantasia" value="" style="width: 400px"/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">CNPJ:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cnpj" value="" style="width:150px"
                                                  class="formatCNPJ"/></div>
                    </div>
                </div>

            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconEndereco"></div>
            <div class="boxTitulo">Endereço</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Bairro:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="bairro" value="" style="width: 200px"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Cidade:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cidade" value="" style="width: 200px"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">UF:</div>
                    <div class="item">
                        <div class="input"><select name="uf" style="width: 100px">
                                <option>MG</option>
                                <option>RJ</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            <div class="select"></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconContato"></div>
            <div class="boxTitulo">Informações de Contato</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Telefone :</div>
                    <div class="item">
                        <div class="input"><input type="text" name="tel" value="" style="width: 135px"
                                                  class="formatTelefone"/></div>
                    </div>
                </div>


                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Email:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="email" value="" style="width: 300px"/></div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Site:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="site" value="" style="width: 300px"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="botoes">
            <div id="PesquiCorresp_Btn_PesquisarCorrespondente" class="buttonFormBlue btnSearch"
                 onclick="submitPesqCorrespFormCadastro()">
                <div></div>
                Pesquisar Correspondentes
            </div>
        </div>
        <input type='hidden' name='controller' value='Correspondente'/>
        <input type='hidden' name='action' value='PesquisarCorrespondente'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
    <div class="resultsInTable" id='PesqCorresp_Div_ResultsInTable'>
        <div id="pageLoaderResults">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>
    </div>
</div>