<?php
$params = $this->getParams();
if (isset($params['vendedor'])) {
    $vendedor = $params['vendedor'];
    /*$arrImoveis = $params['imoveis']; */
}
?>
<script type="text/javascript">


    function submitCadImovelPartFormImovel() {

        $("#CadPart_Form_ImoveisPart").submit();
    }


    $(document).ready(function () {

        var options = {
            dataType: "json",
            success: processJson
        };

        $('#CadPart_Form_ImoveisPart').ajaxForm(options);
        geraAutocompleteDocumentacoesEImoveisParticipante('.autocompleteParticipante', 'Participante', 'PesquisarVendedorParaAutocomplete', 'Participante', 'PesquisarImoveisParticipante');

    });


    function processJson(data) {
        $("#pageLoaderResults").fadeOut(200);
        $("#ImoveisPart_Div_ResultsInTable table").remove();
        var imovel = data;
        var controller = 'Participante';
        var actionInterar = 'CadastrarDocsImovelView';
        var result = '<table class="item">' +
            '<thead>' +
            '<th>Matrícula do imóvel</th>' +
            '<th>Valor do imóvel</th>' +
            '<th>Data de cadastro</th>' +
            '<th>Ações</th>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < data.length; i++) {
            result += '<tr id="PesqDocs_Tr_Docs' + imovel[i].id + '">' +
                '<td>' + imovel[i].matricula + '</td>' +
                '<td>' + imovel[i].valor + '</td>' +
                '<td>' + imovel[i].dataCadastro + '</td>' +
                '<td>' +
                '<div class="acao acaoEditar" onclick="carregarViewRapida(\'' + controller + '\', \'' + actionInterar + '\', ' + imovel[i].id + ');"></div><div class="acao acaoExcluir" onclick="deletaImovel(' + imovel[i].id + ');"></div>' +
                '</td>' +
                '</tr>';
        }
        result += '</tbody>' +
            '</table>';

        $('#ImoveisPart_Div_ResultsInTable').append(result);
    }

</script>

<div class="pageTitle">Imóveis do vendedor</div>
<div id="pageContent">
    <form id="PesqPart_Form_ImoveisPart" action="" method="POST">
        <div class="box">
            <div class="boxIcon iconSearch"></div>
            <div class="boxTitulo">Dados do Vendedor</div>

            <div class="boxContent">
                <div id="ImovelPart_Div_CamposDados" class="blocoDeCampos ImovelPart_Div_CamposDados">
                    <div class="campo">
                        <div class="label">CPF:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="cpf"
                                                      value="<? if (isset($vendedor)) echo $vendedor->getCpf(); ?>" <? if (isset($vendedor)) echo 'disabled'; ?>
                                                      class="autocompleteParticipante id" style="width: 150px"
                                                      class="formatCPF"/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Nome:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="nome"
                                                      value="<? if (isset($vendedor)) echo $vendedor->getNome(); ?>" <? if (isset($vendedor)) echo 'disabled'; ?>
                                                      style="width: 400px" class="autocompleteParticipante"/></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <input type='hidden' name='controller' value='Participante'/>
        <input type='hidden' name='action' value='PesquisarDocumentacoes'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>


    <div class="box">
        <div class="boxIcon iconPatrimonios"></div>
        <div class="boxTitulo">Imóveis</div>
        <div class="boxContent">
            <div class="resultsInTable" id='ImoveisPart_Div_ResultsInTable'>
                <div id="pageLoaderResults">
                    <img src="img/loader.gif" width="32" height="32" alt="loader"/>
                    carregando...
                </div>
            </div>

        </div>
    </div>
    <form id="CadPart_Form_ImoveisPart" action="" method="POST">
        <div class="box">

            <div class="boxContent">
                <h1>Cadastrar Imóveis</h1>

                <div id="CadPart_Div_CamposImovel" class="blocoDeCampos CadPart_Div_CamposImovel">
                    <div class="campo">
                        <div class="label">Matrícula:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="imovel_matricula" value=""
                                                      style="width: 180px;"/>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Valor:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="imovel_valor" value="" style="width: 120px;"
                                                      class="formatValor"/></div>
                        </div>
                    </div>
                </div>

                <div id="CadPart_Btn_AdicionarImovel" class="button btnAdd"
                     onclick="submitCadImovelPartFormImovel()">
                    <div></div>
                    Adicionar Imóvel
                </div>
                <input type='hidden' name='controller' value='Participante'/>
                <input type='hidden' name='action' value='CadastrarImovelParticipanteEObterArrayImoveis'/>
                <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
                <input type='hidden' name='id_participante' id="id_participanteFormImovel" value=""/>
    </form>


</div>

</div>
</div>