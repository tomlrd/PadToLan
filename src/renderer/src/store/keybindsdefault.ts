import { KeyBind, KeyBindList, Modifier } from '../types/keybinds'
import { generateUID } from './layoutsdefault'

export function getBlankKeyBind(): KeyBind {
  return {
    uid: generateUID(),
    name: 'new keybind',
    keybind: null,
    modifiers: [],
    doubletap: false,
    hold: false,
    repeat: 0,
    delayRepeat: 1000
  }
}

export function getBlankKeyBindList(): KeyBindList {
  return {
    uid: generateUID(),
    name: 'new keybinds list',
    keybinds: [getBlankKeyBind(), getBlankKeyBind()]
  }
}

const SCDefault: KeyBindList = {
  ...getBlankKeyBindList(),
  uid: 'SSC100000000',
  name: 'StarCitizen Default 3.22',
  keybinds: [
    {
      uid: '000000000001',
      name: 'Flight Ready',
      keybind: 'R',
      modifiers: [Modifier.RightAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000002',
      name: 'Power All',
      keybind: 'U',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000003',
      name: 'Power Thrusters',
      keybind: 'I',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000004',
      name: 'Power Shields',
      keybind: 'O',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000005',
      name: 'Power Weapons',
      keybind: 'P',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000006',
      name: 'Cruise Control',
      keybind: 'C',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000007',
      name: 'Toggle Quantum',
      keybind: 'B',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000008',
      name: 'Quantum Travel',
      keybind: 'B',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000009',
      name: 'Landing',
      keybind: 'N',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000010',
      name: 'Auto Landing',
      keybind: 'N',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000011',
      name: '(De)coupled mode',
      keybind: 'C',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000012',
      name: 'VTOL',
      keybind: 'K',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000013',
      name: 'Req. Landing',
      keybind: 'N',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000014',
      name: 'Ping',
      keybind: 'V',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000015',
      name: 'Ping5',
      keybind: 'V',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 5,
      delayRepeat: 5000
    },
    {
      uid: '000000000016',
      name: 'Doors',
      keybind: 'Semicolon',
      modifiers: [Modifier.RightShift, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000017',
      name: 'Scanning mode',
      keybind: 'V',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000018',
      name: 'Scanning increase',
      keybind: '',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000019',
      name: 'Scanning decrease',
      keybind: '',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000020',
      name: 'Emergency exit seat',
      keybind: 'U',
      modifiers: [Modifier.LeftShift, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000021',
      name: 'Emergency exit seat',
      keybind: 'Y',
      modifiers: [Modifier.RightAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000022',
      name: 'Exit seat',
      keybind: 'Y',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000023',
      name: 'Ping Infinite',
      keybind: 'V',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 'infinite',
      delayRepeat: 5000
    },
    {
      uid: '000000000024',
      name: 'Lights',
      keybind: 'L',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000025',
      name: 'Req. Jump',
      keybind: 'Equals',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000026',
      name: 'Jump',
      keybind: 'Equals',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000027',
      name: 'In View Next',
      keybind: 'T',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000028',
      name: 'In View Reticule',
      keybind: 'T',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000029',
      name: 'All targets',
      keybind: '7',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000030',
      name: 'All targets Closest',
      keybind: '7',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000031',
      name: 'Hostiles Next',
      keybind: '5',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000032',
      name: 'Hostiles Closest',
      keybind: '7',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000033',
      name: 'Attackers Next',
      keybind: '4',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000034',
      name: 'Attackers Closest',
      keybind: '4',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000035',
      name: 'Fiendlies Next',
      keybind: '6',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000036',
      name: 'Fiendlies Closest',
      keybind: '6',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000037',
      name: 'Pin 1',
      keybind: '1',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000038',
      name: 'Pin 1 Toggle Lock',
      keybind: '1',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000039',
      name: 'Pin 2',
      keybind: '2',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000040',
      name: 'Pin 2 Toggle Lock',
      keybind: '2',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000041',
      name: 'Pin 3',
      keybind: '3',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000042',
      name: 'Pin 3 Toggle Lock',
      keybind: '3',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000043',
      name: 'Remove all pins',
      keybind: '0',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000044',
      name: 'Unlock Locked target',
      keybind: 'T',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000045',
      name: 'Mining Mode',
      keybind: 'Semicolon',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000046',
      name: 'Salvage Mode',
      keybind: 'Semicolon',
      modifiers: [Modifier.None, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000047',
      name: 'Minig Mod 1',
      keybind: '1',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000048',
      name: 'Minig Mod 2',
      keybind: '2',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    },
    {
      uid: '000000000049',
      name: 'Minig Mod 3',
      keybind: '3',
      modifiers: [Modifier.LeftAlt, Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 0,
      delayRepeat: 1000
    }
  ]
}

export const DefaultKeybinds: KeyBindList[] = [SCDefault]
