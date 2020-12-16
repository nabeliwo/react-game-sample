import { Character } from '../../type'
import { getNextPosition } from '../../libs/getNextPosition'
import { characterSize, stageRect } from '../../constants'

export type Enemy = Character

const ENEMY_SPEED = 4
const characterRadius = (characterSize - 1) / 2
const startPositions = ['top', 'right', 'bottom', 'left']

const throttle = (currentFrame: number, cb: () => void) => {
  if (currentFrame < 500) {
    if (currentFrame % 90 === 0) {
      cb()
    }
  } else if (currentFrame < 1000) {
    if (currentFrame % 60 === 0) {
      cb()
    }
  } else if (currentFrame < 1500) {
    if (currentFrame % 40 === 0) {
      cb()
    }
  } else if (currentFrame < 2000) {
    if (currentFrame % 20 === 0) {
      cb()
    }
  } else if (currentFrame < 2500) {
    if (currentFrame % 10 === 0) {
      cb()
    }
  } else {
    if (currentFrame % 5 === 0) {
      cb()
    }
  }
}

const getRandomNumber = (max: number) => Math.floor(Math.random() * max)

const getAngle = (position: Character['position'], playerPosition: Character['position']) => {
  const radian = Math.atan2(playerPosition.y - position.y, playerPosition.x - position.x)
  return (radian * 180) / Math.PI
}

const getEnemy = (playerPosition: Character['position']) => {
  const startPosition = startPositions[getRandomNumber(startPositions.length)]
  const enemy: Enemy = {
    position: {
      x: 0,
      y: 0,
    },
    angle: 0,
  }

  switch (startPosition) {
    case 'top':
      enemy.position.x = getRandomNumber(stageRect.width + 1)
      enemy.position.y = 0 - characterSize
      break

    case 'right':
      enemy.position.x = stageRect.width
      enemy.position.y = getRandomNumber(stageRect.height + 1)
      break

    case 'bottom':
      enemy.position.x = getRandomNumber(stageRect.width + 1)
      enemy.position.y = stageRect.height
      break

    case 'left':
      enemy.position.x = 0 - characterSize
      enemy.position.y = getRandomNumber(stageRect.height + 1)
      break
  }

  enemy.angle = getAngle(enemy.position, playerPosition)

  return enemy
}

export const updateEnemies = (currentEnemies: Enemy[], player: Character, currentFrame: number, gameOver: () => void) => {
  const enemies = [...currentEnemies]

  throttle(currentFrame, () => {
    enemies.push(getEnemy(player.position))
  })

  const movedEnemies: Enemy[] = []

  enemies.forEach((enemy) => {
    const enemyCenter = {
      x: enemy.position.x + characterRadius,
      y: enemy.position.y + characterRadius,
    }
    const playerCenter = {
      x: player.position.x + characterRadius,
      y: player.position.y + characterRadius,
    }
    const a = enemyCenter.x - playerCenter.x
    const b = enemyCenter.y - playerCenter.y
    const c = Math.sqrt(a * a + b * b)

    if (c <= characterRadius + characterRadius) {
      gameOver()
    }

    const { x, y } = getNextPosition(enemy, ENEMY_SPEED)

    if (y + characterSize < 0 || x > stageRect.width || y > stageRect.height || x + characterSize < 0) {
      return
    }

    movedEnemies.push({
      ...enemy,
      position: {
        x,
        y,
      },
    })
  })

  return movedEnemies
}
