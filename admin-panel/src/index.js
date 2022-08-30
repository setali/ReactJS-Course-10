import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider as AntProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AntProvider locale={fa_IR} direction='rtl'>
      <App />
    </AntProvider>
  </React.StrictMode>
)
