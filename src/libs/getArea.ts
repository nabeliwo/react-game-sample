import { characterSize } from '../constants'
import { Area, Character } from '../type'

export const getArea = (position: Character['position']) => {
  const area: Area[] = []

  if (0 <= position.x && position.x <= 300 && 0 <= position.y && position.y <= 200) {
    area.push('A')
  }

  if (300 - characterSize <= position.x && position.x <= 600 && 0 <= position.y && position.y <= 200) {
    area.push('B')
  }

  if (600 - characterSize <= position.x && position.x <= 900 && 0 <= position.y && position.y <= 200) {
    area.push('C')
  }

  if (0 <= position.x && position.x <= 300 && 200 - characterSize <= position.y && position.y <= 400) {
    area.push('D')
  }

  if (300 - characterSize <= position.x && position.x <= 600 && 200 - characterSize <= position.y && position.y <= 400) {
    area.push('E')
  }

  if (600 - characterSize <= position.x && position.x <= 900 && 200 - characterSize <= position.y && position.y <= 400) {
    area.push('F')
  }

  if (0 <= position.x && position.x <= 300 && 400 - characterSize <= position.y && position.y <= 600) {
    area.push('G')
  }

  if (300 - characterSize <= position.x && position.x <= 600 && 400 - characterSize <= position.y && position.y <= 600) {
    area.push('H')
  }

  if (600 - characterSize <= position.x && position.x <= 900 && 400 - characterSize <= position.y && position.y <= 600) {
    area.push('I')
  }

  return area
}
