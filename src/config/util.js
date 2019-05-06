import Cookies from 'js-cookie'

export function getCookie(key) {
  return Cookies.get(key);
}

export function setCookie(key,value) {
  return Cookies.set(key, value,{expires:6,path:'/'});
}

export function delCookie(key) {
  return Cookies.remove(key);
}

export function getTime(time) {
  time = time | 0;
  let min = time/60 | 0;
  min = min > 10 ? min : '0'+min;
  let sec = time%60 | 0;
  sec = sec > 10 ? sec : '0'+sec;
  return min + ":" + sec;
}
