import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Profile () {
  const theme = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <div className='box' style={{ ...theme }}>
      <h2>Profile</h2>

      <p>Name: {user.name} </p>
    </div>
  )
}
