import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {options} from './config'

/**
 * 获取服务器当前时间
 */
export function presentTime() {
  let url = '/index/index/present_time'
  return jsonp(ROOT_URL + url, null, options)
}
