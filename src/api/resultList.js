// import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {options} from './config'

// import { ROOT_URL } from 'common/js/base'

export function getQueryALl() {
  const url = '/static/json/queryAll.json'
  const data = {}

  return jsonp(url, data, options)
}
