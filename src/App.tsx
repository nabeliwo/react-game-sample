import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { GameRoot } from './Game/GameRoot'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <GameRoot />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body {
    word-wrap: break-word;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, ヒラギノ角ゴ ProN W3, Meiryo, メイリオ, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`
