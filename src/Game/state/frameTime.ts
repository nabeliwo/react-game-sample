export type FrameTime = {
  fps: number
  lastStamp: number
  framesCount: number
}

export const updateFrameTime = (frameTime: FrameTime) => {
  const currentStamp = performance.now()
  const shouldUpdateFps = currentStamp - frameTime.lastStamp > 1000

  if (shouldUpdateFps) {
    return {
      fps: frameTime.framesCount,
      lastStamp: currentStamp,
      framesCount: 0,
    }
  } else {
    const newFramesCount = frameTime.framesCount + 1

    return {
      ...frameTime,
      framesCount: newFramesCount,
    }
  }
}
