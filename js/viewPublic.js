
$(function () {
    //数据表格分页
    layui.use(['laypage', 'layer'], function() {
        var laypage = layui.laypage
            ,layer = layui.layer;
        laypage({
            cont: 'pagination'
            ,pages: 10 //总页数
            ,groups: 3 //连续显示分页数
        });
    });
    //右侧表格隐藏显示
    $("a.gray").on("click", function () {
        $(".page-table-body").toggleClass('none');
    });
    //在各view页面跳转添加页
    $("#jump-btn").attr("href","./add.html");
    //各view页面跳转详情页
    $("td:last-of-type a:first-of-type").attr("href","./detail.html");
});
