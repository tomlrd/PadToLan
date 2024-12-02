import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Layout, Page } from '../types/layouts'
import { getDefaultLayout } from '../default/defaultLayouts'

interface LayoutStore {
  layouts: Layout[]
  selectedLayoutUid: string | null

  // Sélecteurs
  selectLayout: (uid: string) => void

  // Modifications
  addDefaultLayout: () => void
  deleteLayout: (uid: string) => void
  updateLayout: (updatedLayout: Partial<Layout>) => void
  updateLayouts: (updatedLayouts: Layout[]) => void

  // Récupérateurs
  getSelectedLayout: () => Layout | null
}

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set, get) => ({
      layouts: [],
      selectedLayoutUid: null,

      // Sélection d'un layout
      selectLayout: (uid) => {
        set({ selectedLayoutUid: uid })
      },

      // Création d'un layout par défaut
      addDefaultLayout: () => {
        const defaultLayout = getDefaultLayout()
        const newLayout: Layout = {
          ...defaultLayout,
          uid: uuidv4(),
          name: `Layout ${uuidv4().slice(0, 8)}`
        }

        set((state) => ({
          layouts: [...state.layouts, newLayout],
          selectedLayoutUid: newLayout.uid
        }))
      },

      // Suppression d'un layout
      deleteLayout: (uid) => {
        set((state) => ({
          layouts: state.layouts.filter((layout) => layout.uid !== uid),
          selectedLayoutUid: state.layouts.length > 1 ? state.layouts[0].uid : null
        }))
      },

      // Mise à jour d'un layout
      updateLayout: (updatedLayout) => {
        set((state) => ({
          layouts: state.layouts.map((layout) =>
            layout.uid === updatedLayout.uid ? { ...layout, ...updatedLayout } : layout
          )
        }))
      },

      // Mise à jour complète des layouts
      updateLayouts: (updatedLayouts) => {
        set({ layouts: updatedLayouts })
      },

      // Récupération du layout sélectionné
      getSelectedLayout: () => {
        const { layouts, selectedLayoutUid } = get()
        return layouts.find((layout) => layout.uid === selectedLayoutUid) || null
      }
    }),
    { name: 'layout-store' }
  )
)
