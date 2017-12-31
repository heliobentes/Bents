/**
 * Created by heliobentes on 6/21/17.
 */

$(document).ready(function () {

    StartMenu();

    //menu toggle
    $('#main-nav > li > a').on('click', function () {
        $('#main-nav > li').removeClass('active');
        $('#main-nav > li > ul').removeClass('open');
        $(this).parent().addClass('active');
        $(this).parent().find('ul').addClass('open');
    });
    //active link
    $('#main-nav > li > ul > li > a').on('click', function () {
        $('#main-nav > li > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });

    //Show Hide Full menu
    $('#menu-icon').on('click', function () {
        $('body').toggleClass('menu-open');
        if ($('body').hasClass('menu-open')) {
            localStorage.setItem("menu-status", 'open');
        } else {
            localStorage.setItem("menu-status", 'closed');
        }
    });
    //notifications toggle
    $('#notifications-icon,#notification-backdrop').on('click', function () {
        $('#notifications').toggleClass('open');
    });

    //closing notifications
    $('.notification-close').on('click', function () {
        let obj = $(this).parent();
        ClearNotification(obj);
    });
    $('#btn-clear-notifications').on('click', function () {
        $('.notification-close').each(function (i, e) {
            let obj = $(e).parent();
            let delay = ($('.notification-close').length*100)- i*100;
            window.setTimeout(function() {
                ClearNotification(obj);
            },delay
            );
        });
    });
    //closing containers
    $('#close-container-2').on('click', function () {
        $('.content').removeClass('two').removeClass('three').addClass('one');
    });
    $('#close-container-3').on('click', function () {
        $('.content').removeClass('one').removeClass('three').addClass('two');
    });


    //Starting checkboxes
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat'
    });

});

function ClearNotification(obj) {
    obj.css('height', obj.outerHeight(false) + 'px');

    obj.addClass('close');
    setTimeout(function () {
        obj.addClass('closed');
    }, 250);
    setTimeout(function () {
        obj.remove();
    }, 500);
}


function StartMenu() {
    let menuStatus = localStorage.getItem("menu-status");
    if (menuStatus == 'open' || menuStatus == undefined) {
        $('body').addClass('menu-open');
    } else {
        $('body').removeClass('menu-open');
    }
}