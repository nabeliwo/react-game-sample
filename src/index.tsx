import React from 'react'
import ReactDOM from 'react-dom'

import { stageRect } from './constants'
import { Scene } from './game/Scene'

const setGlobalKeyDownEvent = () => {
  window.isKeyDown = {}

  window.addEventListener('keydown', (e) => {
    window.isKeyDown[`key_${e.key}`] = true
  })

  window.addEventListener('keyup', (e) => {
    window.isKeyDown[`key_${e.key}`] = false
  })
}

const setGlobalMousePositionEvent = () => {
  window.mousePosition = {
    x: 0,
    y: 0,
  }

  window.addEventListener('mousemove', (e) => {
    const stageEl = document.getElementById('scene')

    if (stageEl) {
      const { top, left } = stageEl.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      if (x >= 0 && x <= stageRect.width && y >= 0 && y <= stageRect.height) {
        window.mousePosition = { x, y }
      }
    }
  })
}

const setGlobalMouseDownEvent = () => {
  window.isMouseDown = false

  window.addEventListener('mousedown', () => {
    window.isMouseDown = true
  })

  window.addEventListener('mouseup', () => {
    window.isMouseDown = false
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
  setGlobalKeyDownEvent()
  setGlobalMousePositionEvent()
  setGlobalMouseDownEvent()
  startApplication()
})
