import { ipcMain } from 'electron'
const { keyboard, Key } = require('@nut-tree/nut-js')
//import activeWindow from 'active-win'
keyboard.config.autoDelayMs = 50
console.log(Key)

// Tableau pour stocker les identifiants des intervalles
const intervalIds: any = []

ipcMain.on('action:key', async (_e, [args, _block]) => {
  console.log(args)

  //const activeWin = await activeWindow()
  /*     if (activeWin?.owner.name !== block && block.trim().length !== 0) {
            return
        } */
  const keyString = args.key
  const keyM1 = args.modifiers[0]
  const keyM2 = args.modifiers[1]
  console.log(keyString)

  try {
    let keysToPress: any = []
    console.log('__________')
    console.log(keyString)

    if (keyString !== undefined) {
      if (keyString === 'Semicolon') {
        keysToPress = [Key['M']]
      }
      else if (keyString >= 0 && keyString <= 9) {
        keysToPress = [Key[`Num${keyString}`]];
      }
      else {
        keysToPress = [Key[keyString]]
      }
    }

    if (keyM1 !== 'None') {
      keysToPress.unshift(Key[keyM1])
    }
    if (keyM2 !== 'None') {
      keysToPress.unshift(Key[keyM2])
    }

    switch (true) {
      case args.repeat === 'infinite':
      case Number(args.repeat) > 1:
        createInterval(keysToPress, args)
        break
      default:
        
        if (args.doubletap === true) {
          doubletap(keysToPress)
          return
        } else if (args.hold === true) {
          hold(keysToPress)
          return
        } else {
          console.log('la');
          
          await keyboard.pressKey(...keysToPress)
          await keyboard.releaseKey(...keysToPress)
        }
        console.log(keysToPress)

        break
    }
  } catch (error) {
    console.log('err', error)
  }
})

async function doubletap(ktp: any) {
  const spec = await handleSpecial(ktp[0])
  console.log(spec)
  if (spec) {
    console.log('special')
    await keyboard.pressKey(ktp[0])
    await keyboard.pressKey(ktp[1])
    await keyboard.releaseKey(ktp[1])
    await keyboard.pressKey(ktp[1])
    await keyboard.releaseKey(ktp[1])
    await keyboard.releaseKey(ktp[0])
  } else {
    await keyboard.pressKey(...ktp)
    await keyboard.releaseKey(...ktp)
    setTimeout(async () => {
      await keyboard.pressKey(...ktp)
      await keyboard.releaseKey(...ktp)
    }, 100)
  }
}

async function hold(ktp: any) {
  await keyboard.pressKey(...ktp)
  setTimeout(async () => {
    await keyboard.releaseKey(...ktp)
  }, 1000)
}

async function handleSpecial(mod: string) {
  if (mod === 'RightAlt' || 'RightShift' || 'RightControl') {
    return true
  } else {
    return false
  }
}

function createInterval(keysToPress, args) {
  const foundInt = intervalIds.find((int) => int.id === args.uid)
  const index = intervalIds.findIndex((int) => int.id === args.uid)
  console.log('nombre de fois a repeat', args.repeat)

  if (foundInt !== undefined) {
    console.log('foundInt', foundInt.id)
    clearInterval(foundInt.intervalId)
    intervalIds.splice(index, 1)
  } else {
    console.log('pas de foundInt')
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex === args.repeat) {
        clearInterval(intervalId)
        intervalIds.splice(index, 1)
      } else {
        currentIndex++
        console.log(currentIndex)
        if (args.doubletap === true) {
          doubletap(keysToPress)
          console.log('loop press with doubletap', ...keysToPress)
          return
        }
        if (args.hold === true) {
          console.log('loop press with hold', ...keysToPress)
          hold(keysToPress)
          return
        }
        keyboard.pressKey(...keysToPress)
        keyboard.releaseKey(...keysToPress)
        console.log('press', ...keysToPress)
      }
    }, args.delayRepeat)
    intervalIds.push({ id: args.uid, intervalId })
  }
  console.log('intervalIds.length', intervalIds.length)
}


export const clearAllIntervals = () => {
  intervalIds.forEach((intervalId) => {
    clearInterval(intervalId);
    intervalIds.length = 0;
  });
};