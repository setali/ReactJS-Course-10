import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './general/Dashboard'
import Footer from './general/Footer'
import Header from './general/Header'
import Page404 from './general/Page404'
import Sidebar from './general/Sidebar'
import Person from './person/Router'
import Post from './post/Router'

const { Content } = Layout

function App () {
  return (
    <Layout className='app'>
      <Header />
      <Layout>
        <Sidebar />
        <Content className='content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/person/*' element={<Person />} />
            <Route path='/post/*' element={<Post />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
