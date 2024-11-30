import { create } from 'zustand'
import { KeyBind, KeyBindList } from '../types/keybinds'

interface KeyBindStore {
  keyBindLists: KeyBindList[]
  selectedKeyBindList: KeyBindList | null
  setKeyBindLists: (lists: KeyBindList[]) => void
  setSelectedKeyBindList: (list: KeyBindList | null) => void
  updateKeyBindList: (updatedList: KeyBindList) => void
  addKeyBind: (listUid: string, keyBind: KeyBind) => void
  removeKeyBind: (listUid: string, keyBindUid: string) => void
}

const useKeyBindStore = create<KeyBindStore>((set) => ({
  keyBindLists: [],
  selectedKeyBindList: null,
  setKeyBindLists: (lists) => set({ keyBindLists: lists }),
  setSelectedKeyBindList: (list) => set({ selectedKeyBindList: list }),
  updateKeyBindList: (updatedList) =>
    set((state) => ({
      keyBindLists: state.keyBindLists.map((list) =>
        list.uid === updatedList.uid ? updatedList : list
      )
    })),
  addKeyBind: (listUid, keyBind) =>
    set((state) => ({
      keyBindLists: state.keyBindLists.map((list) =>
        list.uid === listUid ? { ...list, keybinds: [...list.keybinds, keyBind] } : list
      )
    })),
  removeKeyBind: (listUid, keyBindUid) =>
    set((state) => ({
      keyBindLists: state.keyBindLists.map((list) =>
        list.uid === listUid
          ? {
              ...list,
              keybinds: list.keybinds.filter((keyBind) => keyBind.uid !== keyBindUid)
            }
          : list
      )
    }))
}))

export default useKeyBindStore
