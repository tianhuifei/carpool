import axios from 'axios'

// import { ROOT_URL } from 'common/js/base'

export function getQueryALl() {
  const url = '/static/json/queryAll.json'
  const data = {}

  return axios.get(url, {
    params: data
  })
}
