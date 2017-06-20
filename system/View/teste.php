<?php
$params = $this->getParams();
$notificacao = $params['notificacao'];


?>
<script>
    $(document).ready(function () {

        var options = {
            success: showResponse

        };

        $('#formTeste').ajaxForm(options);
    });


    function showResponse(responseText, statusText, xhr, $form) {
        if (responseText === 'Olá') {
            $('#notificacoes').empty().html('Cadastrado com sucesso');
            notificar('#68AD00');
        } else {
            $('#notificacoes').empty().html('Erro');
            notificar('#900');
        }

    }
</script>

<form id='formTeste' method="POST">
    <input type="submit" value="Cadastrar" name="cadastrar" id="cadastrar"/>
    <input type='hidden' name='controller' value='Participante'/>
    <input type='hidden' name='action' value='TesteSubmit'/>
    <input type='hidden' name='token' value="<?php echo $_SESSION['token']; ?>"/>

</form>
<div id="output1"></div>