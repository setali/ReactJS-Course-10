import { useState } from 'react'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'
import useAuth from '../hooks/useAuth'

export default function Provider ({ children }) {
  const [theme, setTheme] = useState(themes.light)
  const { user, isLoggedIn, isLoading, login, logout } = useAuth()

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, isLoading, login, logout }}
    >
      <ThemeContext.Provider value={theme}>
        {theme === themes.light ? (
          <button onClick={() => setTheme(themes.dark)}>Dark</button>
        ) : (
          <button onClick={() => setTheme(themes.light)}>Light</button>
        )}
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}
