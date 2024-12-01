import { KeyBindList, Modifier } from '../types/keybinds'

export const defaultKeyBindList: KeyBindList = {
  uid: 'default-keybind',
  name: 'Default KeyBind',
  keybinds: [
    {
      uid: 'default-action-1',
      name: 'Default Action 1',
      keybind: 'A',
      modifiers: [Modifier.None],
      doubletap: false,
      hold: false,
      repeat: 1,
      delayRepeat: 0
    },
    {
      uid: 'default-action-2',
      name: 'Default Action 2',
      keybind: 'B',
      modifiers: [Modifier.None],
      doubletap: false,
      hold: true,
      repeat: 'infinite',
      delayRepeat: 500
    }
  ]
}
