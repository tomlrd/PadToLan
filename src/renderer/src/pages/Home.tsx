import React, { useEffect, useState } from 'react'
import LayoutManager from '../components/LayoutManager'
import LayoutViewer from '../components/LayoutViewer'
import useLayoutStore from '../store/useLayoutStore'
import useKeyBindStore from '../store/useKeyBindStore'

const Home: React.FC = () => {
  const { layouts } = useLayoutStore()
  const { keyBindLists } = useKeyBindStore()

  const [selectedLayout, setSelectedLayout] = useState<string | null>(null)
  const [selectedKeyBind, setSelectedKeyBind] = useState<string | null>(null)

  // Sélectionner automatiquement le dernier layout et keybind créés
  useEffect(() => {
    if (layouts.length > 0) {
      setSelectedLayout(layouts[layouts.length - 1].uid)
    }
    if (keyBindLists.length > 0) {
      setSelectedKeyBind(keyBindLists[keyBindLists.length - 1].uid)
    }
  }, [layouts, keyBindLists])

  // Récupérer le layout sélectionné
  const currentLayout = layouts.find((layout) => layout.uid === selectedLayout)

  return (
    <div className="flex h-screen">
      {/* Partie gauche : KeyBindManager */}
      <div className="w-1/4 bg-gray-100 border-r">
        <LayoutManager onSelectLayout={setSelectedLayout} onSelectKeyBind={setSelectedKeyBind} />
      </div>

      {/* Partie droite : Affichage visuel du layout */}
      <div className="flex-1">
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
