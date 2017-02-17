/**
 * Created by zzl028 on 2017/1/16.
 */
Vue.directive('a-red',function (color) {
    this.el.style.background=color;
})
$(function () {
    var worker=new Vue({
        el:'#worker',
        data:{

        },
        methods:{
            get:function () {
                $.ajax({
                    url:'',
                    data:'',
                    success:function (res) {
                        res
                    }
                })
            }
        },
        created:function () {
            this.get();
        }
    })
    $( ".datepicker" ).datepicker({
        inline: true,
        showOtherMonths: true
    });

})