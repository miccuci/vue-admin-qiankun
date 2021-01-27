import Cookie from 'js-cookie'
const Storage = {
  Cookie: {
    get(key) {
      return Cookie.get(key)
    },
    set(key, value, options) {
      Cookie.set(key, value, { ...options })
    }
  },
  session: {
    get(key) {
      return window.sessionStorage.getItem(key)
    },
    set(key, value) {
      window.sessionStorage.setItem(key, value)
    }
  },
  local: {
    get(key) {
      return window.localStorage.getItem(key)
    },
    set(key, value) {
      window.localStorage.setItem(key, value)
    }
  }
}
export default Storage
