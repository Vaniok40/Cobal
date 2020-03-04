$(document).ready(function(){
    //next button
      $(".next").click(function(){
        var currentImage = $(".img.current");
        var currentImageIndex = $(".img.current").index();
        var nextImageIndex = $(".img.current").index() + 1;
        var nextimage = $(".img").eq(nextImageIndex);
    currentImage.removeClass("current");
        currentImage.fadeOut(1000);
        
    
        if(nextImageIndex == ($(".img:last").index() + 1)){
          $(".img").eq(0).fadeIn(1000);
           $(".img").eq(0).addClass("current"); 
          }
          else{
            $(".img").eq(currentImageIndex + 1).fadeIn(1000); 
          $(".img").eq(currentImageIndex + 1).addClass("current");
          }
      });
    
    
    //previous button
        $(".prev").click(function(){
        var currentImage = $(".img.current");
        var currentImageIndex = $(".img.current").index();
        var prevImageIndex = $(".img.current").index() - 1;
        var previmage = $(".img").eq(prevImageIndex);
    currentImage.removeClass("current");
        currentImage.fadeOut(1000);
        
    
        if(prevImageIndex == ($(".img:first").index() - 1)){
          $(".img").eq(2).fadeIn(1000);
           $(".img").eq(2).addClass("current"); 
          }
          else{
            $(".img").eq(currentImageIndex - 1).fadeIn(1000); 
          $(".img").eq(currentImageIndex - 1).addClass("current");
          }
      });
    
    })