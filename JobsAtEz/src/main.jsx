import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ThemeProvider} from './components/ThemeProvider/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
