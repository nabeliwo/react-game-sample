import React, { useState } from 'react'

import { stageRect } from '../constants'
import { Intro } from './scenes/Intro'
import { CountDown } from './scenes/CountDown'
import { Stage } from './scenes/Stage'
import { Result } from './scenes/Result'

type SceneName = 'intro' | 'countDown' | 'stage' | 'result'

export const Scene = () => {
  const [scene, setScene] = useState<SceneName>('intro')
  const [score, setScore] = useState(0)
  const handleGameOvered = (finalScore: number) => {
    setScene('result')
    setScore(finalScore)
  }

  return (
    <div className="container">
      <div className="box">
        <div id="scene" className="scene" style={{ width: stageRect.width, height: stageRect.height }}>
          {scene === 'intro' && <Intro onClickStart={() => setScene('countDown')} />}
          {scene === 'countDown' && <CountDown onCountOvered={() => setScene('stage')} />}
          {scene === 'stage' && <Stage onGameOvered={handleGameOvered} />}
          {scene === 'result' && <Result score={score} onClickRetry={() => setScene('countDown')} />}
        </div>
      </div>

      <a className="link" href="https://github.com/nabeliwo/react-game-sample">
        GitHub
      </a>
    </div>
  )
}
