import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Page, GridItem, Layout } from '../types/layouts'
import { getBlankLayout, getBlankPage, getBlankItem } from './layoutsdefault'
import { DEMOSP } from './defaultExample1'

type Layouts = {
  layouts: Layout[]
  selectedLayout: Layout | null
  selectedPage: Page | null
  selectedItem: GridItem | null
  itemCopy: any | null
  lastLayout: string | null
}

type Actions = {
  getLayouts: () => Layout[]
  resetLayouts: () => void
  getLayout: (uid: string) => void
  getPage: (uid: string) => void
  getItem: (uid: string) => void
  addLayout: () => void
  addPage: () => void
  addItem: (type: string) => void
  removeLayout: (uid: string) => void
  removePage: (uid: string) => void
  removeItem: (uid: string) => void
  updateLayout: (type: string, data: any) => void
  updatePage: (type: string, data: any) => void
  updateItem: (type: string, data: any) => void
}

type LayoutsStore = Layouts & Actions

const initialValues: Layouts = {
  layouts: [],
  selectedLayout: null,
  selectedPage: null,
  selectedItem: null,
  lastLayout: null,
  itemCopy: null
}

export const useLayoutsStore = create<LayoutsStore>()(
  persist(
    (set, get) => ({
      ...initialValues,
      getLayouts: () => {
        return get().layouts
      },
      resetLayouts: () => {
        set(() => ({
          layouts: DEMOSP,
          selectedLayout: DEMOSP[0],
          selectedPage: DEMOSP[0].pages[0],
          lastLayout: DEMOSP[0].uid
        }))
      },
      getLayout: (uid: string) => {
        const foundLayout = get().layouts.find((layout) => layout.uid === uid)
        set(() => ({
          selectedLayout: foundLayout,
          selectedPage: foundLayout?.pages[0],
          selectedItem: null,
          lastLayout: uid
        }))
      },
      getPage: (uid: string) => {
        const selectedLayout = get().selectedLayout
        const foundPageI = selectedLayout?.pages.findIndex((page) => page.uid === uid)
        const thispage = foundPageI ? selectedLayout?.pages[foundPageI] : selectedLayout?.pages[0]

        set(() => ({
          selectedPage: thispage,
          selectedItem: null
        }))
      },
      getItem: (uid: string) => {
        const selectedPage = get().selectedPage
        const foundItemI = selectedPage?.items.findIndex((item) => item.grid.i === uid)
        const thisitem = foundItemI ? selectedPage?.items[foundItemI] : selectedPage?.items[0]

        set(() => ({
          selectedItem: uid === '' ? null : thisitem
        }))
      },
      addItem: (type: string) => {
        let newItem = getBlankItem()
        const selectedLayout = get().selectedLayout
        const selectedPage = get().selectedPage

        if (!selectedLayout || !selectedPage || type === 'null') {
          return
        }

        if (type === 'triangle') {
          newItem = { ...newItem, type: 'triangle' }
        } else if (type === 'button') {
          newItem = { ...newItem, type: 'button' }
        } else if (type === 'img/text') {
          newItem = { ...newItem, type: 'img/text' }
        }

        console.log(newItem)

        const updatedPageItems = [...selectedPage.items, newItem]
        const updatedPages = selectedLayout.pages.map((page) =>
          page.uid === selectedPage.uid ? { ...page, items: updatedPageItems } : page
        )

        const updatedLayouts = get().layouts.map((layout) =>
          layout.uid === selectedLayout.uid ? { ...layout, pages: updatedPages } : layout
        )

        set({
          layouts: updatedLayouts,
          selectedLayout: {
            ...selectedLayout,
            pages: updatedPages
          },
          selectedPage: {
            ...selectedPage,
            items: updatedPageItems
          },
          selectedItem: newItem
        })
      },
      removeItem: (uid: string) => {
        const selectedLayout = get().selectedLayout
        const selectedPage = get().selectedPage

        if (!selectedLayout || !selectedPage) {
          return
        }

        const updatedPageItems = selectedPage.items.filter((item) => item.grid.i !== uid)
        const updatedPages = selectedLayout.pages.map((page) =>
          page.uid === selectedPage.uid ? { ...page, items: updatedPageItems } : page
        )

        const updatedLayouts = get().layouts.map((layout) =>
          layout.uid === selectedLayout.uid ? { ...layout, pages: updatedPages } : layout
        )

        set({
          layouts: updatedLayouts,
          selectedLayout: {
            ...selectedLayout,
            pages: updatedPages
          },
          selectedPage: {
            ...selectedPage,
            items: updatedPageItems
          },
          selectedItem: null // Reset selectedItem after removal
        })
      },

      addPage: () => {
        const selectedLayout = get().selectedLayout
        const newPage = getBlankPage()
        if (!selectedLayout) {
          return
        }

        const lastPage = selectedLayout.pages[selectedLayout.pages.length - 1]
        console.log(lastPage)

        newPage.name = 'New Page'
        if (lastPage !== undefined) {
          newPage.pageConfig = lastPage.pageConfig
          newPage.pageListConfig = lastPage.pageListConfig
          newPage.pageItemConfig = lastPage.pageItemConfig
        }

        const updatedLayouts = get().layouts.map((layout) =>
          layout.uid === selectedLayout.uid
            ? { ...layout, pages: [...layout.pages, newPage] }
            : layout
        )

        set({
          layouts: updatedLayouts,
          selectedLayout: {
            ...selectedLayout,
            pages: [...selectedLayout.pages, newPage]
          },
          selectedPage: newPage
        })
      },

      removePage: (uid: string) => {
        const selectedLayout = get().selectedLayout

        if (!selectedLayout) {
          return
        }
        console.log(selectedLayout.pages)

        let lastPage: any = selectedLayout.pages[selectedLayout.pages.length - 1]
        if (!lastPage || selectedLayout.pages.length === 1) {
          lastPage = null
        }

        const newPages = selectedLayout.pages.filter((page) => page.uid !== uid)

        const updatedLayouts = get().layouts.map((layout) => {
          if (layout.uid === selectedLayout.uid) {
            return {
              ...layout,
              pages: newPages
            }
          }
          return layout
        })

        set(() => ({
          layouts: updatedLayouts,
          selectedLayout: {
            ...selectedLayout,
            pages: newPages
          },
          selectedPage: lastPage
        }))
      },
      updateItem: (type: string, data: any) => {
        const layouts = get().layouts
        const selectedLayout = get().selectedLayout
        const selectedPage = get().selectedPage
        const selectedItem = get().selectedItem

        // Vérifier l'existence de l'élément sélectionné
        if (!selectedItem || !selectedPage || !selectedLayout) {
          return // Ne rien faire si l'élément sélectionné n'existe pas
        }

        let updatedItem: any = { ...selectedItem } // Cloner l'élément sélectionné

        // Modifier l'élément cloné en fonction du type (par exemple, "name" ou "grid")
        switch (type) {
          case 'copyitem':
            console.log(data)
            let { action, grid, name, type, ...copyitem } = data
            console.log(copyitem)
            set(() => ({
              itemCopy: copyitem
            }))
            break
          case 'pasteitem':
            const itemCopy = get().itemCopy

            // Itérer sur les propriétés de selectedItem
            for (let prop in itemCopy) {
              // Vérifier si la propriété existe dans updatedItem
              if (updatedItem.hasOwnProperty(prop)) {
                // Copier la propriété de selectedItem vers updatedItem
                updatedItem[prop] = itemCopy[prop]
              }
            }
            console.log(updatedItem)
            break
          case 'itemonclickbgcolor':
            updatedItem.onclickbgcolor = data
            break
          case 'itemonclickcolor':
            updatedItem.onclickcolor = data
            break
          case 'itemonclickborder':
            updatedItem.onclickborder = data
            break
          case 'itemfontfamily':
            updatedItem.fontFamily = data
            break
          case 'itemfontweight':
            updatedItem.fontWeight = data
            break
          case 'itemfontsize':
            updatedItem.fontSize = data
            break
          case 'action':
            updatedItem.action = data
            break
          case 'itemname':
            updatedItem.name = data
            break
          case 'itembgrepeat':
            updatedItem.bgrepeat = data
            break
          case 'itembgpos':
            data[1] === 'x' ? (updatedItem.bgpos.x = data[0]) : (updatedItem.bgpos.y = data[0])
            break
          case 'itembgcolor':
            updatedItem.bgcolor = data
            break
          case 'itemcolor':
            updatedItem.color = data
            break
          case 'itembgimg':
            updatedItem.bgimg = data
            break
          case 'itembgsize':
            updatedItem.bgsize = data
            break
          case 'itemborder':
            updatedItem.border = data
            break
          case 'itemborderradius':
            updatedItem.borderRadius = data
            break
          case 'grid':
            const foundItemI = selectedPage.items.findIndex(
              (item) => item.grid.i === updatedItem.grid.i
            )
            if (foundItemI !== -1) {
              updatedItem.grid = {
                ...updatedItem.grid,
                x: data[foundItemI].x,
                y: data[foundItemI].y,
                w: data[foundItemI].w,
                h: data[foundItemI].h
              }
            }
            break
          default:
            break
        }

        // Map sur les éléments de la page sélectionnée pour mettre à jour l'élément spécifique
        const updatedPageItems = selectedPage.items.map((item) =>
          item.grid.i === updatedItem.grid.i ? updatedItem : item
        )

        // Map sur les pages dans la mise en page sélectionnée pour mettre à jour les éléments dans la page sélectionnée
        const updatedPages = selectedLayout.pages.map((page) =>
          page.uid === selectedPage.uid ? { ...page, items: updatedPageItems } : page
        )

        // Map sur les mises en page pour mettre à jour les pages dans la mise en page sélectionnée
        const updatedLayouts = layouts.map((layout) =>
          layout.uid === selectedLayout.uid ? { ...layout, pages: updatedPages } : layout
        )

        // Mettre à jour l'état avec la nouvelle structure de mise en page
        set({
          layouts: updatedLayouts,
          selectedLayout: {
            ...selectedLayout,
            pages: updatedPages
          },
          selectedPage: {
            ...selectedPage,
            items: updatedPageItems
          },
          selectedItem: updatedItem
        })
      },

      updatePage: (type: string, data: any) => {
        const layouts = get().layouts
        const selectedLayout = get().selectedLayout
        const selectedPage = get().selectedPage

        if (!selectedLayout || !selectedPage) {
          return
        }
        let updatedPage: Page = { ...selectedPage }

        switch (type) {
          case 'name':
            updatedPage = { ...updatedPage, name: data }
            break
          case 'bgrepeat':
            selectedLayout.pages.forEach((p) => {
              p.pageConfig.bgrepeat = data
            })
            break
          case 'bgpos':
            selectedLayout.pages.forEach((p) => {
              data[1] === 'x' ? (p.pageConfig.bgpos.x = data[0]) : (p.pageConfig.bgpos.y = data[0])
            })
            break
          case 'bgcolor':
            selectedLayout.pages.forEach((p) => {
              p.pageConfig.bgcolor = data
            })
            break
          case 'bgimg':
            updatedPage.pageConfig.bgimg = data
            break
          case 'bgsize':
            selectedLayout.pages.forEach((p) => {
              p.pageConfig.bgsize = data
            })
            break
          case 'pagebgrepeat':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.bgrepeat = data
            })
            break
          case 'pagebgpos':
            selectedLayout.pages.forEach((p) => {
              data[1] === 'x'
                ? (p.pageListConfig.bgpos.x = data[0])
                : (p.pageListConfig.bgpos.y = data[0])
            })
            break
          case 'pagebgcolor':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.bgcolor = data
            })

            break
          case 'pagebgimg':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.bgimg = data
            })
            break
          case 'pagebgsize':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.bgsize = data
            })
            break
          case 'pagejustifyitems':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.justifyitems = data
            })

            break
          case 'pagepadding':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.padding = data
            })

            break
          case 'pagemargin':
            selectedLayout.pages.forEach((p) => {
              p.pageListConfig.margin = data
            })
            break
          case 'pageitembgimg':
            updatedPage.pageItemConfig.bgimg = data
            break
          case 'pageitembgsize':
            updatedPage.pageItemConfig.bgsize = data
            break
          case 'pageitembgrepeat':
            updatedPage.pageItemConfig.bgrepeat = data
            break
          case 'pageitembgpos':
            data[1] === 'x'
              ? (updatedPage.pageItemConfig.bgpos.x = data[0])
              : (updatedPage.pageItemConfig.bgpos.y = data[0])
            break
          case 'pageitemcolor':
            updatedPage.pageItemConfig.color = data
            break
          case 'pageitembgcolor':
            updatedPage.pageItemConfig.bgcolor = data
            break
          case 'pageitempadding':
            updatedPage.pageItemConfig.padding = data
            break
          case 'pageitemmargin':
            updatedPage.pageItemConfig.margin = data
            break
          case 'pageitemborder':
            updatedPage.pageItemConfig.border = data
            break
          case 'pageitemborderradius':
            updatedPage.pageItemConfig.borderRadius = data
            break
          case 'pageitemwidth':
            updatedPage.pageItemConfig.width = data
            break
          case 'pageitemheight':
            updatedPage.pageItemConfig.height = data
            break
          case 'pageitemfontfamily':
            updatedPage.pageItemConfig.fontFamily = data
            break
          case 'pageitemfontweight':
            updatedPage.pageItemConfig.fontWeight = data
            break
          case 'pageitemfontsize':
            updatedPage.pageItemConfig.fontSize = data
            break
          case 'pageitemonclickbgcolor':
            updatedPage.pageItemConfig.onclickbgcolor = data
            break
          case 'pageitemonclickcolor':
            updatedPage.pageItemConfig.onclickcolor = data
            break
          case 'pageitemonclickborder':
            updatedPage.pageItemConfig.onclickborder = data
            break
          default:
            break
        }

        const updatedPages = selectedLayout.pages.map((page) =>
          page.uid === selectedPage.uid ? updatedPage : page
        )

        const updatedLayouts = layouts.map((layout) =>
          layout.uid === selectedLayout.uid ? { ...layout, pages: updatedPages } : layout
        )

        set(() => ({
          layouts: updatedLayouts,
          selectedLayout: {
            ...selectedLayout,
            pages: updatedPages
          },
          selectedPage: updatedPage
        }))
      },

      updateLayout: (type: string, data: any) => {
        const selectedLayout = get().selectedLayout
        if (!selectedLayout) {
          return
        }
        let updatedLayout: Layout = { ...selectedLayout }

        switch (type) {
          case 'name':
            updatedLayout = { ...selectedLayout, name: data }
            break
          case 'kblist':
            updatedLayout = { ...selectedLayout, bindedKbList: data === 'null' ? null : data }
            break
          case 'width':
            updatedLayout = { ...selectedLayout, width: data }
            break
          case 'height':
            updatedLayout = { ...selectedLayout, height: data }
            break
          case 'nosleep':
            updatedLayout = { ...selectedLayout, nosleep: data }
            break
          case 'nonav':
            updatedLayout = { ...selectedLayout, nonav: data }
            break
          default:
            break
        }

        const updatedLayouts = get().layouts.map((layout) =>
          layout === selectedLayout ? updatedLayout : layout
        )

        set((state) => ({
          layouts: updatedLayouts,
          selectedLayout: updatedLayout,
          selectedPage: state.selectedPage
        }))
      },

      addLayout: () => {
        const newLayout = getBlankLayout()
        set((state) => ({
          layouts: [...state.layouts, newLayout],
          selectedLayout: newLayout,
          selectedPage: newLayout.pages[0],
          lastLayout: newLayout.uid
        }))
      },
      removeLayout: (uid: string) => {
        const newLayouts = get().layouts.filter((layout) => layout.uid !== uid)
        let lastL: any | null = newLayouts[newLayouts.length - 1]
        let lastP

        if (lastL) {
          if (lastL.pages[0]) {
            lastP = lastL.pages[0]
          } else {
            lastP = null
          }
        } else {
          lastL = null
        }

        set({
          layouts: newLayouts,
          selectedLayout: lastL,
          selectedPage: lastP,
          lastLayout: null
        })
      }
    }),
    {
      name: 'layouts',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        layouts: state.layouts,
        lastLayout: state.lastLayout
      })
    }
  )
)
