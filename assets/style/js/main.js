$(document).ready(function(){
    /************************navigation************* */
    /*********closes responsuve menu*************** */
    $('.nav-link').click(function(){
        $('navbar-collapse').collapse('hide');
    });
    /***************activate scroll spy************/
    $('body').scrollspy({
        target:'#navbar',
        offset:75
    });

    $(window).scroll(function(){
        if($('#navbar').offset().top > 50){
            $('#navbar').addClass('navbar-shrink');
        }else{
            $('#navbar').removeClass('navbar-shrink');
        }

    });
});