
   //NAVBAR TOP FIXED CON COLOR AL HACER SCROLL 

   $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".scrolled").css("background" , "rgba(255, 255, 255, 0.87)");
          $(".scrolled").css("box-shadow" , "0px 6px 16px -8px rgba(0,0,0,0.75)");
          $(".brandtext").css("color" , "black");
        }
  
        else{
            $(".scrolled").css("background" , "transparent");
            $(".scrolled").css("box-shadow" , "0px 0px 0px 0px rgba(0,0,0,0)");
            $(".brandtext").css("color" , "white");  	
        }
    })


    //TOOLTIP

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })


    //ALERTA DE CORREO ENVIADO
    $("#btnFormulario").click(function(){
        alert("El correo fue enviado correctamente...");
    });


  //TOGGLE DE DESTACADOS

    $(document).ready(function()
    {
    $("img").on( "click", function() {	 
        $('img').toggle();
        });
    });

    $(document).ready(function()
    {
    $("p").on( "click", function() {	 
        $('img').toggle();
        });
    });