import React, { useEffect } from 'react'
import LayoutViewer from '../components/LayoutViewer'
import LayoutSelector from '../components/LayoutSelector'
import { useLayoutStore } from '../store/useLayoutStore'

const Home: React.FC = () => {
  const { layouts, selectedLayoutUid, selectLayout, getSelectedLayout } = useLayoutStore()

  // Sélection automatique du dernier layout au chargement si aucun n'est sélectionné
  useEffect(() => {
    if (!selectedLayoutUid && layouts.length > 0) {
      selectLayout(layouts[layouts.length - 1].uid)
    }
  }, [layouts, selectedLayoutUid, selectLayout])

  const currentLayout = getSelectedLayout()

  return (
    <div className="flex h-screen">
      {/* Sidebar pour la gestion des Layouts */}
      <div className="w-1/4 bg-gray-100 border-r p-4">
        <h2 className="text-lg font-bold mb-4">Gestion des Layouts</h2>
        <LayoutSelector />
      </div>

      {/* Vue principale pour afficher le Layout */}
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
