//banner_one li开始
$(function(){
	(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>=0){

				$(".li_banner_list").find("li").fadeIn(1000)
			}
		})
	})()
})

//banner_one li结束
//a按钮开始
$(function(){
	(function(){
		$(".an_list-btn a").hover(function(){
			i=$(this).index();
			$(".an_btn").eq(i).find("img").fadeIn(200)
		},function(){
			$(".an_btn").eq(i).find("img").fadeOut(200)
		})
	})()
})
//a按钮结束

//图片开始
$(function(){
	(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>=1150){
                  console.log($(window).scrollTop())
				$(".wrap_main").find(".thr").css({
                 transform: "rotateY(180deg)",
                 transition:"all 2s"
				})
			}else if($(window).scrollTop()<=1050){
				$(".wrap_main").find(".thr").css({
                 transform: "rotateY(0deg)",
                 transition:""
				})
			}
		})
	})()
})
$(function(){
	(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>=1250){
//                console.log($(window).scrollTop())
				$(".wrap_main").find(".fou").css({
                 transform: "rotateY(180deg)",
                 transition:"all 2s"
				})
			}else if($(window).scrollTop()<=1150){
				$(".wrap_main").find(".fou").css({
                 transform: "rotateY(0deg)",
                 transition:""
				})
			}
		})
	})()
});