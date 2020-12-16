import { Character } from '../../type'
import { characterSize, stageRect } from '../../constants'

export type Player = Character

const updatePosition = (currentPosition: Player['position']) => {
  const position = { ...currentPosition }
  const { isKeyDown } = window

  if (isKeyDown.key_Up || isKeyDown.key_ArrowUp || isKeyDown.key_w) {
    const newY = position.y - 1
    position.y = newY <= 0 ? 0 : newY
  }

  if (isKeyDown.key_Right || isKeyDown.key_ArrowRight || isKeyDown.key_d) {
    const newX = position.x + 1
    const rightEnd = stageRect.width - characterSize
    position.x = newX >= rightEnd ? rightEnd : newX
  }

  if (isKeyDown.key_Down || isKeyDown.key_ArrowDown || isKeyDown.key_s) {
    const newY = position.y + 1
    const bottomEnd = stageRect.height - characterSize
    position.y = newY >= bottomEnd ? bottomEnd : newY
  }

  if (isKeyDown.key_Left || isKeyDown.key_ArrowLeft || isKeyDown.key_a) {
    const newX = position.x - 1
    position.x = newX <= 0 ? 0 : newX
  }

  return position
}

const updateAngle = (playerPosition: Player['position']) => {
  const { mousePosition } = window
  const radian = Math.atan2(mousePosition.y - playerPosition.y, mousePosition.x - playerPosition.x)

  return (radian * 180) / Math.PI
}

export const updatePlayer = (player: Player) => {
  return {
    position: updatePosition(player.position),
    angle: updateAngle(player.position),
  }
}
