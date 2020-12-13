import React, { FC } from 'react'

import { SceneName } from '../../type'

type Props = {
  onClickChangeScene: (name: SceneName) => void
}

export const Result: FC<Props> = ({ onClickChangeScene }) => {
  return (
    <div className="scene">
      <p className="title">result</p>
      <button className="button" onClick={() => onClickChangeScene('intro')}>
        Go to intro
      </button>
    </div>
  )
}
