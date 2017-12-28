// import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {options} from './config'
import {ROOT_URL} from 'common/js/base'

export function getQueryALl() {
  const url = ROOT_URL + '/index/index/query_all'
  const data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5
  }

  return jsonp(url, data, options)
}

export function queryStartEnd(startAdd, endAdd) {
  const url = ROOT_URL + '/index/index/query_start_end'
  const data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5,
    'condition.startAddress': startAdd,
    'condition.endAddres': endAdd
  }
  return jsonp(url, data, options)
}
