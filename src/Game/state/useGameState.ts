import { useState } from 'react'

import { Player, updatePlayer } from './updatePlayer'

type GameState = {
  player: Player
}

const initialState: GameState = {
  player: {
    position: {
      x: 0,
      y: 0,
    },
    angle: 0,
  },
}

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialState)

  const updateGameState = () => {
    setGameState((current) => {
      const player = updatePlayer(current.player)

      return {
        player: {
          position: player.position,
          angle: player.angle,
        },
      }
    })
  }

  return { gameState, updateGameState }
}
