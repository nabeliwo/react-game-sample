import React, { FC } from 'react'

type Props = {
  onClickRetry: () => void
}

export const Result: FC<Props> = ({ onClickRetry }) => {
  return (
    <>
      <p className="title">result</p>
      <button className="button" onClick={onClickRetry}>
        Go to intro
      </button>
    </>
  )
}
