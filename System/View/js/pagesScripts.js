/**
 Document   : loginScripts.js
 Created on : 03/06/2013 11:51
 Author     : Helio Bentes
 Description:
 Arquivo de Scripts do login.
 */
function fazerLogin() {
    $('#loader').fadeIn(200);
    $.ajax({
        url: '?controller=Login&action=FazerLogin',
        type: 'post',
        data: {
            'controller': 'Login',
            'action': 'FazerLogin',
            'login': $('#login').val(),
            'senha': $('#senha').val()
        },
        success: function (msg) {

            $('#loader').fadeOut(400);
            $('#msgLogin').empty().html(msg);
            if (msg === 'Logando...') {
                /*{TODO} tirar o gsampi3*/
                window.location = '?controller=Base&action=Principal';

            } else {
                $('#login').removeProp('disabled');
                $('#senha').removeProp('disabled');
                $('#buttonLogin').css('pointer-events', 'auto');
                $('#buttonLogin').show();
            }
        }
    });

}

function calculaValorTotal() {
    var users = $("#sliderUsuariosValor strong").html();
    $('#calculadoraUsuarios strong').html(' ' + users);

    if (users === ' ilimitados') {
        users = 150;
    }
    var total = (users * 4.5);
    if (total > 100) {
        total = total * 0.99;
    }
    if (total > 150) {
        total = total * 0.98;
    }
    if (total > 200) {
        total = total * 0.97;
    }
    if (total > 300) {
        total = total * 0.96;
    }
    if (total > 350) {
        total = total * 0.95;
    }

    $('#calculadoraTotal strong').html(' ' + total);
}
$(document).ready(function () {
    /*identificando o Chrome*/
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (!isChrome) {
        $('#notChrome').fadeIn(600);
    }

    /*setando click no botao de login*/
    $('#buttonLogin').click(function () {
        $(this).css('pointer-events', 'none');
        $('#login').prop('disabled', true);
        $('#senha').prop('disabled', true);
        $('#buttonLogin').hide();
        fazerLogin();
    });

    $('#login, #senha').keyup(function (event) {
        if (event.keyCode === 13) {
            $('#login').prop('disabled', true);
            $('#senha').prop('disabled', true);
            $('#buttonLogin').css('pointer-events', 'none');
            $('#buttonLogin').hide();
            fazerLogin();
        }
    });


    $("#sliderUsuarios").slider({
        value: 10,
        min: 10,
        max: 105,
        step: 5,
        slide: function (event, ui) {
            var valor = ui.value;

            if (valor === 105) {
                valor = 'ilimitados';
            }
            $("#sliderUsuariosValor strong").html(' ' + valor);
            calculaValorTotal();
        }
    });


});

