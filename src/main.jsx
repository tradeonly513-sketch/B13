import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import SmoothScrollProvider from './components/common/SmoothScrollProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScrollProvider>
        <Stairs>
            <App />
        </Stairs>
      </SmoothScrollProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
