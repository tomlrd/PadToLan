import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Layout } from '../types/layouts'
import { getDefaultLayout } from '../default/defaultLayouts'

interface LayoutStore {
  layouts: Layout[]
  selectedLayoutUid: string | null
  addLayout: (layout: Omit<Layout, 'uid'>) => void
  addDefaultLayout: () => void // Conserve cette méthode
  updateLayout: (updatedLayout: Layout) => void
  deleteLayout: (uid: string) => void
  setSelectedLayout: (uid: string | null) => void
  selectedLayout: Layout | null // Propriété calculée pour le layout sélectionné
}

const useLayoutStore = create(
  persist<LayoutStore>(
    (set, get) => ({
      layouts: [],
      selectedLayoutUid: null,

      addLayout: (layout) => {
        const newLayout = { ...layout, uid: uuidv4() }
        set((state) => ({
          layouts: [...state.layouts, newLayout],
          selectedLayoutUid: newLayout.uid
        }))
      },

      addDefaultLayout: () =>
        set((state) => {
          const defaultLayout = { ...getDefaultLayout(), uid: uuidv4() }
          return {
            layouts: [...state.layouts, defaultLayout],
            selectedLayoutUid: defaultLayout.uid // Sélection automatique du layout par défaut
          }
        }),

      updateLayout: (updatedLayout) => {
        set((state) => ({
          layouts: state.layouts.map((layout) =>
            layout.uid === updatedLayout.uid ? updatedLayout : layout
          )
        }))
      },

      deleteLayout: (uid) => {
        set((state) => ({
          layouts: state.layouts.filter((layout) => layout.uid !== uid),
          selectedLayoutUid: state.selectedLayoutUid === uid ? null : state.selectedLayoutUid
        }))
      },

      setSelectedLayout: (uid) => {
        set({ selectedLayoutUid: uid })
      },

      get selectedLayout() {
        const { layouts, selectedLayoutUid } = get()
        return layouts.find((layout) => layout.uid === selectedLayoutUid) || null
      }
    }),
    {
      name: 'layout-store' // Clé pour le localStorage
    }
  )
)

export default useLayoutStore
