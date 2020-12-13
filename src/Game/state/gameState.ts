import { FrameTime, updateFrameTime } from './frameTime'
import { Player, updatePlayer } from './player'
import { Bullet, updateBullets } from './bullets'
import { Enemy, updateEnemies } from './enemies'

export type GameState = {
  frameTime: FrameTime
  player: Player
  bullets: Bullet[]
  enemies: Enemy[]
}

export const initialGameState: GameState = {
  frameTime: {
    fps: 0,
    lastStamp: performance.now(),
    framesCount: 0,
  },
  player: {
    position: {
      x: 0,
      y: 0,
    },
    angle: 0,
  },
  bullets: [],
  enemies: [],
}

export const updateGameState = (state: GameState) => {
  const frameTime = updateFrameTime(state.frameTime)
  const player = updatePlayer(state.player)
  const bullets = updateBullets(state.bullets, player)
  const enemies = updateEnemies(state.enemies)

  return {
    frameTime,
    player,
    bullets,
    enemies,
  }
}
