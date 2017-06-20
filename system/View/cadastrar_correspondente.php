<?php
$params = $this->getParams();
if (isset($params['correspondente'])) {
    $correspondente = $params['correspondente'];
}

$arrUfs = $params['ufs'];
?>
<script type="text/javascript">

    $(document).ready(function () {
        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#CadCorresp_Form_Cadastro').ajaxForm(options);
        conteudoDoFormularioAoAbrir = $('#CadCorresp_Form_Cadastro').serialize();
    });


    function CadPart_Fun_AdicionarCampos(objectId, campo) {
        var clone = $('#CadPart_Div_Campos' + campo).clone(false).attr('id', '');
        clone.find('input, select').val("");
        clone.find('[type=file]').parent().children('.file').html('Selecione um arquivo');
        $('#' + objectId).before(clone);
        formataCampos();
    }

    function submitCadCorrespFormCadastro() {
        $("#CadCorresp_Btn_CadastrarCorrespondente").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#CadCorresp_Form_Cadastro").submit();
    }

    function validateForm(formData, jqForm, options) {

        enableSubmitBtn();
        var camposEmBranco = '';
        if (!$('input[name=razao_social]').val())
            camposEmBranco += 'Razão Social\n';
        if (!$('input[name=nome_fantasia]').val())
            camposEmBranco += 'Nome Fantasia\n';
        if (!$('input[name=cnpj]').val())
            camposEmBranco += 'CNPJ\n';
        if (!$('input[name=cep]').val())
            camposEmBranco += 'CEP\n';
        if (!$('input[name=logradouro]').val())
            camposEmBranco += 'Logradroudo\n';
        if (!$('input[name=numero]').val())
            camposEmBranco += 'Numero\n';
        if (!$('input[name=bairro]').val())
            camposEmBranco += 'Bairro\n';
        if (!$('input[name=cidade]').val())
            camposEmBranco += 'Cidade\n';
        if (!$('select[name=uf]').val())
            camposEmBranco += 'Estado\n';
        if (!$('input[name=tel1]').val())
            camposEmBranco += 'Telefone 1\n';
        if (!$('input[name=email1]').val())
            camposEmBranco += 'Email 1\n';

        if (camposEmBranco != '') {
            alert('Você deve preencher os seguintes campos:\n\n' + camposEmBranco);
            return false;

        } else {
            $("#pageLoader").fadeIn(200);
        }
    }

    function enableSubmitBtn() {
        $("#CadCorresp_Btn_CadastrarCorrespondente").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind('click').click(function () {
            submitCadCorrespFormCadastro();
        });
    }

    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        $("#pageLoader").fadeOut(200);
        if (responseText === 'CadCorrespSucesso') {
            document.getElementById("CadCorresp_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
            fecharCadastroRapido();
        } else {
            if (responseText == 'CadCorrespErro') {
                notificar('erro', "Erro ao cadastrar correspondente");
            } else {
                alert(responseText);
            }

        }

    }
</script>
<div class="pageTitle">Cadastrar Correspondente</div>
<div id="pageContent">
    <form id="CadCorresp_Form_Cadastro" action="" class="askSave" method=POST>
        <div class="box">
            <div class="boxIcon iconPrancheta"></div>
            <div class="boxTitulo">Dados do Correspondente</div>
            <div class="boxContent">

                <div class="campo">
                    <div class="label">Razão Social:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="razao_social"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getRazaoSocial(); ?>"
                                                  style="width: 400px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nome Fantasia:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome_fantasia"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getNomeFantasia(); ?>"
                                                  style="width: 400px" required/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">CNPJ:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cnpj"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getCnpj(); ?>"
                                                  style="width:150px" class="formatCNPJ" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Insc. Estadual:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="inscricao_estadual"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getInscricaoEstadual(); ?>"
                                                  style="width:150px"/></div>
                    </div>
                </div>
                <div class="clear"></div>

            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconEndereco"></div>
            <div class="boxTitulo">Endereço</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">CEP:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cep"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEndereco()->getCep(); ?>"
                                                  style="width: 100px" class="formatCEP" required/></div>
                        <div class="infoText">O sistema irá preencher automaticamente o endereço</div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Logradouro:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="logradouro"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEndereco()->getLogradouro(); ?>"
                                                  style="width: 350px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Número:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="numero"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEndereco()->getNumero(); ?>"
                                                  style="width: 100px" class="formatNum" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Complemento:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="complemento"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEndereco()->getComplemento(); ?>"
                                                  style="width: 150px"/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Bairro:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="bairro"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEndereco()->getBairro(); ?>"
                                                  style="width: 200px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Cidade:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cidade"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEndereco()->getCidade(); ?>"
                                                  style="width: 200px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">UF:</div>
                    <div class="item">
                        <div class="input"><select name="uf" style="width: 100px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($arrUfs as $uf) { ?>
                                    <option value="<?php echo $uf ?>" <?php if (isset($correspondente) && $correspondente->getEndereco()->getUf() == $uf) echo 'selected'; ?>><?php echo $uf ?></option>
                                <?php } ?>

                            </select>
                            <div class="select"></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconContato"></div>
            <div class="boxTitulo">Informações de Contato</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Telefone 1:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="tel1"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getTelefoneContato1(); ?>"
                                                  style="width: 135px" class="formatTelefone" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Telefone 2:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="tel2"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getTelefoneContato2(); ?>"
                                                  style="width: 135px" class="formatTelefone"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Telefone 3:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="tel3"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getTelefoneContato2(); ?>"
                                                  style="width: 135px" class="formatTelefone"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Telefone 4:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="tel4"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getTelefoneContato2(); ?>"
                                                  style="width: 135px" class="formatTelefone"/></div>
                    </div>
                </div>

                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Email 1:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="email1"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEmail(); ?>"
                                                  style="width: 300px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Email 2:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="email2"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getEmail(); ?>"
                                                  style="width: 300px"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Site:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="site"
                                                  value="<?php if (isset($correspondente)) echo $correspondente->getSite(); ?>"
                                                  style="width: 300px"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="botoes">
            <div id="CadCorresp_Btn_CadastrarCorrespondente" class="buttonForm btnCad"
                 onclick="submitCadCorrespFormCadastro()">
                <div></div><?php if (isset($correspondente)) echo "Salvar"; else echo "Cadastrar Correspondente"; ?>
            </div>
        </div>
        <?php if (isset($correspondente)) { ?>
            <input type='hidden' name='id_correspondente' value='<?php echo $correspondente->getId(); ?>'/>
        <?php } ?>
        <input type='hidden' name='controller' value='Correspondente'/>
        <input type='hidden' name='action'
               value='<?php if (isset($correspondente)) echo 'AtualizarCorrespondente'; else echo 'CadastrarCorrespondente'; ?>'/>
        <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
    </form>
</div>