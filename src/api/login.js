import md5 from 'js-md5'
import ajax from '@/config/ajax-login'

//登录
export function login(username,password) {
  return ajax.request({
    method: 'post',
    url: 'login',
    params: {
      account: username,
      password: md5(password),
    }
  });
}