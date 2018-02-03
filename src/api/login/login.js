import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {options, registerUrl, checkUserUrl, loginUrl, isProduction} from '../config'
import {base64, md5} from 'vux'
import axios from 'axios'

/**
 * 注册
 */
export function register(userName, passWord) {
  let url = ROOT_URL + registerUrl
  let data = {
    param: base64.encode(JSON.stringify({userName: userName, passWord: passWord}))
  }
  if (isProduction) {
    return axios.post(url, data)
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
  if (isProduction) {
    return axios.post(url, data)
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
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}
