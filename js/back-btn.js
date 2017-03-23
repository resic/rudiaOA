layui.use(["jquery","element"], function () {
    var $=layui.jquery
        ,element=layui.element();
    $(function () {
        $(".back-btn").on("click", function () {
            window.history.back();
        })
    })
})