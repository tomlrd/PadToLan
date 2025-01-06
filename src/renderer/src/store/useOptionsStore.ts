import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Options } from '../types/options'

interface OptionsState {
  options: Options
  setOptions: (newOptions: Partial<Options>) => void
  resetOptions: () => void
  getOptions: () => Options
}

const defaultOptions: Options = {
  ipsWhitelist: [],
  port: 3000,
  multi: false
}

export const useOptionsStore = create<OptionsState>()(
  persist(
    (set, get) => ({
      options: defaultOptions,
      setOptions: (newOptions) =>
        set((state) => ({
          options: { ...state.options, ...newOptions }
        })),
      resetOptions: () => set({ options: defaultOptions }),
      getOptions: () => get().options
    }),
    {
      name: 'options-store',
      partialize: (state) => ({ options: state.options })
    }
  )
)

export default useOptionsStore
