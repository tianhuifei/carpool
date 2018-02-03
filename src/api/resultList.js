import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {options, commonParams, carUrl, peopleUrl, queryAll, startEndUrl, isProduction} from './config'
import {ROOT_URL} from 'common/js/base'

/**
 * 首页
 * 刷新
 */
export function getQueryALl() {
  const url = ROOT_URL + queryAll
  const data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}

/**
 * 首页 始发在与目的地 查询
 * @param startAdd
 * @param endAdd
 */
export function queryStartEndApi(startAdd, endAdd) {
  const url = ROOT_URL + startEndUrl
  let data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5,
    'condition.startAddress': startAdd,
    'condition.endAddres': endAdd
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}

/**
 * 首页类型查找
 * @param publishType 查找类型
 */
export function queryPublishType(publishType) {
  let data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5,
    'condition.publishType': publishType
  }
  let url = publishType ? peopleUrl : carUrl
  if (isProduction) {
    return axios.post(ROOT_URL + url, data)
  }
  return jsonp(ROOT_URL + url, data, options)
}

/**
 * 上拉加载
 * @param publishType
 */
export function pullUp(currentPage, publishType, startAdd, endAdd, apiType) {
  let url = ''
  // if (Number.isInteger(publishType)) {
  //   url = publishType ? peopleUrl : carUrl
  //   if (publishType < 0) {
  //     url = queryAll
  //   }
  // }
  // if (Object.prototype.toString.call(publishType) === '[object String]') {
  //   endAdd = startAdd
  //   startAdd = publishType
  //   url = startEndUrl
  // }
  switch (apiType) {
    case 'queryAll':
      url = queryAll
      break
    case 'startEnd':
      url = startEndUrl
      break
    case 'typeList':
      url = publishType ? peopleUrl : carUrl
      break
  }

  let data = Object.assign({}, commonParams, {
    'condition.currentPage': currentPage,
    'condition.publishType': publishType,
    'condition.startAddress': startAdd,
    'condition.endAddres': endAdd
  })
  if (isProduction) {
    return axios.post(ROOT_URL + url, data)
  }
  return jsonp(ROOT_URL + url, data, options)
}
