import { getBlankLayout } from './layoutsdefault'
import { Layout,Pos, BGRepeat } from '../types/layouts'

const SP1 = {
    ...getBlankLayout(),
    name: 'Example Smartphone',
    uid: '000001L1SCEx'
}

// LAYOUT
///////////////
SP1.bindedKbList = 'SSC100000000'
SP1.width = 375
SP1.height = 800
SP1.nosleep = true

// PAGE 1
///////////////
SP1.pages[0].name = 'Ship'
SP1.pages[0].uid = '000000P1SCEx'
SP1.pages[0].pageConfig.bgcolor = '#121212d1'
SP1.pages[0].pageConfig.bgimg = '1.png'
SP1.pages[0].pageListConfig.bgcolor = '#4e454552'
SP1.pages[0].pageItemConfig.height = '35px'
SP1.pages[0].pageItemConfig.color = '#e1e7ed7a'
SP1.pages[0].pageItemConfig.bgcolor = 'transparent'
SP1.pages[0].pageItemConfig.onclickcolor = 'white'
SP1.pages[0].pageItemConfig.onclickbgcolor = '#e5434347'

SP1.pages[0].items = [
  {
    name: "FLIGHT READY",
    grid: {
      i: "zT6G31pDpJLF",
      x: 0,
      y: 2,
      w: 6,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#175c0ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000001",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Power All",
    grid: {
      i: "BOojw1q8YqXN",
      x: 9,
      y: 6,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#5c440ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000002",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Engine",
    grid: {
      i: "T8mveUyeueRc",
      x: 6,
      y: 6,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#5c440ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000003",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Spool",
    grid: {
      i: "ZbPosFp7NlBJ",
      x: 0,
      y: 19,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#161550c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000007",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#161550c7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Travel",
    grid: {
      i: "MnrpH18FYg0R",
      x: 3,
      y: 19,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#161550c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000008",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#161550c7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Pads",
    grid: {
      i: "MUbZjEIccQex",
      x: 6,
      y: 16,
      w: 4,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#05263ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000009",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Request landing",
    grid: {
      i: "H9iwOx6P70iu",
      x: 6,
      y: 13,
      w: 4,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#05263ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000013",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Decoupled",
    grid: {
      i: "Q1vSaMChfe8c",
      x: 0,
      y: 16,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#0f5a66cf",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000011",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#05363e",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Vtol",
    grid: {
      i: "OasXSkNpgxIA",
      x: 3,
      y: 16,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#0f5a66cf",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000012",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#05363e",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Shields",
    grid: {
      i: "qJVhHCpw4uPW",
      x: 6,
      y: 2,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#5c440ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000004",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Weapons",
    grid: {
      i: "Yroi7SxuwC69",
      x: 9,
      y: 2,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#5c440ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000005",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Cruise Control",
    grid: {
      i: "efA6EyIBbqjD",
      x: 0,
      y: 13,
      w: 6,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#0f5a66cf",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000006",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#05363e",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "1",
    grid: {
      i: "sNT2Qba9N4fV",
      x: 9,
      y: 26,
      w: 3,
      h: 2
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000014",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "5",
    grid: {
      i: "goLICk2ChQEo",
      x: 9,
      y: 28,
      w: 3,
      h: 2
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000015",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Doors",
    grid: {
      i: "qruZ8vq6aRHk",
      x: 10,
      y: 13,
      w: 2,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#05263ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000016",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "∞",
    grid: {
      i: "9viLARy7690N",
      x: 6,
      y: 28,
      w: 3,
      h: 2
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000023",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "20px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Mode",
    grid: {
      i: "Bbi6wy61ehOl",
      x: 6,
      y: 26,
      w: 3,
      h: 2
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000017",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Lock",
    grid: {
      i: "qSNaSsf45guV",
      x: 10,
      y: 16,
      w: 2,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#05263ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000056",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Auto land/dock",
    grid: {
      i: "NSSDGS11xQNR",
      x: 6,
      y: 19,
      w: 6,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#05263ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000053",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Exit seat",
    grid: {
      i: "0D0K19IlmDh4",
      x: 0,
      y: 6,
      w: 6,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#5c440ec7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000050",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#bf3c15",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "POWER",
    grid: {
      i: "uiQoRZztXL1y",
      x: 0,
      y: 0,
      w: 12,
      h: 2
    },
    color: "#c19b0c",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
    fontWeight: "800",
    fontSize: "14px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "red",
    onclickborder: "1px solid red",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "FLIGHT",
    grid: {
      i: "ECR0qyDpLjUy",
      x: 0,
      y: 11,
      w: 6,
      h: 2
    },
    color: "#1c8c9f",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
    fontWeight: "800",
    fontSize: "14px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "red",
    onclickborder: "1px solid red",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "CONTROL",
    grid: {
      i: "65J4TvIWM5fn",
      x: 6,
      y: 11,
      w: 6,
      h: 2
    },
    color: "#09385ac7",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
    fontWeight: "800",
    fontSize: "14px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "#09385ac7",
    onclickborder: "1px solid red",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Unlock",
    grid: {
      i: "qfBBRFwA82Vn",
      x: 3,
      y: 26,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#9f3220c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000044",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#9f3220c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Lock",
    grid: {
      i: "tK6xSoEiG5ZU",
      x: 0,
      y: 26,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#9f3220c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000029",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#9f3220c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "TARGET",
    grid: {
      i: "gBzholMY9gXR",
      x: 0,
      y: 24,
      w: 6,
      h: 2
    },
    color: "#9f3220c7",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
    fontWeight: "800",
    fontSize: "14px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "#9f3220c7",
    onclickborder: "1px solid red",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "SCAN",
    grid: {
      i: "vEnhu2zoAlpG",
      x: 6,
      y: 24,
      w: 6,
      h: 2
    },
    color: "#136c4fc7",
    bgcolor: "transparent",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
    fontWeight: "800",
    fontSize: "14px",
    type: "img/text",
    onclickbgcolor: "red",
    onclickcolor: "#136c4fc7",
    onclickborder: "1px solid red",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  }
]
// PAGE 2
///////////////
SP1.pages[1].name = 'Combat'
SP1.pages[1].uid = '000000P2SCEx'
SP1.pages[1].pageConfig.bgcolor = '#121212d1'
SP1.pages[1].pageConfig.bgimg = '2.png'
SP1.pages[1].pageListConfig.bgcolor = '#4e454552'
SP1.pages[1].pageItemConfig.height = '35px'
SP1.pages[1].pageItemConfig.color = '#e1e7ed7a'
SP1.pages[1].pageItemConfig.bgcolor = 'transparent'
SP1.pages[1].pageItemConfig.onclickcolor = 'white'
SP1.pages[1].pageItemConfig.onclickbgcolor = '#e5434347'

SP1.pages[1].items = [
  {
    name: "Next",
    grid: {
      i: "YPRAYbBMzhhI",
      x: 0,
      y: 8,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#a14606c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000027",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#a14606c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Ret.",
    grid: {
      i: "Y4GeRQ2hzXdX",
      x: 3,
      y: 8,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#a14606c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000028",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#a14606c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "IN VIEW",
    grid: {
      i: "KSdWapLVdzcn",
      x: 0,
      y: 6,
      w: 6,
      h: 2
    },
    color: "#d75c42",
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
    fontFamily: "Orbitront",
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
    name: "ALL",
    grid: {
      i: "Ia44BHLT8DKe",
      x: 6,
      y: 6,
      w: 6,
      h: 2
    },
    color: "#a15c06",
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
    fontFamily: "Orbitront",
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
    name: "Next",
    grid: {
      i: "APFG8FhAgotH",
      x: 6,
      y: 8,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#a15c06c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000029",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#a15c06c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Closest",
    grid: {
      i: "GpVNIemVvf6a",
      x: 9,
      y: 8,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#a15c06c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000030",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#a15c06c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "HOSTILES",
    grid: {
      i: "BhLivuNt7MJB",
      x: 0,
      y: 12,
      w: 6,
      h: 2
    },
    color: "#d74242",
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
    fontFamily: "Orbitront",
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
    name: "Next",
    grid: {
      i: "fj8LcSYfjysd",
      x: 0,
      y: 14,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#9f3220c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000031",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#9f3220c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Closest",
    grid: {
      i: "nz9tmVYfuK0Y",
      x: 3,
      y: 14,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#9f3220c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000032",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#9f3220c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "ATTACKERS",
    grid: {
      i: "32NfyiUNRDo2",
      x: 6,
      y: 12,
      w: 6,
      h: 2
    },
    color: "#dd0303",
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
    fontFamily: "Orbitront",
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
    name: "Next",
    grid: {
      i: "cmTi95Lm9scW",
      x: 6,
      y: 14,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#c92308c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000033",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#c92308c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Closest",
    grid: {
      i: "mI5LRRh45aF0",
      x: 9,
      y: 14,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#c92308c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000034",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#c92308c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "PIN",
    grid: {
      i: "q4GXHKkhhtDf",
      x: 0,
      y: 18,
      w: 12,
      h: 2
    },
    color: "#c37575",
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
    fontFamily: "Orbitront",
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
      i: "7uoBBsPIrDEb",
      x: 0,
      y: 20,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000037",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "16px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "2",
    grid: {
      i: "17MJ5CtAVe5E",
      x: 3,
      y: 20,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000039",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "16px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "3",
    grid: {
      i: "i0z0fg52JY6Z",
      x: 6,
      y: 20,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000041",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "16px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Lock",
    grid: {
      i: "Q6h4cwxZDnnD",
      x: 0,
      y: 24,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000038",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Lock",
    grid: {
      i: "9Wc08IUdjzDB",
      x: 3,
      y: 24,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000040",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Lock",
    grid: {
      i: "oMy05DPnTh2I",
      x: 6,
      y: 24,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000042",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Remove",
    grid: {
      i: "UxRXUBpoPFqh",
      x: 9,
      y: 20,
      w: 3,
      h: 7
    },
    color: "#7ab4dd",
    bgcolor: "#994049c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000043",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#994049c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Unlock",
    grid: {
      i: "nQ5JHq0Lr0cv",
      x: 0,
      y: 2,
      w: 6,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#4b5a74c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000044",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#4b5a74c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Scan",
    grid: {
      i: "zEyRLPClE10X",
      x: 0,
      y: 29,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000017",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "1",
    grid: {
      i: "5TBtH7p6eNMv",
      x: 3,
      y: 29,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000014",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "5",
    grid: {
      i: "JDMckwWDohXT",
      x: 6,
      y: 29,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000015",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "12px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "∞",
    grid: {
      i: "x4skKr62tTBG",
      x: 9,
      y: 29,
      w: 3,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#123a2dc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#123a2dc7",
    onclickcolor: "#7ab4dd",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "ALLIES",
    grid: {
      i: "udY7Nmrkb0sf",
      x: 6,
      y: 0,
      w: 6,
      h: 2
    },
    color: "#427820c7",
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
    fontFamily: "Orbitront",
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
    name: "Next",
    grid: {
      i: "uCp29s4uHjDO",
      x: 6,
      y: 2,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#427820c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000035",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#427820c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Closest",
    grid: {
      i: "6bPcAIfGEX8h",
      x: 9,
      y: 2,
      w: 3,
      h: 4
    },
    color: "#7ab4dd",
    bgcolor: "#427820c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000036",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#427820c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  }
]
// PAGE 3
///////////////
SP1.pages[2].name = 'Industrial'
SP1.pages[2].uid = '000000P3SCEx'
SP1.pages[2].pageConfig.bgcolor = '#121212d1'
SP1.pages[2].pageConfig.bgimg = 'r1.png'
SP1.pages[2].pageListConfig.bgcolor = '#4e454552'
SP1.pages[2].pageItemConfig.height = '35px'
SP1.pages[2].pageItemConfig.color = '#e1e7ed7a'
SP1.pages[2].pageItemConfig.bgcolor = 'transparent'
SP1.pages[2].pageItemConfig.onclickcolor = 'white'
SP1.pages[2].pageItemConfig.onclickbgcolor = '#e5434347'

SP1.pages[2].items = [
  {
    name: "Mining - Salvage",
    grid: {
      i: "mwUqkZejacAK",
      x: 0,
      y: 1,
      w: 12,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#a14606c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000045",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#a14606c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Mod 1",
    grid: {
      i: "Wbb9oY1Zf9KP",
      x: 0,
      y: 5,
      w: 4,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#7a3a0cc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000047",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#7a3a0cc7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Mod 2",
    grid: {
      i: "ZQMTbX3xgrqY",
      x: 4,
      y: 5,
      w: 4,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#7a3a0cc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000048",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#7a3a0cc7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "Mod 3",
    grid: {
      i: "5T2Am8jHcrwa",
      x: 8,
      y: 5,
      w: 4,
      h: 3
    },
    color: "#7ab4dd",
    bgcolor: "#7a3a0cc7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "000000000049",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "14px",
    type: "button",
    onclickbgcolor: "#7a3a0cc7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  },
  {
    name: "",
    grid: {
      i: "Ih8FlcFeJR3v",
      x: 0,
      y: 8,
      w: 12,
      h: 10
    },
    color: "#2b6699",
    bgcolor: "transparent",
    bgimg: "rssign.png",
    bgsize: "contain",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
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
      i: "kyWbn9PCsCn8",
      x: 0,
      y: 18,
      w: 8,
      h: 8
    },
    color: "#2b6699",
    bgcolor: "transparent",
    bgimg: "m1.png",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
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
      i: "6kzbNlNnUh34",
      x: 0,
      y: 26,
      w: 8,
      h: 5
    },
    color: "#2b6699",
    bgcolor: "transparent",
    bgimg: "m2.png",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
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
      i: "8hBFwGCyaphJ",
      x: 8,
      y: 18,
      w: 4,
      h: 6
    },
    color: "#2b6699",
    bgcolor: "transparent",
    bgimg: "m3.png",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "none",
    borderRadius: "none",
    action: "none",
    fontFamily: "Orbitront",
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
    name: "Jettison Cargo",
    grid: {
      i: "ELJFUxrjUXZN",
      x: 8,
      y: 24,
      w: 4,
      h: 7
    },
    color: "#7ab4dd",
    bgcolor: "#a10d06c7",
    bgimg: "none",
    bgsize: "cover",
    bgpos: {
      x: Pos.center,
      y: Pos.center
    },
    bgrepeat: BGRepeat.norepeat,
    border: "1px solid #ffffff36",
    borderRadius: "2px",
    action: "none",
    fontFamily: "sans-serif",
    fontWeight: "",
    fontSize: "17px",
    type: "button",
    onclickbgcolor: "#a10d06c7",
    onclickcolor: "#cdd4d9",
    onclickborder: "1px solid #ffffff36",
    textShadow: "0 0 8px 1px black",
    boxShadow: "0 0 8px 1px black"
  }
]
export const DEMOSP: Layout[] = [SP1]
