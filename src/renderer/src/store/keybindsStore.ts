import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { KeyBind, KeyBindList } from '../types/keybinds'
import { DefaultKeybinds, getBlankKeyBindList, getBlankKeyBind } from './keybindsdefault'

export type Keybinds = {
  keybindlist: KeyBindList[]
  kbselectedList: KeyBindList | null
  kbselectedItem: KeyBind | null
  lastkblist: string | null
}

export type Actions = {
  getKeybindList: (uid: string) => void
  getKeybind: (uid: string) => void
  addKeybindList: () => void
  resetKeybindList: () => void
  updateKeybind: (type: any, key: string | boolean | null) => void
  updateKeybindList: (type: any, data: any) => void
  removeKeybindList: () => void
  removeKeybind: () => void
  addKeybind: () => void
}

type KeyBindsStore = Keybinds & Actions

const initialValues: Keybinds = {
  keybindlist: [],
  kbselectedList: null,
  kbselectedItem: null,
  lastkblist: null
}

export const useKeyBindsStore = create<KeyBindsStore>()(
  persist(
    (set, get) => ({
      ...initialValues,
      getKeybindList: (uid: string) => {
        const foundList = get().keybindlist?.find((list) => list.uid === uid)
        set(() => ({
          kbselectedList: foundList,
          lastkblist: uid
        }))
      },
      resetKeybindList: () => {
        set(() => ({
          keybindlist: DefaultKeybinds,
          kbselectedList: DefaultKeybinds[0],
          kbselectedItem: null,
          lastkblist: DefaultKeybinds[0].uid
        }))
      },
      getKeybind: (uid: string) => {
        const foundKeybind = get().kbselectedList?.keybinds.find((list) => list.uid === uid)
        set(() => ({
          kbselectedItem: foundKeybind
        }))
      },
      addKeybind: () => {
        const keybindlist = get().keybindlist
        const kbselectedList = get().kbselectedList
        if (!keybindlist || !kbselectedList) {
          return
        }

        const newKeybind = getBlankKeyBind()
        const updatedList = keybindlist.map((list) => {
          if (list.uid === kbselectedList.uid) {
            return {
              ...list,
              keybinds: [...list.keybinds, newKeybind]
            }
          }
          return list
        })

        const updatedSelectedList = updatedList.find((list) => list.uid === kbselectedList.uid)

        set(() => ({
          keybindlist: updatedList,
          kbselectedList: updatedSelectedList
        }))
      },
      removeKeybind: () => {
        const keybindlist = get().keybindlist
        const kbselectedList = get().kbselectedList
        const kbselectedItem = get().kbselectedItem
        if (!keybindlist || !kbselectedList || !kbselectedItem) {
          return
        }

        const updatedList = keybindlist.map((list) => {
          if (list.uid === kbselectedList.uid) {
            const updatedKeybinds = list.keybinds.filter(
              (keybind) => keybind.uid !== kbselectedItem.uid
            )
            return {
              ...list,
              keybinds: updatedKeybinds
            }
          }
          return list
        })

        const updatedSelectedList = updatedList.find((list) => list.uid === kbselectedList.uid)

        set(() => ({
          keybindlist: updatedList,
          kbselectedList: updatedSelectedList,
          kbselectedItem: null
        }))
      },

      addKeybindList: () => {
        const keybindlist = get().keybindlist
        const newList = getBlankKeyBindList()
        if (!keybindlist) {
          return
        }
        set(() => ({
          keybindlist: [...keybindlist, newList],
          kbselectedList: newList,
          kbselectedItem: null,
          lastkblist: newList.uid
        }))
      },
      removeKeybindList: () => {
        const keybindlist = get().keybindlist
        const kbselectedList = get().kbselectedList

        if (!keybindlist || !kbselectedList) {
          return
        }

        const updatedKeybindList = keybindlist.filter((list) => list.uid !== kbselectedList.uid)

        set(() => ({
          keybindlist: updatedKeybindList,
          kbselectedList: updatedKeybindList[updatedKeybindList.length - 1],
          kbselectedItem: null,
          lastkblist: null
        }))
      },

      updateKeybindList: (type: string, data: string) => {
        const keybindlist = get().keybindlist
        const kbselectedList = get().kbselectedList

        if (!keybindlist || !kbselectedList) return

        let updatedList: KeyBindList | undefined = undefined

        switch (type) {
          case 'name':
            updatedList = {
              ...kbselectedList,
              name: data
            }
            break
          default:
            break
        }

        if (!updatedList) return

        const updatedKeybindLists = keybindlist.map((list) =>
          list.uid === updatedList!.uid ? updatedList! : list
        )

        set(() => ({
          keybindlist: updatedKeybindLists,
          kbselectedList: updatedList
        }))
      },

      updateKeybind: (type: string, key: string | boolean | null) => {
        const keybindlist = get().keybindlist
        const kbselectedList = get().kbselectedList
        const kbselectedItem = get().kbselectedItem
        if (!keybindlist || !kbselectedItem || !kbselectedList) return

        let updatedItem

        switch (type) {
          case 'name':
            updatedItem = {
              ...kbselectedItem,
              name: key
            }
            break
          case 'key':
            updatedItem = {
              ...kbselectedItem,
              keybind: key === null ? [] : [key]
            }
            break
          case 'modifier':
            updatedItem = {
              ...kbselectedItem,
              modifiers:
                key === 'None'
                  ? ['None', kbselectedItem.modifiers[1]]
                  : [key, kbselectedItem.modifiers[1]]
            }
            break
          case 'modifier2':
            updatedItem = {
              ...kbselectedItem,
              modifiers:
                key === 'None'
                  ? [kbselectedItem.modifiers[0], 'None']
                  : [kbselectedItem.modifiers[0], key]
            }
            break
          case 'doubletap':
            console.log(key)

            updatedItem = {
              ...kbselectedItem,
              doubletap: key
            }
            break
          case 'hold':
            console.log(key)

            updatedItem = {
              ...kbselectedItem,
              hold: key
            }
            break
          default:
            break
        }

        let updatedKeybindlist
        const updatedKeybindLists = keybindlist.map((list) => {
          if (list.uid === kbselectedList.uid) {
            updatedKeybindlist = list.keybinds.map((item) =>
              item.uid === updatedItem.uid ? updatedItem : item
            )
            return {
              ...list,
              keybinds: updatedKeybindlist
            }
          }
          return list
        })

        const updatedkbselectedList = updatedKeybindLists.find(
          (list) => list.uid === kbselectedList.uid
        )

        set(() => ({
          keybindlist: updatedKeybindLists,
          kbselectedList: updatedkbselectedList, // Mettre à jour kbselectedList avec la valeur mise à jour
          kbselectedItem: updatedItem
        }))
      }
    }),
    {
      name: 'keybindlist',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        keybindlist: state.keybindlist,
        lastkblist: state.lastkblist
      }),
      onRehydrateStorage: (state) => {
        /*                 if (state.keybindlist?.length === 0) {
                    state.keybindlist = DefaultKeybinds
                    state.kbselectedList = DefaultKeybinds[0]
                    state.lastkblist = DefaultKeybinds[0].uid
                } */
      }
    }
  )
)
