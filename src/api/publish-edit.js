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
  return jsonp(ROOT_URL + url, data, options)
}
