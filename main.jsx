import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Remove loading screen when React app is ready
const removeLoading = () => {
  const loader = document.querySelector('.loading')
  if (loader) {
    loader.remove()
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Remove loading screen after render
setTimeout(removeLoading, 500)