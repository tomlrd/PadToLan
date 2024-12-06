import React, { useEffect } from 'react'
import LayoutViewer from '../components/LayoutViewer'
import LayoutSelector from '../components/LayoutSelector'
import { useLayoutStore } from '../store/useLayoutStore'
import { usePageStore } from '../store/usePageStore'

const Home: React.FC = () => {
  const { layouts, selectedLayoutUid, selectLayout, getSelectedLayout } = useLayoutStore()
  const { selectPage } = usePageStore()

  // Sélection automatique du dernier layout au chargement si aucun n'est sélectionné
  useEffect(() => {
    if (!selectedLayoutUid && layouts.length > 0) {
      const lastLayout = layouts[layouts.length - 1]
      selectLayout(lastLayout.uid)
      if (lastLayout.pages.length > 0) {
        selectPage(lastLayout.pages[0].uid) // Sélectionne automatiquement la première page
      }
    }
  }, [layouts, selectedLayoutUid, selectLayout, selectPage])

  // Sélection automatique de la première page lorsqu'un nouveau layout est sélectionné
  useEffect(() => {
    const currentLayout = getSelectedLayout()
    if (currentLayout && currentLayout.pages.length > 0) {
      selectPage(currentLayout.pages[0].uid)
    }
  }, [selectedLayoutUid, getSelectedLayout, selectPage])

  const currentLayout = getSelectedLayout()

  return (
    <div className="flex h-screen">
      {/* Sidebar pour la gestion des Layouts */}
      <div className="w-96 bg-gray-100 border-r p-4">
        <h2 className="text-lg font-bold mb-4">Gestion des Layouts</h2>
        <LayoutSelector />
      </div>

      {/* Vue principale pour afficher le Layout */}
      <div className="flex p-1">
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
