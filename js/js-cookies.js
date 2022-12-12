function setCookie(name, value, expires, path, domain) {
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expires)
  const utcString = expireDate.toUTCString()
  document.cookie = `${name}=${value};expires=${utcString};path=${path};domain=${domain}`
}
function getCookie(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// okay to be hardcoded, won't change
const ccpaCookieName = 'us_privacy'
const ccpaCookieSettings = {
  domain: this.document.domain,
  expires: 3650,
  path: '/',
  cookieValue: '1---'
}

this.cookie = getCookie(ccpaCookieName)

if (!this.cookie) {
  setCookie(
    ccpaCookieName,
    ccpaCookieSettings.cookieValue,
    ccpaCookieSettings.expires,
    ccpaCookieSettings.path,
    ccpaCookieSettings.domain
  )
}
