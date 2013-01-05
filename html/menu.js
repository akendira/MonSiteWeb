$(function(){
    
    $(".menu li").mouseover(function(){
         $(this).stop().animate({backgroundPosition:"0px -52px"},1000);
    });
    $(".menu li").mouseout(function(){
         $(this).stop().animate({backgroundPosition:"0px 0px"},1000);
    });  
})