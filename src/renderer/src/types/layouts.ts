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
  borderColor: string
  bgimg: string
  bgsize: string
  bgpos: BGPos
  bgrepeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
  border: number
  borderRadius: number
  action: string
  fontFamily: string
  fontWeight: string
  fontSize: string
  type: 'button' | 'img/text'
  onclickbgcolor: string
  onclickcolor: string
  onclickbordercolor: string
  textShadow: boolean
  boxShadow: boolean
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
    bgrepeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
  }
  pageListConfig: {
    bgcolor: string
    bgimg: string
    bgsize: string
    bgpos: BGPos
    bgrepeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
    padding: number
    justifyitems: Justify
  }
  pageItemConfig: {
    color: string
    bgcolor: string
    bgimg: string
    bgsize: string
    bgpos: BGPos
    bgrepeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
    border: string
    borderColor: string
    borderRadius: string
    margin: string
    padding: string
    height: string
    width: string
    justifyitems: 'center' | 'left' | 'right'
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
  multi: boolean
}
