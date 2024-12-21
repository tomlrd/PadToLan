// useKeyBindStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { KeyBind, KeyBindList } from '../types/keybinds'
import { defaultKeyBindList, blankKeyBindList } from '../default/defaultKeybinds'

interface KeyBindStore {
  keyBindLists: KeyBindList[]
  selectedKeyBindListUid: string | null

  // Selectors
  selectKeyBindList: (uid: string) => void

  // Modifications
  addDefaultKeyBindList: () => void
  addBlankKeyBindList: () => void
  addDefaultKeyBind: (keyBindListUid: string) => void
  deleteKeyBind: (keyBindListUid: string, keyBindUid: string) => void
  updateKeyBindList: (updatedKeyBindList: KeyBindList) => void
  deleteKeyBindList: (uid: string) => void
}

export const useKeyBindStore = create<KeyBindStore>()(
  persist(
    (set, get) => ({
      keyBindLists: [],
      selectedKeyBindListUid: null,

      // Select a keybind list
      selectKeyBindList: (uid) => {
        const existingList = get().keyBindLists.find((list) => list.uid === uid)
        if (existingList) {
          set({ selectedKeyBindListUid: uid })
        }
      },

      // Add a default keybind list
      addDefaultKeyBindList: () => {
        const newKeyBindList = { ...defaultKeyBindList, uid: uuidv4() }
        set((state) => ({
          keyBindLists: [...state.keyBindLists, newKeyBindList],
          selectedKeyBindListUid: newKeyBindList.uid
        }))
      },

      // Add a blank keybind list
      addBlankKeyBindList: () => {
        const newBlankKeyBindList: KeyBindList = {
          ...blankKeyBindList,
          uid: uuidv4()
        }

        set((state) => ({
          keyBindLists: [...state.keyBindLists, newBlankKeyBindList],
          selectedKeyBindListUid: newBlankKeyBindList.uid
        }))
      },

      // Add a default keybind to an existing list
      addDefaultKeyBind: (keyBindListUid) => {
        const { keyBindLists } = get()
        const list = keyBindLists.find((list) => list.uid === keyBindListUid)

        if (!list) {
          console.error(`KeyBindList with UID ${keyBindListUid} not found.`)
          return
        }

        const newKeyBind: KeyBind = {
          uid: uuidv4(),
          name: 'New Keybind',
          keybind: null,
          modifiers: [],
          doubletap: false,
          hold: false,
          repeat: false,
          repeatNumber: 1,
          delayRepeat: 0
        }

        const updatedKeyBindList = {
          ...list,
          keybinds: [...list.keybinds, newKeyBind]
        }

        set((state) => ({
          keyBindLists: state.keyBindLists.map((list) =>
            list.uid === keyBindListUid ? updatedKeyBindList : list
          )
        }))
      },

      // Delete a specific keybind from a keybind list
      deleteKeyBind: (keyBindListUid, keyBindUid) => {
        const { keyBindLists } = get()
        const list = keyBindLists.find((list) => list.uid === keyBindListUid)

        if (!list) {
          console.error(`KeyBindList with UID ${keyBindListUid} not found.`)
          return
        }

        const updatedKeyBindList = {
          ...list,
          keybinds: list.keybinds.filter((keybind) => keybind.uid !== keyBindUid)
        }

        set((state) => ({
          keyBindLists: state.keyBindLists.map((list) =>
            list.uid === keyBindListUid ? updatedKeyBindList : list
          )
        }))
      },

      // Update a keybind list
      updateKeyBindList: (updatedKeyBindList) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.map((list) =>
            list.uid === updatedKeyBindList.uid ? updatedKeyBindList : list
          )
        }))
      },

      // Delete a keybind list
      deleteKeyBindList: (uid) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.filter((list) => list.uid !== uid),
          selectedKeyBindListUid:
            get().selectedKeyBindListUid === uid ? null : get().selectedKeyBindListUid
        }))
      }
    }),
    {
      name: 'keybind-store' // LocalStorage key
    }
  )
)
