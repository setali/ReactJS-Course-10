import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Page404 () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={{ ...theme }}>
      <h2>404 Error</h2>

      <p>Page not found</p>
    </div>
  )
}
