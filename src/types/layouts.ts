export interface GridItem {
  grid: {
    i: string
    x: number
    y: number
    w: number
    h: number
  }
  color: string
  name: string
}

export interface Page {
  name: string
  uid: string
  items: GridItem[]
}

export interface Layouts {
  uid: string
  name: string
  pages: Page[]
}
