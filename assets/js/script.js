
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