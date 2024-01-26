import { useEffect, useState } from 'react'
import { Layout } from '../types/layouts'
import { useLayoutsStore, useOptionsStore } from '../store'
import LayoutDisplay from '../components/LayoutDisplay'
import ConfigPageList from '../components/ConfigPageList'
import ConfigPage from '../components/ConfigPage'
import ConfigPageItem from '../components/ConfigPageItem'
import ConfigItem from '../components/ConfigItem'
import { useKeyBindsStore } from '../store'
function Home(): JSX.Element {
  const {
    layouts,
    selectedLayout,
    selectedPage,
    selectedItem,
    lastLayout,
    getLayout,
    addPage,
    addLayout,
    removeLayout,
    removePage,
    updateLayout,
    updatePage,
    updateItem,
    addItem,
    resetLayouts
  } = useLayoutsStore()
  const { keybindlist, kbselectedList, lastkblist, getKeybindList, resetKeybindList } =
    useKeyBindsStore()
  const { options } = useOptionsStore()
  const [selectedValue, setSelectedValue] = useState('')
  const [layoutW, setlayoutW] = useState<number>()
  const [layoutH, setlayoutH] = useState<number>()

  useEffect(() => {
    window.electron.ipcRenderer.on('firstrun', (_e, isFirstRun) => {
      if (isFirstRun === true) {
        resetLayouts()
        resetKeybindList()
      }
      if (lastLayout) {
        getLayout(lastLayout)
      }
      if (lastkblist) {
        getKeybindList(lastkblist)
      }
    })

    window.electron.ipcRenderer.on('minimizeInNotif', (_e, _arg) => {
      window.electron.ipcRenderer.send('return:minimizeInNotif', options.general.minimizeInNotif)
    })

    window.electron.ipcRenderer.on('selected:img', (_e, [imgpath, type]) => {
      console.log(imgpath, type)
      switch (type) {
        case 'item':
          updateItem('itembgimg', imgpath.replace(/\\/g, '/'))
          break
        case '':
          updatePage('bgimg', imgpath.replace(/\\/g, '/'))
          break
        case 'page':
          updatePage('pagebgimg', imgpath.replace(/\\/g, '/'))
          break
        case 'pageitem':
          updatePage('pageitembgimg', imgpath.replace(/\\/g, '/'))
          break
        default:
          break
      }
    })

    window.electron.ipcRenderer.on('key', async (_e, key) => {
      console.log(key)
      console.log(kbselectedList)

      const foundKBL = keybindlist?.find((kb) => kb.uid === lastkblist)
      const foundAction = foundKBL?.keybinds.find((kb) => kb.uid === key[0])
      console.log(foundAction)

      if (foundAction) {
        const action = {
          uid: foundAction.uid,
          name: foundAction.name,
          key: foundAction.keybind,
          modifiers: foundAction.modifiers,
          doubletap: foundAction.doubletap,
          hold: foundAction.hold,
          repeat: foundAction.repeat,
          delayRepeat: foundAction.delayRepeat
        }
        window.electron.ipcRenderer.send('action:key', [action, options.general.blockToFile])
      }
    })

    if (options.general.serverwhenstart === true) {
      if (lastLayout) {
        window.electron.ipcRenderer.send('start:server', [lastLayout, options])
      }
    }
    if (options.general.startMinimized === true) {
      window.electron.ipcRenderer.send('forceminimize', options.general.minimizeInNotif)
    }

    return () => {}
  }, [])

  useEffect(() => {
    setlayoutW(selectedLayout?.width)
    setlayoutH(selectedLayout?.height)
    console.log(JSON.stringify(selectedLayout?.pages[2].items))
  }, [selectedLayout])

  return (
    <div className="container">
      <div id="left">
        <div id="layoutselect">
          <select
            className="bigselect"
            id="selectlayout"
            value={selectedLayout?.uid}
            onChange={(e) => getLayout(e.target.value)}
          >
            {layouts.map((layout: Layout, index) => (
              <option key={index} value={layout.uid}>
                {layout.name}
              </option>
            ))}
          </select>
          <select
            className="bigselect"
            id="selectlist"
            value={selectedLayout?.bindedKbList ? selectedLayout?.bindedKbList : 'null'}
            onChange={(e) => updateLayout('kblist', e.target.value)}
          >
            <option selected={selectedLayout?.bindedKbList ? false : true} key={0} value={'null'}>
              Select
            </option>
            {keybindlist?.map((kblist: any, index) => (
              <option key={index} value={kblist.uid}>
                {kblist.name}
              </option>
            ))}
          </select>
        </div>

        <div id="layoutdetail">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="line">
              {selectedLayout && (
                <input
                  className="input"
                  type="text"
                  value={selectedLayout.name}
                  onChange={(e) => updateLayout('name', e.target.value)}
                />
              )}

              <button className="btnd add" onClick={() => addLayout()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#82df9eb6"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
              {selectedLayout && (
                <button className="btnd remove" onClick={() => removeLayout(selectedLayout.uid)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#df8282b6"
                    viewBox="0 -960 960 960"
                    width="20"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              )}
            </div>

            {selectedLayout && (
              <div>
                <div style={{ display: 'flex', justifyContent: ' flex-end', width: '100%' }}>
                  <div>
                    W
                    <input
                      onBlur={(_e) => updateLayout('width', Number(layoutW))}
                      className="input"
                      value={layoutW}
                      style={{ width: '70px', margin: '0 5px' }}
                      type="number"
                      onChange={(e) => setlayoutW(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    H
                    <input
                      onBlur={(_e) => updateLayout('height', Number(layoutH))}
                      className="input"
                      value={layoutH}
                      style={{ width: '70px', margin: '0 5px' }}
                      type="number"
                      onChange={(e) => setlayoutH(Number(e.target.value))}
                    />
                  </div>
                </div>
                <label style={{ position: 'absolute', margin: '10px' }}>
                  <input
                    type="checkbox"
                    checked={selectedLayout.nosleep}
                    onChange={(_e) => updateLayout('nosleep', !selectedLayout.nosleep)}
                  />
                  <div>nosleep</div>
                </label>
              </div>
            )}
          </div>

          <div>
            <div className="line">
              {selectedPage && (
                <input
                  type="text"
                  className="input"
                  value={selectedPage.name}
                  onChange={(e) => updatePage('name', e.target.value)}
                />
              )}
              {selectedLayout && (
                <button className="btnd add" onClick={() => addPage()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#82df9eb6"
                    viewBox="0 -960 960 960"
                    width="20"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </button>
              )}
              {selectedPage && (
                <button className="btnd remove" onClick={() => removePage(selectedPage.uid)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#df8282b6"
                    viewBox="0 -960 960 960"
                    width="20"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              )}
            </div>

            {selectedPage && (
              <div>
                <select
                  id="selectelement"
                  value={selectedValue}
                  className=""
                  onChange={(e) => {
                    addItem(e.target.value)
                    setSelectedValue('')
                  }}
                >
                  <option value="null">ADD ELEMENT</option>
                  <option value="button">BUTTON</option>
                  <option value="img/text">IMG/TEXT</option>
                </select>
                <ConfigPage />
                <ConfigPageList />
                <ConfigPageItem />
              </div>
            )}
          </div>
          {selectedItem && <ConfigItem />}
        </div>
      </div>

      <LayoutDisplay />
    </div>
  )
}

export default Home
