<template>
    <div class="container login" @keyup.enter="login">
        <div class="login-top">
            <div class="top-center">
                <img src="../assets/images/login/login-title.png">
                <div class="top-right">
                    <a href="http://www.maimenggroup.com/">麦盟官网</a> | <a href="#">帮助中心</a>
                </div>
            </div>
        </div>
        <div class="login-content">
            <div class="content-center">
                <div class="login-box">
                    <h3>登录</h3>
                    <div class="input">
                        <span class="icon-user"></span><input type="text" value="" class="input-text" v-model="username" @blur="$v.username.$touch" placeholder="请输入用户名"/>
                        <div class="msg">请输入用户名</div>
                    </div>
                    <div class="input">
                        <span class="icon-password"></span><input type="password" value="" class="input-text" v-model="password" @blur="$v.password.$touch" placeholder="请输入密码">
                        <div class="msg">请输入密码</div>
                    </div>
                    <button type="button" class="btn" @click="login">登录</button>
                </div>
            </div>
        </div>
        <div class="login-bottom">
        <p>Copyright&copy;2018 麦盟科技maimenggroup版权所有</p>
        </div>
    </div>
</template>
<script>
    import {login} from '@/api/login'
    import {required} from 'vuelidate/lib/validators'
    export default{
        data(){
            return {
                username: "admin",
                password: "000000"
            }
        },
        validations: {
            username: {required},
            password: {required}
        },
        methods: {
            login(){
                this.$router.push('/main');
                this.$v.$touch();
                //数据提交
                if(!this.$v.$error) {

                    //登录信息校验
                    login(this.username,this.password).then((res) => {
                        if (res.code == 200) {
                            setCookie("token", res.data);
                            setCookie("username", this.username);

                            this.$router.push('/voice/quality');
                            this.$message.success("登录成功");
                        } else {
                            this.$message.error(res.message);
                        }
                    });
                }
            }
        }
    }
</script>
<style>
    @import '../assets/css/pages/login.css'
</style>