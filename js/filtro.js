$(function(){
    //alert("Bienbenidos")
   $('.filter').click(function(){
    $(this).addClass('active').siblings('active');
    let valor = $(this).attr('data-nombre');
    if(valor == 'todos'){
        $('.cont-work').show('1000');
    }else{
        $('.cont-work').not('.'+valor).hide('1000');
        $('.cont-work').filter('.'+valor).show('1000');
    }

   });

            let equipo = $('#equipo').offset().top;
            let servicio = $('#servicio').offset().top;
           let  trabajo = $('#trabajo').offset().top;
           let  contacto = $('#contacto').offset().top; 

        window.addEventListener('resize', function(){

            let equipo = $('#equipo').offset().top;
            let servicio = $('#servicio').offset().top;
            let trabajo = $('#trabajo').offset().top;
            let contacto = $('#contacto').offset().top; 

        });

        $('#enlace-inicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });

});