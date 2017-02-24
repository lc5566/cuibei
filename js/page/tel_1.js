window.onload=function () {
    var Main = {
        data() {
            return {
                batchNumValue:"",
                customerValue:"",
                repayStateValue: "",
                repayStateOptions: [{
                    value: "M1",
                    label: "M1"
                }, {
                    value: "M2",
                    label: "M2"
                }, {
                    value: "M3",
                    label: "M3"
                }, {
                    value: "M4",
                    label: "M4"
                }, {
                    value: "M5",
                    label: "M5"
                }],
                tableData: [{
                    "id":"001",
                    "time": "2016-12-26 09:00:00",
                    "batchNum":"2017021701",
                    "name": "胡一",
                    "restate": "M1",
                    "days": 2
                },{
                    "id":"002",
                    "time": "2016-12-26 09:00:00",
                    "batchNum":"2017021702",
                    "name": "胡一",
                    "restate": "M2",
                    "days": 2
                },{
                    "id":"003",
                    "time": "2016-12-26 09:00:00",
                    "batchNum":"2017021703",
                    "name": "胡一",
                    "restate": "M3",
                    "days": 2
                },{
                    "id":"004",
                    "time": "2016-12-26 09:00:00",
                    "batchNum":"2017021704",
                    "name": "胡一",
                    "restate": "M4",
                    "days": 2
                },{
                    "id":"005",
                    "time": "2016-12-26 09:00:00",
                    "batchNum":"2017021705",
                    "name": "胡一",
                    "restate": "M5",
                    "days": 2
                }],
                multipleSelection:[],
                batchGetAlert:'',
                currentPage: 5
            }
        },
        methods: {
//            页面加载获取数据
            pageLoadingGet:function(){
//                this.$http.get('').then(function(res){
//                    this.tableData=res.data;
//                    console.log(res.data);
//                },function(res){
//                    console.log(res.data);
//                });
            },
//            搜索按钮点击事件
            searchClick(){
                console.log(1);
            },
//            批量领取点击事件
            batchGetClick(){
                if(this.multipleSelection.length==0){
                    this.batchGetAlert='请选择要领取的客户';
                }else{
                    var newArr=[];
                    this.multipleSelection.forEach(function (item,index,input) {
                        newArr.push(item.id);
                    })
                    this.batchGetAlert='领取成功'
                    console.log(newArr);
                }
                this.$alert(this.batchGetAlert, '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
//                      this.$message({
//                         type: 'info',
//                         message: `action: ${ action }`
//                      });
                    }
                });
            },
//            客户姓名点击事件
            clientNameClick(scope) {
//              window.parent.document.getElementById("openNew").value=scope.row.name;
//              console.log(parent.parentVar);
                console.log(scope.row.id);
            },
//            领取点击事件
            getTaskClick(scope){
                this.$alert('领取成功', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
//                      this.$message({
//                         type: 'info',
//                         message: `action: ${ action }`
//                      });
                    }
            });
                console.log(scope.row.id);
            },
//            复选框选项变化检测
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection);
            },
//            当前页变动事件
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            }
        },
        filters: {
            encryptName (value) {
                return value.replace(value.charAt(1),"*");
            }
        }
    }
    var Ctor = Vue.extend(Main);
    new Ctor().$mount('#app');
    Main.methods.pageLoadingGet();
}