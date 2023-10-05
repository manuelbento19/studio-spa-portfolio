import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import { AppContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)
