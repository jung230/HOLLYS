$(function(){

    //메뉴
    $(".main > li , .sub_bg").hover(function(){
        // $(".sub , .sub_bg").stop().slideDown();
        $(".sub").stop().show();
        $(".sub_bg").stop().slideDown("fast");

    }, function(){
        // $(".sub , .sub_bg").stop().slideUp();
        $(".sub").stop().hide();
        $(".sub_bg").stop().slideUp(500);
        
    })//hover


    // slick
    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        fade:true
    })
    



})// j end