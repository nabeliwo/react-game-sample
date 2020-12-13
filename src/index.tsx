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

const setMousePositionEvent = () => {
  window.mousePosition = {
    x: 0,
    y: 0,
  }

  window.addEventListener('mousemove', (e) => {
    const stageEl = document.getElementById('stage')

    if (stageEl) {
      const { top, left } = stageEl.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      if (x >= 0 && x <= 900 && y >= 0 && y <= 600) {
        window.mousePosition = { x, y }
      }
    }
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
  setMousePositionEvent()
  startApplication()
})
