<?php
$params = $this->getParams();
?>
<script type="text/javascript">


    function submitPesqDocumentacaoFormCadastro() {
        $("#ImpriModDoc_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            dataType: 'json',
            beforeSubmit: function () {
                $("#pageLoaderResults").fadeIn(200);
            },
            success: processJson

        };

        $('#ImpriModDoc_Form_Cadastro').ajaxForm(options);

    });
    /* Resultado de usuários com as propriedades com mesmo nome do objeto Usuario */
    function processJson(data) {

        $("#pageLoaderResults").fadeOut(200);
        $("#tableResultado tr:not(:first)").remove();
        var modelo = data;
        var token = '<?php echo $_SESSION['token']; ?>';
        for (var i = 0; i < data.length; i++) {
            var linkDownload = "../../public_html/formularios/" + modelo[i].nomeUnicoDoArquivo;
            $('#tableResultado tr:last').after("<tr><td>" + modelo[i].nomeFormulario + "</td><td>" + modelo[i].banco.nome + "</td><td>" + modelo[i].descricaoCategoriaDocumento + "<td> " +
                '<div class="acao acaoDownload" onclick="download(\'' + linkDownload + '\', \'' + modelo[i].nomeArquivo + '\',\'' + token + '\')"></div>' +
                "</div></td></tr>");
        }
    }

    function download(file, name, token) {
        window.location = "../system/Utils/force-download.php?file=" + file + "&name=" + name + "&token=" + token;
    }


</script>
<div class="pageTitle">Imprimir Modelos de Documentação</div>
<div id="pageContent">
    <form id="ImpriModDoc_Form_Cadastro" action="" method="POST">
        <div class="box">
            <div class="boxIcon iconDocumentos"></div>
            <div class="boxTitulo">Filtros de Formulários</div>
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
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Título do documento:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="titulo_documento" value="" style="width: 300px"/>
                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Categoria do Modelo:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_categoria_documento" style="width: 300px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['categoria_modelo_documento'] as $modeloDocumento) { ?>
                                    <option value="<?php echo $modeloDocumento->getIdCategoriaDocumento(); ?>"><?php echo $modeloDocumento->getDescricaoCategoriaDocumento(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="botoes">
            <div id="ImpriModDoc_Btn_Pesquisar" class="buttonFormBlue btnSearch"
                 onclick="submitPesqDocumentacaoFormCadastro()">
                <div></div>
                Pesquisar
            </div>
        </div>
        <input type='hidden' name='controller' value='ModeloFormulario'/>
        <input type='hidden' name='action' value='PesquisarModelosFormularios'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>

    <div class="resultsInTable">
        <div id="pageLoaderResults">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>
        <table class="item" id="tableResultado">
            <thead>
            <th>Título</th>
            <th>Banco</th>
            <th>Categoria</th>
            <th>Download</th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</div>