$(function(){
	$('#fullpage').fullpage({
		scrollingSpeed:700,
		//index.html#second 直接就是那个页面
		anchors:['first','second','third','forth'],
		showActiveTooltips:true,
		// continuousVertical:true,
		navigation:true,
		navigationTooltips:['登录百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
		afterLoad:function(xx,index){
			if(index===2){
				$('#denglu').css({opacity:'1'});
			}
			if(index===1){
				$('#denglu').css({opacity:'0'});
			}
		},

	});
	$('.arrow').on('click',function(){
		$.fn.fullpage.moveSectionDown();
	})
})

