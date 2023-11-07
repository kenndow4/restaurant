$(document).ready(
    function(){
//  efecto menu
        $('.menu a').each(function(index, elemento){
            $(this).css({
                'top':'-200px'
            });
            $(this).animate({
                top:0
            }, 2000 + (index * 500));
        });

        if($(window).width() > 800){
            $('header .texto' ).css({
                opacity: 0,
                marginTop:0
            });
            $('header .texto' ).animate({
                opacity: 1,
                marginTop:'-52px'
            }, 1500);
        }

        // Scroll elementos menu
        var acercaDe =$('#acerca-de').offset().top,
        menu = $('#platillo').offset().top,
        menu = $('#galeria').offset().top,
        menu = $('#ubicacion').offset().top;

        $('#btnAcercaDe').on('çlick', function(){
            
            $('html , body').animate({
                scrollTop: acercaDe
            },500);
        });

        $('#btn-menu').on('çlick', function(){
          
            $('html , body').animate({
                scrollTop: menu
            },500);
        });

    }
);