import React from 'react'
import GridLayout, { Layout as ReactGridLayout } from 'react-grid-layout'
import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { useLayoutStore } from '../store/useLayoutStore'
import { Layout } from '../types/layouts'
import { ChevronDown } from 'lucide-react'

interface LayoutViewerProps {
  layout: Layout
}

const LayoutViewer: React.FC<LayoutViewerProps> = ({ layout }) => {
  const updateButton = useLayoutStore((state) => state.updateButton)
  const updatePageLayout = useLayoutStore((state) => state.updatePageLayout)
  const selectedPageUid = useLayoutStore((state) => state.selectedPageUid)
  const selectedButtonUid = useLayoutStore((state) => state.selectedButtonUid)
  const selectButton = useLayoutStore((state) => state.selectButton)
  const selectPage = useLayoutStore((state) => state.selectPage)

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

    updatePageLayout(layout.uid, currentPage.uid, updatedItems)
  }

  const handleButtonUpdate = (
    gridItemUid: string,
    updatedProperties: Partial<(typeof currentPage.items)[0]>
  ) => {
    updateButton(layout.uid, currentPage.uid, gridItemUid, updatedProperties)
  }

  return (
    <div
      className="relative"
      style={{
        backgroundColor: currentPage.pageConfig.bgcolor,
        width: `${layout.width}px`,
        height: `${layout.height}px`,
        margin: 'auto',
        overflow: 'hidden',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}
    >
      {/* Tabs for Pages */}
      <Tabs
        selectedIndex={layout.pages.findIndex((page) => page.uid === selectedPageUid) || 0}
        onSelect={(index) => selectPage(layout.pages[index]?.uid || '')}
      >
        <TabList>
          {layout.pages.map((page) => (
            <Tab key={page.uid}>{page.name}</Tab>
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
              selectedButtonUid === item.grid.i ? 'border-2 border-red-500' : 'border-gray-300'
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
            onClick={() => selectButton(item.grid.i)} // Select button on click
          >
            {item.name}

            {/* Chevron Icon for Selected Button */}
            {selectedButtonUid === item.grid.i && (
              <ChevronDown size={16} className="absolute bottom-1 right-1 text-blue-500" />
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  )
}

export default LayoutViewer
