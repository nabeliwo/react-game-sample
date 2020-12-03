import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Controller } from './Controller'
import { Player, Position } from './Player'

export const GameRoot = () => {
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 })

  const handleOnMove = useCallback(({ x, y }: Position) => {
    setPlayerPosition((currentPosition) => {
      return {
        x: currentPosition.x + x,
        y: currentPosition.y + y,
      }
    })
    console.log(x, y)
  }, [])

  return (
    <Wrapper>
      <Controller onMove={handleOnMove} />
      <Player position={playerPosition} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`
