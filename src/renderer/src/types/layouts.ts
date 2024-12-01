export enum BGSize {
  cover = 'cover',
  contain = 'contain'
}
export type Pos = 'right' | 'left' | 'bottom' | 'top' | 'center'

export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'space-evenly'
  | 'space-between'
  | 'space-around'
  | 'center'
export interface BGPos {
  x: 'left' | 'right' | 'center'
  y: 'bottom' | 'top' | 'center'
}
export type BGRepeat = 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'

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
  bgcolor: string
  bgimg: string
  bgsize: string
  bgpos: BGPos
  bgrepeat: BGRepeat
  border: string
  borderRadius: string
  action: string
  fontFamily: string
  fontWeight: string
  fontSize: string
  type: 'button' | 'img/text' | 'triangle'
  onclickbgcolor: string
  onclickcolor: string
  onclickborder: string
  textShadow: string
  boxShadow: string
}

export interface Page {
  name: string
  uid: string
  items: GridItem[]
  pageConfig: {
    bgcolor: string
    bgimg: string
    bgsize: string
    bgpos: BGPos
    bgrepeat: BGRepeat
  }
  pageListConfig: {
    bgcolor: string
    bgimg: string
    bgsize: string
    bgpos: BGPos
    bgrepeat: BGRepeat
    margin: string
    padding: string
    justifyitems: Justify
  }
  pageItemConfig: {
    color: string
    bgcolor: string
    bgimg: string
    bgsize: string
    bgpos: BGPos
    bgrepeat: BGRepeat
    border: string
    borderRadius: string
    margin: string
    padding: string
    height: string
    width: string
    fontFamily: string
    fontWeight: string
    fontSize: string
    onclickbgcolor: string
    onclickcolor: string
    onclickborder: string
  }
}

export interface Layout {
  width: number
  height: number
  uid: string
  bindedKbList: string | null
  name: string
  pages: Page[]
  nosleep: boolean
  nonav: boolean
}
