import { create } from 'zustand'
import { useLayoutStore } from './useLayoutStore'
import { Page, GridItem } from '../types/layouts'
import { v4 as uuidv4 } from 'uuid'
import { getDefaultPage } from '../default/defaultLayouts'

interface PageStore {
  selectedPageUid: string | null
  getSelectedPage: () => Page | null
  selectPage: (pageUid: string) => void

  addDefaultPage: () => void
  deletePage: (pageUid: string) => void

  updatePageConfig: (pageUid: string, updatedConfig: Partial<Page['pageConfig']>) => void
  updatePageListConfig: (pageUid: string, updatedConfig: Partial<Page['pageListConfig']>) => void
  updatePageItemConfig: (pageUid: string, updatedConfig: Partial<Page['pageItemConfig']>) => void
  updatePageItems: (pageUid: string, items: GridItem[]) => void
  updatePageName: (pageUid: string, name: string) => void
}

export const usePageStore = create<PageStore>()((set, get) => ({
  selectedPageUid: null,

  // Récupérer la page sélectionnée
  getSelectedPage: () => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout || !get().selectedPageUid) return null
    return selectedLayout.pages.find((page) => page.uid === get().selectedPageUid) || null
  },

  // Sélectionner une page
  selectPage: (pageUid) => {
    set({ selectedPageUid: pageUid })
  },

  // Ajouter une page par défaut
  addDefaultPage: () => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const newPage = getDefaultPage()
    newPage.uid = uuidv4()
    newPage.name = `Nouvelle Page ${selectedLayout.pages.length + 1}`

    const updatedLayout = {
      ...selectedLayout,
      pages: [...selectedLayout.pages, newPage]
    }

    layoutStore.updateLayout(updatedLayout)
    set({ selectedPageUid: newPage.uid })
  },

  // Supprimer une page
  deletePage: (pageUid) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.filter((page) => page.uid !== pageUid)

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)

    // Sélectionner la première page restante, ou null si aucune page n'existe
    set({ selectedPageUid: updatedPages.length > 0 ? updatedPages[0].uid : null })
  },

  // Mise à jour de pageConfig
  updatePageConfig: (pageUid, updatedConfig) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid
        ? { ...page, pageConfig: { ...page.pageConfig, ...updatedConfig } }
        : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Mise à jour de pageListConfig
  updatePageListConfig: (pageUid, updatedConfig) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid
        ? { ...page, pageListConfig: { ...page.pageListConfig, ...updatedConfig } }
        : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Mise à jour de pageItemConfig
  updatePageItemConfig: (pageUid, updatedConfig) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid
        ? { ...page, pageItemConfig: { ...page.pageItemConfig, ...updatedConfig } }
        : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Mise à jour des items de la page
  updatePageItems: (pageUid, items) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid ? { ...page, items } : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Mise à jour du nom de la page
  updatePageName: (pageUid, name) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid ? { ...page, name } : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  }
}))
