import { useEffect, useState } from 'react'
import request from '../tools/request'
import { getToken, removeToken, setToken } from '../tools/utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getToken() ? getUser() : setIsLoading(false)
  }, [])

  function logon (data, saveToken = false) {
    setUser(data)
    setIsLoggedIn(true)
    saveToken && setToken(data.email)
  }

  function login () {
    request('/users/1').then(({ data }) => logon(data, true))
  }

  function getUser () {
    request('/users/2')
      .then(({ data }) => logon(data))
      .finally(() => setIsLoading(false))
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return { user, isLoggedIn, isLoading, login, logout }
}
