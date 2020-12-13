import React from 'react'
import ReactDOM from 'react-dom'

import { Scene } from './game/Scene'

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
      <Scene />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

window.addEventListener('load', () => {
  setGlobalKeydownEvent()
  startApplication()
})
