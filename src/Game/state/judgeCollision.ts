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

const getDistanceBetweenCharacter = (aPosition: Character['position'], bPosition: Character['position']) => {
  const a = aPosition.x - bPosition.x
  const b = aPosition.y - bPosition.y
  return Math.sqrt(a * a + b * b)
}

const judgeEnemyCollisionWithPlayer = (
  enemyPosition: Character['position'],
  playerPosition: Character['position'],
  onCollided: () => void,
) => {
  const distance = getDistanceBetweenCharacter(enemyPosition, playerPosition)

  if (distance <= characterRadius + characterRadius) {
    onCollided()
  }
}

// const judgeCollisionWithBullet = (enemyCenter: Character['position'], BulletPosition: Character['position']) => {
//   const bulletCenter = {
//     x: BulletPosition.x + characterRadius,
//     y: BulletPosition.y + characterRadius,
//   }
//   const distance = getDistanceBetweenCharacter(enemyCenter, bulletCenter)

//   return distance <= characterRadius + characterRadius
// }

export const judgeCollision = (player: Player, bullets: Bullet[], enemies: Enemy[], gameOver: () => void) => {
  const playerCenter = {
    x: player.position.x + characterRadius,
    y: player.position.y + characterRadius,
  }
  // const newBullets: Bullet[] = []
  const newEnemies: Enemy[] = []

  for (const enemy of enemies) {
    const enemyCenter = {
      x: enemy.position.x + characterRadius,
      y: enemy.position.y + characterRadius,
    }

    if (getIsSameArea(enemy.area, player.area)) {
      judgeEnemyCollisionWithPlayer(enemyCenter, playerCenter, () => {
        gameOver()
      })
    }

    newEnemies.push(enemy)
  }

  // enemies.map((enemy) => {
  //   // let isCollided = false

  //   for (const _ of newBullets) {
  //     // const _bulletCenter = {
  //     //   x: bullet.position.x + characterRadius,
  //     //   y: bullet.position.y + characterRadius,
  //     // }
  //     // isCollided = judgeCollisionWithBullet(enemyCenter, bullet.position)
  //     // if (isCollided) break
  //     // newBullets.push(bullet)
  //   }

  //   // if (isCollided) break

  //   return enemy
  // })

  return { bullets: bullets, enemies: newEnemies }
}
