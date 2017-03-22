layui.use("jquery", function () {
    var $=layui.jquery;
    $(function () {
        $(".back-btn").on("click", function () {
            window.history.back();
        })
    })
})