export enum BGSize {
  cover = 'cover',
  contain = 'contain'
}
export enum Pos {
  right = 'right',
  left = 'left',
  bottom = 'bottom',
  top = 'top',
  center = 'center'
}
export enum Justify {
  start = 'flex-start',
  end = 'flex-end',
  evenly = 'space-evenly',
  between = 'space-between',
  around = 'space-around',
  center = 'center'
}
export interface BGPos {
  x: Pos.left | Pos.right | Pos.center
  y: Pos.bottom | Pos.right | Pos.center
}
export enum BGRepeat {
  repeat = 'repeat',
  norepeat = 'no-repeat',
  repeatX = 'repeat-x',
  repeatY = 'repeat-y'
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
  type: 'button' | 'img/text'
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
}
