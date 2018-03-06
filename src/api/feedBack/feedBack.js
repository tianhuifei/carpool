import jsonp from 'common/js/jsonp'
import {ROOT_URL} from 'common/js/base'
import {options, isProduction, feedBackUrl} from '../config'
import axios from 'axios'

/**
 * 提交用户的反馈信息
 * @param opinion
 * @param contactWay
 * @returns {AxiosPromise<any>}
 */
export function feedBack(opinion, contactWay) {
  let url = ROOT_URL + feedBackUrl
  let data = {
    opinion: opinion,
    contactWay: contactWay
  }

  if (isProduction) {
    return axios.post(url, data)
  }
  return jsonp(url, data, options)
}
