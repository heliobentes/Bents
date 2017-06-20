<script type="text/javascript">


    function submitPesqPartFormCadastro() {
        $("#PesqPart_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            dataType: 'json',
            beforeSubmit: function () {
                $("#pageLoaderResults").fadeIn(200);
            },
            success: processJson

        };

        $('#PesqPart_Form_Cadastro').ajaxForm(options);
        geraAutocomplete('.autocompleteParticipante', 'Financiamento', 'AutocompleteFinanciamento', 'Participante', 'CadastrarParticipanteView');
    });
    /* Resultado de participantes com as propriedades com mesmo nome do objeto Particpante */


    function processJson(data) {

        $("#pageLoaderResults").fadeOut(200);
        $("#PesqPart_Div_ResultsInTable table").remove();
        var participante = data;
        var controllerFinanciamento = 'Financiamento';
        var controllerParticipante = 'Participante';
        var actionOcorrencias = 'OcorrenciasView';
        var actionInterar = 'InteracoesView';
        var actionEditar = 'CadastrarParticipanteView';
        var result = '<table class="item">' +
            '<thead>' +
            '<th>Nome</th>' +
            '<th>CPF</th>' +
            '<th>Correspondente</th>' +
            '<th>Ação</th>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < data.length; i++) {

            result += '<tr>' +
                '<td>' + participante[i].nome + '</td>' +
                '<td>' + participante[i].cpf + '</td>' +
                '<td>2</td>' +
                '<td>' +
                    /*'<div class="acao acaoInterar" onclick="carregarViewRapida(\'' + controllerFinanciamento + '\', \'' + actionInterar + '\', ' + participante[i].id + ');"></div>' +
                     '<div class="acao acaoOcorrencias" onclick="carregarViewRapida(\'' + controllerFinanciamento + '\', \'' + actionOcorrencias + '\', null);"></div>' +*/
                '<div class="acao acaoEditar" onclick="carregarViewRapida(\'' + controllerParticipante + '\', \'' + actionEditar + '\', ' + participante[i].id + ');"></div>' +
                '<div class="acao acaoExcluir"></div>' +
                '</td>' +
                '</tr>';
        }

        result += '</tbody>' +
            '</table>';

        $('#PesqPart_Div_ResultsInTable').append(result);


    }
</script>
<div class="pageTitle">Pesquisar Participantes</div>
<div id="pageContent">
    <form id="PesqPart_Form_Cadastro" action="" method="POST">
        <div class="box">
            <div class="boxIcon iconSearch"></div>
            <div class="boxTitulo">Dados do Participante</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">CPF:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cpf" value="" style="width: 150px"
                                                  class="formatCPF"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nome:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome" value="" style="width: 400px"
                                                  class="autocompleteParticipante"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Correspondente:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="correspondente" value="" style="width: 400px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="botoes">
            <div id="PesqPart_Btn_PesquisarParticipante" class="buttonFormBlue btnSearch"
                 onclick="submitPesqPartFormCadastro();">
                <div></div>
                Pesquisar
            </div>
        </div>
        <input type='hidden' name='controller' value='Participante'/>
        <input type='hidden' name='action' value='PesquisarParticipante'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>

    <div class="resultsInTable" id='PesqPart_Div_ResultsInTable'>
        <div id="pageLoaderResults">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>

    </div>

</div>