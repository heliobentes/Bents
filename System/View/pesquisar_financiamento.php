<?php
$params = $this->getParams();

/* @var FinanciamentoModel[] $arrSituacoes */
$arrSituacoes = $params['situacoes'];
?>
<script type="text/javascript">


    function submitPesqFinFormCadastro() {
        $("#PesqFin_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            dataType: 'json',
            beforeSubmit: function () {
                $("#pageLoaderResults").fadeIn(200);
            },
            success: processJson

        };

        $('#PesqFin_Form_Cadastro').ajaxForm(options);

    });
    /* Resultado de participantes com as propriedades com mesmo nome do objeto Particpante */
    function processJson(data) {

        $("#pageLoaderResults").fadeOut(200);
        $("#PesqFin_Div_ResultsInTable table").remove();
        var financiamento = data;
        var controller = 'Financiamento';
        var actionOcorrencias = 'OcorrenciasView';
        var actionInterar = 'InteracoesView';
        var actionDocumentacoes = 'DocumentacoesView';
        var result = '<table class="item">' +
            '<thead>' +
            '<th>Nome</th>' +
            '<th>Tipo Participação</th>' +
            '<th>Situação</th>' +
            '<th>Data Acolhimento</th>' +
            '<th>Ocorrências</th>' +
            '<th>Ações</th>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < data.length; i++) {

            result += '<tr id="PesquFinanc_Tr_Finan' + financiamento[i].id + '">' +
                '<td>' + financiamento[i].arrayParticipantes[i].nome + '</td>' +
                '<td>' + financiamento[i].arrayParticipantes[i].descricaoTipoParticipante + '</td>' +
                '<td>' + financiamento[i].descricaoStatusFinanciamento + '</td>' +
                '<td>' + financiamento[i].dataSolicitacao + '</td>' +
                '<td>' + financiamento[i].qtdOcorrencias + '</td>' +
                '<td>' +
                '<div class="acao acaoInterar" onclick="carregarViewRapida(\'' + controller + '\', \'' + actionInterar + '\',\'' + financiamento[i].id + '\');"></div>' +
                '<div class="acao acaoOcorrencias" onclick="carregarViewRapida(\'' + controller + '\', \'' + actionOcorrencias + '\',\'' + financiamento[i].id + '\');"></div>' +
                '<div class="acao acaoDownload" onclick="carregarViewRapida(\'' + controller + '\', \'' + actionDocumentacoes + '\',\'' + financiamento[i].id + '\');"></div>' +
                '<div class="acao acaoEditar"></div>' +
                '<div class="acao acaoExcluir" onclick="deletaFinanciamento(' + financiamento[i].id + ');"></div>' +
                '</td>' +
                '</tr>';
        }

        result += '</tbody>' +
            '</table>';

        $('#PesqFin_Div_ResultsInTable').append(result);
    }

    function deletaFinanciamento(id_financiamento) {
        if (confirm('Deseja Excluir este financiamento?\n\nTodas suas informações serão perdidas e não poderão mais ser recuperadas.')) {
            var data = {
                controller: 'Financiamento',
                action: 'DeletaFinanciamento',
                id_financiamento: id_financiamento,
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
                    if (content === 'FinancDeleted') {
                        $('#PesquFinanc_Tr_Finan' + id_financiamento).remove();
                    } else {
                        notificar('erro', "Erro ao excluir financiamento");
                    }
                }
            });
        }
    }

</script>
<div class="pageTitle">Pesquisar Financiamentos</div>
<div id="pageContent">
    <form id="PesqFin_Form_Cadastro" action="" method=POST>
        <div class="box">
            <div class="boxIcon iconSearch"></div>
            <div class="boxTitulo">Dados do Financiamento</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Banco:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_instituicao" style="width: 200px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['bancos'] as $banco) { ?>
                                    <option
                                            value="<?php echo $banco->getIdBanco(); ?>"><?php echo $banco->getNumeroBanco() . " - " . $banco->getNome(); ?></option>
                                <?php } ?>

                            </select>
                            <div class="select"></div>

                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Correspondente:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="correspondente" value="" style="width: 400px"/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Participante:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="participante" value="" style="width: 400px"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Situação:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_situacao" style="width: 200px">
                                <option value="">Selecione</option>
                                <?php foreach ($arrSituacoes as $situacao) { ?>
                                    <option
                                            value="<?php echo $situacao->getIdStatusFinanciamento(); ?>"><?php echo $situacao->getDescricaoStatusFinanciamento(); ?></option>
                                <?php } ?>

                            </select>
                            <div class="select"></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="botoes">
            <div id="PesqFin_Btn_PesquisarFinanciamento" class="buttonFormBlue btnSearch"
                 onclick="submitPesqFinFormCadastro()">
                <div></div>
                Pesquisar
            </div>
        </div>
        <input type='hidden' name='controller' value='Financiamento'/>
        <input type='hidden' name='action' value='PesquisarFinanciamento'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
    <div class="resultsInTable" id='PesqFin_Div_ResultsInTable'>
        <div id="pageLoaderResults">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>

    </div>
</div>