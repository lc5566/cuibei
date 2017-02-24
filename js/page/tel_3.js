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
                        "days": 2,
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"已完成"

                    },{
                        "id":"002",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021702",
                        "name": "胡一",
                        "restate": "M2",
                        "days": 2,
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"已完成"
                    },{
                        "id":"003",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021703",
                        "name": "胡一",
                        "restate": "M3",
                        "days": 2,
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"已完成"
                    },{
                        "id":"004",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021704",
                        "name": "胡一",
                        "restate": "M4",
                        "days": 2,
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"流出"
                    },{
                        "id":"005",
                        "time": "2016-12-26 09:00:00",
                        "batchNum":"2017021705",
                        "name": "胡一",
                        "restate": "M5",
                        "days": 2,
                        "entruster":"中资联",
                        "collecter":"丁金龙",
                        "collectionState":"流出"
                    }
                ],
                loading: false,
                currentPage: 5
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