import React from 'react'
import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Layout } from '../types/layouts'

interface LayoutViewerProps {
  layout: Layout
}

const LayoutViewer: React.FC<LayoutViewerProps> = ({ layout }) => {
  const page = layout.pages[0] // Affiche la première page du layout
  const items = page?.items || []

  return (
    <div
      className="relative"
      style={{
        backgroundColor: page.pageConfig.bgcolor,
        width: `${layout.width}px`,
        height: `${layout.height}px`,
        margin: 'auto',
        overflow: 'hidden',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}
    >
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        width={layout.width}
        isDraggable={false}
        isResizable={false}
      >
        {items.map((item) => (
          <div
            key={item.grid.i}
            data-grid={item.grid}
            style={{
              backgroundColor: item.bgcolor,
              color: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            {item.name}
          </div>
        ))}
      </GridLayout>
    </div>
  )
}

export default LayoutViewer
