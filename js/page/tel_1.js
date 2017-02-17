/**
 * Created by zzl028 on 2017/1/20.
 */
$(function () {
    // 模拟数据
    var data=[{
        'data':1,
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M2",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M3",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M4",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M5",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡哈哈",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    },{
        "time": "2016-12-26 09:00:00",
        "name": "胡一",
        "restate": "M1",
        "days": "2"
    }];

    // 渲染表格
    function tableRender(data) {
        var tableObj={
            columns: [{
                field: 'state',
                checkbox: true,
                align:'center',
                formatter:function (value,row,index) {
                    return value;
                }
            },{
                field: 'Number',
                title: '序号',
                align:'center',
                formatter: function (value, row, index) {
                    return index+1;
                }
            },{
                field: 'time',
                title: '进入客户池时间',
                align:'center'
            }, {
                field: 'name',
                title: '客户姓名',
                align:'center',
                formatter:function (value,row,index) {
                    return '<a class="customer-name">'+value+'</a>'
                },
                events:{
                    // 查看用户信息
                    'click .customer-name':function (e,value,row,index) {
                        console.log(row);
                        console.log(window.parent.ce)
                    }
                }
            },{
                field: 'restate',
                title: '还款状态',
                align:'center'
            },{
                field: 'days',
                title: '逾期天数',
                align:'center'
            },{
                field: 'operation',
                title: '操作',
                align:'center',
                formatter:function (value,row,index) {
                    return '<a class="batch">领取</a>'
                },
                events:{
                    'click .batch':function (e,value,row,index) {
                        // 领取事件
                        console.log(row);
                    }
                }
            }],
            classes:'table table-hover table-no-bordered',
            toolbar: '',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: true,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 15,                       //每页的记录行数（*）
            pageList: [15],        //可供选择的每页的行数（*）
            search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            showColumns: false,                  //是否显示所有的列
            showRefresh: false,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: false,                //是否启用点击选中行
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                  //是否显示父子表
            data:data
        }
        $('#table').bootstrapTable(tableObj);
    }

    // 页面打开加载表格
    tableRender(data);

    //搜索事件
    $('#searchBtn').on('click',function () {
        var nameVal=$.trim($('#nameInput').val());
        var stateVal=$('#stateSelect').val();
        var dataVal=[];
        if(stateVal=='请选择'){
            if(nameVal==''){
                dataVal=data;
            }else{
                $.each(data,function (i, v) {
                    if(v.name.search(nameVal)!=-1){
                        dataVal.push(v);
                    }
                })
            }
        }else{
            if(nameVal==''){
                $.each(data,function (i, v) {
                    if(v.restate.search(stateVal)!=-1){
                        dataVal.push(v);
                    }
                })
            }else{
                $.each(data,function (i, v) {
                    if(v.name.search(nameVal)!=-1&&v.restate.search(stateVal)!=-1){
                        dataVal.push(v);
                    }
                })
            }
        }
        $('#table').bootstrapTable('destroy');
        tableRender(dataVal);
    })

    // 批量领取事件
    $('#batchBtn').on('click',function () {
        var  sels=$('#table').bootstrapTable('getSelections');
        if(sels.length==0){
            $('#myModal1').addClass('in').show();
        }else{

        }
        console.log(sels);
    })

    //模态框1的关闭点击
    $('#myModal1 .close').on('click',function () {
        $('#myModal1').removeClass('in').hide();
    })
    //模态框1的知道了点击事件
    $('#myModal1 .know-click').on('click',function () {
        $('#myModal1').removeClass('in').hide();
    })
})