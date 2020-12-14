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
    totalFrames: 0,
  },
  player: {
    position: {
      x: 440,
      y: 290,
    },
    angle: 0,
  },
  bullets: [],
  enemies: [],
}

export const updateGameState = (state: GameState): GameState => {
  const frameTime = updateFrameTime(state.frameTime)
  const player = updatePlayer(state.player)
  const bullets = updateBullets(state.bullets, player)
  const enemies = updateEnemies(state.enemies, state.player.position, frameTime.totalFrames)

  return {
    frameTime,
    player,
    bullets,
    enemies,
  }
}
