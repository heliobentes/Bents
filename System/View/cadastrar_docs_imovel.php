<?php
$params = $this->getParams();

if (isset($params['imovel'])) {
    $imovel = $params['imovel'];
}
?>
<script type="text/javascript">

    function submitFormDocumentacoesImovel() {

        $("#CadPart_Form_DocumentacoesImovel").submit();
    }

    $(document).ready(function () {
        /*$("#DocumentacoesPart_Btn_Upload").hide(); */
        var options = {
            dataType: "json",
            success: processJsonDocsImovel
        };

        $('#CadPart_Form_DocumentacoesImovel').ajaxForm(options);
        submitFormDocumentacoesImovel();
    });

    function download(file, name, token) {
        window.location = "../system/Utils/force-download.php?file=" + file + "&name=" + name + "&token=" + token;
    }


    (function () {

        var bar = $('.bar');
        var percent = $('.percent');
        var status = $('#status');

        $('#CadPart_Form_UploadDocumentacoesImovel').ajaxForm({

            beforeSend: function () {
                $('#DocumentacoesImovelPart_Btn_Upload').prop("disabled", true);
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
                $('#DocumentacoesImovelPart_Btn_Upload').prop("disabled", false);
                status.html(xhr.responseText);
                submitFormDocumentacoesImovel();

            },
            error: function (xhr, statusText, err) {
                status.html(err || statusText);
            }
        });

    })();
    /* outro nome pq está dando conflito e memory leak com a tela mãe */
    function processJsonDocsImovel(data) {
        $("#DocumentacoesImovelPart_Btn_Upload").show();
        $("#pageLoaderResults").fadeOut(200);
        $("#DocumentacoesImoveisPart_Div_ResultsInTable table").remove();
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
                '<div class="acao acaoDownload" onclick="download(\'../../public_html/documentacoes/imoveis/' + documentacao[i].idImovel + '/' + documentacao[i].nomeUnicoDoArquivo + '\',\'' + documentacao[i].nomeArquivo + '\',\'<?php echo $_SESSION['token']; ?>\')">' + '</div>' +
                '<div class="acao acaoExcluir" onclick="deletaDocumentacao(\'' + documentacao[i].id + '\')">' + '</div>' +
                '</td>' +
                '</tr>';
        }
        result += '</tbody>' +
            '</table>';

        $('#DocumentacoesImoveisPart_Div_ResultsInTable').append(result);
    }

</script>

<form id="CadPart_Form_DocumentacoesImovel" action="" method="POST">
    <input type='hidden' name='controller' value='Participante'/>
    <input type='hidden' name='action' value='PesquisarDocumentacoesImovel'/>
    <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    <input type='hidden' name='id_imovel' id="id_imovelFormDocsImovel" value="<? echo $imovel->getId(); ?>"/>
</form>

<div class="pageTitle">Documentação do imóvel</div>
<div id="pageContent">
    <div class="box">
        <div class="boxIcon iconSearch"></div>
        <div class="boxTitulo">Dados do imóvel</div>

        <div class="boxContent">

            <div class="campo">
                <div class="label" style="width: 300px">Matrícula:</div>
                <div class="label"><? echo $imovel->getMatricula(); ?></div>
            </div>
            <div class="campo">
                <div class="label" style="width: 200px">Valor:</div>
                <div class="label"><? echo $imovel->getValor(); ?></div>
            </div>

        </div>

    </div>


    <div class="box">
        <div class="boxIcon iconDocumentos"></div>
        <div class="boxTitulo">Documentações</div>
        <div class="boxContent">
            <div class="resultsInTable" id='DocumentacoesImoveisPart_Div_ResultsInTable'>
                <div id="pageLoaderResults">
                    <img src="img/loader.gif" width="32" height="32" alt="loader"/>
                    carregando...
                </div>
            </div>

        </div>
    </div>

    <form id="CadPart_Form_UploadDocumentacoesImovel" method="POST" class="askSave" enctype="multipart/form-data">
        <div class="boxContent">
            <div id="CadPart_Div_CamposDocumentosImovel" class="blocoDeCampos CadPart_Div_CamposDocumentosImovel">
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
                        <div class="input"><select name="documentos[0][id_tipo]" style="width: 200px">
                                <option>Selecione</option>
                                <?php foreach ($params['tipos_documentos'] as $tipoDocumento) { ?>
                                    <option value="<?php echo $tipoDocumento->getIdTipoDocumento(); ?>"><?php echo $tipoDocumento->getTipoDocumento(); ?></option>
                                <?php } ?>
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
                <input type="submit" id="DocumentacoesImovelPart_Btn_Upload" value="Enviar documentação">

            </div>
            <input type='hidden' name='controller' value='Participante'/>
            <input type='hidden' name='action' value='SalvarDocumentacaoImovelParticipante'/>
            <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
            <input type='hidden' name='id_imovel' id="id_docsImovelParticipanteFormUpload"
                   value="<? if (isset($imovel)) echo $imovel->getId(); ?>"/>
    </form>

</div>
</div>


</div>