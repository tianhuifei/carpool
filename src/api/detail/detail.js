import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {isProduction, options, queryDetailUrl} from '../config'
import {ROOT_URL} from 'common/js/base'

/**
 * 查询详细信息
 * @param id
 */
export function queryDetail(id) {
  let url = ROOT_URL + queryDetailUrl
  let data = {
    'condition.publishId': id
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}
