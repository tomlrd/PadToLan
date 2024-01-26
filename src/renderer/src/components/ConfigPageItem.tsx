import { useLayoutsStore } from '../store'
import ConfigBG from './ConfigBG'
const ConfigPageItem = () => {
  const { selectedPage } = useLayoutsStore()

  return (
    <div className="configs" style={{ borderTop: '2px solid #007eeb' }}>
      {selectedPage && (
        <div style={{ padding: '10px' }}>
          <div className="configtitle" style={{ color: '#007eeb' }}>
            Page Navigation Item
          </div>
          <ConfigBG element={selectedPage.pageItemConfig} type={'pageitem'} />
        </div>
      )}
    </div>
  )
}

export default ConfigPageItem
