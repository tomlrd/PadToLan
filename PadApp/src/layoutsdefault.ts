import { Layout, Page, GridItem, Pos, BGRepeat, Justify } from './types/layouts'

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
    pages: [getBlankPage()],
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
      bgsize: "cover",
      bgpos: { x: Pos.center, y: Pos.center },
      bgrepeat: BGRepeat.norepeat
    },
    pageListConfig: {
      bgcolor: "transparent",
      bgimg: "none",
      bgsize: "cover",
      bgpos: { x: Pos.center, y: Pos.center },
      bgrepeat: BGRepeat.norepeat,
      margin: "",
      padding: "",
      justifyitems: Justify.start
    },
    pageItemConfig: {
      color: "",
      bgcolor: "",
      bgimg: "",
      bgsize: "cover",
      bgpos: { x: Pos.center, y: Pos.center },
      bgrepeat: BGRepeat.norepeat,
      border: "",
      borderRadius: "",
      margin: "",
      padding: "",
      width: "120px",
      height: "50px",
      fontFamily: "sans-serif",
      fontWeight: "normal",
      fontSize: "15px",
      onclickbgcolor: 'red',
      onclickcolor: "",
      onclickborder: ""
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
    bgsize: "cover",
    bgpos: { x: Pos.center, y: Pos.center },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "15px",
    type: 'button',
    onclickbgcolor: 'red',
    onclickcolor: "red",
    onclickborder: "1px solid red"
  }
}
const SM = {
  ...getBlankLayout(), name: "Example Smartphone"
}
SM.bindedKbList = "SSC100000000"
SM.width = 375
SM.height = 800
SM.nosleep = true
SM.pages[0].name = "CONTROLS"
SM.pages[0].pageConfig.bgcolor = "#0b172487"
SM.pages[0].pageConfig.bgimg = "C://Users//stylo//Pictures//22.png"
SM.pages[0].pageListConfig.bgcolor =  "#4e454552"
SM.pages[0].pageItemConfig.height = "35px"
SM.pages[0].pageItemConfig.color = "#e1e7ed"
SM.pages[0].pageItemConfig.bgcolor = "#8a8a8a47"
SM.pages[0].pageItemConfig.onclickcolor ="#rgb(215 215 215)"
SM.pages[0].pageItemConfig.onclickbgcolor = "rgb(255 255 255 / 28%)"



SM.pages[0].items = [
  {
    name: "FLIGHT READY",
    grid: {
      i: "zT6G31pDpJLF",
      x: 0,
      y: 2,
      w: 6,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #67d742",
    borderRadius: "2px",
    action: "000000000001",
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    fontSize: "20px",
    type: "button",
    onclickbgcolor: "#67d742",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #67d742"
  },
  {
    name: "ALL",
    grid: {
      i: "BOojw1q8YqXN",
      x: 6,
      y: 2,
      w: 6,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #d79a42",
    borderRadius: "2px",
    action: "000000000002",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#d79a42",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #d79a42"
  },
  {
    name: "ENGINE",
    grid: {
      i: "T8mveUyeueRc",
      x: 0,
      y: 5,
      w: 4,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #d79a42",
    borderRadius: "2px",
    action: "000000000003",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#d79a42",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #d79a42"
  },
  {
    name: "SPOOL",
    grid: {
      i: "ZbPosFp7NlBJ",
      x: 0,
      y: 20,
      w: 6,
      h: 4
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #4263d7",
    borderRadius: "2px",
    action: "000000000007",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "20px",
    type: "button",
    onclickbgcolor: "#4263d7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #4263d7"
  },
  {
    name: "TRAVEL",
    grid: {
      i: "MnrpH18FYg0R",
      x: 6,
      y: 20,
      w: 6,
      h: 4
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #4263d7",
    borderRadius: "2px",
    action: "000000000008",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "20px",
    type: "button",
    onclickbgcolor: "#4263d7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #4263d7"
  },
  {
    name: "PADS",
    grid: {
      i: "MUbZjEIccQex",
      x: 3,
      y: 11,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #42a1d7",
    borderRadius: "2px",
    action: "000000000009",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#42a1d7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #42a1d7"
  },
  {
    name: "ASK LAND",
    grid: {
      i: "H9iwOx6P70iu",
      x: 0,
      y: 14,
      w: 6,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #42a1d7",
    borderRadius: "2px",
    action: "000000000013",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#42a1d7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #42a1d7"
  },
  {
    name: "DECOUPLED",
    grid: {
      i: "Q1vSaMChfe8c",
      x: 6,
      y: 14,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #42cbd7",
    borderRadius: "2px",
    action: "000000000011",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "11px",
    type: "button",
    onclickbgcolor: "#42cbd7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #42cbd7"
  },
  {
    name: "VTOL",
    grid: {
      i: "OasXSkNpgxIA",
      x: 9,
      y: 14,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #42cbd7",
    borderRadius: "2px",
    action: "000000000012",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#42cbd7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #42cbd7"
  },
  {
    name: "SHIELDS",
    grid: {
      i: "qJVhHCpw4uPW",
      x: 4,
      y: 5,
      w: 4,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #d79a42",
    borderRadius: "2px",
    action: "000000000004",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#d79a42",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #d79a42"
  },
  {
    name: "WEAPONS",
    grid: {
      i: "Yroi7SxuwC69",
      x: 8,
      y: 5,
      w: 4,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #d79a42",
    borderRadius: "2px",
    action: "000000000005",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#d79a42",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #d79a42"
  },
  {
    name: "CRUISE",
    grid: {
      i: "efA6EyIBbqjD",
      x: 6,
      y: 11,
      w: 6,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #42cbd7",
    borderRadius: "2px",
    action: "000000000006",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#42cbd7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #42cbd7"
  },
  {
    name: "1",
    grid: {
      i: "sNT2Qba9N4fV",
      x: 0,
      y: 27,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "000000000014",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  },
  {
    name: "5",
    grid: {
      i: "goLICk2ChQEo",
      x: 3,
      y: 27,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "000000000015",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  },
  {
    name: "DOORS",
    grid: {
      i: "qruZ8vq6aRHk",
      x: 0,
      y: 11,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #42a1d7",
    borderRadius: "2px",
    action: "000000000016",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#42a1d7",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #42a1d7"
  },
  {
    name: "∞",
    grid: {
      i: "9viLARy7690N",
      x: 9,
      y: 27,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "25px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  },
  {
    name: "PING",
    grid: {
      i: "b2lP73ArLuqe",
      x: 0,
      y: 25,
      w: 12,
      h: 2
    },
    color: "#17d5b0",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "",
    borderRadius: "none",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    fontSize: "15px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "#17d5b0",
    onclickborder: ""
  },
  {
    name: "10",
    grid: {
      i: "lU22H3FX17mp",
      x: 6,
      y: 27,
      w: 3,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  },
  {
    name: "QUANTUM",
    grid: {
      i: "eHbZldnflVAB",
      x: 0,
      y: 18,
      w: 12,
      h: 2
    },
    color: "#4263d7",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "",
    borderRadius: "none",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    fontSize: "15px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "#4263d7",
    onclickborder: ""
  },
  {
    name: "MODE",
    grid: {
      i: "Bbi6wy61ehOl",
      x: 0,
      y: 30,
      w: 4,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  },
  {
    name: "INCREASE",
    grid: {
      i: "YFNvMdPEpNWF",
      x: 4,
      y: 30,
      w: 4,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  },
  {
    name: "DECREASE",
    grid: {
      i: "Whzw1mio4GoG",
      x: 8,
      y: 30,
      w: 4,
      h: 3
    },
    color: "rgb(215 215 215)",
    bgcolor: "#27282c",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x:  Pos.center,
      y:  Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "2px solid #17d5b0",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#17d5b0",
    onclickcolor: "rgb(215 215 215)",
    onclickborder: "2px solid #17d5b0"
  }
]
const TABLET = { ...getBlankLayout(), name: 'Example Tablet' }

export const DefaultLayouts: Layout[] = [SM, TABLET]

