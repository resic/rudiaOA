var treeDate={ elem: '#treeList' //传入元素选择器
    ,skin:'yellow'
    ,nodes: [{ //节点
        name: '睿达智能',
        level:'company'
        ,spread:'true'
        ,children: [
            {
            name: '公司领导'
            ,level:'department'
            ,children:[{
                name:'马勇'
                ,level:'staff'
            },{
                name: '荆超'
                ,level:'staff'
            }]
        },{
            name: '财务部'
            ,level:'department'
            ,children:[{
                name:'李慧轩'
                ,level:'staff'
            },{
                name:'王睿'
                ,level:'staff'
            }]
        },{
            name: '运维部'
            ,level:'department'
            ,children:[{
                name:'王道远'
                ,level:'staff'
            },{
                name:'谢西勇'
                ,level:'staff'
            },{
                name:'上官旭龙'
                ,level:'staff'
            },{
                name:'吕贻飞'
                ,level:'staff'
            },{
                name:'王超'
                ,level:'staff'
            },{
                name:'陈东升'
                ,level:'staff'
            }]
        },{
            name: '研发部'
            ,level:'department'
            ,children:[{
                name:'孟轲'
                ,level:'staff'
            },{
                name:'王水丽'
                ,level:'staff'
            },{
                name:'孔凡杨'
                ,level:'staff'
            },{
                name:'李泰'
                ,level:'staff'
            },{
                name:'杨凯'
                ,level:'staff'
            },{
                name:'黄志英'
                ,level:'staff'
            },{
                name:'任瑞修'
                ,level:'staff'
            },{
                name:'刘雪艳'
                ,level:'staff'
            },{
                name:'王幸'
                ,level:'staff'
            },{
                name:'闫乐'
                ,level:'staff'
            },{
                name:'张鹏'
                ,level:'staff'
            },{
                name:'苏雪伟'
                ,level:'staff'
            }]
        },{
            name: '系统集成部'
            ,level:'department'
            ,children:[{
                name:'张欣'
                ,level:'staff'
            },{
                name:'杨飞'
                ,level:'staff'
            },{
                name:'许文衡'
                ,level:'staff'
            },{
                name:'赵延武'
                ,level:'staff'
            },{
                name:'卫亚飞'
                ,level:'staff'
            }]
        },{
            name: '综合部'
            ,level:'department'
            ,children:[{
                name:'胡媛媛'
                ,level:'staff'
            }]
        }]
    }]
    //点击发送请求部分 预备改成ajax交互形式，通过点击员工获取员工在日志及周报
    ,click: function (node) {
        if(node.level==="staff"){
            alert("发送请求");
        }
    }
};
