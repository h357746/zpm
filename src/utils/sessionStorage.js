export const setUserToken = (tokenName, token) => {
  sessionStorage.setItem(tokenName, token)
}
export const getUserToken = tokenName => {
  return sessionStorage.getItem(tokenName)
}
export const clearUserToken = tokenName => {
  sessionStorage.clear()
}
