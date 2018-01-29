// 车找人 url
export const carUrl = '/index/index/query_ctop'
// 人找车 url
export const peopleUrl = '/index/index/query_ptoc'
export const queryAll = '/index/index/query_all'
export const startEndUrl = '/index/index/query_start_end'
// 注册
export const registerUrl = '/user/index/add_user_info'
export const options = {
  param: 'callback'
}

export let commonParams = {
  'condition.currentPage': 0,
  'condition.numsPerPage': 5,
  'condition.publishType': 0,
  'condition.startAddress': '',
  'condition.endAddres': ''
}
