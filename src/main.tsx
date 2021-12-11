import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './apps'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { 
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => console.log('ServiceWorker registration successful with scope: ', registration.scope))
      .catch(err => console.log('ServiceWorker registration failed: ', err))
  })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)