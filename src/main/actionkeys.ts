import { ipcMain } from 'electron'
const { keyboard, Key } = require('@nut-tree/nut-js')
keyboard.config.autoDelayMs = 50

console.log(Key);


const intervalIds: any = []

ipcMain.on('action:key', async (_e, [args, _block]) => {

  
  const keyString = args.keybind
  const keyM1 = args.modifiers[0]
  const keyM2 = args.modifiers[1]

  console.log('______');
  console.log(keyString);
  

  try {
    let keysToPress: any = []

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

    if (args.repeat === 'infinite' || Number(args.repeat) > 1) {
      createInterval(keysToPress, args)
    } else {
      if (args.doubletap === true) {
        doubletap(keysToPress)
      } else if (args.hold === true) {
        hold(keysToPress)
      } else {
        console.log('la');
        const spec = await handleSpecial(keysToPress[0])
        if (spec) {
          //a verif
        console.log('1');
          
          await keyboard.pressKey(keysToPress[0])
          await keyboard.pressKey(keysToPress[1])
          await keyboard.releaseKey(keysToPress[1])
          await keyboard.releaseKey(keysToPress[0])
        } else {
        console.log('2');

          await keyboard.pressKey(...keysToPress)
          await keyboard.releaseKey(...keysToPress)
        }
      }

      console.log(keysToPress)
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
  if (mod === 'RightAlt' || 'RightShift' || 'RightControl' || 'LeftAlt' || 'LeftShift' || 'LeftControl') {
    return true
  } else {
    return false
  }
}

function createInterval(keysToPress, args) {
  const foundInt = intervalIds.find((int) => int.id === args.uid)
  const index = intervalIds.findIndex((int) => int.id === args.uid)
  console.log('number to repeat', args.repeat)

  if (foundInt !== undefined) {
    clearInterval(foundInt.intervalId)
    intervalIds.splice(index, 1)
  } else {
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
}


export const clearAllIntervals = () => {
  intervalIds.forEach((intervalId) => {
    clearInterval(intervalId);
    intervalIds.length = 0;
  });
};