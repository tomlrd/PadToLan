import { getBlankLayout } from './layoutsdefault'
import { Layout,Pos, BGRepeat } from '../types/layouts'

const SP1 = {
    ...getBlankLayout(),
    name: 'Example Smartphone3',
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
        y: 0,
        w: 4,
        h: 4
      },
      color: "#7ab4dd",
      bgcolor: "#175419c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#175419c7",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Power All",
      grid: {
        i: "BOojw1q8YqXN",
        x: 4,
        y: 0,
        w: 4,
        h: 4
      },
      color: "#7ab4dd",
      bgcolor: "#3e3205c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#d79a42",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Engine",
      grid: {
        i: "T8mveUyeueRc",
        x: 0,
        y: 4,
        w: 4,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#3e3205c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#d79a42",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "SPOOL",
      grid: {
        i: "ZbPosFp7NlBJ",
        x: 0,
        y: 25,
        w: 3,
        h: 3
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "11px",
      type: "button",
      onclickbgcolor: "#161550c7",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "TRAVEL",
      grid: {
        i: "MnrpH18FYg0R",
        x: 0,
        y: 28,
        w: 3,
        h: 3
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "11px",
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
        x: 3,
        y: 15,
        w: 3,
        h: 6
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
      fontFamily: "Orbitront",
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
        y: 15,
        w: 3,
        h: 6
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
      fontFamily: "Orbitront",
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
        y: 11,
        w: 4,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#05363e",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "13px",
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
        x: 4,
        y: 11,
        w: 4,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#05363e",
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
      fontFamily: "Orbitront",
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
        x: 4,
        y: 4,
        w: 4,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#3e3205c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#d79a42",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Weapons",
      grid: {
        i: "Yroi7SxuwC69",
        x: 8,
        y: 4,
        w: 4,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#3e3205c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#d79a42",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Cruise Control",
      grid: {
        i: "efA6EyIBbqjD",
        x: 0,
        y: 8,
        w: 8,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#05363e",
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
      fontFamily: "Orbitront",
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
        y: 27,
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
      fontFamily: "Orbitront",
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
        y: 29,
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
      fontFamily: "Orbitront",
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
        x: 0,
        y: 15,
        w: 3,
        h: 6
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
      fontFamily: "Orbitront",
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
        x: 9,
        y: 25,
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
      fontFamily: "Orbitront",
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
      name: "Mode Scanning",
      grid: {
        i: "Bbi6wy61ehOl",
        x: 6,
        y: 25,
        w: 3,
        h: 6
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
      fontFamily: "Orbitront",
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
      name: "ASK",
      grid: {
        i: "rOpIVyzYRE23",
        x: 3,
        y: 25,
        w: 3,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#4c1550c7",
      bgimg: "none",
      bgsize: "cover",
      bgpos: {
        x: Pos.center,
        y: Pos.center
      },
      bgrepeat: BGRepeat.norepeat,
      border: "1px solid #ffffff36",
      borderRadius: "2px",
      action: "000000000025",
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "12px",
      type: "button",
      onclickbgcolor: "#4c1550c7",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "JUMP",
      grid: {
        i: "4BoDMSkd6J2Z",
        x: 3,
        y: 28,
        w: 3,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#4c1550c7",
      bgimg: "none",
      bgsize: "cover",
      bgpos: {
        x: Pos.center,
        y: Pos.center
      },
      bgrepeat: BGRepeat.norepeat,
      border: "1px solid #ffffff36",
      borderRadius: "2px",
      action: "000000000026",
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "12px",
      type: "button",
      onclickbgcolor: "#4c1550c7",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Lock",
      grid: {
        i: "qSNaSsf45guV",
        x: 0,
        y: 21,
        w: 3,
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
      fontFamily: "Orbitront",
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
      name: "Lock port ",
      grid: {
        i: "enb4F5Di0CKe",
        x: 9,
        y: 21,
        w: 3,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#004272c7",
      bgimg: "none",
      bgsize: "cover",
      bgpos: {
        x: Pos.center,
        y: Pos.center
      },
      bgrepeat: BGRepeat.norepeat,
      border: "1px solid #ffffff36",
      borderRadius: "2px",
      action: "000000000057",
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "13px",
      type: "button",
      onclickbgcolor: "#004272c7",
      onclickcolor: "#cdd4d9",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Request loading",
      grid: {
        i: "17Qir4IkhWia",
        x: 9,
        y: 15,
        w: 3,
        h: 6
      },
      color: "#7ab4dd",
      bgcolor: "#004272c7",
      bgimg: "none",
      bgsize: "cover",
      bgpos: {
        x: Pos.center,
        y: Pos.center
      },
      bgrepeat: BGRepeat.norepeat,
      border: "1px solid #ffffff36",
      borderRadius: "2px",
      action: "000000000054",
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#004272c7",
      onclickcolor: "#cdd4d9",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Auto land/dock",
      grid: {
        i: "NSSDGS11xQNR",
        x: 3,
        y: 21,
        w: 6,
        h: 3
      },
      color: "#7ab4dd",
      bgcolor: "#1f4058c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#1f4058c7",
      onclickcolor: "#cdd4d9",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Exit seat",
      grid: {
        i: "0D0K19IlmDh4",
        x: 8,
        y: 0,
        w: 4,
        h: 4
      },
      color: "#7ab4dd",
      bgcolor: "#3e3205c7",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#d79a42",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
      textShadow: "0 0 8px 1px black",
      boxShadow: "0 0 8px 1px black"
    },
    {
      name: "Self destruct",
      grid: {
        i: "Wts5YzSBgzTp",
        x: 9,
        y: 8,
        w: 3,
        h: 6
      },
      color: "#7ab4dd",
      bgcolor: "#5a0707c7",
      bgimg: "none",
      bgsize: "cover",
      bgpos: {
        x: Pos.center,
        y: Pos.center
      },
      bgrepeat: BGRepeat.norepeat,
      border: "1px solid #ffffff36",
      borderRadius: "2px",
      action: "000000000052",
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "14px",
      type: "button",
      onclickbgcolor: "#5a0707c7",
      onclickcolor: "#7ab4dd",
      onclickborder: "1px solid #ffffff36",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      name: "In View",
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
      name: "All",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      name: "Hostiles",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      name: "Attackers",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      name: "Pin",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
        w: 5,
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
      fontFamily: "Orbitront",
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
      name: "Hail",
      grid: {
        i: "wvRLffQYqojR",
        x: 7,
        y: 2,
        w: 5,
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
      action: "none",
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
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
      fontFamily: "Orbitront",
      fontWeight: "",
      fontSize: "12px",
      type: "button",
      onclickbgcolor: "#123a2dc7",
      onclickcolor: "#7ab4dd",
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




export const DEMOSP: Layout[] = [SP1]
