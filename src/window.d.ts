interface Window {
  isMouseDown: boolean
  isKeyDown: {
    [key: string]: boolean
  }
  mousePosition: {
    x: number
    y: number
  }
}
