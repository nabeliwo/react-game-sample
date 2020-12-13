import React, { FC, useEffect, useState } from 'react'
import { SceneName } from '../../type'

type Props = {
  onClickChangeScene: (name: SceneName) => void
}

const MS_PER_FRAME = 15

export const Stage: FC<Props> = ({ onClickChangeScene }) => {
  const [frameTimeState, setFrameTimeState] = useState({
    fps: 0,
    lastStamp: performance.now(),
    framesCount: 0,
  })
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    console.log(onClickChangeScene)
    const { isKeyDown } = window
    let timerID: number

    function step() {
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

      if (isKeyDown.key_Up || isKeyDown.key_ArrowUp || isKeyDown.key_w) {
        setY((currentY) => currentY - 1)
      }

      if (isKeyDown.key_Right || isKeyDown.key_ArrowRight || isKeyDown.key_d) {
        setX((currentX) => currentX + 1)
      }

      if (isKeyDown.key_Down || isKeyDown.key_ArrowDown || isKeyDown.key_s) {
        setY((currentY) => currentY + 1)
      }

      if (isKeyDown.key_Left || isKeyDown.key_ArrowLeft || isKeyDown.key_a) {
        setX((currentX) => currentX - 1)
      }

      timerID = window.setTimeout(step, MS_PER_FRAME)
    }

    step()

    return () => {
      clearTimeout(timerID)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="scene">
        <div className="player" style={{ top: y, left: x }} />
        {/* <p className="title">stage</p>
      <button className="button" onClick={() => onClickChangeScene('result')}>
        Go to stage
      </button> */}
      </div>

      <p className="fps">{frameTimeState.fps} FPS</p>
    </>
  )
}
