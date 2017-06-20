<?php
$params = $this->getParams();
if (isset($params['interacoes'])) {
    $arrInteracoes = $params['interacoes'];
}

$idFinanciamento = $params['id_financiamento'];
$arrTiposInteracoes = $params['tipos_interacoes'];
$arrTiposStatusInteracoes = $params['tipos_status_interacoes'];

?>
<script type="text/javascript">

    function submitCadNovaInteracao() {
        $("#IntFin_Btn_AddInteracao").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#IntFin_Form_Cadastro").submit();
    }


    $(document).ready(function () {

        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#IntFin_Form_Cadastro').ajaxForm(options);
        /*       conteudoDoFormularioAoAbrir = $('#IntFin_Form_Cadastro').serialize(); */


    });

    function validateForm(formData, jqForm, options) {

        enableSubmitBtn();
        var camposEmBranco = '';
        if (!$('select[name=id_passo_atual]').val())
            camposEmBranco += 'Interação\n';
        if (!$('select[name=id_proximo_passo]').val())
            camposEmBranco += 'Próxima Interação\n';
        if (!$('select[name=id_status]').val())
            camposEmBranco += 'Status\n';

        if (camposEmBranco != '') {
            alert('Você deve preencher os seguintes campos:\n\n' + camposEmBranco);
            return false;

        } else {

            if ($('#IntFin_Form_Cadastro').parent().parent().parent().prop('id') == 'lightBox') {
                $("#lightBox  .pageLoader").fadeIn(200);
            } else {
                $("#pageLoader").fadeIn(200);
            }
        }
    }

    function enableSubmitBtn() {
        $("#IntFin_Btn_AddInteracao").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind("click").click(function () {
            submitCadNovaInteracao();
        });
    }

    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        if ($('#CadPart_Form_Cadastro').parent().parent().parent().prop('id') == 'lightBox') {
            $("#lightBox  .pageLoader").fadeOut(200);
        } else {
            $("#pageLoader").fadeOut(200);
        }
        if (responseText == 'CadInteracaoSucesso') {
            document.getElementById("IntFin_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
            fecharCadastroRapido();
        } else {
            if (responseText == 'CadInteracaoErro') {
                notificar('erro', "Erro ao cadastrar");
            } else {
                alert(responseText);
            }
        }
    }

</script>
<div class="pageTitle">Interações do Financiamento</div>
<div id="pageContent">

    <div class="resultsInTable">
        <div id="pageLoaderResults">
            <img src="img/loader.gif" width="32" height="32" alt="loader"/>
            carregando...
        </div>
        <table class="item" id="tableResultado">
            <thead>
            <th>Interação</th>
            <th>Data</th>
            <th>Próxima Interação</th>
            <th>Status</th>
            <th>Tempo até Hoje (dias)</th>
            </thead>
            <?php if (isset($params['interacoes'])) {
                /**
                 * @var StatusFinanciamentoModel $interacao
                 */
                foreach ($arrInteracoes as $interacao) { ?>
                    <tr>
                        <td><?php echo $interacao->getDescricaoInteracaoAtual(); ?></td>
                        <td><?php echo DataManipulator::FormatarDataHora($interacao->getDataStatus()); ?></td>
                        <td><?php echo $interacao->getDescricaoProximaInteracao(); ?></td>
                        <td><?php echo $interacao->getDescricaoStatusFinanciamento(); ?></td>
                        <td><?php echo $interacao->getNumeroDiasEntreHojeEDataStatusAtual(); ?></td>
                    </tr>
                <?php }
            } ?>
        </table>
    </div>

    <form id="IntFin_Form_Cadastro" action="" method=POST>
        <div class="box">
            <div class="boxIcon iconInteracao"></div>
            <div class="boxTitulo">Inserir Nova Interação</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Interação:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_passo_atual" style="width: 300px">
                                <?php foreach ($arrTiposInteracoes as $tipoInteracao) { ?>
                                    <option value="<?php echo $tipoInteracao->getIdInteracaoAtual(); ?>"><?php echo $tipoInteracao->getDescricaoInteracaoAtual(); ?></option>
                                <?php } ?>
                            </select>
                            <div class="select"></div>

                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Próxima Interação:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_proximo_passo" style="width: 300px">
                                <?php foreach ($arrTiposInteracoes as $tipoInteracao) { ?>
                                    <option value="<?php echo $tipoInteracao->getIdInteracaoAtual(); ?>"><?php echo $tipoInteracao->getDescricaoInteracaoAtual(); ?></option>
                                <?php } ?>
                            </select>
                            <div class="select"></div>

                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Status:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_status" style="width: 200px">
                                <?php foreach ($arrTiposStatusInteracoes as $tipoStatusInteracao) { ?>
                                    <option value="<?php echo $tipoStatusInteracao->getIdStatusFinanciamento(); ?>"><?php echo $tipoStatusInteracao->getDescricaoStatusFinanciamento(); ?></option>
                                <?php } ?>
                            </select>
                            <div class="select"></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="botoes">
            <div id="IntFin_Btn_AddInteracao" class="buttonFormBlue btnCad" onclick="submitCadNovaInteracao()">
                <div></div>
                Adicionar Interação
            </div>
        </div>
        <input type='hidden' name='id_financiamento' value=<?php echo $idFinanciamento; ?>/>
        <input type='hidden' name='controller' value='Financiamento'/>
        <input type='hidden' name='action' value='CadastrarInteracaoFinanciamento'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
</div>