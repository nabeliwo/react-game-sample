import React, { FC, useEffect, useState } from 'react'

import { bulletSize, characterSize } from '../../constants'
import { GameState, initialGameState, updateGameState } from '../state/gameState'

const MS_PER_FRAME = 15

type Props = {
  onGameOvered: () => void
}

export const Stage: FC<Props> = ({ onGameOvered }) => {
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
  }, [onGameOvered])

  return (
    <>
      <div
        className="player"
        style={{
          top: player.position.y,
          left: player.position.x,
          transform: `rotate(${player.angle}deg)`,
          width: characterSize,
          height: characterSize,
        }}
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
          <li
            key={i}
            className="enemy"
            style={{ top: enemy.position.y, left: enemy.position.x, width: characterSize, height: characterSize }}
          />
        ))}
      </ul>

      <p className="fps">{frameTime.fps} FPS</p>
    </>
  )
}
