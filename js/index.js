/** index.js By Beginner Emain:zheng_jinfan@126.com HomePage:http://www.zhengjinfan.cn */
layui.config({
	base: 'js/'
}).use(['element', 'layer', 'navbar', 'tab'], function() {
	var element = layui.element(),
		$ = layui.jquery,
		layer = layui.layer,
		navbar = layui.navbar(),
		tab = layui.tab({
			elem: '.admin-nav-card' //设置选项卡容器
		});
	//iframe自适应
	$(window).on('resize', function() {
		var $content = $('.admin-nav-card .layui-tab-content');
		$content.height($(this).height() - 147);
		$content.find('iframe').each(function() {
			$(this).height($content.height());
		});
	}).resize();

	//设置navbar
	navbar.set({
		spreadOne: true,
		elem: '#admin-navbar-side',
		cached: true,
		data: navs
	});
	//渲染navbar
	navbar.render();
	//监听点击事件
	navbar.on('click(side)', function(data) {
		tab.tabAdd(data.field);

	});
	//    --------------------------待删除部分 -----------------------
	$("#levelLog").on("click", function () {
		tab.tabAdd({
			"title": "日报2",
			"icon": "&#xe612;",
			"href": "./view/levelDaily/watchLog.html"
		})
	})
	$("#levelReport").on("click", function () {
		tab.tabAdd({
			"title": "周报2",
			"icon": "&#xe612;",
			"href": "./view/levelDaily/watchReport.html"
		})
	})
	//百度搜索页面
	$("#baidu").on("click", function () {
		tab.tabAdd({
			"title": "百度一下",
			"icon": "&#xe612;",
			"href": "https://www.baidu.com"
		})
	})
	//    ------------------------待删除部分结束------------------------------
	//个人信息页面添加选项卡
	$("#personal").on("click", function () {
		tab.tabAdd({
			"title": "个人信息",
			"icon": "&#xe612;",
			"href": "./view/private/personal.html"
		})
	});
	//更改密码页面添加选项卡
	$("#changePwd").on("click", function () {
		tab.tabAdd({
			"title": "更改密码",
			"icon": "&#xe612;",
			"href": "./view/private/changePwd.html"
		})
	})
    //左侧导航栏显现隐藏
	$('.admin-side-toggle').on('click', function() {
		var sideWidth = $('#admin-side').width();
		if(sideWidth === 200) {
			$('#admin-body').animate({
				left: '0'
			}); //admin-footer
			$('#admin-footer').animate({
				left: '0'
			});
			$('#admin-side').animate({
				width: '0'
			});
		} else {
			$('#admin-body').animate({
				left: '200px'
			});
			$('#admin-footer').animate({
				left: '200px'
			});
			$('#admin-side').animate({
				width: '200px'
			});
		}
	});

	//手机设备的简单适配
	var treeMobile = $('.site-tree-mobile'),
		shadeMobile = $('.site-mobile-shade');
	treeMobile.on('click', function() {
		$('body').addClass('site-mobile');
	});
	shadeMobile.on('click', function() {
		$('body').removeClass('site-mobile');
	});

})
