<?php

$params = $this->getParams();


if (isset($params['comprador'])) {
    if ($params['comprador'] != '') {
        /**
         * @var ParticipanteModel $participante
         */
        $participante = $params['comprador'];
    }
}

if (isset($params['parenteDoComprador'])) {
    $cadastroParente = true;
}

$arrUfs = $params['ufs'];
?>
<script type="text/javascript">
    function CadPart_Fun_AdicionarCampos(objectId, campo) {
        var clone = $('#CadPart_Div_Campos' + campo).clone(false).attr('id', '');
        clone.find('input, select').val("");
        var totalDeBlocos = $('.CadPart_Div_Campos' + campo).length;
        clone.find('input, select').each(function (i) {
            this.name = this.name.replace('[0]', '[' + totalDeBlocos + ']');
        });
        clone.find('[type=file]').parent().children('.file').html('Selecione um arquivo');
        $('#' + objectId).before(clone);
        formataCampos();

        geraAutocomplete('.autocompleteParticipante', 'Participante', 'PesquisarCompradorParaAutocomplete', 'Participante', 'CadastrarCompradorView');
    }

    function submitCadPartFormCadastro() {
        $("#CadPart_Btn_CadastrarComprador").css({
            "opacity": 0.4,
            cursor: "default"
        }).removeProp('onclick');
        $("#CadPart_Form_Cadastro").submit();
    }

    $(document).ready(function () {

        var options = {
            success: showResponse,
            beforeSubmit: validateForm

        };

        $('#CadPart_Form_Cadastro').ajaxForm(options);
        conteudoDoFormularioAoAbrir = $('#CadPart_Form_Cadastro').serialize();

        geraAutocomplete('.autocompleteParticipante', 'Participante', 'PesquisarCompradorParaAutocomplete', 'Participante', 'CadastrarCompradorView');

    });

    function validateForm(formData, jqForm, options) {

        enableSubmitBtn();
        var camposEmBranco = '';
        if (!$('input[name=cpf]').val())
            camposEmBranco += 'CPF\n';
        if (!$('input[name=nome]').val())
            camposEmBranco += 'Nome Completo\n';
        if (!$('input[name=data_nascimento]').val())
            camposEmBranco += 'Data de Nascimento\n';
        if (!$('select[name=id_grau_instrucao]').val())
            camposEmBranco += 'Grau De Instrução\n';
        if (!$('input[name=rg]').val())
            camposEmBranco += 'Identidade(RG)\n';
        if (!$('select[name=orgao_emissor_rg]').val())
            camposEmBranco += 'Orgão (RG)\n';
        if (!$('select[name=uf_orgao_emissor_rg]').val())
            camposEmBranco += 'UF (RG)\n';
        if (!$('select[name=id_estado_civil]').val())
            camposEmBranco += 'Estado Civil\n';
        if (!$('select[name=nacionalidade]').val())
            camposEmBranco += 'Nacionalidade\n';
        if (!$('input[name=naturalidade]').val())
            camposEmBranco += 'Naturalidade\n';
        if (!$('select[name=uf_naturalidade]').val())
            camposEmBranco += 'UF Naturalidade\n';
        if (!$('input[name=profissao]').val())
            camposEmBranco += 'Profissão\n';
        if (!$('input[name=pis_pasep]').val())
            camposEmBranco += 'Nº PIS/PASEP\n';
        if (!$('input[name=nome_mae]').val())
            camposEmBranco += 'Nome da Mãe\n';
        if (!$('input[name=endereco_cep]').val())
            camposEmBranco += 'CEP\n';
        if (!$('input[name=endereco_logradouro]').val())
            camposEmBranco += 'Logradroudo\n';
        if (!$('input[name=endereco_numero]').val())
            camposEmBranco += 'Numero\n';
        if (!$('input[name=endereco_bairro]').val())
            camposEmBranco += 'Bairro\n';
        if (!$('input[name=endereco_cidade]').val())
            camposEmBranco += 'Cidade\n';
        if (!$('select[name=endereco_uf]').val())
            camposEmBranco += 'Estado\n';
        if (!$('select[name=endereco_id_tipo_residencia]').val())
            camposEmBranco += 'Tipo de residência\n';
        if (!$('input[name=contato_tel_residencial]').val())
            camposEmBranco += 'Telefone Residencial\n';
        if (!$('input[name=contato_email]').val())
            camposEmBranco += 'Email\n';

        if (camposEmBranco != '') {
            alert('Você deve preencher os seguintes campos:\n\n' + camposEmBranco);
            return false;

        } else {

            if ($('#CadPart_Form_Cadastro').parent().parent().parent().prop('id') == 'lightBox') {
                $("#lightBox  .pageLoader").fadeIn(200);
            } else {
                $("#pageLoader").fadeIn(200);
            }
        }
    }

    function enableSubmitBtn() {
        $("#CadPart_Btn_CadastrarComprador").css({
            "opacity": 1,
            cursor: "pointer"
        }).unbind("click").click(function () {
            submitCadPartFormCadastro();
        });
    }

    function showResponse(responseText, statusText, xhr, $form) {

        enableSubmitBtn();
        if ($('#CadPart_Form_Cadastro').parent().parent().parent().prop('id') == 'lightBox') {
            $("#lightBox  .pageLoader").fadeOut(200);
        } else {
            $("#pageLoader").fadeOut(200);
        }
        responseText = responseText.split("#", 2);
        responseResult = responseText[0];
        if (responseResult == 'CadParticipSucesso') {
            idParticipanteInserido = responseText[1];

            document.getElementById("CadPart_Form_Cadastro").reset();
            notificar('ok', 'Cadastrado com sucesso');
            if (!viewRapida) {
                setTimeout(function () {
                    if (confirm("Deseja cadastrar os documentos deste comprador?")) {
                        carregarViewComParametro('Participante', 'DocumentacoesParticipanteView', idParticipanteInserido);
                    }
                    ;
                }, 1000);
            }
            fecharCadastroRapido();
        } else {
            if (responseResult == 'CadParticipErro') {
                notificar('erro', "Erro ao cadastrar comprador");
            } else {
                alert(responseText);
            }
        }
    }

    function completaEndereco(cep) {
        var cep = cep.replace('-', '');
        cep = cep.replace('_', '');
        if (cep.length === 8) {
            $.ajax({
                url: 'http://cep.republicavirtual.com.br/web_cep.php',
                type: 'GET',
                data: {
                    formato: 'javascript',
                    cep: cep
                }
            }).done(function (content) {
                alert(content);
            });
        }
    }

</script>
<div class="pageTitle">Cadastrar Comprador</div>
<div id="pageContent">
    <form id="CadPart_Form_Cadastro" action="" method="POST" class="askSave">
        <div class="box">
            <div class="boxIcon iconPessoa"></div>
            <div class="boxTitulo">Dados do Comprador</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">CPF:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="cpf" style="width: 150px" class="formatCPF"
                                                  value="<?php
                                                  if (isset($participante)) {
                                                      echo $participante->getCpf();
                                                  }
                                                  ?>" required/></div>
                        <div class="infoText">O sistema tentará preencher as informações automaticamente.</div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Nome Completo (sem abreviações):</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome" style="width: 400px" value="<?php
                            if (isset($participante)) {
                                echo $participante->getNome();
                            }
                            ?>" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Sexo:</div>
                    <div class="item">
                        <div class="input">
                            <label>
                                <input type="radio" name="sexo" value="M" <?php
                                if (isset($participante)) {
                                    if ($participante->getSexo() == 'M') {
                                        echo 'checked="checked"';
                                    }
                                } else {
                                    echo 'checked="checked"';
                                }
                                ?>/>
                                Masculino
                            </label>
                            <label>
                                <input type="radio" name="sexo" value="F" <?php
                                if (isset($participante)) {
                                    if ($participante->getSexo() == 'F') {
                                        echo 'checked="checked"';
                                    }
                                } ?>
                                />
                                Feminino
                            </label>
                        </div>
                    </div>
                </div>

                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Data de Nascimento:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="data_nascimento"
                                                  value="<?php if (isset($participante) && $participante->getDataNascimento() != '') {
                                                      echo DataManipulator::FormatarData($participante->getDataNascimento());
                                                  } ?>" style="width: 150px" class="formatData"
                                                  required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Grau de Instrução:</div>
                    <div class="item">
                        <div class="input"><select name="id_grau_instrucao" style="width: 300px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($params['grau_instrucao'] as $grauInstrucao) { ?>
                                    <option value="<?php echo $grauInstrucao->getId(); ?>" <?php if (isset($participante) && $participante->getIdGrauInstrucao() == $grauInstrucao->getId()) {
                                        echo "selected";
                                    } ?>><?php echo $grauInstrucao->getGrauInstrucao(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Identidade (RG):</div>
                    <div class="item">
                        <div class="input"><input type="text" name="rg" value="<?php if (isset($participante)) {
                                echo $participante->getRg();
                            } ?>" style="width: 180px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Orgão (RG):</div>
                    <div class="item">
                        <div class="input"><select name="orgao_emissor_rg" style="width: 100px" required>
                                <option value="">Selecione</option>
                                <option value="SSP" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'SSP') {
                                    echo 'selected';
                                } ?>>SSP
                                </option>
                                <option value="Ministério da Aeronáutica" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Ministério da Aeronáutica') {
                                    echo 'selected';
                                } ?>>Ministério da Aeronáutica
                                </option>
                                <option value="Ministério do Exercito" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Ministério do Exercito') {
                                    echo 'selected';
                                } ?>>Ministério do Exercito
                                </option>
                                <option value="Ministério da Marinha" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Ministério da Marinha') {
                                    echo 'selected';
                                } ?>>Ministério da Marinha
                                </option>
                                <option value="Conselho Regional de Enfermagem" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Enfermagem') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Enfermagem
                                </option>
                                <option value="Conselho Regional de Nutrição" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Nutrição') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Nutrição
                                </option>
                                <option value="Ordem dos Advogados do Brasil" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Ordem dos Advogados do Brasil') {
                                    echo 'selected';
                                } ?>>Ordem dos Advogados do Brasil
                                </option>
                                <option value="Outro tipo de órgão emissor" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Outro tipo de órgão emissor') {
                                    echo 'selected';
                                } ?>>Outro tipo de órgão emissor
                                </option>
                                <option value="Órgão emissor estrangeiro" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Órgão emissor estrangeiro') {
                                    echo 'selected';
                                } ?>>Órgão emissor estrangeiro
                                </option>
                                <option value="Departamento de Trânsito" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Departamento de Trânsito') {
                                    echo 'selected';
                                } ?>>Departamento de Trânsito
                                </option>
                                <option value="Conselho Regional de Psicologia" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Psicologia') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Psicologia
                                </option>
                                <option value="Conselho Regional de Química" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Química') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Química
                                </option>
                                <option value="Conselho Regional de Corretores de Imóveis" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Corretores de Imóveis') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Corretores de Imóveis
                                </option>
                                <option value="Conselho Regional de Engenharia, Arq. e Agronomia" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Engenharia, Arq. e Agronomia') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Engenharia, Arq. e Agronomia
                                </option>
                                <option value="Ordem dos Músicos do Brasil" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Ordem dos Músicos do Brasil') {
                                    echo 'selected';
                                } ?>>Ordem dos Músicos do Brasil
                                </option>
                                <option value="Conselho Regional de Medicina e Veterinária" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Conselho Regional de Medicina e Veterinária') {
                                    echo 'selected';
                                } ?>>Conselho Regional de Medicina e Veterinária
                                </option>
                                <option value="Outros" <?php if (isset($participante) && $participante->getOrgaoEmissorRg() == 'Outros') {
                                    echo 'selected';
                                } ?>>Outros
                                </option>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">UF (RG):</div>
                    <div class="item">
                        <div class="input"><select name="uf_orgao_emissor_rg" style="width: 100px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($arrUfs as $uf) { ?>
                                    <option value="<?php echo $uf ?>" <?php if (isset($participante) && $participante->getUfOrgaoEmissorRg() == $uf) echo 'selected'; ?>><?php echo $uf ?></option>
                                <?php } ?>

                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Data da emissão:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="data_emissao_rg" value="" style="width: 150px"
                                                  class="formatData"
                                                  required/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Estado Civil:</div>
                    <div class="item">
                        <div class="input"><select name="id_estado_civil" style="width: 180px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($params['estados_civis'] as $estadoCivil) { ?>
                                    <option
                                            value="<?php echo $estadoCivil->getIdEstadoCivil(); ?>" <?php if (isset($participante) && $participante->getIdEstadoCivil() == $estadoCivil->getIdEstadoCivil()) echo 'selected'; ?>><?php echo $estadoCivil->getDescricaoEstadoCivil(); ?></option>
                                <?php } ?>

                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Regime de Casamento:</div>
                    <div class="item">
                        <div class="input"><select name="id_regime_casamento" style="width: 180px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['regimes_casamento'] as $regimeCasamento) { ?>
                                    <option
                                            value="<?php echo $regimeCasamento->getIdRegimeCasamento(); ?>" <?php if (isset($participante) && $participante->getIdRegimeCasamento() == $regimeCasamento->getIdRegimeCasamento()) echo 'selected'; ?>><?php echo $regimeCasamento->getRegimeCasamento(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Data do casamento:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="data_casamento"
                                                  value="<?php if (isset($participante)) echo DataManipulator::FormatarData($participante->getDataCasamento()); ?>"
                                                  style="width: 150px" class="formatData"
                                                  required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nacionalidade:</div>
                    <div class="item">
                        <div class="input"><select name="nacionalidade" style="width: 170px" required>
                                <option value="">Selecione</option>
                                <option value="Brasileiro" <?php if (isset($participante) && $participante->getNacionalidade() == "Brasileiro") echo 'selected'; ?>>
                                    Brasileiro(a)
                                </option>
                                <option value="Estrangeiro" <?php if (isset($participante) && $participante->getNacionalidade() == "Estrangeiro") echo 'selected'; ?>>
                                    Estrangeiro(a)
                                </option>

                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Naturalidade:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="naturalidade"
                                                  value="<?php if (isset($participante)) echo $participante->getNaturalidade(); ?>"
                                                  style="width: 200px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">UF Naturalidade:</div>
                    <div class="item">
                        <div class="input"><select name="uf_naturalidade" style="width: 100px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($arrUfs as $uf) { ?>
                                    <option value="<?php echo $uf ?>" <?php if (isset($participante) && $participante->getUfNaturalidade() == $uf) echo 'selected'; ?>><?php echo $uf ?></option>
                                <?php } ?>

                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Profissão:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="profissao"
                                                  value="<?php if (isset($participante)) echo $participante->getProfissao(); ?>"
                                                  style="width: 300px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nº PIS/PASEP:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="pis_pasep"
                                                  value="<?php if (isset($participante)) echo $participante->getNumeroPisPasep(); ?>"
                                                  style="width: 150px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nome da Mãe:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome_mae"
                                                  value="<?php if (isset($participante)) echo $participante->getNomeMae(); ?>"
                                                  style="width: 300px" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nome do Pai:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="nome_pai"
                                                  value="<?php if (isset($participante)) echo $participante->getNomePai(); ?>"
                                                  style="width: 300px"/></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="box">
            <div class="boxIcon iconEndereco"></div>
            <div class="boxTitulo">Endereço</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">CEP:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="endereco_cep"
                                                  value="<?php if (isset($participante)) echo $participante->getCep(); ?>"
                                                  style="width: 100px"
                                                  class="formatCEP" onkeyup="completaEndereco(this.value)" required/>
                        </div>
                        <div class="infoText">O sistema irá preencher automaticamente o endereço</div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Logradouro:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="endereco_logradouro"
                                                  value="<?php if (isset($participante)) echo $participante->getLogradouro(); ?>"
                                                  style="width: 350px"
                                                  onclick="notificar('#900')" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Número:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="endereco_numero"
                                                  value="<?php if (isset($participante)) echo $participante->getNumero(); ?>"
                                                  style="width: 100px"
                                                  class="formatNum" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Complemento:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="endereco_complemento"
                                                  value="<?php if (isset($participante)) echo $participante->getComplemento(); ?>"
                                                  style="width: 150px"/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Bairro:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="endereco_bairro"
                                                  value="<?php if (isset($participante)) echo $participante->getBairro(); ?>"
                                                  style="width: 200px" required/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Cidade:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="endereco_cidade"
                                                  value="<?php if (isset($participante)) echo $participante->getCidade(); ?>"
                                                  style="width: 200px" required/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">UF:</div>
                    <div class="item">
                        <div class="input"><select name="endereco_uf" style="width: 100px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($arrUfs as $uf) { ?>
                                    <option value="<?php echo $uf ?>" <?php if (isset($participante) && $participante->getUf() == $uf) echo 'selected'; ?>><?php echo $uf ?></option>
                                <?php } ?>

                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Tipo de residência:</div>
                    <div class="item">
                        <div class="input"><select name="endereco_id_tipo_residencia" style="width: 200px" required>
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_residencia'] as $tipoResidencia) { ?>
                                    <option
                                            value="<?php echo $tipoResidencia->getIdTipoResidencia(); ?>" <?php if (isset($participante) && $participante->getResidencia()->getIdTipoResidencia() == $tipoResidencia->getIdTipoResidencia()) echo 'selected'; ?>><?php echo $tipoResidencia->getTipoResidencia(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Valor do Aluguel:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="endereco_valor_aluguel"
                                                  value=" <?php if (isset($participante)) echo $participante->getResidencia()->getValorAluguel(); ?>"
                                                  style="width: 135px"
                                                  class="formatValor"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="boxIcon iconContato"></div>
            <div class="boxTitulo">Informações de Contato</div>
            <div class="boxContent">
                <div class="campo">
                    <div class="label">Telefone Residencial:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="contato_tel_residencial"
                                                  value="<?php if (isset($participante)) echo $participante->getTelefoneResidencial(); ?>"
                                                  style="width: 135px"
                                                  class="formatTelefone" required/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Telefone Celular:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="contato_tel_celular"
                                                  value="<?php if (isset($participante)) echo $participante->getTelefoneCelular(); ?>"
                                                  style="width: 135px"
                                                  class="formatTelefone"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Telefone Comercial:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="contato_tel_comercial"
                                                  value="<?php if (isset($participante)) echo $participante->getTelefoneComercial(); ?>"
                                                  style="width: 135px"
                                                  class="formatTelefone"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Outro Telefone:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="contato_tel_outro"
                                                  value="<?php if (isset($participante)) echo $participante->getTelefoneOutro(); ?>"
                                                  style="width: 135px"
                                                  class="formatTelefone"/></div>
                    </div>
                </div>

                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Email:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="contato_email"
                                                  value="<?php if (isset($participante)) echo $participante->getEmail(); ?>"
                                                  style="width: 300px" required/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Site:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="contato_site"
                                                  value="<?php if (isset($participante)) echo $participante->getSite(); ?>"
                                                  style="width: 300px"/></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="boxIcon iconFinanceiro"></div>
            <div class="boxTitulo">Dados Profissionais</div>
            <div class="boxContent">
                <?php if (isset($participante) && count($participante->getArrayDadosProfissionais()) > 0) {
                    for ($i = 0; $i < count($participante->getArrayDadosProfissionais()); $i++) {
                        /**
                         * @var DadosProfissionaisModel $dadosProfissionais
                         */
                        $dadosProfissionais = $participante->getArrayDadosProfissionais()[$i];
                        ?>
                        <div id="CadPart_Div_CamposDadosProfiss" class="blocoDeCampos CadPart_Div_CamposDadosProfiss">
                            <div class="campo">
                                <div class="label">Profissão/Ocupação:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][profissao]"
                                                              value="<?php echo $dadosProfissionais->getProfissao(); ?>"
                                                              style="width: 300px;"/>
                                    </div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Empresa/Empregador:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][empresa_empregador]"
                                                              value="<?php echo $dadosProfissionais->getEmpresaEmpregador(); ?>"
                                                              style="width: 300px;"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">CNPJ:</div>
                                <div class="item">
                                    <div class="input"><input type="text" name="dados_profiss[<?php echo $i ?>][cnpj]"
                                                              value="<?php echo $dadosProfissionais->getCnpj(); ?>"
                                                              style="width: 300px;"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Natureza da Ocupação:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][nat_ocupacao]"
                                                              value="<?php echo $dadosProfissionais->getNaturezaOcupacao(); ?>"
                                                              style="width: 300px;"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Nível do Cargo:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][nivel_cargo]"
                                                              value="<?php echo $dadosProfissionais->getNivelCargo(); ?>"
                                                              style="width: 300px;"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Data Início da ocupação:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][data_inic_ocup]"
                                                              value="<?php echo DataManipulator::FormatarData($dadosProfissionais->getDataInicioOcupacao()); ?>"
                                                              style="width: 130px;"
                                                              class="formatData"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Renda Bruta Mensal:</div>
                                <div class="item">
                                    <div class="leftText">R$</div>
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][renda_mensal]"
                                                              value="<?php echo $dadosProfissionais->getValorRendaBrutaMensal(); ?>"
                                                              style="width: 120px;"
                                                              class="formatValor"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Data de Referência:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="dados_profiss[<?php echo $i ?>][data_ref]"
                                                              value="<?php echo DataManipulator::FormatarData($dadosProfissionais->getDataReferencia()); ?>"
                                                              style="width: 130px;"
                                                              class="formatData"/></div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                <?php } else { ?>
                    <div id="CadPart_Div_CamposDadosProfiss" class="blocoDeCampos CadPart_Div_CamposDadosProfiss">
                        <div class="campo">
                            <div class="label">Profissão/Ocupação:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][profissao]" value=""
                                                          style="width: 300px;"/>
                                </div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Empresa/Empregador:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][empresa]" value=""
                                                          style="width: 300px;"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">CNPJ:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][cnpj]" value=""
                                                          style="width: 300px;"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Natureza da Ocupação:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][nat_ocupacao]" value=""
                                                          style="width: 300px;"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Nível do Cargo:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][nivel_cargo]" value=""
                                                          style="width: 300px;"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Data Início da ocupação:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][data_inic_ocup]" value=""
                                                          style="width: 130px;"
                                                          class="formatData"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Renda Bruta Mensal:</div>
                            <div class="item">
                                <div class="leftText">R$</div>
                                <div class="input"><input type="text" name="dados_profiss[0][renda_mensal]" value=""
                                                          style="width: 120px;"
                                                          class="formatValor"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Data de Referência:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="dados_profiss[0][data_ref]" value=""
                                                          style="width: 130px;"
                                                          class="formatData"/></div>
                            </div>
                        </div>
                    </div>
                <?php } ?>


                <div id="CadPart_Btn_AdicionarDadosProfiss" class="button btnAdd"
                     onclick="CadPart_Fun_AdicionarCampos(this.id, 'DadosProfiss');">
                    <div></div>
                    Adicionar dados profissionais
                </div>
            </div>
        </div>


        <div class="box">
            <div class="boxIcon iconFinanceiro"></div>
            <div class="boxTitulo">Compromissos Financeiros</div>
            <div class="boxContent">

                <?php if (isset($participante) && count($participante->getArrayCompromissosFinanceiros()) > 0) {
                    for ($i = 0; $i < count($participante->getArrayCompromissosFinanceiros()); $i++) {
                        /**
                         * @var CompromissoFinanceiroModel $compromissoFinanceiro
                         */
                        $compromissoFinanceiro = $participante->getArrayCompromissosFinanceiros()[$i];
                        ?>
                        <div id="CadPart_Div_CamposCompFinanc" class="blocoDeCampos CadPart_Div_CamposCompFinanc">
                            <div class="campo">
                                <div class="label">Tipo:</div>
                                <div class="item">
                                    <div class="input"><select name="compromissos_financ[<?php echo $i ?>][id_tipo]"
                                                               style="width: 200px">
                                            <option value="">Selecione</option>
                                            <?php foreach ($params['tipos_compromissos_financeiros'] as $tipoCompromissoFinanceiro) { ?>
                                                <option value="<?php echo $tipoCompromissoFinanceiro->getIdTipoCompromisso(); ?>" <?php if ($compromissoFinanceiro->getIdTipoCompromisso() == $tipoCompromissoFinanceiro->getIdTipoCompromisso()) echo 'selected'; ?>><?php echo $tipoCompromissoFinanceiro->getTipoCompromisso(); ?></option>
                                            <?php } ?>
                                        </select>

                                        <div class="select"></div>
                                    </div>

                                </div>
                            </div>

                            <div class="campo">
                                <div class="label">Nº de Parcelas:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="compromissos_financ[<?php echo $i ?>][num_parcelas]"
                                                              value="<?php echo $compromissoFinanceiro->getNumeroParcelas(); ?>"
                                                              style="width: 80px;" class="formatNum"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Parcelas pagas:</div>
                                <div class="item">
                                    <div class="input"><input type="text"
                                                              name="compromissos_financ[<?php echo $i ?>][parcelas_pagas]"
                                                              value="<?php echo $compromissoFinanceiro->getNumeroParcelasPagas(); ?>"
                                                              style="width: 80px;" class="formatNum"/></div>
                                </div>
                            </div>
                            <div class="campo">
                                <div class="label">Valor da parcela:</div>
                                <div class="item">
                                    <div class="leftText">R$</div>
                                    <div class="input"><input type="text"
                                                              name="compromissos_financ[<?php echo $i ?>][valor_parcela]"
                                                              value="<?php echo $compromissoFinanceiro->getValorParcela(); ?>"
                                                              style="width: 130px;" class="formatValor"/></div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                <?php } else { ?>
                    <div id="CadPart_Div_CamposCompFinanc" class="blocoDeCampos CadPart_Div_CamposCompFinanc">
                        <div class="campo">
                            <div class="label">Tipo:</div>
                            <div class="item">
                                <div class="input"><select name="compromissos_financ[0][id_tipo]" style="width: 200px">
                                        <option value="">Selecione</option>
                                        <?php foreach ($params['tipos_compromissos_financeiros'] as $tipoCompromissoFinanceiro) { ?>
                                            <option value="<?php echo $tipoCompromissoFinanceiro->getIdTipoCompromisso(); ?>"><?php echo $tipoCompromissoFinanceiro->getTipoCompromisso(); ?></option>
                                        <?php } ?>
                                    </select>

                                    <div class="select"></div>
                                </div>

                            </div>
                        </div>

                        <div class="campo">
                            <div class="label">Nº de Parcelas:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="compromissos_financ[0][num_parcelas]"
                                                          value=""
                                                          style="width: 80px;" class="formatNum"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Parcelas pagas:</div>
                            <div class="item">
                                <div class="input"><input type="text" name="compromissos_financ[0][parcelas_pagas]"
                                                          value=""
                                                          style="width: 80px;" class="formatNum"/></div>
                            </div>
                        </div>
                        <div class="campo">
                            <div class="label">Valor da parcela:</div>
                            <div class="item">
                                <div class="leftText">R$</div>
                                <div class="input"><input type="text" name="compromissos_financ[0][valor_parcela]"
                                                          value=""
                                                          style="width: 130px;" class="formatValor"/></div>
                            </div>
                        </div>
                    </div>
                <?php } ?>


                <div id="CadPart_Btn_AdicionarCompFinanc" class="button btnAdd"
                     onclick="CadPart_Fun_AdicionarCampos(this.id, 'CompFinanc');">
                    <div></div>
                    Adicionar Compromisso Financeiro
                </div>

            </div>

        </div>
        /*
        <h1>Contas Bancárias</h1>

        <?php if (isset($participante) && count($participante->getArrayDadosBancarios()) > 0) {
            for ($i = 0; $i < count($participante->getArrayDadosBancarios()); $i++) {
                /**
                 * @var DadoBancarioModel $dadosBancarios
                 */
                $dadoBancario = $participante->getArrayDadosBancarios()[$i];
                ?>

                <div id="CadPart_Div_CamposConta" class="blocoDeCampos CadPart_Div_CamposConta">
                    <div class="campo">
                        <div class="label">Banco:</div>
                        <div class="item">
                            <div class="input"><select name="contas_bancarias[<?php echo $i ?>][id_instituicao]"
                                                       style="width: 320px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['bancos'] as $banco) { ?>
                                        <option
                                                value="<?php echo $banco->getIdBanco(); ?>" <?php if ($dadoBancario->getInstituicaoBancaria()->getIdBanco() == $banco->getIdBanco()) echo 'selected'; ?>><?php echo $banco->getNumeroBanco() . " - " . $banco->getNome(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Tipo de conta:</div>
                        <div class="item">
                            <div class="input"><select name="contas_bancarias[<?php echo $i ?>][id_tipo_conta]"
                                                       style="width: 120px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['tipos_conta'] as $tipoConta) { ?>
                                        <option value="<?php echo $tipoConta->getIdTipoConta(); ?>" <?php if ($dadoBancario->getIdTipoConta() == $tipoConta->getIdTipoConta()) echo 'selected'; ?>><?php echo $tipoConta->getTipoConta(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Limite:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="contas_bancarias[<?php echo $i ?>][limite]"
                                                      value="<?php echo $dadoBancario->getLimite(); ?>"
                                                      style="width: 120px;"
                                                      class="formatValor"/></div>
                        </div>
                    </div>
                </div>

            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposConta" class="blocoDeCampos CadPart_Div_CamposConta">
                <div class="campo">
                    <div class="label">Banco:</div>
                    <div class="item">
                        <div class="input"><select name="contas_bancarias[0][id_instituicao]" style="width: 320px">
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
                    <div class="label">Tipo de conta:</div>
                    <div class="item">
                        <div class="input"><select name="contas_bancarias[0][id_tipo_conta]" style="width: 120px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_conta'] as $tipoConta) { ?>
                                    <option value="<?php echo $tipoConta->getIdTipoConta(); ?>"><?php echo $tipoConta->getTipoConta(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Limite:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="contas_bancarias[0][limite]" value=""
                                                  style="width: 120px;"
                                                  class="formatValor"/></div>
                    </div>
                </div>
            </div>
        <?php } ?>

        <div id="CadPart_Btn_AdicionarConta" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Conta');">
            <div></div>
            Adicionar Conta
        </div>

        <h1>Aplicações</h1>
        <?php if (isset($participante) && count($participante->getArrayAplicacoesFinanceiras()) > 0) {
            for ($i = 0; $i < count($participante->getArrayAplicacoesFinanceiras()); $i++) {
                /**
                 * @var AplicacaoFinanceiraModel $aplicacaoFinanceira
                 */
                $aplicacaoFinanceira = $participante->getArrayAplicacoesFinanceiras()[$i];
                ?>

                <div id="CadPart_Div_CamposAplicacao" class="blocoDeCampos CadPart_Div_CamposAplicacao">
                    <div class="campo">
                        <div class="label">Instituição:</div>
                        <div class="item">
                            <div class="input"><select name="aplicacoes[<?php echo $i ?>][id_instituicao]"
                                                       style="width: 320px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['bancos'] as $banco) { ?>
                                        <option
                                                value="<?php echo $banco->getIdBanco(); ?>" <?php if ($aplicacaoFinanceira->getInstituicaoBancaria()->getIdBanco() == $banco->getIdBanco()) echo 'selected'; ?>><?php echo $banco->getNumeroBanco() . " - " . $banco->getNome(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Tipo de aplicação:</div>
                        <div class="item">
                            <div class="input"><select name="aplicacoes[<?php echo $i ?>][id_tipo_aplicacao]"
                                                       style="width: 120px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['tipos_aplicacao_financeira'] as $tipoAplicacaoFinanceira) { ?>
                                        <option value="<?php echo $tipoAplicacaoFinanceira->getIdTipoAplicacao(); ?>" <?php if ($aplicacaoFinanceira->getIdTipoAplicacao() == $aplicacaoFinanceira->getIdTipoAplicacao()) echo 'selected'; ?>><?php echo $tipoAplicacaoFinanceira->getTipoAplicacao(); ?></option>
                                    <?php } ?>

                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Valor:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="aplicacoes[<?php echo $i ?>][valor]"
                                                      value="<?php echo $aplicacaoFinanceira->getValor(); ?>"
                                                      style="width: 120px;"
                                                      class="formatValor"/></div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposAplicacao" class="blocoDeCampos CadPart_Div_CamposAplicacao">
                <div class="campo">
                    <div class="label">Instituição:</div>
                    <div class="item">
                        <div class="input"><select name="aplicacoes[0][id_instituicao]" style="width: 320px">
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
                    <div class="label">Tipo de aplicação:</div>
                    <div class="item">
                        <div class="input"><select name="aplicacoes[0][id_tipo_aplicacao]" style="width: 120px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_aplicacao_financeira'] as $tipoAplicacaoFinanceira) { ?>
                                    <option value="<?php echo $tipoAplicacaoFinanceira->getIdTipoAplicacao(); ?>"><?php echo $tipoAplicacaoFinanceira->getTipoAplicacao(); ?></option>
                                <?php } ?>

                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Valor:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="aplicacoes[0][valor]" value="" style="width: 120px;"
                                                  class="formatValor"/></div>
                    </div>
                </div>
            </div>
        <?php } ?>
        <div id="CadPart_Btn_AdicionarAplicacao" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Aplicacao');">
            <div></div>
            Adicionar Aplicação
        </div>

        <h1>Cartões de Crédito</h1>

        <?php if (isset($participante) && count($participante->getArrayCartoesCredito()) > 0) {
            for ($i = 0; $i < count($participante->getArrayCartoesCredito()); $i++) {
                /**
                 * @var CartaoCreditoModel $cartaoCredito
                 */
                $cartaoCredito = $participante->getArrayCartoesCredito()[$i];
                ?>

                <div id="CadPart_Div_CamposCartao" class="blocoDeCampos CadPart_Div_CamposCartao">
                    <div class="campo">
                        <div class="label">Instituição:</div>
                        <div class="item">
                            <div class="input"><select name="cartoes_credito[<?php echo $i ?>][id_instituicao]"
                                                       style="width: 320px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['bancos'] as $banco) { ?>
                                        <option
                                                value="<?php echo $banco->getIdBanco(); ?>" <?php if ($cartaoCredito->getInstituicaoBancaria()->getIdBanco() == $banco->getIdBanco()) echo 'selected'; ?>><?php echo $banco->getNumeroBanco() . " - " . $banco->getNome(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Bandeira:</div>
                        <div class="item">
                            <div class="input"><select name="cartoes_credito[<?php echo $i ?>][id_bandeira]"
                                                       style="width: 120px">
                                    <option value="">Selecione</option>

                                    <?php foreach ($params['bandeiras'] as $bandeira) { ?>
                                        <option
                                                value="<?php echo $bandeira->getIdBandeira(); ?>" <?php if ($cartaoCredito->getIdBandeira() == $bandeira->getIdBandeira()) echo 'selected'; ?>><?php echo $bandeira->getBandeiraCartaoCredito(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Limite:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="cartoes_credito[<?php echo $i ?>][limite]"
                                                      value="<?php echo $cartaoCredito->getLimite(); ?>"
                                                      style="width: 120px;"
                                                      class="formatValor"/></div>
                        </div>
                    </div>
                </div>

            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposCartao" class="blocoDeCampos CadPart_Div_CamposCartao">
                <div class="campo">
                    <div class="label">Instituição:</div>
                    <div class="item">
                        <div class="input"><select name="cartoes_credito[0][id_instituicao]" style="width: 320px">
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
                    <div class="label">Bandeira:</div>
                    <div class="item">
                        <div class="input"><select name="cartoes_credito[0][id_bandeira]" style="width: 120px">
                                <option value="">Selecione</option>

                                <?php foreach ($params['bandeiras'] as $bandeira) { ?>
                                    <option
                                            value="<?php echo $bandeira->getIdBandeira(); ?>"><?php echo $bandeira->getBandeiraCartaoCredito(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>

                <div class="campo">
                    <div class="label">Limite:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="cartoes_credito[0][limite]" value=""
                                                  style="width: 120px;"
                                                  class="formatValor"/></div>
                    </div>
                </div>
            </div>
        <?php } ?>
        <div id="CadPart_Btn_AdicionarCartao" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Cartao');">
            <div></div>
            Adicionar Cartão de Crédito
        </div>

        <h1>Compromissos Financeiros</h1>
        <?php if (isset($participante) && count($participante->getArrayCompromissosFinanceiros()) > 0) {
            for ($i = 0; $i < count($participante->getArrayCompromissosFinanceiros()); $i++) {
                /**
                 * @var CompromissoFinanceiroModel $compromissoFinanceiro
                 */
                $compromissoFinanceiro = $participante->getArrayCompromissosFinanceiros()[$i];
                ?>
                <div id="CadPart_Div_CamposCompFinanc" class="blocoDeCampos CadPart_Div_CamposCompFinanc">
                    <div class="campo">
                        <div class="label">Tipo:</div>
                        <div class="item">
                            <div class="input"><select name="compromissos_financ[<?php echo $i ?>][id_tipo]"
                                                       style="width: 200px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['tipos_compromissos_financeiros'] as $tipoCompromissoFinanceiro) { ?>
                                        <option value="<?php echo $tipoCompromissoFinanceiro->getIdTipoCompromisso(); ?>" <?php if ($compromissoFinanceiro->getIdTipoCompromisso() == $tipoCompromissoFinanceiro->getIdTipoCompromisso()) echo 'selected'; ?>><?php echo $tipoCompromissoFinanceiro->getTipoCompromisso(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>

                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Nº de Parcelas:</div>
                        <div class="item">
                            <div class="input"><input type="text"
                                                      name="compromissos_financ[<?php echo $i ?>][num_parcelas]"
                                                      value="<?php echo $compromissoFinanceiro->getNumeroParcelas(); ?>"
                                                      style="width: 80px;" class="formatNum"/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Parcelas pagas:</div>
                        <div class="item">
                            <div class="input"><input type="text"
                                                      name="compromissos_financ[<?php echo $i ?>][parcelas_pagas]"
                                                      value="<?php echo $compromissoFinanceiro->getNumeroParcelasPagas(); ?>"
                                                      style="width: 80px;" class="formatNum"/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Valor da parcela:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text"
                                                      name="compromissos_financ[<?php echo $i ?>][valor_parcela]"
                                                      value="<?php echo $compromissoFinanceiro->getValorParcela(); ?>"
                                                      style="width: 130px;" class="formatValor"/></div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposCompFinanc" class="blocoDeCampos CadPart_Div_CamposCompFinanc">
                <div class="campo">
                    <div class="label">Tipo:</div>
                    <div class="item">
                        <div class="input"><select name="compromissos_financ[0][id_tipo]" style="width: 200px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_compromissos_financeiros'] as $tipoCompromissoFinanceiro) { ?>
                                    <option value="<?php echo $tipoCompromissoFinanceiro->getIdTipoCompromisso(); ?>"><?php echo $tipoCompromissoFinanceiro->getTipoCompromisso(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>

                    </div>
                </div>

                <div class="campo">
                    <div class="label">Nº de Parcelas:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="compromissos_financ[0][num_parcelas]" value=""
                                                  style="width: 80px;" class="formatNum"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Parcelas pagas:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="compromissos_financ[0][parcelas_pagas]" value=""
                                                  style="width: 80px;" class="formatNum"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Valor da parcela:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="compromissos_financ[0][valor_parcela]" value=""
                                                  style="width: 130px;" class="formatValor"/></div>
                    </div>
                </div>
            </div>
        <?php } ?>


        <div id="CadPart_Btn_AdicionarCompFinanc" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'CompFinanc');">
            <div></div>
            Adicionar Compromisso Financeiro
        </div>

</div>

</div>
<div class="box">
    <div class="boxIcon iconPatrimonios"></div>
    <div class="boxTitulo">Patrimônios</div>
    <div class="boxContent">
        <h1>Imóveis</h1>
        <?php if (isset($participante) && count($participante->getArrayImoveis()) > 0) {
            for ($i = 0; $i < count($participante->getArrayImoveis()); $i++) {
                /**
                 * @var ImovelParticipanteModel $imovelPatrimonio
                 */
                $imovelPatrimonio = $participante->getArrayImoveis()[$i];
                ?>
                <div id="CadPart_Div_CamposImovel" class="blocoDeCampos CadPart_Div_CamposImovel">
                    <div class="campo">
                        <div class="label">Tipo:</div>
                        <div class="item">
                            <div class="input"><select name="imoveis[<?php echo $i ?>][id_tipo]" style="width: 170px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['tipos_imovel'] as $tipoImovel) { ?>
                                        <option value="<?php echo $tipoImovel->getIdTipoImovel(); ?>" <?php if ($imovelPatrimonio->getIdTipoImovel() == $tipoImovel->getIdTipoImovel()) echo 'selected'; ?>><?php echo $tipoImovel->getDescricaoTipoImovel(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>

                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Cidade:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="imoveis[<?php echo $i ?>][cidade]"
                                                      value="<?php echo $imovelPatrimonio->getCidade(); ?> "
                                                      style="width: 180px;"/>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">UF:</div>
                        <div class="item">
                            <div class="input"><select name="imoveis[<?php echo $i ?>][uf]" style="width: 90px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($arrUfs as $uf) { ?>
                                        <option value="<?php echo $uf ?>" <?php if (isset($participante) && $imovelPatrimonio->getUf() == $uf) echo 'selected'; ?>><?php echo $uf ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Valor:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="imoveis[<?php echo $i ?>][valor]"
                                                      value="<?php echo $imovelPatrimonio->getValor(); ?>"
                                                      style="width: 120px;"
                                                      class="formatValor"/></div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposImovel" class="blocoDeCampos CadPart_Div_CamposImovel">
                <div class="campo">
                    <div class="label">Tipo:</div>
                    <div class="item">
                        <div class="input"><select name="imoveis[0][id_tipo]" style="width: 170px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_imovel'] as $tipoImovel) { ?>
                                    <option value="<?php echo $tipoImovel->getIdTipoImovel(); ?>"><?php echo $tipoImovel->getDescricaoTipoImovel(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>

                    </div>
                </div>

                <div class="campo">
                    <div class="label">Cidade:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="imoveis[0][cidade]" value="" style="width: 180px;"/>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">UF:</div>
                    <div class="item">
                        <div class="input"><select name="imoveis[0][uf]" style="width: 90px">
                                <option value="">Selecione</option>
                                <?php foreach ($arrUfs as $uf) { ?>
                                    <option value="<?php echo $uf ?>"><?php echo $uf ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Valor:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="imoveis[0][valor]" value="" style="width: 120px;"
                                                  class="formatValor"/></div>
                    </div>
                </div>
            </div>
        <? } ?>
        <div id="CadPart_Btn_AdicionarImovel" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Imovel');">
            <div></div>
            Adicionar Imóvel
        </div>

        <h1>Veículos</h1>
        <?php if (isset($participante) && count($participante->getArrayVeiculos()) > 0) {
            for ($i = 0; $i < count($participante->getArrayVeiculos()); $i++) {
                /**
                 * @var VeiculoParticipanteModel $veiculoPatrimonio
                 */
                $veiculoPatrimonio = $participante->getArrayVeiculos()[$i];
                ?>

                <div id="CadPart_Div_CamposVeiculo" class="blocoDeCampos CadPart_Div_CamposVeiculo">
                    <div class="campo">
                        <div class="label">Tipo:</div>
                        <div class="item">
                            <div class="input"><select name="veiculos[<?php echo $i ?>][id_tipo]" style="width: 150px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['tipos_veiculos'] as $tipoVeiculo) { ?>
                                        <option value="<?php echo $tipoVeiculo->getIdTipoVeiculo(); ?>" <?php if ($veiculoPatrimonio->getIdTipoVeiculo() == $tipoVeiculo->getIdTipoVeiculo()) echo 'selected'; ?>><?php echo $tipoVeiculo->getDescricaoTipoVeiculo(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>

                        </div>
                    </div>

                    <div class="campo">
                        <div class="label">Ano:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="veiculos[<?php echo $i ?>][ano]"
                                                      value="<?php echo $veiculoPatrimonio->getAno(); ?>"
                                                      style="width: 50px;"
                                                      class="formatNum"/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Situação:</div>
                        <div class="item">
                            <div class="input"><select name="veiculos[<?php echo $i ?>][id_situacao]"
                                                       style="width: 130px">
                                    <option value="">Selecione</option>
                                    <?php foreach ($params['tipos_situacao_veiculo'] as $tipoSituacaoVeiculo) { ?>
                                        <option value="<?php echo $tipoSituacaoVeiculo->getIdSituacaoVeiculo(); ?>" <?php if ($veiculoPatrimonio->getIdSituacaoVeiculo() == $tipoSituacaoVeiculo->getIdSituacaoVeiculo()) echo 'selected'; ?>><?php echo $tipoSituacaoVeiculo->getDescricaoSituacaoVeiculo(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Valor de mercado:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="veiculos[<?php echo $i ?>][valor_mercado]"
                                                      value="<?php echo $veiculoPatrimonio->getValorMercado(); ?>"
                                                      style="width: 120px;" class="formatValor"/></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="campo">
                        <div class="label">Nº de Parcelas:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="veiculos[<?php echo $i ?>][num_parcelas]"
                                                      value="<?php echo $veiculoPatrimonio->getNumeroParcelas(); ?>"
                                                      style="width: 70px;"
                                                      class="formatNum"/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Parcelas pagas:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="veiculos[<?php echo $i ?>][parcelas_pagas]"
                                                      value="<?php echo $veiculoPatrimonio->getNumeroParcelasPagas(); ?>"
                                                      style="width: 70px;" class="formatNum"/></div>
                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Valor da parcela:</div>
                        <div class="item">
                            <div class="leftText">R$</div>
                            <div class="input"><input type="text" name="veiculos[<?php echo $i ?>][valor_parcela]"
                                                      value="<?php echo $veiculoPatrimonio->getValorParcela(); ?>"
                                                      style="width: 120px;" class="formatValor"/></div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposVeiculo" class="blocoDeCampos CadPart_Div_CamposVeiculo">
                <div class="campo">
                    <div class="label">Tipo:</div>
                    <div class="item">
                        <div class="input"><select name="veiculos[0][id_tipo]" style="width: 150px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_veiculos'] as $tipoVeiculo) { ?>
                                    <option value="<?php echo $tipoVeiculo->getIdTipoVeiculo(); ?>"><?php echo $tipoVeiculo->getDescricaoTipoVeiculo(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>

                    </div>
                </div>

                <div class="campo">
                    <div class="label">Ano:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="veiculos[0][ano]" value="" style="width: 50px;"
                                                  class="formatNum"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Situação:</div>
                    <div class="item">
                        <div class="input"><select name="veiculos[0][id_situacao]" style="width: 130px">
                                <option value="">Selecione</option>
                                <?php foreach ($params['tipos_situacao_veiculo'] as $tipoSituacaoVeiculo) { ?>
                                    <option value="<?php echo $tipoSituacaoVeiculo->getIdSituacaoVeiculo(); ?>"><?php echo $tipoSituacaoVeiculo->getDescricaoSituacaoVeiculo(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Valor de mercado:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="veiculos[0][valor_mercado]" value=""
                                                  style="width: 120px;" class="formatValor"/></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="campo">
                    <div class="label">Nº de Parcelas:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="veiculos[0][num_parcelas]" value=""
                                                  style="width: 70px;"
                                                  class="formatNum"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Parcelas pagas:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="veiculos[0][parcelas_pagas]" value=""
                                                  style="width: 70px;" class="formatNum"/></div>
                    </div>
                </div>
                <div class="campo">
                    <div class="label">Valor da parcela:</div>
                    <div class="item">
                        <div class="leftText">R$</div>
                        <div class="input"><input type="text" name="veiculos[0][valor_parcela]" value=""
                                                  style="width: 120px;" class="formatValor"/></div>
                    </div>
                </div>
            </div>
        <?php } ?>
        <div id="CadPart_Btn_AdicionarVeiculo" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Veiculo');">
            <div></div>
            Adicionar Veículo
        </div>


    </div>
</div>
*/
<div class="clear"></div>
<div class="box">
    <div class="boxIcon iconPessoas"></div>
    <div class="boxTitulo">Relacionamento de parentesco</div>
    <div class="boxContent">
        <?php if (isset($participante) && count($participante->getArrayDadosParentesco()) > 0) {
            for ($i = 0; $i < count($participante->getArrayDadosParentesco()); $i++) {
                /**
                 * @var ParentescoModel $parentesco
                 */
                $parentesco = $participante->getArrayDadosParentesco()[$i];
                ?>
                <div id="CadPart_Div_CamposParentesco" class="blocoDeCampos CadPart_Div_CamposParentesco">
                    <div class="campo">
                        <div class="label">Id:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="parentesco[<?php echo $i ?>][id]"
                                                      value="<?php echo $parentesco->getParticipante()->getId(); ?>"
                                                      style="width: 40px"
                                                      class="autocompleteParticipante id" readonly/></div>

                        </div>
                    </div>
                    <div class="campo">
                        <div class="label">Nome:</div>
                        <div class="item">
                            <div class="input"><input type="text" name="parentesco[<?php echo $i ?>][nome]"
                                                      value="<?php echo $parentesco->getParticipante()->getNome(); ?>"
                                                      style="width: 300px;"
                                                      class="autocompleteParticipante"/></div>

                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="campo">
                        <div class="label destaque">Vínculo familiar:</div>
                        <div class="item">
                            <div class="input"><select name="parentesco[<?php echo $i ?>][id_parentesco]"
                                                       style="width: 200px">
                                    <option>Selecione</option>
                                    <?php foreach ($params['tipos_parentesco'] as $tipoParentesco) { ?>
                                        <option value="<?php echo $tipoParentesco->getIdTipoParentesco(); ?>" <?php if ($parentesco->getIdTipoParentesco() == $tipoParentesco->getIdTipoParentesco()) echo 'selected'; ?>><?php echo $tipoParentesco->getTipoParentesco(); ?></option>
                                    <?php } ?>
                                </select>

                                <div class="select"></div>
                            </div>

                        </div>
                    </div>
                    <? if (!isset($cadastroParente)) { ?>
                        <div class="campo">
                            <div class="item">
                                <div class="label"><input type="checkbox"
                                                          name="parentesco[<?php echo $i ?>][compoe_renda]"
                                                          value="1" <?php if ($parentesco->getCompoeRenda() == '1') echo 'checked'; ?>>Compõe
                                    renda
                                </div>
                            </div>
                        </div>
                    <? } ?>
                </div>
            <?php } ?>
        <?php } else { ?>
            <div id="CadPart_Div_CamposParentesco" class="blocoDeCampos CadPart_Div_CamposParentesco">
                <div class="campo">
                    <div class="label">Id:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="parentesco[0][id]" value="" style="width: 40px"
                                                  class="autocompleteParticipante id" readonly/></div>

                    </div>
                </div>
                <div class="campo">
                    <div class="label">Nome:</div>
                    <div class="item">
                        <div class="input"><input type="text" name="parentesco[0][nome]" value="" style="width: 300px;"
                                                  class="autocompleteParticipante"/></div>

                    </div>
                </div>

                <div class="campo">
                    <div class="label destaque">Vínculo familiar:</div>
                    <div class="item">
                        <div class="input"><select name="parentesco[0][id_parentesco]" style="width: 200px">
                                <option>Selecione</option>
                                <?php foreach ($params['tipos_parentesco'] as $tipoParentesco) { ?>
                                    <option value="<?php echo $tipoParentesco->getIdTipoParentesco(); ?>"><?php echo $tipoParentesco->getTipoParentesco(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
                <? if (!isset($cadastroParente)) { ?>
                    <div class="campo">
                        <div class="item">
                            <div class="label"><input type="checkbox" name="parentesco[0][compoe_renda]" value="1">Compõe
                                renda
                            </div>
                        </div>
                    </div>
                <? } ?>
            </div>
        <?php } ?>
        <div id="CadPart_Btn_AdicionarParentesco" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Parentesco');">
            <div></div>
            Adicionar Parentesco
        </div>
    </div>
</div>
/*
<div class="box">
    <div class="boxIcon iconDocumentos"></div>
    <div class="boxTitulo">Documentos</div>
    <div class="boxContent">
        <div id="CadPartn_Div_CamposDocumentos" class="blocoDeCampos CadPart_Div_CamposDocumentos">
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
                        <div class="input"><select name="documentos[0][id_id_tipo]" style="width: 200px">
                                <option>Selecione</option>
                                <?php foreach ($params['tipos_documentos'] as $tipoDocumento) { ?>
                                    <option value="<?php echo $tipoDocumento->getIdTipoDocumento(); ?>"><?php echo $tipoDocumento->getTipoDocumento(); ?></option>
                                <?php } ?>
                            </select>

                            <div class="select"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="CadPart_Btn_AdicionarDocumento" class="button btnAdd"
             onclick="CadPart_Fun_AdicionarCampos(this.id, 'Documentos');">
            <div></div>
            Adicionar Documento
        </div>
    </div>
</div>
*/

<div class="clear"></div>
<div class="botoes">
    <div id="CadPart_Btn_CadastrarParticipante" class="buttonForm btnCad" onclick="submitCadPartFormCadastro()">
        <div></div>
        <?php if (isset($participante)) { ?>
            Salvar
        <?php } else { ?>
            Cadastrar Comprador
        <?php } ?>
    </div>
</div>
<?php if (isset($participante)) { ?>
    <input type='hidden' name='id_participante' value='<?php echo $participante->getId(); ?>'/>
<?php } ?>
<input type='hidden' name='controller' value='Participante'/>
<input type='hidden' name='action' value='<?php if (isset($participante)) {
    echo "EditarParticipante";
} else {
    echo "CadastrarParticipante";
} ?>'/>
<input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>
<input type='hidden' name='tipo_participante' value="Comprador"/>
</form>
</div>