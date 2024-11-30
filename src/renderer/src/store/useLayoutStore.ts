import { create } from 'zustand' // Utilisation correcte de l'importation
import { Layout } from '../types/layouts'

interface LayoutStore {
  layouts: Layout[]
  selectedLayout: Layout | null
  setLayouts: (layouts: Layout[]) => void
  setSelectedLayout: (layout: Layout | null) => void
  updateLayout: (layout: Layout) => void
}

const useLayoutStore = create<LayoutStore>((set) => ({
  layouts: [],
  selectedLayout: null,
  setLayouts: (layouts) => set({ layouts }),
  setSelectedLayout: (layout) => set({ selectedLayout: layout }),
  updateLayout: (updatedLayout) =>
    set((state) => ({
      layouts: state.layouts.map((layout) =>
        layout.uid === updatedLayout.uid ? updatedLayout : layout
      )
    }))
}))

export default useLayoutStore
