import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/7553437a3d288f144b14e6b5a597c388/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    }
    )
  })
}

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, params).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    }
    )
  })
}
