layui.use(["form","jquery","element"], function () {
    var form=layui.form()
        ,layer=layui.layer
        ,$=layui.jquery
        ,element=layui.element();

//    自定义部分表单验证
    form.verify({
        pwd: function (value) {
            if( !/^[\S]{6,12}$/.test(value)){
                return "密码必须6到12位，且不能出现空格"
            }
        },
        repeatPwd: function (value) {
         if(!($("#newPwd").val()===$("#repeatPwd").val())){
             return "两次输入的密码不一致"
         }
        },
        chinese: function (value) {
          if(!/^[\u4e00-\u9fa5]{1,}$/.test(value)){
             return "请输入中文"
          }
        },
        username: function (value) {
            if(!/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/.test(value)){
                return "用户名不支持符号"
            }
        },
        qq: function (value) {
            if(!/[1-9][0-9]{4,}/.test(value)){
                return "请输入正确的QQ号"
            }
        }

    })
    //监听提交
    form.on('submit(push)', function(data){
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        })
        return false;
    });

})