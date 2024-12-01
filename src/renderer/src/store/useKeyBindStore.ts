import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { KeyBind, KeyBindList } from '../types/keybinds'
import { defaultKeyBindList } from '../default/defaultKeybinds'

interface KeyBindStore {
  keyBindLists: KeyBindList[]
  selectedKeyBindListUid: string | null

  // Sélecteurs
  selectKeyBindList: (uid: string) => void

  // Modifications
  addDefaultKeyBindList: () => void
  addDefaultKeyBind: (keyBindListUid: string) => void
  updateKeyBindList: (updatedKeyBindList: KeyBindList) => void
  deleteKeyBindList: (uid: string) => void
}

export const useKeyBindStore = create<KeyBindStore>()(
  persist(
    (set, get) => ({
      keyBindLists: [],
      selectedKeyBindListUid: null,

      // Sélectionner une liste de keybinds
      selectKeyBindList: (uid) => set({ selectedKeyBindListUid: uid }),

      // Ajouter une liste de keybinds par défaut
      addDefaultKeyBindList: () => {
        const newKeyBindList = { ...defaultKeyBindList, uid: uuidv4() }
        set((state) => ({
          keyBindLists: [...state.keyBindLists, newKeyBindList],
          selectedKeyBindListUid: newKeyBindList.uid
        }))
      },

      // Ajouter un keybind par défaut dans une liste existante
      addDefaultKeyBind: (keyBindListUid) => {
        const { keyBindLists } = get()
        const list = keyBindLists.find((list) => list.uid === keyBindListUid)
        if (!list) return

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

        set({
          keyBindLists: keyBindLists.map((list) =>
            list.uid === keyBindListUid ? updatedKeyBindList : list
          )
        })
      },

      // Mettre à jour une liste de keybinds
      updateKeyBindList: (updatedKeyBindList) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.map((list) =>
            list.uid === updatedKeyBindList.uid ? updatedKeyBindList : list
          )
        }))
      },

      // Supprimer une liste de keybinds
      deleteKeyBindList: (uid) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.filter((list) => list.uid !== uid),
          selectedKeyBindListUid:
            get().selectedKeyBindListUid === uid ? null : get().selectedKeyBindListUid
        }))
      }
    }),
    {
      name: 'keybind-store' // Clé pour le localStorage
    }
  )
)
