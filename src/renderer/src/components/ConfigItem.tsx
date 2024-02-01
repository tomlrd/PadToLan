import { useEffect, useState } from 'react'
import { useLayoutsStore } from '../store'
import ConfigBG from './ConfigBG'
import { useKeyBindsStore } from '../store'
import { KeyBind } from '../types/keybinds'
const ConfigItem = () => {
  const { selectedLayout, selectedItem, updateItem, removeItem } = useLayoutsStore()
  const { keybindlist } = useKeyBindsStore()

  const [kblist, setkblist] = useState<any>()
  const [kbaction, setkbaction] = useState<any>()

  const handleAction = (type, uid) => {
    const foundList = keybindlist?.find((kb) => kb.uid === kblist.uid)
    const foundAction = foundList?.keybinds?.find((kba) => kba.uid === uid)
    console.log(foundList)
    console.log(foundAction)

    if (foundList && foundAction) {
      updateItem(type, foundAction.uid)
      setkbaction(foundAction)
    }
  }
  useEffect(() => {
    const foundkblist = keybindlist?.find((kb) => kb.uid === selectedLayout?.bindedKbList)
    const foundAction = foundkblist?.keybinds?.find((kba) => kba.uid === selectedItem?.action)

    if (foundkblist) {
      console.log(foundkblist)
      setkblist(foundkblist)
    }
    if (foundAction) {
      console.log(foundAction)
      setkbaction(foundAction)
    }
  }, [selectedLayout && selectedItem])

  useEffect(() => {
    if (selectedItem?.action === 'none') {
      setkbaction(null)
    } 
  }, [selectedItem])

  return (
    <div className="configs" style={{ borderTop: '2px solid #ffdd00' }}>
      {selectedItem && (
        <div style={{ padding: '10px' }}>
          <div className="configtitle" style={{ color: '#ffdd00' }}>
            element
          </div>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              className="sectioninput"
              value={selectedItem.name}
              onChange={(e) => updateItem('itemname', e.target.value)}
              style={{ width: '25%' }}
            />
            {selectedLayout?.bindedKbList && (
              <select
                style={{ marginLeft: '10px' }}
                value={kbaction?.uid}
                onChange={(e) => handleAction('action', e.target.value)}
              >
                <option selected={kbaction ? false : true} key={0} value={'null'}>
                  Select
                </option>
                {kblist?.keybinds?.map((kb: KeyBind) => (
                  <option key={kb.uid} value={kb.uid}>
                    {kb.name}
                  </option>
                ))}
              </select>
            )}
            <button onClick={() => updateItem('copyitem', selectedItem)}>copy</button>
            <button onClick={() => updateItem('pasteitem', null)}>paste</button>
            <button
              className="remove"
              style={{ marginLeft: '10px' }}
              onClick={() => removeItem(selectedItem.grid.i)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#df8282b6"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </div>

          <ConfigBG element={selectedItem} type={'item'} />
        </div>
      )}
    </div>
  )
}

export default ConfigItem
