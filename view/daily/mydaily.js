
    layui.use(["element","jquery","laydate"], function () {
        var element=layui.element();
        var $=layui.jquery;
        var laydate=layui.laydate;
        //日历控件初始化
        var time = {
            min: '1901-01-01 00:00:01'
            ,max: '2099-06-16 23:59:59'
            ,istoday: false
            ,isclear:false
        };
        $(".choose-date").on("click", function () {
            time.elem = this;
            laydate(time);
        });

    // 文本框变化事件
        $(".text-box").on("click", function () {
            $(".text-box").addClass("focus");
        });
        //点击除文本框盒子之外的任意位置使盒子变回原样
        //复杂方法，待删除
        //$("body").on("click", function (e) {
        //   if(e.target.id=="text-box"|| e.target.id=="rich-editor"|| e.target.id=="push-btn"){
        //       e.stopPropagation();
        //      return;
        //   }else{
        //       e.stopPropagation();
        //       $(".text-box").removeClass("focus");
        //   }
        //})
        //简单方法
        $("body").on("click", function (e) {
            if(!$(e.target).closest(".text-box").length){
                $(".text-box").removeClass("focus");
            }
        })
        //点击提交清空文本框
        $("#push-btn").on("click", function () {
            $("#rich-editor").val("");
        })
    //查阅按钮显示隐藏
    $(".log-box").on("mouseenter", function () {
       $(this).find(".box-action").removeClass("layui-hide");
    }); $(".log-box").on("mouseleave", function () {
        $(this).find(".box-action").addClass("layui-hide");
    });
    //点击查阅按钮显示批注及查阅情况panel
    $(".box-action span").on("click", function () {
        $(this).parent().parent().find(".log-panel").toggleClass("layui-hide");
    })




    });
