window.onload=function () {
    var Main = {
        data() {
            return {
                batchNumValue:"",
                customerValue:"",
                entrusterValue:"",
                repayStateValue: "",
                overdueBeginValue:"",
                overdueFinishValue:"",
                ODVValue:"",
                stateValue:"",
                stateOptions:[
                    {
                        value: "已完成",
                        label: "已完成"
                    }, {
                        value: "流出",
                        label: "流出"
                    }
                ],
                repayStateOptions: [
                    {
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
                    }
                ],
                entrusterOptions:[],
                tableData: [
                    {
                        "id":"001",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021701",
                        "name": "胡一",
                        "restate": "M1",
                        "days": "2",
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"待催收"

                    },{
                        "id":"002",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021702",
                        "name": "胡一",
                        "restate": "M2",
                        "days": "2",
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"待催收"
                    },{
                        "id":"003",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021703",
                        "name": "胡一",
                        "restate": "M3",
                        "days": "2",
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"待催收"
                    },{
                        "id":"004",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021704",
                        "name": "胡一",
                        "restate": "M4",
                        "days": "2",
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"催收中"
                    },{
                        "id":"005",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021705",
                        "name": "胡一",
                        "restate": "M5",
                        "days": "2",
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"催收中"
                    }
                ],
                multipleSelection:[],
                loading: false,
                currentPage: 5,
                // 以下是一键分配弹出框数据
                dialogVisible:false,
                dialogTableData:[
                    {
                        "collecter":"刘春春",
                        "currentAmount":15
                    },
                    {
                        "collecter":"刘春春",
                        "currentAmount":15
                    }
                ]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
//            搜索按钮点击事件
            searchClick(){
                console.log(1);
            },
//            一键分配点击事件
            distributionClick(){
                if(this.multipleSelection.length==0){
                    this.$alert('请选择要分配的案件', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                               type: 'info',
                               message: `action: ${ action }`
                           });
                        }
                    });
                }else{
                    this.dialogVisible=true;
                }

            },
//            客户姓名点击事件
            clientNameClick(scope) {
//                window.parent.document.getElementById("openNew").value=scope.row.name;
//                console.log(parent.parentVar);
                console.log(scope.row.id);
            },
//            开始催收点击事件
            collectionClick(scope){
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
}