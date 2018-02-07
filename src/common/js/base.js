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
  let user = JSON.parse(localStorage.getItem('user')) || JSON.parse(getCookie('userInfo') ? getCookie('userInfo') : null)
  return user
}
