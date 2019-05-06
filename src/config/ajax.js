import axios from 'axios'
import router from '@/router'
import {Message} from 'element-ui'
import {getCookie} from '@/config/util'

//创建axios实例
const ajax = axios.create({
  baseURL: "",      // api的base_url
  timeout: 5000                                            // 请求超时时间
})

//请求拦截器
ajax.interceptors.request.use(function (config) {
  //发送请求之前
  const token = getCookie('token'); //获取Cookie

  if(token!=""){
    config.headers["Authorization"]=token;
  }

  return config;
},function (error) {
  //请求错误
  console.log(error);
  console.log("ajax-request-error");

  return Promise.reject(error);
});
//响应拦截器
ajax.interceptors.response.use(function (response) {
  //响应数据处理
  return response.data;
},function (error) {
  //请求错误
  console.log(error);
  console.log("ajax-response-error");

  //错误信息
  Message.error(error.response.data.message);

  //401 token 验证错误 返回登录
  if(error.response.data.code==401){
    router.push('/');
  }

  return Promise.reject(error.response.data);
});

export default ajax
