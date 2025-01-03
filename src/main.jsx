import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/style.scss"

import { BrowserRouter } from 'react-router-dom' // 確保正確導入是 React 路由系統的核心組件 <BrowserRouter>


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
