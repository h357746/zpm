export const setUserToken = (tokenName, token) => {
  sessionStorage.setItem(tokenName, token)
}
export const getUserToken = tokenName => {
  return sessionStorage.getItem(tokenName)
}
export const clearUserToken = tokenName => {
  sessionStorage.removeItem('userToken')
  sessionStorage.removeItem('userName')
}
export const setMenu = (menu) => {
  sessionStorage.setItem('menu', menu)
}
export const getMenu = () => {
  return sessionStorage.getItem('menu')
}
export const clearMenu = tokenName => {
  sessionStorage.removeItem('Menu')
}
