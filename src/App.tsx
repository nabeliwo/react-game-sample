import React from 'react'
import FPSStats from 'react-fps-stats'

import { GameRoot } from './Game/GameRoot'

export const App = () => {
  return (
    <>
      <GameRoot />
      <FPSStats right={0} left="auto" />
    </>
  )
}
