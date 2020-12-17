import { FrameTime, updateFrameTime } from './frameTime'
import { Player, updatePlayer } from './player'
import { Bullet, updateBullets } from './bullets'
import { Enemy, updateEnemies } from './enemies'
import { judgeCollision } from './judgeCollision'

export type GameState = {
  frameTime: FrameTime
  player: Player
  bullets: Bullet[]
  enemies: Enemy[]
  defeatNum: number
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
    area: [],
  },
  bullets: [],
  enemies: [],
  defeatNum: 0,
}

export const updateGameState = (state: GameState, gameOver: (score: number) => void): GameState => {
  const frameTime = updateFrameTime(state.frameTime)
  const player = updatePlayer(state.player)
  const { bullets, enemies, defeatNum } = judgeCollision(
    player,
    updateBullets(state.bullets, player),
    updateEnemies(state.enemies, player, frameTime.totalFrames),
    () => gameOver(state.defeatNum * 100 + frameTime.totalFrames),
  )

  return {
    frameTime,
    player,
    bullets,
    enemies,
    defeatNum: state.defeatNum + defeatNum,
  }
}
