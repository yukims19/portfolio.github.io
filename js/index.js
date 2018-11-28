$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
        if($('.navbar-default').css('background-color')== "rgba(255, 152, 0, 0.6)"){
            $('.navbar-default').css('background-color', 'transparent');
        }else{
            $('.navbar-default').css('background-color',"rgba(255, 152, 0, 0.6)")
        }
    });
    /*

    //Clouds & Thunders
    $('.thunder').hide();
    //$('.msg').hide();

    $('#designC').click(function(){
        $('#t_l').toggle();
        $('#msg_design').slideToggle();
    })
    $('#cognitionC').click(function(){
        //$('#t_m').toggle();
        if( $('#msg_design').css('display') == 'block' && $('#msg_tech').css('display') == 'block'){
            $('#msg_design').hide();
            $('#msg_tech').hide();
            $('.thunder').hide();
        }else{
            $('#msg_design').show();
            $('#t_r').show();
            $('#msg_tech').show();
            $('#t_l').show();
        }
    })
    $('#techC').click(function(){
        $('#t_r').toggle();
        $('#msg_tech').slideToggle();
    })

    $('#designC-m').click(function(){
        $('#t_l').toggle();
        $('#msg_design').slideToggle();
    })

    $('#cognitionC-m').click(function(){
       // $('#msg_design').show();
       // $('#msg_tech').show();

/*
        if( $('#msg_design').css('display') == 'block' && $('#msg_tech').css('display') == 'block'){
            $('#msg_design').hide();
            $('#msg_tech').hide();
            $('.thunder').hide();
        }*/
//    })
/*
    $('#techC-m').click(function(){
        $('#t_r').toggle();
        $('#msg_tech').slideToggle();
    })
*/

     $("#home").click(function() {
        $('html,body').animate({
            scrollTop: $(".first_screen").offset().top},
                               'slow');
     });

    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $(".second_screen").offset().top},
                               'slow');
    });

    $(".Projects").click(function() {
        $('html,body').animate({
            scrollTop: $(".third_screen").offset().top},
                               'slow');
    });

    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".forth_screen").offset().top},
                               'slow');
    });

})
