import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { KeyBindList, KeyBind } from '../types/keybinds'
import { defaultKeyBindList } from '../default/defaultKeybinds'

interface KeyBindStore {
  keyBindLists: KeyBindList[]
  addDefaultKeyBindList: () => void
  addKeyBindList: (keyBindList: Omit<KeyBindList, 'uid'>) => void
  addDefaultKeyBind: (keyBindListUid: string) => void // Nouvelle méthode
  updateKeyBindList: (updatedKeyBindList: KeyBindList) => void
  deleteKeyBindList: (uid: string) => void
}

const useKeyBindStore = create(
  persist<KeyBindStore>(
    (set, get) => ({
      keyBindLists: [],

      // Ajouter une liste par défaut si aucune n'existe
      addDefaultKeyBindList: () => {
        const defaultList = { ...defaultKeyBindList, uid: uuidv4() }
        set((state) => ({
          keyBindLists: [...state.keyBindLists, defaultList]
        }))
      },

      // Ajouter une nouvelle liste de KeyBind
      addKeyBindList: (keyBindList) => {
        const newKeyBindList = { ...keyBindList, uid: uuidv4() }
        set((state) => ({
          keyBindLists: [...state.keyBindLists, newKeyBindList]
        }))
      },

      // Ajouter une touche par défaut à une liste existante
      addDefaultKeyBind: (keyBindListUid) => {
        const state = get()
        const targetKeyBindList = state.keyBindLists.find((list) => list.uid === keyBindListUid)

        if (targetKeyBindList) {
          const newKeyBind: KeyBind = {
            uid: uuidv4(),
            name: `Default Action ${targetKeyBindList.keybinds.length + 1}`,
            keybind: 'A',
            modifiers: [],
            doubletap: false,
            hold: false,
            repeat: true,
            repeatNumber: 1,
            delayRepeat: 0
          }

          const updatedKeyBindList: KeyBindList = {
            ...targetKeyBindList,
            keybinds: [...targetKeyBindList.keybinds, newKeyBind]
          }

          set((state) => ({
            keyBindLists: state.keyBindLists.map((list) =>
              list.uid === keyBindListUid ? updatedKeyBindList : list
            )
          }))
        }
      },

      // Mettre à jour une liste existante
      updateKeyBindList: (updatedKeyBindList) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.map((keyBindList) =>
            keyBindList.uid === updatedKeyBindList.uid ? updatedKeyBindList : keyBindList
          )
        }))
      },

      // Supprimer une liste de KeyBind
      deleteKeyBindList: (uid) => {
        set((state) => ({
          keyBindLists: state.keyBindLists.filter((keyBindList) => keyBindList.uid !== uid)
        }))
      }
    }),
    {
      name: 'keybind-store' // Clé pour le localStorage
    }
  )
)

export default useKeyBindStore
