import React, { FC, useEffect } from 'react'

import { SceneName } from '../../type'
import { useFpsStats } from '../state/useFpsStats'
import { useGameState } from '../state/useGameState'

const MS_PER_FRAME = 15

type Props = {
  onClickChangeScene: (name: SceneName) => void
}

export const Stage: FC<Props> = ({ onClickChangeScene }) => {
  const { fps, updateFps } = useFpsStats()
  const { gameState, updateGameState } = useGameState()
  const { player } = gameState

  useEffect(() => {
    console.log(onClickChangeScene)
    let timerID: number

    function step() {
      updateFps()
      updateGameState()

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
      <div id="stage" className="scene">
        <div
          className="player"
          style={{ top: player.position.y, left: player.position.x, transform: `rotate(${player.angle}deg)` }}
        />
        {/* <p className="title">stage</p>
      <button className="button" onClick={() => onClickChangeScene('result')}>
        Go to stage
      </button> */}
      </div>

      <p className="fps">{fps} FPS</p>
    </>
  )
}
