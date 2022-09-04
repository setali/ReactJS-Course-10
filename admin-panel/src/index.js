import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider as AntProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import App from './components/App'
import 'antd/dist/antd.css'
import './assets/css/general.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <AntProvider locale={fa_IR} direction='rtl'>
      <App />
    </AntProvider>
  </Router>
  // </React.StrictMode>
)
