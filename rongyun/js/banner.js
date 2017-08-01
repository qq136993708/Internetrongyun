//banner开始
$(function(){
	(function(){
		var timer=null;
	    var i=0;
	    var len=$(".main li").length;
	$(".main li").click(function(){
		i=$(this).index();
		$(".main li").removeClass().eq(i).addClass("active")
		$(".wrap").stop(true,true).fadeOut(0).eq(i).stop(true,true).fadeIn(1000);
	});
	 timer=setInterval(auto,1500);
	$(".box").hover(function(){
		clearInterval(timer);
	},function(){
		 timer=setInterval(auto,1500);
	})
	function auto(){
		i++;
		if (i>len-1){
			i=0
		};
		$(".main li").removeClass().eq(i).addClass("active")
		$(".wrap").fadeOut(0).eq(i).fadeIn(1000);
	}
	})();
	
});
