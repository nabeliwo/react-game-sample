import React, { FC } from 'react'

type Props = {
  onClickStart: () => void
}

export const Intro: FC<Props> = ({ onClickStart }) => {
  return (
    <>
      <p className="intro__title">
        画面外から飛んでくる何かを避けたり弾を撃って破壊したりしながら敵を倒した数や生き残った時間などがポイントになるっぽいのでそのポイントの高さを突き詰めていく感じのとても面白いゲーム
      </p>

      <button className="intro__button" onClick={onClickStart}>
        START
      </button>

      <p className="intro__description">
        ・WASD or 矢印キー : 上下移動
        <br />
        ・マウス移動 : プレイヤーの向き変更
        <br />
        ・クリック : 弾発射
      </p>
    </>
  )
}
