$(function () {
    $("#full-clndr").clndr({
        template: $('#id_clndr_template').html(),
        clickEvents: {
            onMonthChange: function(month) {
                // TODO: 这边写月份改变事件，控制底部线条图的变化
            },
            click: function(target){
                var dateDom = $(target.element);
                if((!dateDom.hasClass("focusIn")) && (dateDom.hasClass("past") || dateDom.hasClass("today"))){
                    $(".focusIn").removeClass("focusIn");
                    dateDom.addClass("focusIn");
                    // TODO: 这边写日期改变的事件，控制右边环形图的变化

                }
            },
        },
        daysOfTheWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
        showAdjacentMonths: true,
        forceSixRows : true,
        adjacentDaysChangeMonth : true,
    });
    $(".more").on("click", function () {
        $(".layui-nav-item:last-of-type",window.parent.document).find("dd:last-of-type").click();
    });
})
