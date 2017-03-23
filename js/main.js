layui.use(["layer","jquery"], function () {
    var layer=layui.layer
        ,$=layui.jquery;
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
    $(".information").on("click", function () {
        layer.open({
            type:1
            ,title:"通知公告"
            ,area:"66.66%"
            ,content:
            "<div class='wrap-heading'>"+
            "<h1>通知公告</h1>"+
            "<span>2017-01-16 15:37</span>"+
            "</div>"+
            "<div class='wrap-body'>"+
            "<div class='message'>"+
            "<h3>关于五一放假调休通知</h3>"+
            "<div class='message-content layui-clear'>"+
            "<div class='person'>公司各部门各职员：</div>"+
            "<div class='message-data'>根据国家法定假期的规定，学校现对五一节放假做如下安排：放假时间为5月1日至3日(星期五至星期天)，共3天。其中，5月1日(星期五)为五一假期，5月2日(星期六)，5月3日(星期天)为法定节假日照常公休。要求各部门提前安排好假期的相关工作。</div>"+
            "<div class='p-right'>"+
            "<div class='notifier'>人事部</div>"+
            "<div class='inform-time '>2015-01-16</div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"

        })
    })
})

