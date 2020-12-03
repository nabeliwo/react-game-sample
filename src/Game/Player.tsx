import React, { FC } from 'react'

export type Position = {
  x: number
  y: number
}

type Props = {
  position: Position
}

export const Player: FC<Props> = ({ position }) => {
  return <div className="player" style={{ top: `${position.x}px`, left: `${position.x}px` }} />
}
