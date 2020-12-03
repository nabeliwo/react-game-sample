import { FC } from 'react'

import { Position } from './Player'

type Props = {
  onMove: (position: Position) => void
}

export const Controller: FC<Props> = ({ onMove }) => {
  // useEffect(() => {
  //   const subscribeKeyDown = () => {
  //     if (window.isKeyDown.key_ArrowUp || window.isKeyDown.key_w) {
  //       onMove({ x: 0, y: -1 })
  //     } else if (window.isKeyDown.key_ArrowRight || window.isKeyDown.key_d) {
  //       onMove({ x: 1, y: 0 })
  //     } else if (window.isKeyDown.key_ArrowDown || window.isKeyDown.key_s) {
  //       onMove({ x: 0, y: 1 })
  //     } else if (window.isKeyDown.key_ArrowLeft || window.isKeyDown.key_a) {
  //       onMove({ x: -1, y: 0 })
  //     }

  //     return requestAnimationFrame(subscribeKeyDown)
  //   }

  //   const request = subscribeKeyDown()

  //   return () => {
  //     cancelAnimationFrame(request)
  //   }
  // }, [onMove])

  console.log(onMove)

  return null
}
