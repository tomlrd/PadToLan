import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { KeyBind, KeyBindList } from '../types/keybinds'
import { defaultKeyBindList, blankKeyBindList } from '../default/defaultKeybinds'
import { defaultSC40KeybindList } from '../default/defaultSC4-0Keybinds'

interface KeyBindStore {
  keyBindLists: KeyBindList[]
  selectedKeyBindListUid: string | null

  selectKeyBindList: (uid: string) => void
  findKeyBind: (keyBindUid: string) => KeyBind | null
  getKeyBindList: (uid: string) => KeyBindList | undefined
  getAllKeyBindLists: () => KeyBindList[]
  addDefaultKeyBindList: () => void
  addDefaultKeyBindListSC: () => void
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

      selectKeyBindList: (uid) => {
        const existingList = get().keyBindLists.find((list) => list.uid === uid)
        if (existingList) {
          set({ selectedKeyBindListUid: uid })
        }
      },

      addDefaultKeyBindList: () => {
        const newKeyBindList = { ...defaultKeyBindList, uid: uuidv4() }
        set((state) => ({
          keyBindLists: [...state.keyBindLists, newKeyBindList],
          selectedKeyBindListUid: newKeyBindList.uid
        }))
      },

      addDefaultKeyBindListSC: () => {
        set((state) => ({
          keyBindLists: [...state.keyBindLists, defaultSC40KeybindList],
          selectedKeyBindListUid: defaultSC40KeybindList.uid
        }))
      },

      getKeyBindList: (uid) => {
        const { keyBindLists } = get()
        return keyBindLists.find((list) => list.uid === uid)
      },

      getAllKeyBindLists: () => {
        return get().keyBindLists
      },

      findKeyBind: (keyBindUid) => {
        const { keyBindLists } = get()
        for (const list of keyBindLists) {
          const foundKeyBind = list.keybinds.find((keybind) => keybind.uid === keyBindUid)
          if (foundKeyBind) {
            return foundKeyBind
          }
        }
        return null
      },

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
          repeatNumber: 0,
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

      updateKeyBindList: (updatedKeyBindList) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.map((list) =>
            list.uid === updatedKeyBindList.uid ? updatedKeyBindList : list
          )
        }))
      },
      deleteKeyBindList: (uid) => {
        set((state) => {
          const filteredKeyBindLists = state.keyBindLists.filter((list) => list.uid !== uid)

          if (filteredKeyBindLists.length === state.keyBindLists.length) {
            console.error(`No KeyBindList found with UID: ${uid}`)
          }

          return {
            keyBindLists: [...filteredKeyBindLists],
            selectedKeyBindListUid:
              state.selectedKeyBindListUid === uid ? null : state.selectedKeyBindListUid
          }
        })
      }
    }),
    {
      name: 'keybind-store'
    }
  )
)
