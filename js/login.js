
$(function () {


//	点击登录按钮
	function textForm(select,tips){
		$(select).blur(function () {
			var username=$(select).val();
			if(username == ''){
				$(tips).css('display','block');
			}
		});

		$('input:text').focus(function () {
			$(tips).css('display','none');
		});
	}
	textForm('#username','.tip1');
	textForm('#pwd','.tip2');
});