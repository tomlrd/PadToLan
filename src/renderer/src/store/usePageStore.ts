import { create } from 'zustand'
import { useLayoutStore } from './useLayoutStore'
import { Page, GridItem } from '../types/layouts'
import { v4 as uuidv4 } from 'uuid'

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

  getSelectedPage: () => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout || !get().selectedPageUid) return null
    return selectedLayout.pages.find((page) => page.uid === get().selectedPageUid) || null
  },

  selectPage: (pageUid) => {
    set({ selectedPageUid: pageUid })
  },

  addDefaultPage: () => {
    const layoutStore = useLayoutStore.getState()
    const selectedLayout = layoutStore.getSelectedLayout()

    if (!selectedLayout) return

    const lastPage = selectedLayout.pages[selectedLayout.pages.length - 1]

    if (!lastPage) return

    const newPage = {
      ...lastPage,
      uid: uuidv4(),
      name: `New Page`,
      items: []
    }

    const updatedLayout = {
      ...selectedLayout,
      pages: [...selectedLayout.pages, newPage]
    }

    layoutStore.updateLayout(updatedLayout)
    set({ selectedPageUid: newPage.uid })
  },

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

    set({ selectedPageUid: updatedPages.length > 0 ? updatedPages[0].uid : null })
  },

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
