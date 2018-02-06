import {getCookie} from './cookie'
// export const ROOT_URL = 'https://www.tianhf.com'
export const ROOT_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8360'

export function isType(value) {
  return Object.prototype.toString.call(value)
}

/**
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (user) return user
  let cookieUser = JSON.parse(getCookie('userInfo'))
  if (cookieUser) return cookieUser
}
