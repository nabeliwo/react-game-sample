import React, { FC, useEffect, useState } from 'react'

import { SceneName } from '../../type'
import { bulletSize } from '../../constants'
import { GameState, initialGameState, updateGameState } from '../state/gameState'

const MS_PER_FRAME = 15

type Props = {
  onClickChangeScene: (name: SceneName) => void
}

export const Stage: FC<Props> = ({ onClickChangeScene }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const { frameTime, player, bullets, enemies } = gameState

  useEffect(() => {
    let timerID: number

    function step() {
      setGameState((current) => updateGameState(current))
      timerID = window.setTimeout(step, MS_PER_FRAME)
    }

    step()

    return () => {
      clearTimeout(timerID)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClickChangeScene])

  return (
    <>
      <div
        className="player"
        style={{ top: player.position.y, left: player.position.x, transform: `rotate(${player.angle}deg)` }}
      />

      <ul>
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="bullet"
            style={{ top: bullet.position.y, left: bullet.position.x, width: bulletSize, height: bulletSize }}
          />
        ))}
      </ul>

      <ul>
        {enemies.map((enemy, i) => (
          <li key={i} className="enemy" style={{ top: enemy.position.y, left: enemy.position.x }} />
        ))}
      </ul>

      {/* <p className="title">stage</p>
      <button className="button" onClick={() => onClickChangeScene('result')}>
        Go to stage
      </button> */}

      <p className="fps">{frameTime.fps} FPS</p>
    </>
  )
}
