layui.use(["jquery","element"], function () {
    var $ = layui.jquery;
    var element=layui.element();
    //年份选择列表的显示隐藏
    $(".choose-year").on("mouseenter", function () {
        $(".choosen i").attr("class","fa fa-caret-up");
        $(".year-list").removeClass("layui-hide");
    });
    $(".choose-year").on("mouseleave", function () {
        $(".choosen i").attr("class","fa fa-caret-down");
        $(".year-list").addClass("layui-hide");
    });
    //点击周给其所在li添加active
    $(".router").on("click", function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    //点击月份同心圆花样式并显示周列表
    $(".month span .time-circle").on("click", function () {
        //给当前月份的同心圆更改样式并让其他回复默认
        $(".timeTree-head").removeClass("active");
        $(this).parents(".month").addClass("active");
        //让自己这组的ul显示并让其他隐藏
        $(this).parents(".month").next().removeClass("layui-hide").parent().siblings().find(".timeTree-weekList").addClass("layui-hide");
       //让所有的周回复默认
        $(".c-week").removeClass("active");
        //让当前月份默认显示第一周数据   （可改成显示整月报告）
        $(this).parents(".month").next().find("li:first-of-type .router").click();
    });
    //点击年度按钮
    $(".annual").on("click", function () {
        $(this).addClass("active");
        //让所有月份回复默认样式并让所有周列表隐藏
        $(".month").removeClass("active").parent().find(".timeTree-weekList").addClass("layui-hide");
    });
    //文本框内容不为空时显示提交按钮，只在第一次有效
    $(".report-text").on("blur", function () {
        if($(this).val()==""){
            return false;
        }else {
            $(".post-box").removeClass("layui-hide");
        }
    })
    //点击提交按钮将内容提交，展示在文本框并禁用文本框
    $("#post-btn").on("click", function () {
        //var summary=$("#summary").val();
        //var plan=$("#plan").val();
        $("#summary").attr("disabled","disabled");
        $("#plan").attr("disabled","disabled");
    })
});