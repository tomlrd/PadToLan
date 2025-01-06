import React, { useEffect } from 'react'
import LayoutSelector from '../components/LayoutSelector'
import LayoutViewer from '../components/LayoutViewer'
import { useLayoutStore } from '../store/useLayoutStore'
import { usePageStore } from '../store/usePageStore'

const Home: React.FC = () => {
  const { layouts, selectedLayoutUid, selectLayout, getSelectedLayout } = useLayoutStore()
  const { selectPage } = usePageStore()

  useEffect(() => {
    if (!selectedLayoutUid && layouts.length > 0) {
      const lastLayout = layouts[layouts.length - 1]
      selectLayout(lastLayout.uid)

      if (lastLayout.pages.length > 0) {
        selectPage(lastLayout.pages[0].uid)
      }
    }
  }, [layouts, selectedLayoutUid, selectLayout, selectPage])

  useEffect(() => {
    const currentLayout = getSelectedLayout()
    if (currentLayout && currentLayout.pages.length > 0) {
      selectPage(currentLayout.pages[0].uid)
    }
  }, [selectedLayoutUid, getSelectedLayout, selectPage])

  const currentLayout = getSelectedLayout()

  if (currentLayout?.uid === 'sc4.0.defaultl') {
    const fetchLocalAppData = async () => {
      try {
        const data = await window.electron.ipcRenderer.invoke('get-localappdata')
        const first = await window.electron.ipcRenderer.invoke('first-run')
        if (first) {
          const normalizedData = data.endsWith('\\') ? data : data + '\\'
          currentLayout.pages[0].pageConfig.bgimg = normalizedData + 'v1.png'
          currentLayout.pages[1].pageConfig.bgimg = normalizedData + '2.png'
          currentLayout.pages[2].pageConfig.bgimg = normalizedData + 'indu.png'
          currentLayout.pages[2].items[13].bgimg = normalizedData + 'mining.png'
          currentLayout.pages[2].items[14].bgimg = normalizedData + 'salvage.png'
        }
      } catch (error) {
        console.error('Error fetching LOCALAPPDATA:', error)
      }
    }

    fetchLocalAppData()
  }

  return (
    <div className="flex">
      <div className="w-96 p-2">
        <LayoutSelector />
      </div>

      <div className="flex p-1">
        {currentLayout ? (
          <LayoutViewer layout={currentLayout} />
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-gray-50">No layout</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
