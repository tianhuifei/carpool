import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {options, registerUrl} from '../config'
import {base64} from 'vux'

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
