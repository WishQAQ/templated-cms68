// JavaScript Document
function hidAll(){
    $(".menu_div .menu_item").hide();
	$(".menu li,.icon li").removeClass("current");
	
}
$(function(){
	
	$(".header_content .menu li:not(:first),.header_content .icon li").mouseover(function(e){   
		var id = $(this).attr("id");
		$(".header_content li").removeClass("current");
		$(this).addClass("current");
		$(".menu_item").hide();
		$("."+id).stop(true,true).show();
		
			
	})
	
	$(".menu_div").mouseleave(function(){
		$(".menu_div .menu_item").stop(true,true).hide();
		$(".header_content .menu li:not(:first),.header_content .icon li").removeClass("current");	
	})
	
	$(".header_content .menu li:not(:first) a,.header_content .icon li a").click(function(e){
		e.preventDefault();		
	})
	
	$(".nav_left,.nav_right,.nav_top,.nav_bottom,.header_content .menu li:first").mouseover(function(e){                                                                  
 		hidAll();
	})
	
	$(".menu_div .close").click(function(e){
		e.preventDefault();
		$(".menu_item").slideUp();	
		$(".header_content li").removeClass("current");
	})
	
	$(".footer .bt_share").hover(function(){
		$(this).children("em").toggle();
		$(this).toggleClass("bt_share_hover");
	})
	$(".share_sina").click(function(){
		jiathis_sendto('tsina');return false;	
	})
	$(".share_qq").click(function(){
		jiathis_sendto('tqq');return false;	
	})
	$(".share_qzone").click(function(){
		jiathis_sendto('qzone');return false;
	})
	$(".share_renren").click(function(){
		jiathis_sendto('renren');return false;
	})
	
	
	//视频
	$(".bt_video").click(function(e){
		e.preventDefault();
		var w_h = $(window).height();
		$('<div class="bg"></div>').prependTo("body");
		$(".bg").show();
		$(".pop_video").removeClass("hide");
		var video_h = $(".pop_video").height();
		var video_h1 = (w_h-video_h)/2+$(window).scrollTop();
		$(".pop_video").stop().css({"top":video_h1});
		$(".pop_video").stop().show();
			
	})
	
	$(".pop_video a.close").on("click",function(e){
		e.preventDefault();
		$(".vjs-playing").trigger("click");
		$(this).parent().addClass("hide");
		$(".bg").hide();
		$(".bg").remove();	
	})
	
	$(".product .product_main ul.list_style li a").each(function() {
        var h = $(this).height();
		if ( h == 20){
			$(this).parent().removeClass("line2");
		}
		if ( h == 40){
			$(this).parent().addClass("line2");
		}
    });
	
	function scroll_top(){
		var w_h = $(window).height();
		var top_h1 = (w_h-60)/2+$(window).scrollTop();
		$(".sroll_top").stop().css({"top":top_h1});
	}
	scroll_top();
	$(".sroll_top").click(function(){
		$("html,body").animate({scrollTop:0});
	});
	
})

$(window).scroll(function(){
	if  (0 <= $(window).scrollTop())
	{
		var w_h = $(window).height();
		var video_h = $(".pop_video").height();
		var video_h1 = (w_h-video_h)/2+$(window).scrollTop();
		$(".pop_video").stop().css({"top":video_h1});
		
		var top_h1 = (w_h-60)/2+$(window).scrollTop();
		$(".sroll_top").stop().css({"top":top_h1});
		
	}
	if($(window).scrollTop() > 50 ){
		$(".sroll_top").show();	
	}else{
		$(".sroll_top").hide();	
	}
	
});