import { useState } from 'react'

export const useFpsStats = () => {
  const [frameTimeState, setFrameTimeState] = useState({
    fps: 0,
    lastStamp: performance.now(),
    framesCount: 0,
  })
  const updateFps = () => {
    setFrameTimeState((current) => {
      const currentStamp = performance.now()
      const shouldUpdateFps = currentStamp - current.lastStamp > 1000

      if (shouldUpdateFps) {
        return {
          fps: current.framesCount,
          lastStamp: currentStamp,
          framesCount: 0,
        }
      } else {
        const newFramesCount = current.framesCount + 1

        return {
          ...current,
          framesCount: newFramesCount,
        }
      }
    })
  }

  return { fps: frameTimeState.fps, updateFps }
}
