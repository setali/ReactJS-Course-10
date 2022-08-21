import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'
import App from './App'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)

// ReactDOM.render(<App />, container)
