import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import Loading from '../utils/Loading'

export default function Login () {
  const theme = useContext(ThemeContext)
  const { login, isLoggedIn, isLoading } = useContext(UserContext)
  // const navigate = useNavigate()

  const location = useLocation()

  function handleSubmit (event) {
    event.preventDefault()
    login()
    // navigate('/')
  }

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }

  if (isLoading) {
    return (
      <div className='box' style={{ ...theme }}>
        <Loading />
      </div>
    )
  }

  return (
    <div className='box' style={{ ...theme }}>
      <h2>Login page</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <input placeholder='username' />
        </div>
        <div className='form-item'>
          <input placeholder='password' />
        </div>
        <div className='form-item'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
