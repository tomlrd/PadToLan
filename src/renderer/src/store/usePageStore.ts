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

  // Retrieve the selected page
  getSelectedPage: () => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout || !get().selectedPageUid) return null
    return selectedLayout.pages.find((page) => page.uid === get().selectedPageUid) || null
  },

  // Select a page
  selectPage: (pageUid) => {
    set({ selectedPageUid: pageUid })
  },

  // Add a default page
  addDefaultPage: () => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    // Récupérer la dernière page
    const lastPage = selectedLayout.pages[selectedLayout.pages.length - 1]

    if (!lastPage) return

    // Cloner la dernière page et lui donner un nouvel UID
    const newPage = {
      ...lastPage,
      uid: uuidv4(),
      name: `New Page`,
      items: lastPage.items.filter((item) => item.type !== 'button')
    }

    const updatedLayout = {
      ...selectedLayout,
      pages: [...selectedLayout.pages, newPage]
    }

    layoutStore.updateLayout(updatedLayout)
    set({ selectedPageUid: newPage.uid })
  },

  // Delete a page
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

    // Select the first remaining page, or null if no pages exist
    set({ selectedPageUid: updatedPages.length > 0 ? updatedPages[0].uid : null })
  },

  // Update pageConfig properties
  updatePageConfig: (pageUid, updatedConfig) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid
        ? {
            ...page,
            pageConfig: { ...page.pageConfig, ...updatedConfig }
          }
        : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Update pageListConfig properties
  updatePageListConfig: (pageUid, updatedConfig) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid && typeof page.pageListConfig === 'object'
        ? {
            ...page,
            pageListConfig: { ...page.pageListConfig, ...updatedConfig }
          }
        : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Update pageItemConfig properties
  updatePageItemConfig: (pageUid, updatedConfig) => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const updatedPages = selectedLayout.pages.map((page) =>
      page.uid === pageUid && typeof page.pageItemConfig === 'object'
        ? {
            ...page,
            pageItemConfig: { ...page.pageItemConfig, ...updatedConfig }
          }
        : page
    )

    const updatedLayout = {
      ...selectedLayout,
      pages: updatedPages
    }

    layoutStore.updateLayout(updatedLayout)
  },

  // Update items of a page
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

  // Update the name of a page
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
