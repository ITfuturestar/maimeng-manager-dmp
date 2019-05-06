<template>
    <div class="containers">
        <div class="head">
            <div class="left">
                <img src="../assets/images/top/top-logo.png" />
            </div>
            <div class="right">
                <div class="right-box">
                    <div class="right-inner">
                        <div class="user">
                            <span class="user-icon"></span>
                            <span class="user-info">admin</span>
                        </div>
                        <a class="logout" href="javascript:void(0)" @click="logout"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="content" v-bind:style="'max-height:'+height+'px'">
                <router-view>
                <!--内容主体-->
                </router-view>
                <div class="bottom">
                    <span>Copyright&copy;2018 麦盟科技maimenggroup版权所有</span>
                </div>
            </div>
            <!--左侧菜单-->
            <div class="aside" v-bind:style='"height:" + (height+15) + "px"'>
                <ul class="menu-list">
                    <li name="level-1">
                        <a href="javascript:void(0)" @click="menu_selects"><span class="basis"></span>数据提供</a><span class="down"></span>
                        <ul>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">任务日志</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">提供比例</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">模型可用</a></li>
                        </ul>
                    </li>
                    <li name="level-1">
                        <a href="javascript:void(0)" @click="menu_selects"><span class="basis"></span>统计报表</a><span class="down"></span>
                        <ul>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">数据概况</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">坐席概况</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">人均产出</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">详细报表</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">内部运营</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">不成单原因</a></li>
                        </ul>
                    </li>
                    <li name="level-1">
                        <a href="javascript:void(0)" @click="menu_selects"><span class="basis"></span>职场展示</a><span class="down"></span>
                        <ul>
                            <li name="level-2"><a href="javascript:void(0)"  @click="menu_select">数据概况</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">坐席能力</a></li>
                            <li name="level-2"><a href="javascript:void(0)" @click="menu_select">坐席功效</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
   export default {
        data() {
            return{
                height: 300
            }
        },
        created() {
            this.height = document.documentElement.clientHeight-75;
        },
        methods: {
            menu_select(e){
                let list2=document.getElementsByName("level-2");
                for(let i=0;i<list2.length;i++){
                    list2[i].className="";
                }
                e.path[1].className="current";

                //this.current=e.target.getAttribute("data-router");
                //this.$router.push({
                    //path:'/'+this.current
                //});
            },
            menu_selects(e){
                let list1=document.getElementsByName("level-1");
                for(let i=0;i<list1.length;i++){
                    list1[i].className="";
                }
                e.path[1].className="current";
            },
            logout(){
                this.$router.push({
                    path:'/'
                }); 
            }
        }
   }
</script>
<style>
    @import '../assets/css/pages/main.css'
</style>