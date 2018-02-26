import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {queryMyDataUrl, numsPerPage, isProduction, options} from '../config'

/**
 * 加载个人发布数据
 * @param start     如何为0 则为刷新
 */
export function queryMyData(start) {
  let url = ROOT_URL + queryMyDataUrl
  start = start || 0
  let data = {
    'condition.userId': '',
    'condition.numsPerPage': numsPerPage,
    'condition.currentPage': start
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}
