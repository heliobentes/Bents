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

    //Show Hide Full menu
    $('#menu-icon').on('click', function () {
        $('body').toggleClass('menu-open');
        if ($('body').hasClass('menu-open')) {
            localStorage.setItem("menu-status", 'open');
        } else {
            localStorage.setItem("menu-status", 'closed');
        }
    });

    setTimeout(function () {
        $('#full-loader').fadeOut('fast');
    }, 100);

    ReloadFunctions();


});


$(window).on('beforeunload', function (e) {

    $('#full-loader').fadeIn('fast');

});

//window.onpopstate = function(){ location.reload(); }


/*
 * ----------------------------
 * BEGIN intervals
 */
//var oneSecInterval = window.setInterval(function () {
//CountNotifications();
//}, 1000);
/*
 * END intervals
 * -----------------------------
 */

//functions to be loaded after a page is loaded
function ReloadFunctions(){

    //converting links to ajax
    $('a').on('click', function (e) {
        if ($(this).data('link-ajax') == true) {
            e.preventDefault();
            let url = $(this).attr('href');
            history.pushState(null, null, url);
            OpenLink(url, $(this).data('link-title'), $(this).data('link-subtitle'), $(this).data('link-data'), $(this).data('link-container'));
        }
    });

    //Starting checkboxes
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });

    //loading select2 on default configuration
    $('.select2').select2({
        language:language
    });

    //tabs
    $('.tabs .tabs-navigation li:not(.actions)').on('click',function(){
        let parent = $(this).parent();
        let index = parent.find('li').index($(this)) + 1;

        ChangeTab($(this),parent,index);


    });
    $(".tabs .next").on('click',function(){
        let parent =( $(this).parent().parent().find('.tabs-navigation').length >0)? $(this).parent().parent().find('.tabs-navigation'): $(this).closest('.tabs-navigation');

        let next = parent.find('li').index(parent.find('li.active'))+2;


        if(next>(parent.find('li').length-1) || next<=0){
            next = 1;
        }
        let obj = parent.find('li:nth-child('+next+')');


        ChangeTab(obj,parent,next);
    });
    $(".tabs .previous").on('click',function(){
        let parent =( $(this).parent().parent().find('.tabs-navigation').length >0)? $(this).parent().parent().find('.tabs-navigation'): $(this).closest('.tabs-navigation');

        let prev = parent.find('li').index(parent.find('li.active'));


        if(prev<=0 || prev>(parent.find('li').length-1)){
            prev = (parent.find('li').length-1);
        }
        let obj = parent.find('li:nth-child('+prev+')');


        ChangeTab(obj,parent,prev);
    });


    //Property Description
    $('#property-description').trumbowyg({
        svgPath: '/plugins/trumbowyg/ui/icons.svg',
        autogrow: true,
        resetCss: true,
        imageWidthModalEdit: true,
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['superscript', 'subscript'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat']
        ]
    });

    //Property Description
    $('#internal-observations').trumbowyg({
        svgPath: '/plugins/trumbowyg/ui/icons.svg',
        autogrow: true,
        resetCss: true,
        imageWidthModalEdit: true,
        btns: [
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat']
        ]
    });

    //spinner score
    $(".spinner-score").spinner('delay', 0).spinner('changed', function(e, newVal, oldVal) {
        drawChart();
    });

    //mask fields
    MaskAllFields();

    //changing currency
    $('#currency-indicator').on('select2:select',function(){
        $(".currency-indicator").html($(this).val());
    });

//fileupload
    var ul = $('#images-preview');

    $('#drop a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#add-property').fileupload({
        autoUpload:false,
        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),

        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {

            var tpl = $('<li><label><input type="radio" name="mainPicture">'+__('Main picture')+'</label><i class="far fa-trash-alt"></i><img/><input type="text" placeholder="'+__('Picture label')+'"/></li>');

            var reader = new FileReader();

            reader.onload = function (e) {
                tpl.find('img').attr('src', e.target.result);
            };

            reader.readAsDataURL(data.files[0]);

            //Starting checkboxes
            tpl.find('input[name=mainPicture]').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });

            // Add the HTML to the UL element
            data.context = tpl.prependTo(ul);

            // Listen for clicks on the cancel icon
            tpl.find('i').click(function(){

                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }

                tpl.fadeOut(function(){
                    tpl.remove();
                });

            });

            // Automatically upload the file once it is added to the queue
            //var jqXHR = data.submit();
            $("#up_btn").off('click').on('click', function () {
                data.submit();
            });
        },

        progress: function(e, data){

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();

            if(progress == 100){
                data.context.removeClass('working');
            }
        },

        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }

    });

    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }

        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }

        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }

        return (bytes / 1000).toFixed(2) + ' KB';
    }

}

//masking all fields based on type and
function MaskAllFields(){
    $('.money').mask("#"+__('thousandSeparator')+"##0"+__('decimalSeparator')+"00", {reverse: true});
}

//changing tab
function ChangeTab(obj,parent,index){
    parent.find("li").removeClass('active');
    obj.addClass('active');

    parent.parent().find('.tabs-contents li').removeClass('active');
    parent.parent().find('.tabs-contents li').removeClass('open');
    parent.parent().find('.tabs-contents li:nth-child('+index+')').addClass('active');
    setTimeout(function(){
        parent.parent().find('.tabs-contents li:nth-child('+index+')').addClass('open');
    },10);
}

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
function AddPop(type, title, content, link1, link2, icon = null) {

    if (icon == null) {

        switch (type) {
            case 'success':
                icon = 'fa fa-check';
                break;
            case 'info':
                icon = 'fa fa-info-circle';
                break;
            case 'danger':
                icon = 'fa fa-exclamation-triangle';
                break;
            case 'warning':
                icon = 'fa fa-exclamation-circle';
                break;
            default:
                icon = 'fa fa-info-circle';
        }
    }

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


//open links
function OpenLink(url, title = '', subtitle = '', data = '', container = 1) {
    $('#loader').show();
    let containerId = '#main-container';
    switch (container) {
        case 2:
            containerId = '#second-container';
            break;
        case 3 :
            containerId = '#thrid-container';
            break;
        default:
            containerId = '#main-container';
    }
    $.ajax({
        url: url,
        data: data,
        dataType: 'html',
        statusCode: {
            401: function () {
                AddPop('danger', __('Unauthorized!'), __("You don't have permissions to access this page")+'<br><b>' + __(title) + '</b>','','','fa fa-lock');
            }
        }
    }).always(function (content) {
        $('#loader').hide();
    }).fail(function (response) {
        if (response.status != 401) {
            AddPop('danger', __('Error!'), __('An error occurred while trying to access this function, please try again later or contact us.'));
        }
    }).done(function (content) {
        if (content == 'userNotLogged') {
            window.location = '/Login/Login';
        } else {
            $(containerId+' .content').html(content);

            document.title = title + ' | Reaws';

            if (subtitle != '') {
                title += '<small>' + subtitle + '</small>';
            }
            if (title != '') {
                $(containerId + ' .title').show();
                $(containerId + ' .title').html(title);
            } else {
                $(containerId + ' .title').hide();
            }
            ReloadFunctions();
        }
    });

}