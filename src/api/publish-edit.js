import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {isProduction, options, queryEditUrl, updateInfoUrl} from './config'
import axios from 'axios'

/**
 * 获取服务器当前时间
 */
export function presentTime() {
  let url = '/index/index/present_time'
  if (isProduction) {
    return axios.post(ROOT_URL + url)
  }
  return jsonp(ROOT_URL + url, null, options)
}

/**
 * 添加 发布信息
 * @param carpoolInfo
 */
export function addPublish(carpoolInfo) {
  let url = '/publish/publish/add_publish'
  const data = {
    'publish.publishType': carpoolInfo.publishType,
    'publish.startAddress': carpoolInfo.startAddress,
    'publish.endAddres': carpoolInfo.endAddres,
    'publish.contacts': carpoolInfo.contacts,
    'publish.contactsPhone': carpoolInfo.contactsPhone,
    'publish.carNumber': carpoolInfo.carNumber,
    'publish.vacancy': carpoolInfo.vacancy,
    'publish.remarks': carpoolInfo.remarks,
    'publish.startDate': carpoolInfo.startDate,
    'publish.startTime': carpoolInfo.startTime,
    'publish.openId': carpoolInfo.openId,
    'publish.publishId': carpoolInfo.publishId,
    'publish.publishTime': carpoolInfo.publishTime
  }
  if (isProduction) {
    return axios.post(ROOT_URL + url, data)
  }
  return jsonp(ROOT_URL + url, data, options)
}

/**
 * 查询需要编辑的信息
 * @param id
 */
export function queryEdit(id) {
  let url = ROOT_URL + queryEditUrl
  let data = {
    'condition.publishId': id
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}

/**
 * 更新已发布的数据
 * @param carpoolInfo
 * @returns {AxiosPromise<any>}
 */
export function updateInfo(carpoolInfo) {
  let url = ROOT_URL + updateInfoUrl
  const data = {
    'publish.publishType': carpoolInfo.publishType,
    'publish.startAddress': carpoolInfo.startAddress,
    'publish.endAddres': carpoolInfo.endAddres,
    'publish.contacts': carpoolInfo.contacts,
    'publish.contactsPhone': carpoolInfo.contactsPhone,
    'publish.carNumber': carpoolInfo.carNumber,
    'publish.vacancy': carpoolInfo.vacancy,
    'publish.remarks': carpoolInfo.remarks,
    'publish.startDate': carpoolInfo.startDate,
    'publish.startTime': carpoolInfo.startTime,
    'publish.openId': carpoolInfo.openId,
    'publish.publishId': carpoolInfo.publishId,
    'publish.publishTime': carpoolInfo.publishTime
  }
  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}
