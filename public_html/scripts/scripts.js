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
    $('#menu-icon').on('click',function(){
       $('body').toggleClass('menu-open');
       if($('body').hasClass('menu-open')){
           localStorage.setItem("menu-status",'open');
       } else {
           localStorage.setItem("menu-status",'closed');
       }
    });
    //closing containers
    $('#close-container-2').on('click',function(){
        $('.content').removeClass('two').removeClass('three').addClass('one');
    });
    $('#close-container-3').on('click',function(){
        $('.content').removeClass('one').removeClass('three').addClass('two');
    });


    //Starting checkboxes
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat'
    });

});

function StartMenu(){
    let menuStatus = localStorage.getItem("menu-status");
    if(menuStatus=='open' || menuStatus==undefined){
        $('body').addClass('menu-open');
    } else {
        $('body').removeClass('menu-open');
    }
}