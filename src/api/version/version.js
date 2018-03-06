import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {isProduction, options, versionUrl} from '../config'
import axios from 'axios'

/**
 * 获取版本介绍信息
 * @returns {AxiosPromise<any>}
 */
export function getVersionInfo() {
  let url = ROOT_URL + versionUrl
  if (isProduction) {
    return axios.post(url)
  }
  return jsonp(url, null, options)
}
