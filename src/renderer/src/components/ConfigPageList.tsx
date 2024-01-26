import { useLayoutsStore } from '../store'
import ConfigBG from './ConfigBG'

const ConfigPageList = () => {
  const { selectedPage } = useLayoutsStore()

  return (
    <div className="configs" style={{ borderTop: '2px solid rgb(21 171 229)' }}>
      {selectedPage && (
        <div style={{ padding: '10px' }}>
          <div className="configtitle" style={{ color: 'rgb(21 171 229)' }}>
            Page Navigation
          </div>
          <ConfigBG element={selectedPage.pageListConfig} type={'page'} />
        </div>
      )}
    </div>
  )
}

export default ConfigPageList
