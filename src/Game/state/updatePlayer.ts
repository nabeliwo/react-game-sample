export type Player = {
  position: { x: number; y: number }
  angle: number
}

const updatePosition = (position: Player['position']) => {
  const currentPosition = { ...position }
  const { isKeyDown } = window

  if (isKeyDown.key_Up || isKeyDown.key_ArrowUp || isKeyDown.key_w) {
    currentPosition.y = currentPosition.y - 1
  }

  if (isKeyDown.key_Right || isKeyDown.key_ArrowRight || isKeyDown.key_d) {
    currentPosition.x = currentPosition.x + 1
  }

  if (isKeyDown.key_Down || isKeyDown.key_ArrowDown || isKeyDown.key_s) {
    currentPosition.y = currentPosition.y + 1
  }

  if (isKeyDown.key_Left || isKeyDown.key_ArrowLeft || isKeyDown.key_a) {
    currentPosition.x = currentPosition.x - 1
  }

  return currentPosition
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
