import { KeyBindList, Modifier } from '../types/keybinds'
import { v4 as uuidv4 } from 'uuid'

export const defaultKeyBindList: KeyBindList = {
  uid: uuidv4(),
  name: 'Default KeyBind',
  keybinds: [
    {
      uid: uuidv4(),
      name: 'Default Action 1',
      keybind: 'A',
      modifiers: [],
      doubletap: false,
      hold: false,
      repeat: true,
      repeatNumber: 1,
      delayRepeat: 0
    },
    {
      uid: uuidv4(),
      name: 'Default Action 2',
      keybind: 'B',
      modifiers: [],
      doubletap: false,
      hold: true,
      repeat: true,
      repeatNumber: 'infinite',
      delayRepeat: 500
    },
    {
      uid: uuidv4(),
      name: 'Default Action 2',
      keybind: 'B',
      modifiers: [Modifier.LeftAlt],
      doubletap: false,
      hold: false,
      repeat: false,
      repeatNumber: 0,
      delayRepeat: 0
    }
  ]
}

export const blankKeyBindList: KeyBindList = {
  uid: uuidv4(),
  name: 'New KeyBinds',
  keybinds: []
}
