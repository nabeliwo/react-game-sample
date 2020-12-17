import { characterRadius } from '../../constants'
import { Player } from './player'
import { Bullet } from './bullets'
import { Enemy } from './enemies'
import { Character } from '../../type'

const getIsSameArea = (aArea: Character['area'], bArea: Character['area']) => {
  if (aArea.length === 1) {
    if (bArea.includes(aArea[0])) {
      return true
    }
  } else if (aArea.length > 1) {
    if (aArea.some((area) => bArea.includes(area))) {
      return true
    }
  }

  return false
}

const getDistance = (aPosition: Character['position'], bPosition: Character['position']) => {
  const a = aPosition.x - bPosition.x
  const b = aPosition.y - bPosition.y
  return Math.sqrt(a * a + b * b)
}

const getIsCollide = (enemyPosition: Character['position'], playerPosition: Character['position']) => {
  const distance = getDistance(enemyPosition, playerPosition)
  return distance <= characterRadius + characterRadius
}

export const judgeCollision = (player: Player, bullets: Bullet[], enemies: Enemy[], gameOver: () => void) => {
  const newEnemies: Enemy[] = []
  const bulletMap = new Map<number, Bullet>()
  const disappearedBulletIds: number[] = []
  const playerCenter = {
    x: player.position.x + characterRadius,
    y: player.position.y + characterRadius,
  }
  const bulletGroups = bullets.reduce<{ [key: string]: Array<Bullet & { id: number }> }>((acc, bullet, i) => {
    bulletMap.set(i, bullet)

    for (const area of bullet.area) {
      const bulletWithId = { id: i, ...bullet }

      if (acc[area]) {
        acc[area].push(bulletWithId)
      } else {
        acc[area] = [bulletWithId]
      }
    }

    return acc
  }, {})

  for (const enemy of enemies) {
    let isCollided = false
    const enemyCenter = {
      x: enemy.position.x + characterRadius,
      y: enemy.position.y + characterRadius,
    }

    if (getIsSameArea(enemy.area, player.area)) {
      if (getIsCollide(enemyCenter, playerCenter)) {
        gameOver()
        break
      }
    }

    for (const area of enemy.area) {
      const targetBullets = bulletGroups[area]

      if (targetBullets && targetBullets.length > 0) {
        for (const bullet of targetBullets) {
          const bulletCenter = {
            x: bullet.position.x + characterRadius,
            y: bullet.position.y + characterRadius,
          }

          isCollided = getIsCollide(enemyCenter, bulletCenter)

          if (isCollided) {
            disappearedBulletIds.push(bullet.id)
            break
          }
        }
      }

      if (isCollided) break
    }

    if (!isCollided) {
      newEnemies.push(enemy)
    }
  }

  for (const id of disappearedBulletIds) {
    bulletMap.delete(id)
  }

  return { bullets: Array.from(bulletMap.values()), enemies: newEnemies }
}
