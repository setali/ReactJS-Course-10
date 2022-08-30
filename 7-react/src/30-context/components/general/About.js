import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function About () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={{ ...theme }}>
      <h2>About Us</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laudantium
        itaque, incidunt sequi temporibus quibusdam dolore! Voluptate minus
        cupiditate ipsam exercitationem id nihil sit animi mollitia, soluta
        repellendus aliquid quae?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laudantium
        itaque, incidunt sequi temporibus quibusdam dolore! Voluptate minus
        cupiditate ipsam exercitationem id nihil sit animi mollitia, soluta
        repellendus aliquid quae?
      </p>
    </div>
  )
}
