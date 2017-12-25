// import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {options} from './config'

// import { ROOT_URL } from 'common/js/base'

export function getQueryALl() {
  const url = '/api/index/index/query_all'
  const data = {
    condition: {
      currentPage: 0,
      numsPerPage: 5
    }
  }

  return jsonp(url, data, options)
}
