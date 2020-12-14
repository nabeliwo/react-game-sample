import React, { useState } from 'react'

import { stageRect } from '../constants'
import { Intro } from './scenes/Intro'
import { CountDown } from './scenes/CountDown'
import { Stage } from './scenes/Stage'
import { Result } from './scenes/Result'

type SceneName = 'intro' | 'countDown' | 'stage' | 'result'

export const Scene = () => {
  const [scene, setScene] = useState<SceneName>('intro')

  return (
    <div className="container">
      <div className="box">
        <div id="scene" className="scene" style={{ width: stageRect.width, height: stageRect.height }}>
          {scene === 'intro' && <Intro onClickStart={() => setScene('countDown')} />}
          {scene === 'countDown' && <CountDown onCountOvered={() => setScene('stage')} />}
          {scene === 'stage' && <Stage onGameOvered={() => setScene('result')} />}
          {scene === 'result' && <Result onClickRetry={() => setScene('result')} />}
        </div>
      </div>
    </div>
  )
}
