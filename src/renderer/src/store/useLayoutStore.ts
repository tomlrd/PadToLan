import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Layout } from '../types/layouts'
import { getDefaultLayout } from '../default/defaultLayouts'
import { defaultSC40Layout } from '../default/defaultSC4-0Layout'

interface LayoutStore {
  layouts: Layout[]
  selectedLayoutUid: string | null

  selectLayout: (uid: string) => void

  addDefaultLayout: () => void
  addDefaultLayoutSC: () => void
  deleteLayout: (uid: string) => void
  updateLayout: (updatedLayout: Partial<Layout>) => void
  updateLayouts: (updatedLayouts: Layout[]) => void

  getSelectedLayout: () => Layout | null
  getAllLayouts: () => Layout[]
  getLayout: (uid: string) => Layout | undefined
}

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set, get) => ({
      layouts: [],
      selectedLayoutUid: null,

      selectLayout: (uid) => {
        set({ selectedLayoutUid: uid })
      },

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

      addDefaultLayoutSC: () => {
        set((state) => ({
          layouts: [...state.layouts, defaultSC40Layout as Layout],
          selectedLayoutUid: defaultSC40Layout.uid
        }))
      },

      deleteLayout: (uid) => {
        set((state) => ({
          layouts: state.layouts.filter((layout) => layout.uid !== uid),
          selectedLayoutUid: state.layouts.length > 1 ? state.layouts[0].uid : null
        }))
      },

      updateLayout: (updatedLayout) => {
        set((state) => ({
          layouts: state.layouts.map((layout) =>
            layout.uid === updatedLayout.uid ? { ...layout, ...updatedLayout } : layout
          )
        }))
      },

      getLayout: (uid) => {
        const { layouts } = get()
        return layouts.find((layout) => layout.uid === uid)
      },

      updateLayouts: (updatedLayouts) => {
        set({ layouts: updatedLayouts })
      },

      getSelectedLayout: () => {
        const { layouts, selectedLayoutUid } = get()
        return layouts.find((layout) => layout.uid === selectedLayoutUid) || null
      },

      getAllLayouts: () => {
        return get().layouts
      }
    }),
    { name: 'layout-store' }
  )
)
