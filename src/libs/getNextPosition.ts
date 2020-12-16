import { Character } from '../type'

export const getNextPosition = (character: Character, speed: number) => {
  const radian = (character.angle * Math.PI) / 180
  const x = character.position.x + Math.cos(radian) * speed
  const y = character.position.y + Math.sin(radian) * speed

  return { x, y }
}
