<?php

$params = $this->getParams();

$arrOcorrencias = $params['ocorrencias'];
$idFinanciamento = $params['id_financiamento'];

?>
<script type="text/javascript">

    function submitCadNovaOcorrencia() {
        $("#OcorrFin_Btn_AddOcorrencia").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#OcorrFin_Form_Cadastro").submit();
    }


    $(document).ready(function () {

        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#OcorrFin_Form_Cadastro').ajaxForm(options);
        /*       conteudoDoFormularioAoAbrir = $('#IntFin_Form_Cadastro').serialize(); */


    });

    function validateForm(formData, jqForm, options) {

        enableSubmitBtn();
        var camposEmBranco = '';
        if (!$('textarea[name=descricao_ocorrencia]').val())


            if (camposEmBranco != '') {
                alert('Você deve preencher os seguintes campos:\n\n' + camposEmBranco);
                return false;

            } else {

                if ($('#OcorrFin_Form_Cadastro').parent().parent().parent().prop('id') == 'lightBox') {
                    $("#lightBox  .pageLoader").fadeIn(200);
                } else {
                    $("#pageLoader").fadeIn(200);
                }
            }
    }

    function enableSubmitBtn() {
        $("#OcorrFin_Btn_AddOcorrencia").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind("click").click(function () {
            submitCadNovaOcorrencia();
        });
    }

    function showResponse(responseText, statusText, xhr, $form) {
        enableSubmitBtn();
        if ($('#OcorrFin_Form_Cadastro').parent().parent().parent().prop('id') == 'lightBox') {
            $("#lightBox  .pageLoader").fadeOut(200);
        } else {
            $("#pageLoader").fadeOut(200);
        }
        if (responseText == 'CadOcorrenciaSucesso') {
            document.getElementById("OcorrFin_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
            fecharCadastroRapido();
            /* Realiza a pesquisa após o cadastro para atualizar a quantidade de ocorrências na Tabela de resultados */
            submitPesqFinFormCadastro();
        } else {
            if (responseText == 'CadOcorrenciaErro') {
                notificar('erro', "Erro ao cadastrar");
            } else {
                alert(responseText);
            }
        }
    }

</script>
<div class="pageTitle">Ocorrencias do Financiamento</div>
<div id="pageContent">

    <div class="resultsInTable">

        <table class="item" id="tableResultado">
            <thead>
            <th>Ocorrência</th>
            <th>Data</th>
            </thead>
            <?php
            /**
             * @var OcorrenciasFinanciamentoModel $ocorrencia
             */
            foreach ($arrOcorrencias as $ocorrencia) { ?>

                <tr>
                    <td><?php echo $ocorrencia->getDescricao(); ?></td>
                    <td><?php echo DataManipulator::FormatarDataHora($ocorrencia->getDataOcorrencia()) ?></td>
                </tr>
            <?php } ?>
        </table>
    </div>

    <form id="OcorrFin_Form_Cadastro" action="" method=POST>
        <div class="box">
            <div class="boxIcon iconOcorrencia"></div>
            <div class="boxTitulo">Inserir Nova Ocorrência</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Descreva a Ocorrência:</div>
                    <div class="item">
                        <div class="input">


                           <textarea name="descricao_ocorrencia" style="width: 450px;">

                           </textarea>

                        </div>
                    </div>
                </div>


            </div>
        </div>


        <div class="botoes">
            <div id="OcorrFin_Btn_AddOcorrencia" class="buttonFormBlue btnCad" onclick="submitCadNovaOcorrencia()">
                <div></div>
                Adicionar Ocorrência
            </div>
        </div>
        <input type='hidden' name='id_financiamento' value=<?php echo $idFinanciamento; ?>/>
        <input type='hidden' name='controller' value='Financiamento'/>
        <input type='hidden' name='action' value='CadastrarOcorrenciaFinanciamento'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
</div>