// import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {options} from './config'

// import {ROOT_URL} from 'common/js/base'

export function getQueryALl() {
  const url = 'http://localhost:8360/index/index/query_all'
  const data = {
    'condition.currentPage': 0,
    'condition.numsPerPage': 5
  }

  return jsonp(url, data, options)
}
