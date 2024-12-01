import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Layout, Page, GridItem } from '../types/layouts'
import { getDefaultLayout } from '../default/defaultLayouts'

interface LayoutStore {
  layouts: Layout[]
  selectedLayoutUid: string | null
  selectedPageUid: string | null
  selectedButtonUid: string | null

  // Sélecteurs
  selectLayout: (uid: string) => void
  selectPage: (uid: string) => void
  selectButton: (uid: string) => void

  // Modifications
  addDefaultLayout: () => void
  deleteLayout: (uid: string) => void
  updateLayout: (updatedLayout: Partial<Layout>) => void
  addPage: (layoutUid: string) => void
  deletePage: (layoutUid: string, pageUid: string) => void
  updatePageConfig: (
    layoutUid: string,
    pageUid: string,
    updatedConfig: Partial<Page['pageConfig']>
  ) => void
  updatePageListConfig: (
    layoutUid: string,
    pageUid: string,
    updatedConfig: Partial<Page['pageListConfig']>
  ) => void
  updatePageItemConfig: (
    layoutUid: string,
    pageUid: string,
    updatedConfig: Partial<Page['pageItemConfig']>
  ) => void
  updatePageLayout: (layoutUid: string, pageUid: string, updatedItems: GridItem[]) => void
  updateButton: (
    layoutUid: string,
    pageUid: string,
    buttonUid: string,
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
      selectedButtonUid: null,

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

      // Sélection d'un bouton
      selectButton: (uid) => {
        set({ selectedButtonUid: uid })
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
          selectedLayoutUid: newLayout.uid,
          selectedPageUid: newLayout.pages[0]?.uid || null
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

      // Mise à jour d'un layout
      updateLayout: (updatedLayout) => {
        set((state) => {
          const layouts = state.layouts.map((layout) =>
            layout.uid === updatedLayout.uid ? { ...layout, ...updatedLayout } : layout
          )
          return { layouts }
        })
      },

      // Ajout d'une page
      addPage: (layoutUid) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const newPage: Page = {
                ...getDefaultLayout().pages[0],
                uid: uuidv4(),
                name: `Nouvelle Page ${layout.pages.length + 1}`
              }
              return { ...layout, pages: [...layout.pages, newPage] }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Suppression d'une page
      deletePage: (layoutUid, pageUid) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const updatedPages = layout.pages.filter((page) => page.uid !== pageUid)
              return { ...layout, pages: updatedPages }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Mise à jour de pageConfig
      updatePageConfig: (layoutUid, pageUid, updatedConfig) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const pages = layout.pages.map((page) =>
                page.uid === pageUid
                  ? { ...page, pageConfig: { ...page.pageConfig, ...updatedConfig } }
                  : page
              )
              return { ...layout, pages }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Mise à jour de pageListConfig
      updatePageListConfig: (layoutUid, pageUid, updatedConfig) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const pages = layout.pages.map((page) =>
                page.uid === pageUid
                  ? { ...page, pageListConfig: { ...page.pageListConfig, ...updatedConfig } }
                  : page
              )
              return { ...layout, pages }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Mise à jour de pageItemConfig
      updatePageItemConfig: (layoutUid, pageUid, updatedConfig) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const pages = layout.pages.map((page) =>
                page.uid === pageUid
                  ? { ...page, pageItemConfig: { ...page.pageItemConfig, ...updatedConfig } }
                  : page
              )
              return { ...layout, pages }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Mise à jour des éléments d'une page
      updatePageLayout: (layoutUid, pageUid, updatedItems) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const pages = layout.pages.map((page) =>
                page.uid === pageUid ? { ...page, items: updatedItems } : page
              )
              return { ...layout, pages }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Mise à jour d'un bouton
      updateButton: (layoutUid, pageUid, buttonUid, updatedProperties) => {
        set((state) => {
          const layouts = state.layouts.map((layout) => {
            if (layout.uid === layoutUid) {
              const pages = layout.pages.map((page) =>
                page.uid === pageUid
                  ? {
                      ...page,
                      items: page.items.map((item) =>
                        item.grid.i === buttonUid ? { ...item, ...updatedProperties } : item
                      )
                    }
                  : page
              )
              return { ...layout, pages }
            }
            return layout
          })
          return { layouts }
        })
      },

      // Récupération du layout sélectionné
      getSelectedLayout: () => {
        const { layouts, selectedLayoutUid } = get()
        return layouts.find((layout) => layout.uid === selectedLayoutUid) || null
      },

      // Récupération de la page sélectionnée
      getSelectedPage: () => {
        const { layouts, selectedLayoutUid, selectedPageUid } = get()
        const selectedLayout = layouts.find((layout) => layout.uid === selectedLayoutUid)
        return selectedLayout?.pages.find((page) => page.uid === selectedPageUid) || null
      }
    }),
    { name: 'layout-store' } // Persistance dans localStorage
  )
)
