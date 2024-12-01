import React, { useEffect } from 'react'
import LayoutViewer from '../components/LayoutViewer'
import LayoutSelector from '../components/LayoutSelector'
import { useLayoutStore } from '../store/useLayoutStore'

const Home: React.FC = () => {
  const { layouts, selectedLayoutUid, selectLayout } = useLayoutStore()

  useEffect(() => {
    if (!selectedLayoutUid && layouts.length > 0) {
      selectLayout(layouts[layouts.length - 1].uid) // Sélectionne le dernier layout créé
    }
  }, [layouts, selectLayout, selectedLayoutUid])

  const currentLayout = useLayoutStore((state) => state.getSelectedLayout())

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 border-r p-4">
        <h2 className="text-lg font-bold mb-4">Gestion des Layouts</h2>
        <LayoutSelector />
      </div>

      {/* Layout Viewer */}
      <div className="flex-1 p-4">
        {currentLayout ? (
          <LayoutViewer layout={currentLayout} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Aucun layout sélectionné</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
