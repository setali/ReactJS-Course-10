import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { user, isLoggedIn } = useContext(UserContext)

  return (
    <div className='box' style={{ ...theme }}>
      <h2>HomePage</h2>

      {isLoggedIn && <div>Hello {user.name}</div>}

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laudantium
        itaque, incidunt sequi temporibus quibusdam dolore! Voluptate minus
        cupiditate ipsam exercitationem id nihil sit animi mollitia, soluta
        repellendus aliquid quae?
      </p>
    </div>
  )
}
