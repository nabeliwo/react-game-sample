import React, { useState } from 'react'

import { SceneName } from '../type'
import { Intro } from './scenes/Intro'
import { Stage } from './scenes/Stage'
import { Result } from './scenes/Result'

export const Scene = () => {
  const [scene, setScene] = useState<SceneName>('intro')

  const handleClickChangeScene = (name: SceneName) => {
    setScene(name)
  }

  return (
    <div className="container">
      <div className="box">
        {scene === 'intro' && <Intro onClickChangeScene={handleClickChangeScene} />}
        {scene === 'stage' && <Stage onClickChangeScene={handleClickChangeScene} />}
        {scene === 'result' && <Result onClickChangeScene={handleClickChangeScene} />}
      </div>
    </div>
  )
}
