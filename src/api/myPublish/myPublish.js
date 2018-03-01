import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {queryMyDataUrl, numsPerPage, isProduction, options, detailInfoUrl} from '../config'

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

/**
 * 删除已发布的数据
 * @param id
 * @returns {AxiosPromise<any>}
 */
export function detailInfo(id) {
  let url = ROOT_URL + detailInfoUrl
  let data = {
    'condition.publishId': id
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}
