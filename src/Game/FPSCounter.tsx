import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const FPSCounter = () => {
  const [frameTimeState, setFrameTimeState] = useState({
    fps: 0,
    lastStamp: Date.now(),
    framesCount: 0,
  })

  useEffect(() => {
    let timeout: number | null = null

    requestAnimationFrame(
      () =>
        (timeout = setTimeout(() => {
          const currentStamp = Date.now()
          const shouldSetState = currentStamp - frameTimeState.lastStamp > 1000
          const newFramesCount = frameTimeState.framesCount + 1

          if (shouldSetState) {
            setFrameTimeState({
              fps: frameTimeState.framesCount,
              lastStamp: currentStamp,
              framesCount: 0,
            })
          } else {
            setFrameTimeState({
              ...frameTimeState,
              framesCount: newFramesCount,
            })
          }
        }, 0)),
    )

    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [frameTimeState])

  return <Wrapper>{frameTimeState.fps} fps</Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`
