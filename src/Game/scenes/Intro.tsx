import React, { FC } from 'react'

import { SceneName } from '../../type'

type Props = {
  onClickChangeScene: (name: SceneName) => void
}

export const Intro: FC<Props> = ({ onClickChangeScene }) => {
  return (
    <div className="scene">
      <p className="title">intro</p>
      <button className="button" onClick={() => onClickChangeScene('stage')}>
        Go to stage
      </button>
    </div>
  )
}
