import { Layout, Page, GridItem, Pos, BGRepeat, Justify } from '../types/layouts'



export function generateUID() {
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let uid = ''

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumeric.length)
    uid += alphanumeric.charAt(randomIndex)
  }

  return uid
}

export function getBlankLayout(): Layout {
  return {
    uid: generateUID(),
    width: 800,
    height: 900,
    bindedKbList: null,
    name: 'New Layout',
    pages: [getBlankPage(), getBlankPage(), getBlankPage()],
    nosleep: false
  }
}

export function getBlankPage(): Page {
  return {
    uid: generateUID(),
    name: 'New Page',
    items: [],
    pageConfig: {
      bgcolor: '#435e7a',
      bgimg: 'none',
      bgsize: 'cover',
      bgpos: { x: Pos.center, y: Pos.center },
      bgrepeat: BGRepeat.norepeat
    },
    pageListConfig: {
      bgcolor: 'transparent',
      bgimg: 'none',
      bgsize: 'cover',
      bgpos: { x: Pos.center, y: Pos.center },
      bgrepeat: BGRepeat.norepeat,
      margin: '',
      padding: '',
      justifyitems: Justify.start
    },
    pageItemConfig: {
      color: '',
      bgcolor: '',
      bgimg: '',
      bgsize: 'cover',
      bgpos: { x: Pos.center, y: Pos.center },
      bgrepeat: BGRepeat.norepeat,
      border: '',
      borderRadius: '',
      margin: '',
      padding: '',
      width: '120px',
      height: '50px',
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
      fontSize: '15px',
      onclickbgcolor: 'red',
      onclickcolor: '',
      onclickborder: ''
    }
  }
}

export function getBlankItem(): GridItem {
  return {
    name: 'New Item',
    grid: { i: generateUID(), x: 0, y: 0, w: 2, h: 2 },
    color: '#2b6699',
    bgcolor: 'lightgray',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: 'none',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontSize: '15px',
    type: 'button',
    onclickbgcolor: 'red',
    onclickcolor: 'red',
    onclickborder: '1px solid red',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  }
}
const SM = {
  ...getBlankLayout(),
  name: 'Example Smartphone'
}
SM.bindedKbList = 'SSC100000000'
SM.width = 375
SM.height = 800
SM.nosleep = true
SM.pages[0].name = 'Ship'
SM.pages[0].pageConfig.bgcolor = '#1a18184a'
SM.pages[0].pageConfig.bgimg = '../../resources/planet.png'
SM.pages[0].pageListConfig.bgcolor = '#4e454552'
SM.pages[0].pageItemConfig.height = '35px'
SM.pages[0].pageItemConfig.color = '#e1e7ed7a'
SM.pages[0].pageItemConfig.bgcolor = 'transparent'
SM.pages[0].pageItemConfig.onclickcolor = 'white'
SM.pages[0].pageItemConfig.onclickbgcolor = '#e5434347'

SM.pages[1].name = 'Combat'
SM.pages[1].pageConfig.bgcolor = '#1a1818a3'
SM.pages[1].pageConfig.bgimg = 'D://Apps//PadToLan//build//Example//df.png'
SM.pages[1].pageListConfig.bgcolor = '#4e454552'
SM.pages[1].pageItemConfig.height = '35px'
SM.pages[1].pageItemConfig.color = '#e1e7ed7a'
SM.pages[1].pageItemConfig.bgcolor = 'transparent'
SM.pages[1].pageItemConfig.onclickcolor = 'white'
SM.pages[1].pageItemConfig.onclickbgcolor = '#e5434347'

SM.pages[2].name = 'Industrial'
SM.pages[2].pageConfig.bgcolor = '#1a1818a3'
SM.pages[2].pageConfig.bgimg = 'D://Apps//PadToLan//build//Example//raf.png'
SM.pages[2].pageListConfig.bgcolor = '#4e454552'
SM.pages[2].pageItemConfig.height = '35px'
SM.pages[2].pageItemConfig.color = '#e1e7ed7a'
SM.pages[2].pageItemConfig.bgcolor = 'transparent'
SM.pages[2].pageItemConfig.onclickcolor = 'white'
SM.pages[2].pageItemConfig.onclickbgcolor = '#e5434347'

SM.pages[0].items = [
  {
    name: 'FLIGHT READY',
    grid: {
      i: 'zT6G31pDpJLF',
      x: 0,
      y: 2,
      w: 6,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(100,219,88,0.33375356978728987) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #67d742',
    borderRadius: '2px',
    action: '000000000001',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#67d7428a',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'ALL',
    grid: {
      i: 'BOojw1q8YqXN',
      x: 6,
      y: 2,
      w: 6,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(215,154,66,0.2889356426164216) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d79a42',
    borderRadius: '2px',
    action: '000000000002',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#d79a42',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'ENGINE',
    grid: {
      i: 'T8mveUyeueRc',
      x: 0,
      y: 5,
      w: 4,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(215,154,66,0.2889356426164216) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d79a42',
    borderRadius: '2px',
    action: '000000000003',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#d79a42',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'SPOOL',
    grid: {
      i: 'ZbPosFp7NlBJ',
      x: 0,
      y: 18,
      w: 3,
      h: 6
    },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(86,66,215,0.29173676306460083) 0%, rgba(86,66,215,0.7735294801514356) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #5642d7',
    borderRadius: '2px',
    action: '000000000007',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#5642d7',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #4263d7',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'TRAVEL',
    grid: {
      i: 'MnrpH18FYg0R',
      x: 3,
      y: 18,
      w: 3,
      h: 6
    },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(86,66,215,0.29173676306460083) 0%, rgba(86,66,215,0.7735294801514356) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #5642d7',
    borderRadius: '2px',
    action: '000000000008',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#5642d7',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #4263d7',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'PADS',
    grid: {
      i: 'MUbZjEIccQex',
      x: 3,
      y: 10,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(66,161,215,0.3029412448573179) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #42a1d7',
    borderRadius: '2px',
    action: '000000000009',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#42a1d7',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'ASK LAND',
    grid: {
      i: 'H9iwOx6P70iu',
      x: 0,
      y: 13,
      w: 6,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(66,161,215,0.3029412448573179) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #42a1d7',
    borderRadius: '2px',
    action: '000000000013',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#42a1d7',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'DECOUPLED',
    grid: {
      i: 'Q1vSaMChfe8c',
      x: 6,
      y: 10,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(66,203,215,0.31974796754639356) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #42cbd7',
    borderRadius: '2px',
    action: '000000000011',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '11px',
    type: 'button',
    onclickbgcolor: '#42cbd7',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'VTOL',
    grid: {
      i: 'OasXSkNpgxIA',
      x: 9,
      y: 10,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(66,203,215,0.31974796754639356) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #42cbd7',
    borderRadius: '2px',
    action: '000000000012',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#42cbd7',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'SHIELDS',
    grid: {
      i: 'qJVhHCpw4uPW',
      x: 4,
      y: 5,
      w: 4,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(215,154,66,0.2889356426164216) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d79a42',
    borderRadius: '2px',
    action: '000000000004',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#d79a42',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'WEAPONS',
    grid: {
      i: 'Yroi7SxuwC69',
      x: 8,
      y: 5,
      w: 4,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(215,154,66,0.2889356426164216) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d79a42',
    borderRadius: '2px',
    action: '000000000005',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#d79a42',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'CRUISE',
    grid: {
      i: 'efA6EyIBbqjD',
      x: 6,
      y: 13,
      w: 6,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(66,203,215,0.31974796754639356) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #42cbd7',
    borderRadius: '2px',
    action: '000000000006',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#42cbd7',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '1',
    grid: {
      i: 'sNT2Qba9N4fV',
      x: 3,
      y: 26,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000014',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '5',
    grid: {
      i: 'goLICk2ChQEo',
      x: 6,
      y: 26,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000015',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'DOORS',
    grid: {
      i: 'qruZ8vq6aRHk',
      x: 0,
      y: 10,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(66,161,215,0.3029412448573179) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #42a1d7',
    borderRadius: '2px',
    action: '000000000016',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#42a1d7',
    onclickcolor: '',
    onclickborder: '2px solid transparent',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '∞',
    grid: {
      i: '9viLARy7690N',
      x: 9,
      y: 26,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000023',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '25px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Ping',
    grid: {
      i: 'b2lP73ArLuqe',
      x: 0,
      y: 24,
      w: 12,
      h: 2
    },
    color: '#17d5b0',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'Quantum',
    grid: {
      i: 'eHbZldnflVAB',
      x: 0,
      y: 16,
      w: 6,
      h: 2
    },
    color: '#4263d7',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'MODE',
    grid: {
      i: 'Bbi6wy61ehOl',
      x: 0,
      y: 26,
      w: 3,
      h: 3
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000017',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Landing',
    grid: {
      i: 'TDa88d5lTXlO',
      x: 0,
      y: 8,
      w: 6,
      h: 2
    },
    color: '#42a1d7',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'Control',
    grid: {
      i: 'LPwSFdZcmX5u',
      x: 6,
      y: 8,
      w: 6,
      h: 2
    },
    color: '#42cbd7',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'Power',
    grid: {
      i: 'Qa5BqS1ktYG6',
      x: 0,
      y: 0,
      w: 12,
      h: 2
    },
    color: '#d79a42',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: 'red',
    onclickcolor: '#d79a42',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'ASK',
    grid: {
      i: 'rOpIVyzYRE23',
      x: 6,
      y: 18,
      w: 3,
      h: 6
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(#5f5a817a 0%, rgb(48 64 253 / 79%) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #3040fdc9',
    borderRadius: '2px',
    action: '000000000025',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#3040fdc9',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #4263d7',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'JUMP',
    grid: {
      i: '4BoDMSkd6J2Z',
      x: 9,
      y: 18,
      w: 3,
      h: 6
    },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(#5f5a817a 0%, rgb(48 64 253 / 79%) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #3040fdc9',
    borderRadius: '2px',
    action: '000000000026',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#3040fdc9',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #4263d7',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Jump',
    grid: {
      i: 'TaO8EA7nscTL',
      x: 6,
      y: 16,
      w: 6,
      h: 2
    },
    color: '#3040fdc9',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  }
]

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

SM.pages[1].items = [
  {
    name: 'NEXT',
    grid: { i: 'YPRAYbBMzhhI', x: 0, y: 2, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215,92,66,0.44999998290331755) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d75c42',
    borderRadius: '2px',
    action: '000000000027',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#d75c42',
    onclickcolor: '',
    onclickborder: '2px solid #d75c42',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'RETICULE',
    grid: { i: 'Y4GeRQ2hzXdX', x: 3, y: 2, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215,92,66,0.44999998290331755) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d75c42',
    borderRadius: '2px',
    action: '000000000028',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '14px',
    type: 'button',
    onclickbgcolor: '#d75c42',
    onclickcolor: '',
    onclickborder: '2px solid #d75c42',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'In View',
    grid: { i: 'KSdWapLVdzcn', x: 0, y: 0, w: 6, h: 2 },
    color: '#d75c42',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'All',
    grid: { i: 'Ia44BHLT8DKe', x: 6, y: 0, w: 6, h: 2 },
    color: '#d75c42',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'NEXT',
    grid: { i: 'APFG8FhAgotH', x: 6, y: 2, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215,92,66,0.44999998290331755) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d75c42',
    borderRadius: '2px',
    action: '000000000029',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '14px',
    type: 'button',
    onclickbgcolor: '#d75c42',
    onclickcolor: '',
    onclickborder: '2px solid #d75c42',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'CLOSEST',
    grid: { i: 'GpVNIemVvf6a', x: 9, y: 2, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215,92,66,0.44999998290331755) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d75c42',
    borderRadius: '2px',
    action: '000000000030',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '14px',
    type: 'button',
    onclickbgcolor: '#d75c42',
    onclickcolor: '',
    onclickborder: '2px solid #d75c42',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Hostiles',
    grid: { i: 'BhLivuNt7MJB', x: 0, y: 6, w: 6, h: 2 },
    color: '#d74242',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'NEXT',
    grid: { i: 'fj8LcSYfjysd', x: 0, y: 8, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215,66,66,0.40238093528427) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d74242',
    borderRadius: '2px',
    action: '000000000031',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#d74242',
    onclickcolor: '',
    onclickborder: '2px solid #d74242',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'CLOSEST',
    grid: { i: 'nz9tmVYfuK0Y', x: 3, y: 8, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(215,66,66,0.40238093528427) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d74242',
    borderRadius: '2px',
    action: '000000000032',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#d74242',
    onclickcolor: '',
    onclickborder: '2px solid #d74242',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Attackers',
    grid: { i: '32NfyiUNRDo2', x: 6, y: 6, w: 6, h: 2 },
    color: '#dd0303',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'NEXT',
    grid: { i: 'cmTi95Lm9scW', x: 6, y: 8, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(221,3,3,0.3267506831834296) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #dd0303',
    borderRadius: '2px',
    action: '000000000033',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#dd0303',
    onclickcolor: '',
    onclickborder: '2px solid #dd0303',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'CLOSEST',
    grid: { i: 'mI5LRRh45aF0', x: 9, y: 8, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(221,3,3,0.3267506831834296) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #dd0303',
    borderRadius: '2px',
    action: '000000000034',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#dd0303',
    onclickcolor: '',
    onclickborder: '2px solid #dd0303',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Pin',
    grid: { i: 'q4GXHKkhhtDf', x: 0, y: 12, w: 12, h: 2 },
    color: '#c37575',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: '1',
    grid: { i: '7uoBBsPIrDEb', x: 0, y: 14, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,117,117,0.4528011033514968) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #c37575',
    borderRadius: '2px',
    action: '000000000037',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#c37575',
    onclickcolor: '',
    onclickborder: '2px solid #c37575',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '2',
    grid: { i: '17MJ5CtAVe5E', x: 3, y: 14, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,117,117,0.4528011033514968) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #c37575',
    borderRadius: '2px',
    action: '000000000039',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#c37575',
    onclickcolor: '',
    onclickborder: '2px solid #c37575',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '3',
    grid: { i: 'i0z0fg52JY6Z', x: 6, y: 14, w: 3, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,117,117,0.4528011033514968) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #c37575',
    borderRadius: '2px',
    action: '000000000041',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#c37575',
    onclickcolor: '',
    onclickborder: '2px solid #c37575',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'LOCK',
    grid: { i: 'Q6h4cwxZDnnD', x: 0, y: 18, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,117,117,0.4528011033514968) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #c37575',
    borderRadius: '2px',
    action: '000000000038',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#c37575',
    onclickcolor: '',
    onclickborder: '2px solid #c37575',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'LOCK',
    grid: { i: '9Wc08IUdjzDB', x: 3, y: 18, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,117,117,0.4528011033514968) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #c37575',
    borderRadius: '2px',
    action: '000000000040',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#c37575',
    onclickcolor: '',
    onclickborder: '2px solid #c37575',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'LOCK',
    grid: { i: 'oMy05DPnTh2I', x: 6, y: 18, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(195,117,117,0.4528011033514968) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #c37575',
    borderRadius: '2px',
    action: '000000000042',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#c37575',
    onclickcolor: '',
    onclickborder: '2px solid #c37575',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'REMOVE',
    grid: { i: 'UxRXUBpoPFqh', x: 9, y: 14, w: 3, h: 7 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(217,170,170,0.44159662155877977) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #d9aaaa',
    borderRadius: '2px',
    action: '000000000043',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#d9aaaa',
    onclickcolor: '',
    onclickborder: '2px solid #d9aaaa',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Target',
    grid: { i: 'pmBgCDVoIgE4', x: 0, y: 21, w: 12, h: 2 },
    color: '#80b9d5',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'UNLOCK',
    grid: { i: 'nQ5JHq0Lr0cv', x: 0, y: 23, w: 6, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(128,185,213,0.3631652490097601) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #80b9d5',
    borderRadius: '2px',
    action: '000000000044',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#80b9d5',
    onclickcolor: '',
    onclickborder: '2px solid #80b9d5',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'HAIL',
    grid: { i: 'wvRLffQYqojR', x: 6, y: 23, w: 6, h: 4 },
    color: 'rgb(215 215 215)',
    bgcolor:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(128,185,213,0.3631652490097601) 100%',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #80b9d5',
    borderRadius: '2px',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '13px',
    type: 'button',
    onclickbgcolor: '#80b9d5',
    onclickcolor: '',
    onclickborder: '2px solid #80b9d5',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: 'Ping',
    grid: { i: 'o3BEmpKq3Li7', x: 0, y: 27, w: 12, h: 2 },
    color: '#17d5b0',
    bgcolor: 'transparent',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '',
    borderRadius: 'none',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '15px',
    type: 'img/text',
    onclickbgcolor: '',
    onclickcolor: '',
    onclickborder: '',
    textShadow: '0 0 8px 1px black',
    boxShadow: ''
  },
  {
    name: 'MODE',
    grid: { i: 'zEyRLPClE10X', x: 0, y: 29, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000017',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '15px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '1',
    grid: { i: '5TBtH7p6eNMv', x: 3, y: 29, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000014',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '5',
    grid: { i: 'JDMckwWDohXT', x: 6, y: 29, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: '000000000015',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '17px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  },
  {
    name: '∞',
    grid: { i: 'x4skKr62tTBG', x: 9, y: 29, w: 3, h: 3 },
    color: 'rgb(215 215 215)',
    bgcolor: 'linear-gradient(180deg, rgba(5,25,6,0) 0%, rgba(23,213,176,0.3617647742690826) 100%)',
    bgimg: 'none',
    bgsize: 'cover',
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: '2px solid #17d5b0',
    borderRadius: '2px',
    action: 'none',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontSize: '25px',
    type: 'button',
    onclickbgcolor: '#17d5b0',
    onclickcolor: 'rgb(215 215 215)',
    onclickborder: '2px solid #17d5b0',
    textShadow: '0 0 8px 1px black',
    boxShadow: '0 0 8px 1px black'
  }
]

//////////////////////
//////////////////////
//////////////////////
//////////////////////

SM.pages[2].items = [
  {
    name: "MINING",
    grid: {
      i: "ovttPLiJ5I4R",
      x: 0,
      y: 1,
      w: 6,
      h: 4
    },
    color: "rgb(215 215 215)",
    bgcolor: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(157,72,54,0.36876748990611874) 100%)",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #9d4836db",
    borderRadius: "2px",
    action: "000000000045",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#9d4836db",
    onclickcolor: "",
    onclickborder: "2px solid #9d4836db",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "SALVAGE",
    grid: {
      i: "5K4QDFu6WmlO",
      x: 6,
      y: 1,
      w: 6,
      h: 4
    },
    color: "rgb(215 215 215)",
    bgcolor: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(157,72,54,0.36876748990611874) 100%)",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #9d4836db",
    borderRadius: "2px",
    action: "000000000046",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#9d4836db",
    onclickcolor: "",
    onclickborder: "2px solid #9d4836db",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Modules",
    grid: {
      i: "4uuqbHPzRz2j",
      x: 9,
      y: 5,
      w: 3,
      h: 1
    },
    color: "#c1b562",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "",
    borderRadius: "none",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    fontSize: "15px",
    type: "img/text",
    onclickbgcolor: "",
    onclickcolor: "",
    onclickborder: "",
    textShadow: "0 0 8px 1px black",
    boxShadow: ""
  },
  {
    name: "1",
    grid: {
      i: "fNG1GD5MQBGn",
      x: 9,
      y: 6,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(193,181,98,0.39677869438791147) 100%)",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #c1b562",
    borderRadius: "2px",
    action: "000000000047",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#c1b562",
    onclickcolor: "",
    onclickborder: "2px solid #c1b562",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "2",
    grid: {
      i: "1VizwyVB9CMg",
      x: 9,
      y: 9,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(193,181,98,0.39677869438791147) 100%)",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #c1b562",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#c1b562",
    onclickcolor: "",
    onclickborder: "2px solid #c1b562",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "3",
    grid: {
      i: "x720OQxBuwIp",
      x: 9,
      y: 12,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(193,181,98,0.39677869438791147) 100%)",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #c1b562",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#c1b562",
    onclickcolor: "",
    onclickborder: "2px solid #c1b562",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "JETTISON CARGO",
    grid: {
      i: "bGOrJgyA21Cr",
      x: 0,
      y: 27,
      w: 12,
      h: 3
    },
    color: "#c7260e",
    bgcolor: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(199,38,14,0.433193260214242) 100%)",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #c7260e",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#c7260e",
    onclickcolor: "#c7260e",
    onclickborder: "2px solid #c7260e",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "",
    grid: {
      i: "TryiV8Wqz7KL",
      x: 0,
      y: 16,
      w: 12,
      h: 10
    },
    color: "#2b6699",
    bgcolor: "transparent",
    bgimg: "D:/Apps/PadToLan/build/Example/signature.png",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "15px",
    type: "img/text",
    onclickbgcolor: "",
    onclickcolor: "",
    onclickborder: "",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "",
    grid: {
      i: "TBsJzIrkH1AA",
      x: 0,
      y: 5,
      w: 9,
      h: 6
    },
    color: "#214b38",
    bgcolor: "transparent",
    bgimg: "D:/Apps/PadToLan/build/Example/rocks.png",
    bgsize: "100% 100px",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "15px",
    type: "img/text",
    onclickbgcolor: "",
    onclickcolor: "",
    onclickborder: "",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "",
    grid: {
      i: "uWMo3kTt0UXi",
      x: 0,
      y: 11,
      w: 9,
      h: 4
    },
    color: "#214b38",
    bgcolor: "transparent",
    bgimg: "D:/Apps/PadToLan/build/Example/savalge.png",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "15px",
    type: "img/text",
    onclickbgcolor: "",
    onclickcolor: "",
    onclickborder: "",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  }
]
const TABLET = { ...getBlankLayout(), name: 'Example Tablet' }

export const DefaultLayouts: Layout[] = [SM, TABLET]
