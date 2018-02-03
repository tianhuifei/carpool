// 车找人 url
export const carUrl = '/index/index/query_ctop'
// 人找车 url
export const peopleUrl = '/index/index/query_ptoc'
export const queryAll = '/index/index/query_all'
export const startEndUrl = '/index/index/query_start_end'
// 注册
export const registerUrl = '/user/index/add_user_info'
// 检测用户是否存在
export const checkUserUrl = '/user/index/check_user'
// 登录接口
export const loginUrl = '/login/index/login'
export const options = {
  param: 'callback'
}

// export const isProduction = process.env.NODE_ENV === 'production'
export const isProduction = true

export let commonParams = {
  'condition.currentPage': 0,
  'condition.numsPerPage': 5,
  'condition.publishType': 0,
  'condition.startAddress': '',
  'condition.endAddres': ''
}
