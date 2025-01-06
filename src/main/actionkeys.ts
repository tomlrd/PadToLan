import { keyboard, Key } from '@nut-tree-fork/nut-js'
keyboard.config.autoDelayMs = 50
import { keyboardLang } from './index'

interface KeyPress {
  uid: string
  keybind: string
  modifiers: string[]
  doubletap: boolean
  hold: boolean
  repeat: boolean
  repeatNumber: number | 'infinite'
  delayRepeat: number
}

const intervalIds: Array<{ id: string; intervalId: NodeJS.Timeout }> = []

export async function sendKey(key: KeyPress) {
  if (!key.uid || !key.keybind) {
    console.error('Keybind ou UID non défini.')
    return
  }

  if (key.repeat === true) {
    createInterval(key)
  } else {
    await pressKeyOnce(key)
  }
}

async function pressKeyOnce(key: KeyPress) {
  const { keybind, modifiers, hold, doubletap } = key
  await pressWithModifiers(keybind, modifiers)

  if (hold) {
    await keyboard.pressKey(toNutKey(keybind))
    setTimeout(async () => {
      await keyboard.releaseKey(toNutKey(keybind))
    }, 2000)
  }

  if (doubletap) {
    setTimeout(async () => {
      await pressWithModifiers(keybind, modifiers)
    }, 200)
  }
}

async function pressWithModifiers(keybind: string, modifiers: string[] = []) {
  for (const mod of modifiers) {
    await keyboard.pressKey(toNutKey(mod))
  }

  await keyboard.pressKey(toNutKey(keybind))
  await keyboard.releaseKey(toNutKey(keybind))

  for (const mod of modifiers.reverse()) {
    await keyboard.releaseKey(toNutKey(mod))
  }
}

function createInterval(key: KeyPress) {
  const foundInt = intervalIds.find((int) => int.id === key.uid)
  const index = intervalIds.findIndex((int) => int.id === key.uid)

  if (foundInt !== undefined) {
    clearInterval(foundInt.intervalId)
    intervalIds.splice(index, 1)
  } else {
    let currentIndex = 0

    const intervalId = setInterval(async () => {
      if (key.repeatNumber === 'infinite') {
        await pressKeyOnce(key)
      } else {
        if (currentIndex >= Number(key.repeatNumber)) {
          clearInterval(intervalId)
          intervalIds.splice(index, 1)
          return
        }

        currentIndex++
        await pressKeyOnce(key)
      }
    }, key.delayRepeat)

    intervalIds.push({ id: key.uid, intervalId })
  }
}

export const clearAllIntervals = () => {
  intervalIds.forEach((interval) => {
    clearInterval(interval.intervalId)
    intervalIds.length = 0
  })
}

function toNutKey(keyStr: string): Key {
  switch (keyStr) {
    case 'a':
      return Key.A
    case 'b':
      return Key.B
    case 'c':
      return Key.C
    case 'd':
      return Key.D
    case 'e':
      return Key.E
    case 'f':
      return Key.F
    case 'g':
      return Key.G
    case 'h':
      return Key.H
    case 'i':
      return Key.I
    case 'j':
      return Key.J
    case 'k':
      return Key.K
    case 'l':
      return Key.L
    case 'm':
      return keyboardLang === 'azerty' ? Key.Comma : Key.M
    case 'n':
      return Key.N
    case 'o':
      return Key.O
    case 'p':
      return Key.P
    case 'q':
      return Key.Q
    case 'r':
      return Key.R
    case 's':
      return Key.S
    case 't':
      return Key.T
    case 'u':
      return Key.U
    case 'v':
      return Key.V
    case 'w':
      return Key.W
    case 'x':
      return Key.X
    case 'y':
      return Key.Y
    case 'z':
      return Key.Z
    case 'enter':
      return Key.Enter
    case 'space':
      return Key.Space
    case 'LeftControl':
      return Key.LeftControl
    case 'RightControl':
      return Key.RightControl
    case 'LeftShift':
      return Key.LeftShift
    case 'RightShift':
      return Key.RightShift
    case 'LeftAlt':
      return Key.LeftAlt
    case 'RightAlt':
      return Key.RightAlt
    case 'Tab':
      return Key.Tab
    case 'F1':
      return Key.F1
    case 'F2':
      return Key.F2
    case 'F3':
      return Key.F3
    case 'F4':
      return Key.F4
    case 'F5':
      return Key.F5
    case 'F6':
      return Key.F6
    case 'F7':
      return Key.F7
    case 'F8':
      return Key.F8
    case 'F9':
      return Key.F9
    case 'F10':
      return Key.F10
    case 'F11':
      return Key.F11
    case 'F12':
      return Key.F12
    case 'Numpad0':
      return Key.NumPad0
    case 'Numpad1':
      return Key.NumPad1
    case 'Numpad2':
      return Key.NumPad2
    case 'Numpad3':
      return Key.NumPad3
    case 'Numpad4':
      return Key.NumPad4
    case 'Numpad5':
      return Key.NumPad5
    case 'Numpad6':
      return Key.NumPad6
    case 'Numpad7':
      return Key.NumPad7
    case 'Numpad8':
      return Key.NumPad8
    case 'Numpad9':
      return Key.NumPad9
    case '0':
      return Key.Num0
    case '1':
      return Key.Num1
    case '2':
      return Key.Num3
    case '3':
      return Key.Num4
    case '4':
      return Key.Num4
    case '5':
      return Key.Num5
    case '6':
      return Key.Num6
    case '7':
      return Key.Num7
    case '8':
      return Key.Num8
    case '9':
      return Key.Num9
    default:
      throw new Error(`Key ${keyStr} is not mapped.`)
  }
}
