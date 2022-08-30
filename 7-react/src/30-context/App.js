import React from 'react'
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route
} from 'react-router-dom'
import About from './components/general/About'
import Contact from './components/general/Contact'
import ContextProvider from './contexts/Provider'
import Footer from './components/utils/Footer'
import Header from './components/utils/Header'
import Home from './components/general/Home'
import Sidebar from './components/utils/Sidebar'
import Posts from './components/post/List'
import Post from './components/post/Full'
import './styles/style.css'
import Page404 from './components/general/404'
import Login from './components/auth/Login'
import Profile from './components/user/Profile'
import Dashboard from './components/user/Dashboard'
import RequireAuth from './components/utils/RequireAuth'
import Loading from './components/utils/Loading'
const Report = React.lazy(() => import('./components/general/Report'))

export default function App () {
  return (
    <div>
      <ContextProvider>
        <RouterProvider>
          <Header />
          <section className='main'>
            <Sidebar />
            <div className='content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/post' element={<Posts />} />
                <Route path='/post/:id/' element={<Post />} />
                <Route path='/post/:id/:title' element={<Post />} />
                <Route path='/post/:id/:title/:author' element={<Post />} />
                <Route path='/login' element={<Login />} />
                <Route
                  path='/profile'
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />
                <Route
                  path='/dashboard'
                  element={<RequireAuth element={<Dashboard />} />}
                />
                <Route
                  path='/report'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <Report />
                    </React.Suspense>
                  }
                />
                <Route path='*' element={<Page404 />} />
              </Routes>
            </div>
          </section>
          <Footer />
        </RouterProvider>
      </ContextProvider>
    </div>
  )
}
