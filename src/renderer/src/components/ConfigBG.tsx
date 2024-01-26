import { useEffect } from 'react'
import { Pos, BGRepeat, Justify } from '../types/layouts'
import { useLayoutsStore } from '../store'
const ConfigBG = ({ element, type }: { element: any; type: '' | 'page' | 'pageitem' | 'item' }) => {
  const { updatePage, updateItem } = useLayoutsStore()

  const handleUpdate = (updtype: string, val: any) => {
    if (type === 'item') {
      updateItem(updtype, val)
    } else {
      updatePage(updtype, val)
    }
  }

  useEffect(() => {}, [element])

  return (
    <div className="sectionlist" style={{}}>
      <div>
        <div className="sectiontitle">Bgcolor</div>
        <input
          type="text"
          value={element.bgcolor}
          onChange={(e) => handleUpdate(`${type}bgcolor`, e.target.value)}
        />
      </div>
      {element.bgimg !== undefined && (
        <div>
          <div className="sectiontitle">bgimg</div>
          <div>
            <button
              style={{
                width: '30px',
                color: 'white',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}
              onClick={() => window.electron.ipcRenderer.send('get:img', type)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 -960 960 960"
                width="15"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" />
              </svg>
            </button>
            <button
              style={{
                width: '30px',
                color: 'white',
                textTransform: 'uppercase',
                fontSize: '12px',
                marginLeft: '5px'
              }}
              onClick={() => handleUpdate(`${type}bgimg`, 'none')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 -960 960 960"
                width="15"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {element.fontFamily !== undefined && (
        <div>
          <div className="sectiontitle">fontFamily</div>

          <input
            type="text"
            value={element.fontFamily}
            onChange={(e) => handleUpdate(`${type}fontfamily`, e.target.value)}
          />
        </div>
      )}
      {element.fontWeight !== undefined && (
        <div>
          <div className="sectiontitle">fontWeight</div>

          <input
            type="text"
            value={element.fontWeight}
            onChange={(e) => handleUpdate(`${type}fontweight`, e.target.value)}
          />
        </div>
      )}
      {element.fontSize !== undefined && (
        <div>
          <div className="sectiontitle">fontSize</div>

          <input
            type="text"
            value={element.fontSize}
            onChange={(e) => handleUpdate(`${type}fontsize`, e.target.value)}
          />
        </div>
      )}
      {element.color !== undefined && (
        <div>
          <div className="sectiontitle">color</div>

          <input
            type="text"
            value={element.color}
            onChange={(e) => handleUpdate(`${type}color`, e.target.value)}
          />
        </div>
      )}
      {element.width !== undefined && (
        <div>
          <div className="sectiontitle">width</div>

          <input
            type="text"
            value={element.width}
            onChange={(e) => handleUpdate(`${type}width`, e.target.value)}
          />
        </div>
      )}
      {element.height !== undefined && (
        <div>
          <div className="sectiontitle">height</div>

          <input
            type="text"
            value={element.height}
            onChange={(e) => handleUpdate(`${type}height`, e.target.value)}
          />
        </div>
      )}
      {element.margin !== undefined && (
        <div>
          <div className="sectiontitle">margin</div>

          <input
            type="text"
            value={element.margin}
            onChange={(e) => handleUpdate(`${type}margin`, e.target.value)}
          />
        </div>
      )}
      {element.padding !== undefined && (
        <div>
          <div className="sectiontitle">padding</div>

          <input
            type="text"
            value={element.padding}
            onChange={(e) => handleUpdate(`${type}padding`, e.target.value)}
          />
        </div>
      )}
      {element.border !== undefined && (
        <div>
          <div className="sectiontitle">border</div>
          <input
            type="text"
            value={element.border}
            onChange={(e) => handleUpdate(`${type}border`, e.target.value)}
          />
        </div>
      )}
      {element.borderRadius !== undefined && (
        <div>
          <div className="sectiontitle">b.radius</div>
          <input
            type="text"
            value={element.borderRadius}
            onChange={(e) => handleUpdate(`${type}borderradius`, e.target.value)}
          />
        </div>
      )}
      {element.justifyitems !== undefined && (
        <div>
          <div className="sectiontitle">justify</div>
          <select
            value={element.justify}
            onChange={(e) => handleUpdate(`${type}justifyitems`, e.target.value)}
          >
            {Object.keys(Justify).map((key, _i, _val) => (
              <option key={Justify[key]} value={Justify[key]}>
                {Justify[key]}
              </option>
            ))}
          </select>
        </div>
      )}
      {element.bgimg !== 'none' && element.bgimg !== undefined && (
        <>
          <div>
            <div className="sectiontitle">BgSize</div>
            <input
              type="text"
              value={element.bgsize}
              onChange={(e) => handleUpdate(`${type}bgsize`, e.target.value)}
            />
          </div>
          <div>
            <div className="sectiontitle">BgPos</div>
            <div>
              <select
                value={element.bgpos.x}
                onChange={(e) => handleUpdate(`${type}bgpos`, [e.target.value, 'x'])}
              >
                <option value={Pos.left}>{Pos.left}</option>
                <option value={Pos.right}>{Pos.right}</option>
                <option value={Pos.center}>{Pos.center}</option>
              </select>
              <select
                value={element.bgpos.y}
                onChange={(e) => handleUpdate(`${type}bgpos`, [e.target.value, 'y'])}
              >
                <option value={Pos.top}>{Pos.top}</option>
                <option value={Pos.bottom}>{Pos.bottom}</option>
                <option value={Pos.center}>{Pos.center}</option>
              </select>
            </div>
          </div>
          <div>
            <div className="sectiontitle">BgRepeat</div>

            <select
              value={element.bgrepeat}
              onChange={(e) => handleUpdate(`${type}bgrepeat`, e.target.value)}
            >
              {Object.keys(BGRepeat).map((key) => (
                <option key={BGRepeat[key]} value={BGRepeat[key]}>
                  {BGRepeat[key]}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      {element.onclickbgcolor !== undefined && (
        <div>
          <div className="sectiontitle">click bgcolor</div>
          <input
            type="text"
            value={element.onclickbgcolor}
            onChange={(e) => handleUpdate(`${type}onclickbgcolor`, e.target.value)}
          />
        </div>
      )}
      {element.onclickcolor !== undefined && (
        <div>
          <div className="sectiontitle">click color</div>
          <input
            type="text"
            value={element.onclickcolor}
            onChange={(e) => handleUpdate(`${type}onclickcolor`, e.target.value)}
          />
        </div>
      )}
      {element.onclickborder !== undefined && (
        <div>
          <div className="sectiontitle">click border</div>
          <input
            type="text"
            value={element.onclickborder}
            onChange={(e) => handleUpdate(`${type}onclickborder`, e.target.value)}
          />
        </div>
      )}
    </div>
  )
}

export default ConfigBG
