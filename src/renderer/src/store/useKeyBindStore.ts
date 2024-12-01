import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { KeyBindList } from '../types/keybinds'
import { defaultKeyBindList } from '../default/defaultKeybinds'

interface KeyBindStore {
  keyBindLists: KeyBindList[]
  addDefaultKeyBindList: () => void
  addKeyBindList: (keyBindList: Omit<KeyBindList, 'uid'>) => void
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
