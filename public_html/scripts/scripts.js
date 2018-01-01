/**
 * Created by heliobentes on 6/21/17.
 */

$(document).ready(function () {

    //calling functions
    StartMenu();
    TriggerNotificationClose();
    CountNotifications();

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



    //notifications toggle
    $('#notifications-icon,#notification-backdrop').on('click', function () {
        ClearPops();
        $('#notifications').toggleClass('open');
    });

    //clearing all notifications
    $('#btn-clear-notifications').on('click', function () {
        $('.notification-close').each(function (i, e) {
            let obj = $(e).parent();
            let delay = ($('.notification-close').length * 100) - i * 100;
            window.setTimeout(function () {
                    ClearNotification(obj);
                }, delay
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

    //Show Hide Full menu
    $('#menu-icon').on('click', function () {
        $('body').toggleClass('menu-open');
        if ($('body').hasClass('menu-open')) {
            localStorage.setItem("menu-status", 'open');
        } else {
            localStorage.setItem("menu-status", 'closed');
        }
    });

    setTimeout(function(){
        $('#full-loader').fadeOut('fast');
    },100);

});

$(window).on('beforeunload',function(){
    $('#full-loader').fadeIn('fast');
});

/*
 * ----------------------------
 * BEGIN intervals
 */
var oneSecInterval = window.setInterval(function () {
    //CountNotifications();
}, 1000);
/*
 * END intervals
 * -----------------------------
 */


//removing all notifications delayed
function ClearNotification(obj) {
    obj.css('height', obj.outerHeight(false) + 'px');

    obj.addClass('close');
    setTimeout(function () {
        obj.addClass('closed');
    }, 250);
    setTimeout(function () {
        obj.remove();
        CountNotifications();
    }, 500);


}

//closing notifications
function TriggerNotificationClose() {
    $('.notification-close').on('click', function () {
        let obj = $(this).parent();
        ClearNotification(obj);
    });
}

//removing all pop
function ClearPops() {
    $('#pop .notification-close').each(function (i, e) {
        let obj = $(e).parent();
        ClearNotification(obj);

    });
}

//Adding a new pop
function AddPop(type, icon, title, content, link1, link2) {


    let pop = '<li class="' + type + '">' +
        '            <div class="notification-icon">' +
        '                <i class="' + icon + '"></i>' +
        '            </div>' +
        '            <div class="notification-content">' +
        '                <h5 class="notification-title">' + title + '</h5>' +
        '                <p>' + content + '</p>';
    if (Array.isArray(link1)) {
        pop += '<a href="' + link1[0] + '">' + link1[1] + '</a>';
    }
    if (Array.isArray(link2)) {
        pop += '<a href="' + link1[0] + '">' + link2[1] + '</a>';

    }

    pop += '            </div>' +
        '            <i class="far fa-times-circle notification-close"></i>' +
        '        </li>';

    let obj = $(pop);
    $('#pop-list').prepend(obj);

    $('#notifications-list').prepend(obj.clone());

    TriggerNotificationClose();

    var audio = new Audio('/sounds/pop.mp3');
    audio.play();


    setTimeout(function () {
        obj.addClass('close');
    }, 5000);
    setTimeout(function () {
        obj.addClass('closed');
    }, 5250);
    setTimeout(function () {
        obj.remove();
    }, 5500);

    CountNotifications();
}


//counting notification number
function CountNotifications() {
    let notifications = $('#notifications-list li').length;
    if (notifications <= 0) {
        $('#notifications-icon').addClass('none');
        $('#no-notifications').fadeIn('fast');
    } else {
        $('#notifications-icon').removeClass('none');
        $('#no-notifications').fadeOut('slow');
    }
}

//starting menu
//check if it was open before and open it again
//keep closed if it was closed before
function StartMenu() {
    let menuStatus = localStorage.getItem("menu-status");
    if (menuStatus == 'open' || menuStatus == undefined) {
        $('body').addClass('menu-open');
    } else {
        $('body').removeClass('menu-open');
    }
}