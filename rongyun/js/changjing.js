$(function(){
	(function(){
	           	var uLis=$(".wrap_wroll li");//6个大盒子
				var oLis=$(".wroll_btn li");//5个小点
				var Prev=$(".prev");//左按钮
				var Next=$(".next");//右按钮
				var len=uLis.length;//大盒子的长度
				var ul=$(".wrap_wroll");//ul
				var index=0;
				var kuan=uLis.width();//一个大盒子的宽度
				var i=0;
				
				var jlf=true;
				//小点的点击排他
				oLis.click(function(){
					if(jlf){
						jlf=false
					i=$(this).index();
					oLis.find("span").removeClass("now")
					oLis.eq(i).find("span").addClass("now")
					index=i;
					ul.animate({left:-index*kuan},function(){jlf=true}) 
					}
				});
			    Next.click(function(){
			    	if(jlf){
						jlf=false
			    	index++;   
			    	if(index>len-1){
			    		index=1;
			    		ul.css({left:0})
			    	};
			    	ul.animate({left:-index*kuan},function(){jlf=true})
			    	i++;
			    	if(i>len-2){
			    		i=0
			    	};
			    	oLis.find("span").removeClass("now")
					oLis.eq(i).find("span").addClass("now")
					}
			    });
			    Prev.click(function(){
			    	if(jlf){
						jlf=false
			    	index--;
			    	if(index<0){
			    		index=len-2;
			    		ul.css({left:-kuan*(len-1)})
			    	};
			    	ul.animate({left:-kuan*index},function(){jlf=true})
			    	i--;
			    	if(i<0){
			    		i=len-2
			    	};
			    	oLis.find("span").removeClass("now")
					oLis.eq(i).find("span").addClass("now")//排他
					}
			    });
		
	})()
})