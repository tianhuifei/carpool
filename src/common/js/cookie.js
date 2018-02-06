export function setCookie(cName, value, expiredays) {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = cName + '=' + decodeURIComponent(value) +
    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}

export function getCookie(cName) {
  let cStart = ''
  let cEnd = ''
  if (document.cookie.length > 0) {
    cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) cEnd = document.cookie.length
      return decodeURIComponent(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}
