import { create } from 'zustand'
import { usePageStore } from './usePageStore'
import { getDefaultItem } from '../default/defaultLayouts'
import { GridItem } from '../types/layouts'

interface ItemStore {
  selectedItemUid: string | null
  copiedItemProps: Partial<GridItem> | null

  getSelectedItem: () => GridItem | null
  selectItem: (itemUid: string) => void
  addDefaultItem: () => void
  addItem: (type: GridItem['type']) => void
  deleteItem: (itemUid: string) => void
  updateItem: (itemUid: string, updatedProperties: Partial<GridItem>) => void
  copyItemProperties: (itemUid: string) => void
  pasteItemProperties: (itemUid: string) => void
}

export const useItemStore = create<ItemStore>()((set, get) => ({
  selectedItemUid: null,
  copiedItemProps: null,

  getSelectedItem: () => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()
    if (!selectedPage || !get().selectedItemUid) return null

    return selectedPage.items.find((item) => item.grid.i === get().selectedItemUid) || null
  },

  selectItem: (itemUid) => {
    set({ selectedItemUid: itemUid })
  },

  addItem: (type) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const newItem = { ...getDefaultItem(), type }

    const updatedItems = [...selectedPage.items, newItem]

    pageStore.updatePageItems(selectedPage.uid, updatedItems)
    set({ selectedItemUid: newItem.grid.i })
  },

  addDefaultItem: () => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const newItem = getDefaultItem()

    const updatedItems = [...selectedPage.items, newItem]

    pageStore.updatePageItems(selectedPage.uid, updatedItems)
    set({ selectedItemUid: newItem.grid.i })
  },

  deleteItem: (itemUid) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const updatedItems = selectedPage.items.filter((item) => item.grid.i !== itemUid)

    pageStore.updatePageItems(selectedPage.uid, updatedItems)

    if (get().selectedItemUid === itemUid) {
      set({ selectedItemUid: null })
    }
  },
  copyItemProperties: (itemUid) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const item = selectedPage.items.find((item) => item.grid.i === itemUid)
    if (!item) return

    const { grid, ...propsWithoutUid } = item
    set({ copiedItemProps: propsWithoutUid })
  },

  pasteItemProperties: (itemUid) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const copiedProps = get().copiedItemProps
    if (!copiedProps) return

    const updatedItems = selectedPage.items.map((item) =>
      item.grid.i === itemUid ? { ...item, ...copiedProps } : item
    )

    pageStore.updatePageItems(selectedPage.uid, updatedItems)
  },

  updateItem: (itemUid, updatedProperties) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const updatedItems = selectedPage.items.map((item) =>
      item.grid.i === itemUid ? { ...item, ...updatedProperties } : item
    )

    pageStore.updatePageItems(selectedPage.uid, updatedItems)
  }
}))
