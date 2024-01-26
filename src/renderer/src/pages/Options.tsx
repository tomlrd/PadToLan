import { useEffect } from 'react'
import { useOptionsStore, useLayoutsStore, useKeyBindsStore } from '../store'

function Options(): JSX.Element {
  const { options, updateOptions } = useOptionsStore()
  const { resetLayouts } = useLayoutsStore()
  const { resetKeybindList } = useKeyBindsStore()
  useEffect(() => {
    console.log(options)
    return () => {}
  }, [])

  return (
    <div id="options" style={{ backgroundColor: '#323d4663' }}>
      <div className="optline">
        <button onClick={() => resetLayouts()}>reset layouts</button>
        <button style={{ borderColor: 'rgb(212, 138, 241)' }} onClick={() => resetKeybindList()}>
          reset keybinds
        </button>
      </div>

      <div className="optline">
        <label>
          <input
            type="checkbox"
            checked={options.general.startWithWindows}
            onChange={(_e) =>
              updateOptions(['general', 'startwithwindows'], !options.general.startWithWindows)
            }
          />
          <div>start with windows</div>
        </label>
      </div>
      <div className="optline">
        <label>
          <input
            type="checkbox"
            checked={options.general.serverwhenstart}
            onChange={(_e) =>
              updateOptions(['general', 'serverwhenstart'], !options.general.serverwhenstart)
            }
          />
          <div>start server when app start</div>
        </label>
      </div>
      <div className="optline">
        <label>
          <input
            type="checkbox"
            checked={options.general.startMinimized}
            onChange={(_e) =>
              updateOptions(['general', 'startMinimized'], !options.general.startMinimized)
            }
          />
          <div>minimize when app start</div>
        </label>
      </div>
      <div className="optline">
        <label>
          <input
            type="checkbox"
            checked={options.general.minimizeInNotif}
            onChange={(_e) =>
              updateOptions(['general', 'minimizeInNotif'], !options.general.minimizeInNotif)
            }
          />
          <div>minimize in notif zone</div>
        </label>
      </div>
      <div className="optline">
        <div className="desc">enable only when file is focus</div>
        <input
          className={'input'}
          type="text"
          value={options.general.blockToFile ? options.general.blockToFile : ''}
          onChange={(_e) => updateOptions(['general', 'blockToFile'], _e.target.value)}
        />
      </div>
      <div className="optline">
        <div className="desc">server port</div>
        <input
          className={'input'}
          type="text"
          value={options.server.port}
          onChange={(_e) => updateOptions(['server', 'port'], _e.target.value)}
        />
      </div>
      <div className="optline">
        <div className="desc">ipwhitelist (comma separated)</div>
        <input
          className={'input'}
          type="text"
          value={options.server.ipwhitelist}
          onChange={(_e) => updateOptions(['server', 'ipwhitelist'], _e.target.value)}
        />
      </div>
      {/*       <div className='optline'>
        <div>maximum connections</div>
        <input className={'input'} type="number" value={options.server.maxConnections} onChange={(_e) => updateOptions(["server", "maxConnections"], _e.target.value)} />
      </div> */}
    </div>
  )
}

export default Options
