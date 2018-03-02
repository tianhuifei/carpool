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

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 格式化时间
 * @param date
 * @returns {string}
 */
export function formatTime(date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
