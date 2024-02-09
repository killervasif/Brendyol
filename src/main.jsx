import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './contexts/GlobalContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookieProvider>
      <BrowserRouter>
        <GlobalContext>
          <App></App>
        </GlobalContext>
      </BrowserRouter>
    </CookieProvider>
  </React.StrictMode>
)
