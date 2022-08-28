import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import ContextProvider from './contexts/Provider'
import Sidebar from './Sidebar'
import './styles/style.css'

export default function App () {
  return (
    <div>
      <ContextProvider>
        <Header />
        <section className='main'>
          <Sidebar />
          <Home />
        </section>
        <Footer />
      </ContextProvider>
    </div>
  )
}
