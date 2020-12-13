import { Character } from '../../type'

export type Player = Character

const updatePosition = (currentPosition: Player['position']) => {
  const position = { ...currentPosition }
  const { isKeyDown } = window

  if (isKeyDown.key_Up || isKeyDown.key_ArrowUp || isKeyDown.key_w) {
    position.y = position.y - 1
  }

  if (isKeyDown.key_Right || isKeyDown.key_ArrowRight || isKeyDown.key_d) {
    position.x = position.x + 1
  }

  if (isKeyDown.key_Down || isKeyDown.key_ArrowDown || isKeyDown.key_s) {
    position.y = position.y + 1
  }

  if (isKeyDown.key_Left || isKeyDown.key_ArrowLeft || isKeyDown.key_a) {
    position.x = position.x - 1
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
