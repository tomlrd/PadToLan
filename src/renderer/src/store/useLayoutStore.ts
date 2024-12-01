import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Layout, Page, GridItem } from '../types/layouts'
import { getDefaultLayout } from '../default/defaultLayouts'

interface LayoutStore {
  layouts: Layout[]
  selectedLayoutUid: string | null
  selectedPageUid: string | null

  // Sélecteurs
  selectLayout: (uid: string) => void
  selectPage: (uid: string) => void

  // Modifications
  addDefaultLayout: () => void
  deleteLayout: (uid: string) => void
  updatePageLayout: (layoutUid: string, pageUid: string, updatedItems: GridItem[]) => void
  updateButton: (
    layoutUid: string,
    pageUid: string,
    buttonId: string,
    updatedProperties: Partial<GridItem>
  ) => void

  // Récupérateurs
  getSelectedLayout: () => Layout | null
  getSelectedPage: () => Page | null
}

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set, get) => ({
      layouts: [],
      selectedLayoutUid: null,
      selectedPageUid: null,

      // Sélection d'un layout
      selectLayout: (uid) => {
        const layout = get().layouts.find((layout) => layout.uid === uid)
        set({
          selectedLayoutUid: uid,
          selectedPageUid: layout?.pages[0]?.uid || null
        })
      },

      // Sélection d'une page
      selectPage: (uid) => {
        set({ selectedPageUid: uid })
      },

      // Création d'un layout par défaut
      addDefaultLayout: () => {
        const newLayout = getDefaultLayout()
        set((state) => ({
          layouts: [...state.layouts, newLayout],
          selectedLayoutUid: newLayout.uid // Sélection automatique
        }))
      },

      // Suppression d'un layout
      deleteLayout: (uid) => {
        set((state) => {
          const updatedLayouts = state.layouts.filter((layout) => layout.uid !== uid)
          return {
            layouts: updatedLayouts,
            selectedLayoutUid: updatedLayouts.length > 0 ? updatedLayouts[0].uid : null,
            selectedPageUid:
              updatedLayouts.length > 0 ? updatedLayouts[0].pages[0]?.uid || null : null
          }
        })
      },

      // Mise à jour des items d'une page
      updatePageLayout: (layoutUid, pageUid, updatedItems) => {
        set((state) => ({
          layouts: state.layouts.map((layout) =>
            layout.uid === layoutUid
              ? {
                  ...layout,
                  pages: layout.pages.map((page) =>
                    page.uid === pageUid ? { ...page, items: updatedItems } : page
                  )
                }
              : layout
          )
        }))
      },

      // Mise à jour d'un bouton
      updateButton: (layoutUid, pageUid, buttonId, updatedProperties) => {
        const { layouts } = get()
        const updatedLayouts = layouts.map((layout) => {
          if (layout.uid === layoutUid) {
            const updatedPages = layout.pages.map((page) => {
              if (page.uid === pageUid) {
                const updatedItems = page.items.map((item) =>
                  item.grid.i === buttonId ? { ...item, ...updatedProperties } : item
                )
                return { ...page, items: updatedItems }
              }
              return page
            })
            return { ...layout, pages: updatedPages }
          }
          return layout
        })

        set({ layouts: updatedLayouts })
      },

      // Récupération du layout sélectionné
      getSelectedLayout: () => {
        const { layouts, selectedLayoutUid } = get()
        return layouts.find((layout) => layout.uid === selectedLayoutUid) || null
      },

      // Récupération de la page sélectionnée
      getSelectedPage: () => {
        const { getSelectedLayout, selectedPageUid } = get()
        const selectedLayout = getSelectedLayout()
        return selectedLayout?.pages.find((page) => page.uid === selectedPageUid) || null
      }
    }),
    {
      name: 'layout-store' // Clé pour le localStorage
    }
  )
)
