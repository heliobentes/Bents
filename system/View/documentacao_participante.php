<?php
$params = $this->getParams();
if (isset($params['participante'])) {
    $vendedor = $params['participante'];
    /*$arrDocumentacoes = $params['documentacoes']; */

}
?>
<script type="text/javascript">

    $(document).ready(function () {

        var options = {
            dataType: "json",
            success: processJson
        };

        $('#PesqPart_Form_UploadDocumentacoes').ajaxForm(options);
        geraAutocompleteDocumentacoesEImoveisParticipante('.autocompleteParticipante', 'Participante', 'PesquisarParticipanteParaAutocomplete', 'Participante', 'PesquisarDocumentacoes', 'PesquisarTiposDocumentacao');

        <? if (!isset($vendedor)) { ?>
        $("#DocumentacoesPart_Btn_Upload").hide();
        <? } ?>

    });

    function download(file, name, token) {
        window.location = "../system/Utils/force-download.php?file=" + file + "&name=" + name + "&token=" + token;
    }

    function submitPesqPartFormUploadDocs() {
        $("#PesqPart_Form_UploadDocumentacoes").submit();
    }

    (function () {

        var bar = $('.bar');
        var percent = $('.percent');
        var status = $('#status');

        $('#CadPart_Form_UploadDocumentacoes').ajaxForm({

            beforeSend: function () {
                $('#DocumentacoesPart_Btn_Upload').prop("disabled", true);
                status.empty();
                var percentVal = '0%';
                bar.width(percentVal);
                percent.html(percentVal);
            },
            uploadProgress: function (event, position, total, percentComplete) {
                var percentVal = percentComplete + '%';
                bar.width(percentVal);
                percent.html(percentVal);
            },
            success: function () {

                var percentVal = '100%';
                bar.width(percentVal);
                percent.html(percentVal);
            },
            complete: function (xhr) {
                $('#DocumentacoesPart_Btn_Upload').prop("disabled", false);
                status.html(xhr.responseText);
                submitPesqPartFormUploadDocs();

            },
            error: function (xhr, statusText, err) {
                status.html(err || statusText);
            }
        });

    })();

    function processJson(data) {
        $("#DocumentacoesPart_Btn_Upload").show();
        $("#pageLoaderResults").fadeOut(200);
        $("#DocumentacoesPart_Div_ResultsInTable table").remove();
        var documentacao = data;

        var controller = 'Participante';
        var actionInterar = 'CadastrarCorrespondenteView';
        var result = '<table class="item">' +
            '<thead>' +
            '<th>Nome da documentação</th>' +
            '<th>Tipo da documentação</th>' +
            '<th>Nome do arquivo</th>' +
            '<th>Data de envio</th>' +
            '<th>Ações</th>' +
            '</thead>' +
            '<tbody>';
        for (var i = 0; i < data.length; i++) {
            result += '<tr id="PesqDocs_Tr_Docs' + documentacao[i].id + '">' +
                '<td>' + documentacao[i].nome + '</td>' +
                '<td>' + documentacao[i].descricaoTipoDocumento + '</td>' +
                '<td>' + documentacao[i].nomeArquivo + '</td>' +
                '<td>' + documentacao[i].dataEnvio + '</td>' +
                '<td>' +
                '<div class="acao acaoDownload" onclick="download(\'../../public_html/documentacoes/participantes/' + documentacao[i].idParticipante + '/' + documentacao[i].nomeUnicoDoArquivo + '\',\'' + documentacao[i].nomeArquivo + '\',\'<?php echo $_SESSION['token']; ?>\')">' + '</div>' +
                '<div class="acao acaoExcluir" onclick="deletaDocumentacao(\'' + documentacao[i].id + '\')">' + '</div>' +
                '</td>' +
                '</tr>';
        }
        result += '</tbody>' +
            '</table>';

        $('#DocumentacoesPart_Div_ResultsInTable').append(result);
    }

    function preencheSelectTiposDoc(data) {
        $('#tipos_docs').html(data);
    }

</script>

<div class="pageTitle">Documentação do participante</div>
<div id="pageContent">
    <form id="PesqPart_Form_UploadDocumentacoes" action="" method="POST">
        <div class="box">
            <div class="boxIcon iconSearch"></div>
            <div class="boxTitulo">Dados do Participante</div>

            <div class="boxContent">
                <div id="DocPart_Div_CamposDocumentacoes" class="blocoDeCampos DocPart_Div_CamposDocumentacoes">
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
        <input type='hidden' name='id_participante' id="id_participanteFormPesq" value=""/>
    </form>


    <div class="box">
        <div class="boxIcon iconDocumentos"></div>
        <div class="boxTitulo">Documentações</div>
        <div class="boxContent">
            <div class="resultsInTable" id='DocumentacoesPart_Div_ResultsInTable'>
                <div id="pageLoaderResults">
                    <img src="img/loader.gif" width="32" height="32" alt="loader"/>
                    carregando...
                </div>
            </div>

        </div>
    </div>

    <form id="CadPart_Form_UploadDocumentacoes" method="POST" class="askSave" enctype="multipart/form-data">
        <div class="boxContent">
            <div id="CadPartn_Div_CamposDocumentos" class="blocoDeCampos CadPart_Div_CamposDocumentos">
                <h1>Adicionar documentação:</h1>
                <div class="campo">
                    <div class="label">Título do documento:</div>
                    <div class="item">

                        <div class="input"><input type="text" name="documentos[0][titulo_documento]" value=""
                                                  style="width:300px"/></div>

                    </div>
                </div>

                <div class="campo">
                    <div class="label">Tipo do documento:</div>
                    <div class="item">
                        <div class="input"><select name="documentos[0][id_tipo]" id="tipos_docs" style="width: 200px">


                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Arquivo:</div>
                    <div class="item">
                        <div class="input">
                            <input type="file" name="documentos[0][file]" style="width: 220px"/>
                            <div class="file">Selecione um arquivo</div>

                        </div>
                    </div>
                </div>

                <div class="progress">
                    <div class="bar"></div>
                    <div class="percent">0%</div>
                </div>

                <div id="status"></div>
                <br/>
                <input type="submit" id="DocumentacoesPart_Btn_Upload" value="Enviar documentação">

            </div>
            <input type='hidden' name='controller' value='Participante'/>
            <input type='hidden' name='action' value='SalvarDocumentacaoParticipante'/>
            <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
            <input type='hidden' name='id_participante' id="id_participanteFormUpload" value=""/>
    </form>

</div>
</div>


</div>