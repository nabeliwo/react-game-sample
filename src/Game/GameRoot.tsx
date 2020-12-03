import React, { useCallback, useState } from 'react'

import { Controller } from './Controller'
import { Player, Position } from './Player'

export const GameRoot = () => {
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 })

  const handleOnMove = useCallback(({ x, y }: Position) => {
    setPlayerPosition((currentPosition) => {
      return {
        x: currentPosition.x + x,
        y: currentPosition.y + y,
      }
    })
  }, [])

  return (
    <div className="container">
      <Controller onMove={handleOnMove} />
      <Player position={playerPosition} />
    </div>
  )
}
