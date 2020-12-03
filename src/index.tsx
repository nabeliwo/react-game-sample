import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

const setGlobalKeydownEvent = () => {
  window.isKeyDown = {}
  window.addEventListener('keydown', (e) => {
    window.isKeyDown[`key_${e.key}`] = true
  })
  window.addEventListener('keyup', (e) => {
    window.isKeyDown[`key_${e.key}`] = false
  })
}

const startApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

window.addEventListener('load', () => {
  setGlobalKeydownEvent()
  startApplication()
})
