// 车找人 url
export const carUrl = '/index/index/query_ctop'
// 人找车 url
export const peopleUrl = '/index/index/query_ptoc'
export const queryAll = '/index/index/query_all'
export const startEndUrl = '/index/index/query_start_end'
// 注册 url
export const registerUrl = '/user/index/add_user_info'
// 检测用户是否存在 url
export const checkUserUrl = '/user/index/check_user'
// 登录接口 url
export const loginUrl = '/login/index/login'

// 查询详细信息 url
export const queryDetailUrl = '/index/index/query_detail'

// 加载个人发布数据url
export const queryMyDataUrl = '/publish/publish/show_my_publish'

// 查询需要编辑的信息 url
export const queryEditUrl = '/index/index/query_edit_info'

// 删除已发布的数据 url
export const detailInfoUrl = '/index/index/delete_info'

// 更新已发布的数据 url
export const updateInfoUrl = '/publish/publish/update_info'

// 版本介绍 rul
export const versionUrl = '/version/index/version_info'

// 意见反馈url
export const feedBackUrl = '/feedback/index/feedback'

// 显示数量
export const numsPerPage = 6

export const options = {
  param: 'callback'
}

export const isProduction = process.env.NODE_ENV === 'production'

export let commonParams = {
  'condition.currentPage': 0,
  'condition.numsPerPage': numsPerPage,
  'condition.publishType': 0,
  'condition.startAddress': '',
  'condition.endAddres': ''
}
