import React, { FC, useEffect, useState } from 'react'

import { stageRect } from '../../constants'

type Props = {
  onCountOvered: () => void
}

export const CountDown: FC<Props> = ({ onCountOvered }) => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      onCountOvered()
    }
  }, [count, onCountOvered])

  useEffect(() => {
    let timerID: number

    function step() {
      setCount((current) => current - 1)
      timerID = window.setTimeout(step, 1000)
    }

    timerID = window.setTimeout(step, 1000)

    return () => {
      clearTimeout(timerID)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onCountOvered])

  if (count === 0) {
    return null
  }

  return (
    <>
      <p className="count" style={{ width: stageRect.width, height: stageRect.height }}>
        {count}
      </p>
    </>
  )
}
