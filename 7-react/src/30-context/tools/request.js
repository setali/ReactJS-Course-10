import axios from 'axios'
import { BASE_URL } from './constants'
import { getToken } from './utils'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request

// camelCaseNaming       myFirstName
// snake_case_naming     my_first_name
// kebab-case-naming     my-first-name   // wrong
// PascalCaseNaming      MyFirstName
// UPPER_CASE_NAMING     MY_FIRST_NAME

const userPython = {
  first_name: 'Ali',
  last_name: 'Mousavi'
}

const userJS = {
  firstName: 'Ali',
  lastName: 'Mousavi'
}
