$(document).ready(function(){
    $(".burger").click(function(){
        $(".nav-list > li").toggleClass("li-item");

        if($(".nav-list > li").hasClass("li-item")) {
            $("nav").css({"display":"grid","padding-top":"37px"});
            $(".burger").css("margin-top","0");
            $(".nav-list > li").css("margin-top","0");
            $("nav > div:nth-child(2)").css("background-color","transparent");
        }
        else{
            $("nav").css({"display":"block","padding-top":"0"});
            $(".burger").css({"text-align":"right","margin-top":"-41px"});
            $(".nav-list > li").css("margin-top","15px");
            $("nav > div > button").css("margin-top","15px");
            $("nav > div:nth-child(2)").css("background-color","#7464fd");
        }
    });
});