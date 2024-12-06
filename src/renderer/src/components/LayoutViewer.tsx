import React from 'react'
import GridLayout, { Layout as ReactGridLayout } from 'react-grid-layout'
import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { usePageStore } from '../store/usePageStore'
import { useItemStore } from '../store/useItemStore'
import { Layout, Page, Justify } from '../types/layouts'
import { ChevronDown } from 'lucide-react'
import { GridItem } from '../types/layouts'

interface LayoutViewerProps {
  layout: Layout
}

const LayoutViewer: React.FC<LayoutViewerProps> = ({ layout }) => {
  const updateItem = useItemStore((state) => state.updateItem)
  const selectItem = useItemStore((state) => state.selectItem)
  const selectedItemUid = useItemStore((state) => state.selectedItemUid)

  const selectPage = usePageStore((state) => state.selectPage)
  const selectedPageUid = usePageStore((state) => state.selectedPageUid)
  const updatePageItems = usePageStore((state) => state.updatePageItems)
  const updatePageListConfig = usePageStore((state) => state.updatePageListConfig)
  const updatePageItemConfig = usePageStore((state) => state.updatePageItemConfig)

  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid) || layout.pages[0]

  const handleLayoutChange = (newLayout: ReactGridLayout[]) => {
    if (!currentPage) return

    const updatedItems = currentPage.items.map((item) => {
      const layoutItem = newLayout.find((l) => l.i === item.grid.i)
      return layoutItem
        ? {
            ...item,
            grid: {
              ...item.grid,
              x: layoutItem.x,
              y: layoutItem.y,
              w: layoutItem.w,
              h: layoutItem.h
            }
          }
        : item
    })

    updatePageItems(currentPage.uid, updatedItems)
  }

  const handleTabClick = (pageUid: string) => {
    const page = layout.pages.find((p) => p.uid === pageUid)
    if (page) {
      updatePageListConfig(pageUid, {
        bgcolor: page.pageItemConfig.onclickbgcolor,
        bgimg: page.pageItemConfig.bgimg,
        bgsize: page.pageItemConfig.bgsize,
        bgpos: page.pageItemConfig.bgpos,
        bgrepeat: page.pageItemConfig.bgrepeat,
        padding: Number(page.pageItemConfig.padding),
        justifyitems: page.pageListConfig.justifyitems as Justify
      })
      updatePageItemConfig(pageUid, {
        bgcolor: page.pageItemConfig.onclickbgcolor,
        color: page.pageItemConfig.onclickcolor,
        border: page.pageItemConfig.onclickborder,
        borderRadius: page.pageItemConfig.borderRadius,
        bgimg: page.pageItemConfig.bgimg,
        bgsize: page.pageItemConfig.bgsize,
        bgpos: page.pageItemConfig.bgpos,
        bgrepeat: page.pageItemConfig.bgrepeat,
        padding: page.pageItemConfig.padding,
        fontFamily: page.pageItemConfig.fontFamily,
        fontWeight: page.pageItemConfig.fontWeight,
        fontSize: page.pageItemConfig.fontSize,
        margin: page.pageItemConfig.margin,
        height: page.pageItemConfig.height,
        width: page.pageItemConfig.width,
        onclickbgcolor: page.pageItemConfig.onclickbgcolor,
        onclickcolor: page.pageItemConfig.onclickcolor,
        onclickborder: page.pageItemConfig.onclickborder
      })
    }
    selectPage(pageUid)
  }

  return (
    <div
      style={{
        width: `calc(${layout.width}px + 20px)`,
        height: `calc(${layout.height}px + 30px)`,
        border: '10px solid #363636b4',
        borderRadius: '20px',
        margin: '10px',
        boxShadow: '0 0 10px #161616e3'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '30px',
          backgroundColor: 'grey',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '80%',
            height: '20px',
            backgroundColor: '#b1b1b1',
            WebkitBorderRadius: '4px'
          }}
        ></div>
        <div
          style={{
            width: '10%',
            height: '20px',
            backgroundColor: '#b1b1b1',
            WebkitBorderRadius: '4px'
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundImage: `url(file:///${currentPage.pageConfig.bgimg.replace(/\\/g, '/')})`,
          backgroundColor: currentPage.pageConfig.bgcolor,
          backgroundSize: currentPage.pageConfig.bgsize,
          backgroundPosition: `${currentPage.pageConfig.bgpos.x} ${currentPage.pageConfig.bgpos.y}`,
          backgroundRepeat: currentPage.pageConfig.bgrepeat,
          backgroundBlendMode: 'overlay',
          height: 'calc(100% - 30px)',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px'
        }}
      >
        {/* Tabs for Pages */}
        <Tabs
          style={{
            display: 'flex',
            backgroundColor: currentPage.pageListConfig.bgcolor,
            backgroundImage: `url(file:///${currentPage.pageListConfig.bgimg.replace(/\\/g, '/')})`,
            backgroundSize: currentPage.pageListConfig.bgsize,
            backgroundPosition: `${currentPage.pageListConfig.bgpos.x} ${currentPage.pageListConfig.bgpos.y}`,
            backgroundRepeat: currentPage.pageListConfig.bgrepeat,
            padding: `${currentPage.pageListConfig.padding}px`,
            justifyContent: currentPage.pageListConfig.justifyitems
          }}
          selectedIndex={layout.pages.findIndex((page) => page.uid === selectedPageUid)}
          onSelect={(index) => handleTabClick(layout.pages[index]?.uid || '')}
        >
          <TabList>
            {layout.pages.map((page) => (
              <Tab
                key={page.uid}
                style={{
                  display: 'flex',
                  backgroundColor: page.pageItemConfig.bgcolor,
                  backgroundImage: `url(file:///${page.pageItemConfig.bgimg.replace(/\\/g, '/')})`,
                  backgroundSize: page.pageItemConfig.bgsize,
                  backgroundPosition: `${page.pageItemConfig.bgpos.x} ${page.pageItemConfig.bgpos.y}`,
                  backgroundRepeat: page.pageItemConfig.bgrepeat,
                  padding: page.pageItemConfig.padding,
                  width: page.pageItemConfig.width,
                  height: page.pageItemConfig.height,
                  color: page.pageItemConfig.color,
                  margin: `${currentPage.pageItemConfig.margin}px`,
                  fontFamily: page.pageItemConfig.fontFamily,
                  fontWeight: `${currentPage.pageItemConfig.fontWeight}px`,
                  fontSize: `${currentPage.pageItemConfig.fontSize}px`,
                  border: `${currentPage.pageItemConfig.border}px solid`,
                  borderRadius: `${currentPage.pageItemConfig.borderRadius}px`
                }}
              >
                {page.name}
              </Tab>
            ))}
          </TabList>
        </Tabs>

        {/* Grid Layout */}
        <GridLayout
          className="layout"
          cols={12}
          rowHeight={30}
          width={layout.width}
          isDraggable
          isResizable
          onLayoutChange={handleLayoutChange}
        >
          {currentPage.items.map((item) => (
            <div
              key={item.grid.i}
              data-grid={item.grid}
              className={`relative ${
                selectedItemUid === item.grid.i ? 'border-2 border-red-500' : 'border-gray-300'
              }`}
              style={{
                backgroundColor: item.bgcolor,
                color: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ccc',
                borderRadius: '4px',
                position: 'relative'
              }}
              onClick={() => selectItem(item.grid.i)} // Select the item on click
            >
              {item.name}

              {/* Chevron Icon for Selected Item */}
              {selectedItemUid === item.grid.i && (
                <ChevronDown size={16} className="absolute bottom-1 right-1 text-blue-500" />
              )}
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  )
}

export default LayoutViewer
