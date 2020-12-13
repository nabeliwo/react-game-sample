import { Character } from '../../type'
import { bulletSize, stageRect } from '../../constants'
import { Player } from './player'

export type Bullet = Character & {
  createdAt: number
}

const BULLET_SPEED = 3

export const updateBullets = (currentBullets: Bullet[], player: Player) => {
  const bullets = [...currentBullets]

  if (window.isMouseDown) {
    const createdAt = performance.now()

    if (bullets.length === 0) {
      bullets.push({ ...player, createdAt })
    } else {
      const lastCreatedBullet = bullets[bullets.length - 1]

      if (createdAt - lastCreatedBullet.createdAt >= 400) {
        bullets.push({ ...player, createdAt })
      }
    }
  }

  const movedBullets: Bullet[] = []

  bullets.forEach((bullet) => {
    const radian = (bullet.angle * Math.PI) / 180
    const x = bullet.position.x + Math.cos(radian) * BULLET_SPEED
    const y = bullet.position.y + Math.sin(radian) * BULLET_SPEED

    if (y + bulletSize < 0 || x > stageRect.width || y > stageRect.height || x + bulletSize < 0) return

    movedBullets.push({
      ...bullet,
      position: {
        x,
        y,
      },
    })
  })

  return movedBullets
}
