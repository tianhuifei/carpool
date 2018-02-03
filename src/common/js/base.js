// export const ROOT_URL = 'https://www.tianhf.com'
export const ROOT_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8360'

export function isType(value) {
  return Object.prototype.toString.call(value)
}
