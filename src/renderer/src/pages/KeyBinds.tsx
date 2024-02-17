import { useEffect } from 'react'
import { useKeyBindsStore } from '../store'
import { KeyBind, KeyBindList, Modifier } from '../types/keybinds'

function KeyBinds(): JSX.Element {
  const {
    keybindlist,
    kbselectedList,
    lastkblist,
    getKeybindList,
    addKeybindList,
    updateKeybind,
    getKeybind,
    updateKeybindList,
    removeKeybindList,
    addKeybind,
    removeKeybind
  } = useKeyBindsStore()

  /*   const handleChange = (type, _uid, k) => {
      updateKeybind(type, k)
    } */

  const handleReset = (uid) => {
    getKeybind(uid)
    updateKeybind('key', null)
  }
  useEffect(() => {
    if (lastkblist) {
      getKeybindList(lastkblist)
    }

    return () => { }
  }, [])

  return (
    <div id="keybinds" style={{ backgroundColor: '#323d4663' }}>
      <div id="keybindslistselect">
        <select value={kbselectedList?.uid} onChange={(e) => getKeybindList(e.target.value)}>
          {keybindlist?.map((list: KeyBindList) => (
            <option key={list.uid} value={list.uid}>
              {list.name}
            </option>
          ))}
        </select>
        <button className="btnd add" onClick={() => addKeybindList()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#82df9eb6"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>

        {keybindlist.length > 0 && (
          <button className="btnd remove" onClick={() => removeKeybindList()}>
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
        {kbselectedList && (
          <input
            className="input"
            onClick={(_e) => getKeybindList(kbselectedList.uid)}
            type="text"
            value={kbselectedList.name}
            onChange={(e) => updateKeybindList('name', e.target.value)}
          />
        )}
      </div>

      <div id="keybindslist">
        <button id="addkb" onClick={() => addKeybind()}>
          add keybind
        </button>
        {kbselectedList &&
          kbselectedList.keybinds.map((key: KeyBind) => (
            <div className="inputline" key={key.uid} onClick={(_e) => getKeybind(key.uid)}>
              <input
                className="input"
                onClick={(_e) => getKeybind(key.uid)}
                type="text"
                value={key.name}
                onChange={(e) => updateKeybind('name', e.target.value)}
              />

              <input
                style={{ backgroundColor: '#404040' }}
                className="input"
                type="text"
                value={key.keybind ? key.keybind : 'none'}
                onChange={(_e) => updateKeybind('key', _e.target.value)}
                onClick={(_e) => handleReset(key.uid)}
              />

              <select
                value={key.modifiers[0] ? key.modifiers[0] : 'None'}
                onClick={(_e) => getKeybind(key.uid)}
                onChange={(e) => updateKeybind('modifier', e.target.value)}
              >
                {Object.keys(Modifier).map((modifier) => (
                  <option key={Modifier[modifier]} value={Modifier[modifier]}>
                    {Modifier[modifier]}
                  </option>
                ))}
              </select>

{/*               <select
                value={key.modifiers[1] ? key.modifiers[1] : 'None'}
                onClick={(_e) => getKeybind(key.uid)}
                onChange={(e) => updateKeybind('modifier2', e.target.value)}
              >
                {Object.keys(Modifier).map((modifier) => (
                  <option key={Modifier[modifier]} value={Modifier[modifier]}>
                    {Modifier[modifier]}
                  </option>
                ))}
              </select> */}
              <label>
                <input
                  type="checkbox"
                  checked={key.doubletap}
                  onChange={(_e) => updateKeybind('doubletap', !key.doubletap)}
                />
                <div>doubletap</div>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={key.hold}
                  onChange={(_e) => updateKeybind('hold', !key.hold)}
                />
                <div>hold</div>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={(Number(key.repeat) > 0 || key.repeat == 'infinite') ? true : false}
                  onChange={(_e) => updateKeybind('repeat', (Number(key.repeat) === 0) ? 2 : 0)}
                />
                <div>repeat</div>
              </label>


              {(Number(key.repeat) > 1 || key.repeat == 'infinite') &&
                <div>
                  <input
                    className="input"
                    onClick={(_e) => getKeybind(key.uid)}
                    type="text"
                    value={key.repeat}
                    onChange={(e) => updateKeybind('repeat', e.target.value)}
                    style={{width:'60px'}}
                  />
                  times
                  <input
                    className="input"
                    onClick={(_e) => getKeybind(key.uid)}
                    type="text"
                    value={key.delayRepeat}
                    onChange={(e) => updateKeybind('repeatDelay', e.target.value)}
                    style={{width:'60px'}}
                  />
                  delay (ms)
                </div>
              }
              <button
                className="remove"
                onClick={() => {
                  getKeybind(key.uid)
                  removeKeybind()
                }}
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
          ))}
      </div>
    </div>
  )
}

export default KeyBinds
