<?php
$params = $this->getParams();
if (isset($params['documentacoes'])) {
    $arrDocumentacoes = $params['documentacoes'];

}
?>
<script type="text/javascript">
    function download(file, name, token) {
        window.location = "../system/Utils/force-download.php?file=" + file + "&name=" + name + "&token=" + token;
    }

</script>
<div class="pageTitle">Documentação do financiamento</div>
<div id="pageContent">

    <div class="box">
        <div class="boxIcon iconDocumentos"></div>
        <div class="boxTitulo">Documentações</div>
        <div class="boxContent">
            <div class="resultsInTable">
                <div id="pageLoaderResults">
                    <img src="img/loader.gif" width="32" height="32" alt="loader"/>
                    carregando...
                </div>
                <table class="item" id="tableResultado">
                    <thead>
                    <th>Nome da documentação</th>
                    <th>Nome do arquivo</th>
                    <th>Data de envio</th>
                    <th>Download</th>
                    </thead>
                    <tbody>
                    <?php foreach ($arrDocumentacoes as $documentacao) { ?>
                        <tr>
                            <td><?php echo $documentacao->getNome(); ?></td>
                            <td><?php echo $documentacao->getNomeArquivo(); ?></td>
                            <td><?php echo DataManipulator::FormatarDataHora($documentacao->getDataEnvio()); ?></td>
                            <td>
                                <?php $linkDownload = "../../public_html/documentacoes/" . $documentacao->getIdFinanciamento() . "/" . $documentacao->getNomeUnicoDoArquivo(); ?>
                                <div class="acao acaoDownload" id="downloadArquivo"
                                     onclick="download('<?php echo $linkDownload; ?>', '<?php echo $documentacao->getNomeArquivo(); ?>','<?php echo $_SESSION['token']; ?>')"></div>
                            </td>
                        </tr>

                    <?php } ?>

                    </tbody>
                </table>
            </div>

        </div>
    </div>

</div>