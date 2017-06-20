<?php

$params = $this->getParams();

?>
<script type="text/javascript">
    function CadModDoc_Fun_AdicionarCampos(objectId, campo) {
        var clone = $('#CadModDoc_Div_Campos' + campo).clone(false).attr('id', '');
        clone.find('input,select').val("");
        var totalDeBlocos = $('.CadModDoc_Div_Campos' + campo).length;
        clone.find('input,select').each(function (i) {
            this.name = this.name.replace('[0]', '[' + totalDeBlocos + ']');
        });
        clone.find('[type=file]').parent().children('.file').html('Selecione um arquivo');
        $('#' + objectId).before(clone);
        formataCampos();

        atualizaNomeDosCamposFile();

    }
    function validateForm(formData, jqForm, options) {
        enableSubmitBtn();


        var banco = $('#CadModDoc_Div_CamposDocumento .input:nth-child(1) select').val();
        var titulo = $('#CadModDoc_Div_CamposDocumento input[type=text]').val();
        var arquivo = $('#CadModDoc_Div_CamposDocumento input[type=file]').val();


        if (!banco || !titulo || !arquivo) {
            alert('Você deve escolher o Banco e preencher o Título do Documento e escolher um Arquivo!');
            return false;
        } else {
            $("#pageLoader").fadeIn(100);
        }
    }
    function submitCadModDocFormCadastro() {
        $("#CadModDoc_Btn_Cadastrar").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#CadModDoc_Form_Cadastro").submit();
    }
    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        $("#pageLoader").fadeOut(100);
        if (responseText === 'CadModDocSucesso') {
            document.getElementById("CadModDoc_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
        } else {
            if (responseText == 'CadModDocErro') {
                notificar('erro', "Erro ao cadastrar formulário");
            } else {
                alert(responseText);
            }

        }

    }
    function enableSubmitBtn() {
        $("#CadModDoc_Btn_Cadastrar").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind('click').click(function () {
            submitCadModDocFormCadastro();
        });
    }
    $(document).ready(function () {
        conteudoDoFormularioAoAbrir = $('#CadModDoc_Form_Cadastro').serialize();
        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };
        $('#CadModDoc_Form_Cadastro').ajaxForm(options);
    });


</script>
<div class="pageTitle">Cadastrar Modelos de Formulários</div>
<div id="pageContent">
    <form id="CadModDoc_Form_Cadastro" action="" method="POST" class="askSave">
        <div class="box">
            <div class="boxIcon iconDocumentos"></div>
            <div class="boxTitulo">Informações do Documento</div>
            <div class="boxContent">
                <div id="CadModDoc_Div_CamposDocumento" class="blocoDeCampos CadModDoc_Div_CamposDocumento">
                    <div class="campo">
                        <div class="label">Banco:</div>
                        <div class="item">
                            <div class="input">
                                <select name="modelo_documento[0][id_instituicao]" style="width: 200px">
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
                            <div class="input">
                                <input type="text" name="modelo_documento[0][titulo_documento]" value=""
                                       style="width: 300px"/>
                            </div>
                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Categoria do Modelo:</div>
                        <div class="item">
                            <div class="input">
                                <select name="modelo_documento[0][id_categoria_documento]" style="width: 300px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['categoria_modelo_documento'] as $modeloDocumento) { ?>
                                        <option value="<?php echo $modeloDocumento->getIdCategoriaDocumento(); ?>"><?php echo $modeloDocumento->getDescricaoCategoriaDocumento(); ?></option>
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
                                <input type="file" name="modelo_documento[0][file]" style="width:220px"/>

                                <div class="file">Selecione um arquivo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="CadModDoc_Btn_AdicionarDocumento" class="button btnAdd"
                     onclick="CadModDoc_Fun_AdicionarCampos(this.id, 'Documento');">
                    <div></div>
                    Adicionar Formulário
                </div>
            </div>
        </div>


        <div class="botoes">
            <div id="CadModDoc_Btn_Cadastrar" class="buttonFormBlue btnCad" onclick="submitCadModDocFormCadastro();">
                <div></div>
                Cadastrar Formulários
            </div>
        </div>
        <input type='hidden' name='controller' value='ModeloFormulario'/>
        <input type='hidden' name='action' value='CadastrarModeloFormulario'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>


</div>