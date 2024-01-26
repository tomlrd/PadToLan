import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Options } from '../types/options'

import { DefaultOptions } from './optionsdefault'

export type Options_ = {
  options: Options
}

export type Actions = {
  updateOptions: (type: [string, string], data: any) => void
}

type OptionsStore = Options_ & Actions

const initialValues: Options_ = {
  options: DefaultOptions
}

export const useOptionsStore = create<OptionsStore>()(
  persist(
    (set, get) => ({
      ...initialValues,
      updateOptions: (type: [string, string], data: any) => {
        const opts = get().options
        let newOptions: Options = { ...opts }
        switch (type[0]) {
          case 'general':
            switch (type[1]) {
              case 'startwithwindows':
                newOptions.general.startWithWindows = data
                break
              case 'serverwhenstart':
                newOptions.general.serverwhenstart = data
                break
              case 'startMinimized':
                newOptions.general.startMinimized = data
                break
              case 'minimizeInNotif':
                newOptions.general.minimizeInNotif = data
                break
              case 'blockToFile':
                newOptions.general.blockToFile = data
                break
              default:
                break
            }
            break
          case 'server':
            switch (type[1]) {
              case 'port':
                newOptions.server.port = data
                break
              case 'ipwhitelist':
                if (data.trim() === '') {
                  newOptions.server.ipwhitelist = []
                } else {
                  newOptions.server.ipwhitelist = data.split(',').map((element) => element.trim())
                }
                break
              case 'maxConnections':
                newOptions.server.maxConnections = Number(data)
                break
              default:
                break
            }
            break
          default:
            break
        }
        set(() => ({
          options: newOptions
        }))
      }
    }),
    {
      name: 'options',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        options: state.options
      })
    }
  )
)
