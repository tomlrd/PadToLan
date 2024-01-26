import { useLayoutsStore } from '../store'
import ConfigBG from './ConfigBG'

const ConfigPage = () => {
  const { selectedPage } = useLayoutsStore()

  return (
    <div className="configs" style={{ borderTop: '2px solid #15e5d2' }}>
      {selectedPage && (
        <div style={{ padding: '10px' }}>
          <div className="configtitle" style={{ color: '#15e5d2' }}>
            Page
          </div>
          <ConfigBG element={selectedPage.pageConfig} type={''} />
        </div>
      )}
    </div>
  )
}

export default ConfigPage
