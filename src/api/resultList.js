// import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {options} from './config'
import {ROOT_URL} from 'common/js/base'

/**
 * 首页
 * 刷新
 */
export function getQueryALl() {
  const url = ROOT_URL + '/index/index/query_all'
  const data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5
  }

  return jsonp(url, data, options)
}

/**
 * 首页 始发在与目的地 查询
 * @param startAdd
 * @param endAdd
 */
export function queryStartEnd(startAdd, endAdd) {
  const url = ROOT_URL + '/index/index/query_start_end'
  let data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5,
    'condition.startAddress': startAdd,
    'condition.endAddres': endAdd
  }
  return jsonp(url, data, options)
}

export function queryPublishType(publishType) {
  // 车找人 url
  const carUrl = '/index/index/query_ctop'
  // 人找车 url
  const peopleUrl = '/index/index/query_ptoc'
  let data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5,
    'condition.publishType': publishType
  }
  let url = publishType ? peopleUrl : carUrl
  return jsonp(url, data, options)
}
