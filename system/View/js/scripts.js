/*VARIAVEIS*/
var conteudoDoFormularioAoAbrir = null;
var keepMenu = false;
var openMenu = true;
var userNotLogged = false;
/*FUNCOES*/

function verificaForm() {
    if ($('.askSave').length > 0) {
        return $('.askSave').serialize();
    } else {
        return null;
    }
}

/*carrega a view*/
function carregarView(controller, action) {
    var sairDaPagina = true;
    obterAjuda(controller, action);
    if (verificaForm() !== conteudoDoFormularioAoAbrir) {
        if (!confirm('Você não salvou as informações desta página.\n\nDeseja fechar sem Salvar?')) {
            sairDaPagina = false;
        }
    }
    if (sairDaPagina) {
        var loader = $('#pageLoader').clone().removeAttr('id');
        $('#contentWrap').append(loader);
        loader.fadeIn(100);
        data = {
            controller: controller,
            action: action
        };
        $.ajax({
            url: 'index.php',
            type: 'POST',
            data: data
        }).done(function (content) {
            if (content === 'userNotLogged') {
                userNotLogged = true;
                window.location = 'index.php';
            } else {
                conteudoDoFormularioAoAbrir = null;
                $('#content').empty().html(content);
                $(loader).fadeOut(100).remove();
                funcoesAoCarregarPagina();
                formataCampos();
            }
        });
    }
}

/*carrega a view com parametro conteudo*/
function carregarViewComParametro(controller, action, conteudoDoCampo) {
    var sairDaPagina = true;
    obterAjuda(controller, action);
    if (verificaForm() !== conteudoDoFormularioAoAbrir) {
        if (!confirm('Você não salvou as informações desta página.\n\nDeseja fechar sem Salvar?')) {
            sairDaPagina = false;
        }
    }
    if (sairDaPagina) {
        var loader = $('#pageLoader').clone().removeAttr('id');
        $('#contentWrap').append(loader);
        loader.fadeIn(100);
        data = {
            controller: controller,
            action: action,
            conteudoDoCampo: conteudoDoCampo
        };
        $.ajax({
            url: 'index.php',
            type: 'POST',
            data: data
        }).done(function (content) {
            if (content === 'userNotLogged') {
                userNotLogged = true;
                window.location = 'index.php';
            } else {
                conteudoDoFormularioAoAbrir = null;
                $('#content').empty().html(content);
                $(loader).fadeOut(100).remove();
                funcoesAoCarregarPagina();
                formataCampos();
            }
        });
    }
}

/*gera o autocomlete de pessoas*/
function geraAutocomplete(identificador, controller, action, controllerAAbrir, actionAAbrir) {
    $(identificador).autocomplete({
        /*{TODO}  Colocar aki o controler e a action para pegar o autocomplete*/
        /* source: "../system/View/search.php", */
        /* source: "?controller=Participante&action=PesquisarParticipanteParaAutocomplete", */
        source: function (request, response) {
            $.ajax({
                url: "index.php",
                dataType: "json",
                type: "POST",
                data: {
                    controller: controller,
                    action: action,
                    term: request.term
                },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.id + " # " + item.nome,
                            value: item.nome,
                            itemId: item.id
                        }
                    }));
                }
            });
        },
        minLength: 2,
        delay: 100,
        autoFocus: true,
        response: function (event, ui) {
            if (ui.content.length === 0) {
                $('.addToAutocomplete').remove();
                if ($('#lightBox').is(':hidden')) {
                    $(this).after("<div class='addToAutocomplete' ><div></div><strong> " + $(this).val() + " </strong> ('ENTER' para cadastrar) </div>");

                    $('.addToAutocomplete').click(function () {

                        carregarViewRapida(controllerAAbrir, actionAAbrir, $(this).val());

                    });

                    $(this).keyup(function (event) {

                        if (event.keyCode === 13) {
                            $(this).blur();
                            carregarViewRapida(controllerAAbrir, actionAAbrir, $(this).val());
                            $(this).unbind('keyup');
                        }
                    });
                } else {
                    $(this).after("<div class='addToAutocomplete naoExiste' ><div></div><strong> " + $(this).val() + " </strong> (não existe) </div>");
                }
            } else {
                $('.addToAutocomplete').remove();
                $(this).unbind('keyup');
            }
        },
        search: function (event, ui) {
            if ($('#lightBox').is(':hidden')) {
                $('.addToAutocomplete').html("<div></div><strong> " + $(this).val() + " </strong> ('ENTER' para cadastrar) ");
            } else {
                $('.addToAutocomplete').html("<div></div><strong> " + $(this).val() + " </strong> (não existe) ");
            }
        },
        select: function (event, ui) {

            $(this).closest('.blocoDeCampos').find('.id').delay(200).val(ui.item.itemId);
            if (document.getElementById('select_id_imovel') && identificador == '#autocompleteParticipanteVendedor') {
                preencherImovelNoSelect(ui.item.itemId);
            }
            $(this).bind('keydown.delete', function (e) {
                if ($(this).closest('.blocoDeCampos').find('.id').val() !== '' && e.keyCode !== 9 && e.keyCode !== 35 && e.keyCode !== 36 && e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) {
                    $(this).closest('.blocoDeCampos').find('.id').val("");
                    $(this).unbind('keydown.delete');
                    $(this).val("");
                }
            });

        }
    }).blur(function () {

        window.setTimeout(function () {
            $('.addToAutocomplete').remove();

        }, 100);

    });

}
/* somente para caso especificos, ex. a view documentacao_participante. Não possui Enter para cadastrar um novo participante e on select no resultado, chama controller e action
 AAbrir e on sucess chama callback processJson que está na view.  Na view documentacao_participante, processJson exibe resultado na table
 */
function geraAutocompleteDocumentacoesEImoveisParticipante(identificador, controller, action, controllerAAbrir, actionAAbrir, action2AAbrir) {
    $(identificador).autocomplete({
        /*{TODO}  Colocar aki o controler e a action para pegar o autocomplete*/
        /* source: "../system/View/search.php", */
        /* source: "?controller=Participante&action=PesquisarParticipanteParaAutocomplete", */
        source: function (request, response) {
            $.ajax({
                url: "index.php",
                dataType: "json",
                type: "POST",
                data: {
                    controller: controller,
                    action: action,
                    term: request.term
                },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.id + " # " + item.nome,
                            value: item.nome,
                            itemId: item.id,
                            itemCpf: item.cpf
                        }
                    }));
                }
            });
        },
        minLength: 2,
        delay: 100,
        autoFocus: true,
        response: function (event, ui) {
            if (ui.content.length === 0) {
                $('.addToAutocomplete').remove();
                $(this).after("<div class='addToAutocomplete naoExiste' ><div></div><strong> " + $(this).val() + " </strong> (não existe) </div>");

            } else {
                $('.addToAutocomplete').remove();
                $(this).unbind('keyup');
            }
        },
        search: function (event, ui) {
            $('.addToAutocomplete').html("<div></div><strong> " + $(this).val() + " </strong> (não existe) ");
        },
        select: function (event, ui) {

            $(this).closest('.blocoDeCampos').find('.id').delay(200).val(ui.item.itemCpf);
            /* preenche o input hidden com id_participante para o form de upload na view documentacao_participante. Remover daqui e colocar no processJson com data.id */
            $("#id_participanteFormPesq").val(ui.item.itemId);
            $("#id_participanteFormUpload").val(ui.item.itemId);
            $("#id_participanteFormImovel").val(ui.item.itemId);


            $(this).bind('keydown.delete', function (e) {
                if ($(this).closest('.blocoDeCampos').find('.id').val() !== '' && e.keyCode !== 9 && e.keyCode !== 35 && e.keyCode !== 36 && e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) {
                    $(this).closest('.blocoDeCampos').find('.id').val("");
                    $(this).unbind('keydown.delete');
                    $(this).val("");
                    $("#DocumentacoesPart_Btn_Upload").hide();
                }
            });

            $.ajax({
                url: "index.php",
                dataType: "json",
                type: "POST",
                data: {
                    controller: controllerAAbrir,
                    action: actionAAbrir,
                    conteudoDoCampo: ui.item.itemId

                },
                success: processJson

            });

            $.ajax({
                url: "index.php",
                type: "POST",
                data: {
                    controller: controllerAAbrir,
                    action: action2AAbrir,
                    conteudoDoCampo: ui.item.itemId

                },
                success: preencheSelectTiposDoc

            });

        }
    }).blur(function () {

        window.setTimeout(function () {
            $('.addToAutocomplete').remove();

        }, 100);

    });

}

var viewRapida = false;
/*carrega a view rápida (lightBox)*/
function carregarViewRapida(controller, action, conteudoDoCampo) {
    $('#lightBox .pageLoader').css('display', 'block');
    $('#lightBox').fadeIn(100);
    viewRapida = true;
    var data = {
        controller: controller,
        action: action,
        conteudoDoCampo: conteudoDoCampo
    };
    $.ajax({
        url: 'index.php',
        type: 'POST',
        data: data
    }).done(function (content) {
        if (content === 'userNotLogged') {
            userNotLogged = true;
            window.location = 'index.php';
        } else {
            $('#lightBoxPageContent').empty().html(content);
            $('#lightBox .pageLoader').fadeOut(100);
            funcoesAoCarregarPagina();
            formataCampos();
        }
    });
}
/*fechando a view rapida*/
function fecharCadastroRapido() {
    $('#lightBox').fadeOut('fast', function () {
        viewRapida = false;
    });
    $('#lightBoxPageContent').empty();

}
function funcoesAoCarregarPagina() {
    /*mantemIconeDoBoxNoAlto();*/
    atualizaNomeDosCamposFile();
    MaskForm();
}

/*muda texto dos campos files*/
function atualizaNomeDosCamposFile() {
    $('[type="file"]').each(function (i) {
        $(this).unbind('change').change(function () {
            var nomeDoArquivo = $(this).val().split('\\').pop();
            $(this).parent().children('.file').html(nomeDoArquivo);
        });
    });
}
/*exibe a notificacao*/
function notificar(tipo, msg) {
    $('#notificacoes').empty().html(msg);

    if (tipo === 'ok') {
        color = '#096';
    }
    if (tipo === 'erro') {
        color = '#900';
    }
    if (tipo === 'alert') {
        color = '#fb0';
    }
    $('#notificacoes').css({
        'background-color': color
    });
    $('#espacadorAzul').stop().animate({
        height: 81
    }, 200);
    $('#notificacoes').stop().animate({
        top: 44,
        height: 81,
        opacity: 1
    }, 200);
    $('#contentWrap').stop().animate({
        top: 124
    }, 200);
    $('#lightBox').stop().animate({
        top: 125
    }, 200);

    window.setTimeout(function () {
        $('#notificacoes').stop().animate({
            top: 20,
            height: 51,
            opacity: 0
        }, 1000);
        $('#contentWrap').stop().animate({
            top: 70
        }, 1000);
        $('#lightBox').stop().animate({
            top: 71
        }, 1000);

        $('#espacadorAzul').stop().animate({
            height: 27
        }, 1000);
    }, 3000);
}


/*funcoes no scroll do content*/
function mantemIconeDoBoxNoAlto() {
    $('#pageContent').unbind('scroll').scroll(function () {

        $('.box').each(function (i) {

            if ($(this).offset().top <= 106) {

                $(this).children('.boxIcon').css({
                    'position': 'fixed',
                    top: 106
                });
                $(this).children('.boxTitulo').css({
                    'position': 'fixed',
                    top: 106,
                    'margin-left': 71,
                    'box-shadow': '20px 0px 70px #fff,20px 0px 60px #fff,20px 0px 50px #fff,20px 0px 40px #fff'
                });
                $(this).css('padding-top', 50);
            } else {
                $(this).children('.boxIcon').css({
                    'position': 'relative',
                    top: 0
                });
                $(this).children('.boxTitulo').css({
                    'position': 'relative',
                    top: 0,
                    'margin-left': 7,
                    'box-shadow': 'none'
                });
                $(this).css('padding-top', 0);
            }
            if ($(this).offset().top <= 155) {
                $($('.boxIcon').get((i - 1))).css({
                    top: $(this).offset().top - 50
                });
                $($('.boxTitulo').get((i - 1))).css({
                    top: $(this).offset().top - 50,
                    'margin-left': 71
                });

            }

        });
    });
}

/*formatacao dos campos*/
function formataCampos() {

    MaskForm();
    $('.formatNum').priceFormat({
        prefix: '',
        centsLimit: 0,
        centsSeparator: '',
        thousandsSeparator: ''
    });
    $('.formatValor').priceFormat({
        prefix: '',
        centsLimit: 2,
        centsSeparator: ',',
        thousandsSeparator: '.'
    });
    $("input").attr("maxlength", 100)
}

/*carrega a ajuda das páginas*/
function obterAjuda(controller, action) {
    $('#helpLoader').fadeIn(200);
    $('#helpContent .mCSB_container').empty();
    var data = {
        controller: 'Ajuda',
        action: 'ObterAjuda',
        controllerAjuda: controller,
        actionAjuda: action
    };
    window.setTimeout(function () {
        $.ajax({
            url: 'index.php',
            type: 'POST',
            data: data
        }).done(function (content) {
            $('#helpLoader').fadeOut(200);
            $('#helpContent .mCSB_container').html(content);

        });
    }, 500);
}

/*mostra ou esconde a ajuda*/
function toggleHelp(isLoading) {
    var cookie = $.cookie('help');
    if (isLoading) {
        if (cookie == 'hidden') {

            $('#helpToggle').css({
                'background-position': '-530px -66px',
                border: '1px solid #ddd',
                top: 43,
                right: 23

            });
            $('#content').css({
                right: 0
            });
        }
        if (cookie == 'undefined') {
            $.cookie("help", "visible");
        }
    } else {

        if (cookie == 'hidden') {
            $('#helpToggle').css({
                'background-position': '-83px -244px',
                border: '1px solid #fff',
                top: 0,
                right: 0
            });
            $('#content').css({
                right: 220
            });

            $.cookie("help", "visible");
        } else {
            $('#helpToggle').css({
                'background-position': '-530px -66px',
                border: '1px solid #ddd',
                top: 43,
                right: 23

            });
            $('#content').css({
                right: 0
            });
            $.cookie("help", "hidden");

        }
    }


}

function MaskForm() {
    var mask_field = $('.formatTelefone'),
        options = {
            onKeyPress: function (phone) {
                if (/^\(11\) 9/i.test(phone))
                    mask_field.mask('(00) 00000-0000', options);
                else
                    mask_field.mask('(00) 0000-0000', options);
            }
        };

    mask_field.mask('(00) 0000-0000', options);

    $('.formatCPF').mask("000.000.000-00");

    $('.formatCNPJ').mask("00.000.000/0000-00");
    $('.formatData').mask("00/00/0000");
    $('.formatCEP').mask("00000-000");
}


/*funcoes executadas ao carregar o sistema*/
$(document).ready(function () {
    MaskForm();
    /*pega valor do cookie da ajuda pra exibir ou nao*/
    toggleHelp(true);

    /*desabilita selecao*/
    $('body').disableSelection();
    /* enable text select on inputs*/
    $("body").find("input,select")
        .bind('mousedown.ui-disableSelection selectstart.ui-disableSelection', function (e) {
            e.stopImmediatePropagation();
        });
    /*cria o acordion do menu*/
    $("#menu").accordion({
        heightStyle: "content",
        animate: 200
    });
    /*seta o scroll no menu*/
    $("#menu").mCustomScrollbar({
        autoHideScrollbar: true,
        mouseWheel: true,
        contentTouchScroll: true,
        scrollInertia: 0,
        advanced: {
            updateOnContentResize: true
        }

    });

    /*seta o scroll na ajuda*/
    $("#helpContent").mCustomScrollbar({
        autoHideScrollbar: true,
        mouseWheel: true,
        contentTouchScroll: true,
        scrollInertia: 0,
        advanced: {
            updateOnContentResize: true
        }

    });

    mantemIconeDoBoxNoAlto();
    carregarView('Base', 'Dashboard');

    $('#systemLoader').fadeOut(200);

    $('#menu ul li').append('<div class="sombraMenu"></div>');
    /*    $('#menu').hover(function () {
     if (openMenu) {

     $('#content').css('left', 199);
     $('.sombraMenu').fadeOut(50);
     $('.pageLoader').css('left', 201);
     keepMenu = true;
     }
     },
     function () {
     keepMenu = false;
     window.setTimeout(function () {
     if(!keepMenu){
     $('#content').css('left', 48);
     $('.pageLoader').css('left', 49);
     $('.sombraMenu').css('left', 0);
     $('.sombraMenu').fadeIn(200);

     }
     }, 1000);

     });*/
    window.setTimeout(function () {
        $('#content').css('left', 199);
        $('.pageLoader').css('left', 201);
        $('.sombraMenu').fadeOut(200);
    }, 500);
    /*  window.setTimeout(function () {
     if (keepMenu == false) {
     $('#content').css('left', 48);
     $('.pageLoader').css('left', 49);
     $('.sombraMenu').fadeIn(200);
     }
     }, 1800);
     $(document).mousedown(function () {
     openMenu = false;
     }).mouseup(function () {
     openMenu = true;
     });*/

    /*Keep Session alive*/
    window.setInterval(function () {
        data = {
            controller: 'Base',
            action: 'KeepSessionAlive'
        };
        $.ajax({
            url: 'index.php',
            type: 'POST',
            data: data
        });
    }, 600000);


});

/*
 $(window).on('beforeunload', function () {
 if(userNotLogged==false){
 return "Você poderá perder dados não salvos!";
 }
 });
 */