export type Character = {
  position: {
    x: number
    y: number
  }
  angle: number
  area: Area[]
}

export type Area = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
