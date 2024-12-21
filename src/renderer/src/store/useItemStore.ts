import { create } from 'zustand'
import { usePageStore } from './usePageStore'
import { getDefaultItem } from '../default/defaultLayouts'
import { GridItem } from '../types/layouts'

interface ItemStore {
  selectedItemUid: string | null
  getSelectedItem: () => GridItem | null
  selectItem: (itemUid: string) => void
  addDefaultItem: () => void
  addItem: (type: GridItem['type']) => void
  deleteItem: (itemUid: string) => void
  updateItem: (itemUid: string, updatedProperties: Partial<GridItem>) => void
}

export const useItemStore = create<ItemStore>()((set, get) => ({
  selectedItemUid: null,

  // Récupérer l'item sélectionné
  getSelectedItem: () => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()
    if (!selectedPage || !get().selectedItemUid) return null

    return selectedPage.items.find((item) => item.grid.i === get().selectedItemUid) || null
  },

  // Sélectionner un item
  selectItem: (itemUid) => {
    set({ selectedItemUid: itemUid })
  },

  // Ajouter un item par défaut
  addItem: (type) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    // Passer le type au `getDefaultItem`
    const newItem = { ...getDefaultItem(), type }

    const updatedItems = [...selectedPage.items, newItem]

    pageStore.updatePageItems(selectedPage.uid, updatedItems)
    set({ selectedItemUid: newItem.grid.i }) // Sélectionner directement le nouvel item
  },

  // Ajouter un item par défaut
  addDefaultItem: () => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const newItem = getDefaultItem()

    const updatedItems = [...selectedPage.items, newItem]

    pageStore.updatePageItems(selectedPage.uid, updatedItems)
    set({ selectedItemUid: newItem.grid.i }) // Sélectionner directement le nouvel item
  },

  // Supprimer un item
  deleteItem: (itemUid) => {
    const pageStore = usePageStore.getState()
    const selectedPage = pageStore.getSelectedPage()

    if (!selectedPage) return

    const updatedItems = selectedPage.items.filter((item) => item.grid.i !== itemUid)

    pageStore.updatePageItems(selectedPage.uid, updatedItems)

    // Si l'item supprimé est sélectionné, réinitialiser la sélection
    if (get().selectedItemUid === itemUid) {
      set({ selectedItemUid: null })
    }
  },

  // Mettre à jour un item
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
