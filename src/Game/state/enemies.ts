import { Character } from '../../type'

export type Enemy = Character

export const updateEnemies = (currentEnemies: Enemy[]) => {
  const enemies = [...currentEnemies]

  return enemies
}
