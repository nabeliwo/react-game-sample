import React, { FC } from 'react'

type Props = {
  onClickRetry: () => void
}

export const Result: FC<Props> = ({ onClickRetry }) => {
  return (
    <>
      <p className="result__title">Game Over</p>
      <p className="result__point">120 pt</p>
      <button className="result__button" onClick={onClickRetry}>
        RETRY
      </button>
    </>
  )
}
