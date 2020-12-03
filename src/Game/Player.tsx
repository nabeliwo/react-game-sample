import React, { FC } from 'react'
import styled, { css } from 'styled-components'

export type Position = {
  x: number
  y: number
}

type Props = {
  position: Position
}

export const Player: FC<Props> = ({ position }) => {
  return <Wrapper x={position.x} y={position.y} />
}

const Wrapper = styled.div<Position>`
  ${({ x, y }) => css`
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    width: 20px;
    height: 20px;
    background-color: #000;
  `}
`
