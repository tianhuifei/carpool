import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {options, registerUrl, checkUserUrl, loginUrl} from '../config'
import {base64, md5} from 'vux'

/**
 * 注册
 */
export function register(userName, passWord) {
  let url = ROOT_URL + registerUrl
  let data = {
    param: base64.encode(JSON.stringify({userName: userName, passWord: passWord}))
  }

  return jsonp(url, data, options)
}

/**
 * 检测用户是否已被注册
 * @param userName
 */
export function checkUser(userName) {
  let url = ROOT_URL + checkUserUrl
  let data = {
    userName: userName
  }
  return jsonp(url, data, options)
}

/**
 *
 */
export function loginSubMit(userName, passWord) {
  let url = ROOT_URL + loginUrl
  let data = {
    param: base64.encode(JSON.stringify({userName: userName, passWord: md5(passWord)}))
  }
  return jsonp(url, data, options)
}
