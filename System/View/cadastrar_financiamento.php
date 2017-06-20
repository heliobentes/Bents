<?php
$params = $this->getParams();
?>
<script type="text/javascript">
    function CadFin_Fun_AdicionarCampos(objectId, campo) {
        var clone = $('#CadFin_Div_Campos' + campo).clone(false).attr('id', '');
        clone.find('input, select').val("");
        var totalDeBlocos = $('.CadFin_Div_Campos' + campo).length;
        clone.find('input,select').each(function (i) {
            this.name = this.name.replace('[0]', '[' + totalDeBlocos + ']');
        });
        clone.find('[type=file]').parent().children('.file').html('Selecione um arquivo');
        $('#' + objectId).before(clone);
        atualizaNomeDosCamposFile();
        formataCampos();
        geraAutocomplete('.autocompleteParticipante', 'Participante', 'PesquisarParticipanteParaAutocomplete', 'Participante', 'CadastrarParticipanteView');
    }


    function submitCadFinFormCadastro() {
        $("#CadFin_Btn_CadastrarFinanciamento").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#CadFin_Form_Cadastro").submit();
    }

    $(document).ready(function () {
        conteudoDoFormularioAoAbrir = $('#CadFin_Form_Cadastro').serialize();

        geraAutocomplete('#autocompleteParticipanteComprador', 'Participante', 'PesquisarCompradorParaAutocomplete', 'Participante', 'CadastrarParticipanteView');
        geraAutocomplete('#autocompleteParticipanteVendedor', 'Participante', 'PesquisarVendedorParaAutocomplete', 'Participante', 'CadastrarParticipanteView');
        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#CadFin_Form_Cadastro').ajaxForm(options);


    });

    function validateForm(formData, jqForm, options) {
        enableSubmitBtn();
        var banco = $('select[name=id_instituicao]').val();
        var valor_solicitado = $('input[name=valor_solicitado]').val();
        var imovel = $('select[name=id_imovel]').val();
        if (!banco || !valor_solicitado || !imovel) {
            alert('Você deve escolher o Banco e preencher o Valor Solicitado e o Imóvel!');
            return false;
        } else {
            $("#pageLoader").fadeIn(200);
        }
    }

    function enableSubmitBtn() {
        $("#CadFin_Btn_CadastrarFinanciamento").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind('click').click(function () {
            submitCadFinFormCadastro();
        });
    }
    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        $("#pageLoader").fadeOut(200);
        if (responseText == 'CadFinancSucesso') {
            document.getElementById("CadFin_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
        } else {
            if (responseText == 'CadFinancErro') {
                notificar('erro', "Erro ao cadastrar financiamento");
            } else {
                alert(responseText);
            }

        }

    }

    function preencherImovelNoSelect(val) {
        var idVendedor = val;
        var conteudoDoCampo = idVendedor;
        $("#select_id_imovel").empty();

        data = {
            controller: "Participante",
            action: "PesquisarImoveisParticipante",
            conteudoDoCampo: conteudoDoCampo
        };
        $.ajax({
            url: 'index.php',
            dataType: 'json',
            type: 'POST',
            data: data,
            success: function (content) {
                if (content === 'userNotLogged') {
                    userNotLogged = true;
                    window.location = 'index.php';
                } else {
                    var result = '';
                    contentJson = content;
                    for (var i = 0; i < content.length; i++) {
                        result += '<option value=' + content[i].id + '>' + content[i].matricula + '</option>';
                    }

                    $("#select_id_imovel").append(result);

                    $("#select_id_imovel").change(function () {
                        $("#valor_imovel").val(content[$("#select_id_imovel option:selected").index()].valor);
                    }).change();


                }
            }
        });
    }


</script>
<div class="pageTitle">Cadastrar Financiamento</div>
<div id="pageContent">
    <form id="CadFin_Form_Cadastro" action="" class="askSave" method="POST">


        <div class="box">
            <div class="boxIcon iconPessoas"></div>
            <div class="boxTitulo">Participantes</div>
            <div class="boxContent">
                <div id="CadFin_Div_CamposParticipantes" class="blocoDeCampos CadFin_Div_CamposParticipantes">
                    <div class="campo">
                        <div class="label">Id:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="participantes[0][id]" value=""
                                                      style="width: 40px" class="autocompleteParticipante id" readonly/>
                            </div>

                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Vendedor:</div>
                        <div class="item">
                            <div class="input"><input type="text" value="" style="width: 400px"
                                                      class="autocompleteParticipante"
                                                      id="autocompleteParticipanteVendedor"/></div>

                        </div>
                    </div>
                    <input type="hidden" name="participantes[0][id_tipo_participante]" value="3">

                </div>
                <div class="blocoDeCampos CadFin_Div_CamposParticipantes">
                    <div class="campo">
                        <div class="label">Id:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="participantes[1][id]" value=""
                                                      style="width: 40px" class="autocompleteParticipante id" readonly/>
                            </div>

                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Comprador:</div>
                        <div class="item">
                            <div class="input"><input type="text" value="" style="width: 400px"
                                                      class="autocompleteParticipante"
                                                      id="autocompleteParticipanteComprador"/></div>

                        </div>
                    </div>
                    <input type="hidden" name="participantes[1][id_tipo_participante]" value="1">

                </div>


                /*
                <div id="CadFin_Btn_AdicionarParticipante" class="button btnAdd"
                     onclick="CadFin_Fun_AdicionarCampos(this.id, 'Participantes');">
                    <div></div>
                    Adicionar Participante
                </div>
                */


            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconFinanceiroDados"></div>
            <div class="boxTitulo">Dados do Financiamento</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Banco:</div>
                    <div class="item">
                        <div class="input">
                            <select name="id_instituicao" style="width: 220px" required>
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
                    <div class="label">Valor Solicitado:</div>
                    <div class="item">
                        <div class="input">
                            <div class="leftText">R$</div>
                            <input type="text" name="valor_solicitado" id="valor_imovel" value="" style="width: 150px"
                                   class="formatValor"
                                   required/>
                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Matrícula do Imóvel</div>
                    <div class="item">
                        <div class="input">

                            <select name="id_imovel" id="select_id_imovel" style="width: 200px">
                                <option value="">Selecione</option>

                            </select>
                            <div class="select"></div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconDocumentos"></div>
            <div class="boxTitulo">Documentos da proposta</div>
            <div class="boxContent">
                <div id="CadFin_Div_CamposDocumentos" class="blocoDeCampos CadFin_Div_CamposDocumentos">
                    <div class="campo">
                        <div class="label">Título do documento:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="documentos[0][titulo_documento]" value=""
                                                      style="width:300px"/></div>

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
                </div>
                <div id="CadFin_Btn_AdicionarDocumento" class="button btnAdd"
                     onclick="CadFin_Fun_AdicionarCampos(this.id, 'Documentos');">
                    <div></div>
                    Adicionar Documento
                </div>
            </div>
        </div>

        <div class="botoes">
            <div id="CadFin_Btn_CadastrarFinanciamento" class="buttonForm btnCad" onclick="submitCadFinFormCadastro()">
                <div></div>
                Cadastrar Proposta de Financiamento
            </div>
        </div>
        <input type='hidden' name='controller' value='Financiamento'/>
        <input type='hidden' name='action' value='CadastrarFinanciamento'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
</div>