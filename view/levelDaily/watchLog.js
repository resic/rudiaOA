layui.use(["element","jquery","tree","laydate"], function () {
    var element=layui.element();
    var $=layui.jquery;
    var laydate=layui.laydate;
    //初始化树形菜单
    layui.tree(treeDate);
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
    //点击button提交批注内容
    $(".comment-post").on("click", function () {
       var comment=$(this).parent().find("textarea").val().trim();
        var html=null;
        var date=getDate();
        if(comment==""||comment==null){
            $(this).parent().find("textarea").attr("placeholder","内容不能为空");
        }
        else{
            html="<div class='comment-box layui-clear'>\n" +
                "<span class='theme'>批注人</span>\n" +
                "<span>"+comment+"</span>\n" +
                "<span class='p-right'>"+date+"</span>\n" +
                "</div>";
            $(this).parents(".comment").append(html);
        }
        $(this).parent().find("textarea").val("");
    });
     //获取时间函数，格式为xxxx-xx-xx xx:xx:xx   （年月日时分秒）
     function getDate(){
         var date = new Date();//
         var year = date.getFullYear();//年
         var month = date.getMonth() + 1;//月
         if(month < 10) {
             month = "0" + month;
         }
         var day = date.getDate();//日
         if(day < 10) {
             day = "0" + day;
         }
         var hour = date.getHours();//时
         if(hour < 10) {
             hour = "0" + hour;
         }
         var minute = date.getMinutes();//分
         if(minute < 10) {
             minute = "0" + minute;
         }
         var second = date.getSeconds();//秒
         if(second < 10) {
             second = "0" + second;
         }
         var str = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
         return str;
     }

});
