import React, { useEffect, useState } from 'react'
import GridLayout from 'react-grid-layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './App.css'
import { useSwipeable } from 'react-swipeable'
import NoSleep from '@uriopass/nosleep.js'

function App() {
  const noSleep = new NoSleep()
  const [layouts, setLayouts] = useState<any[]>([])
  const [layout, setLayout] = useState<any>(null)
  const [multiLayouts, setMultiLayouts] = useState<any[]>([])
  const [selectedPage, setSelectedPage] = useState<any>(null)
  const [selectedPageI, setSelectedPageI] = useState<number>(0)
  const [pageW, setPageW] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<number>(selectedPageI)
  const [noSleepDiv, setNoSleepDiv] = useState<boolean>(false)
  const [multi, setMulti] = useState<boolean>(false)

  useEffect(() => {
    document.title = 'PadToLan Remote'
    const fetchLayouts = async () => {
      try {
        const response = await fetch('/layout')
        if (response.ok) {
          const data = await response.json()
          setLayouts(data.layouts)
          setMulti(data.layouts.length > 1)

          if (data.layouts.length === 1) {
            setLayout(data.layouts[0])
            setSelectedPage(data.layouts[0].pages[0])
            setActiveTab(0)
            if (data.layouts[0].nosleep) {
              setNoSleepDiv(true)
            }
          } else {
            setMultiLayouts(data.layouts)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchLayouts()

    // fix resize
    const updatePageWidth = () => {
      const layoutDisplay = document.getElementById('layoutdisplay')
      setPageW(layoutDisplay ? layoutDisplay.offsetWidth : window.innerWidth)
    }
    updatePageWidth()
    window.addEventListener('resize', updatePageWidth)
    return () => {
      window.removeEventListener('resize', updatePageWidth)
    }
  }, [])

  useEffect(() => {
    if (layout && layout.nosleep) {
      setNoSleepDiv(true)
    }
  }, [layout])

  const handleLayoutSelect = (index: number) => {
    const selectedLayout = multiLayouts[index]
    setLayout(selectedLayout)
    setSelectedPage(selectedLayout.pages[0])
    setSelectedPageI(0)
    setActiveTab(0)
    setMulti(false)

    if (selectedLayout.nosleep) {
      setNoSleepDiv(true)
    }
  }

  const handleChangePage = (index: number) => {
    setSelectedPage(layout.pages[index])
    setSelectedPageI(index)
    setPageW(window.innerWidth)
    setActiveTab(index)
  }

  const handleNoSleep = (status: boolean) => {
    if (status) {
      noSleep.enable()
    } else {
      noSleep.disable()
    }
    setNoSleepDiv(false)
  }

  const handleSendKey = (e: any, uid: string) => {
    fetch(`/key/${uid}?layoutUid=${layout.uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`Failed to send key for UID: ${uid}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log('Key action response:', data)
      })
      .catch((error) => {
        console.error('Error sending key action:', error)
      })
  }

  // fix css anim
  const handleClick = (_e: any, element: any) => {
    _e.target.style.color = element.onclickcolor
    _e.target.style.background = element.onclickbgcolor
    _e.target.style.border = `${element.onclickborder}px solid ${element.onclickbordercolor}`
    setTimeout(() => {
      _e.target.style.color = element.color
      _e.target.style.background = element.bgcolor
      _e.target.style.border = `${element.border}px solid ${element.bordercolor}`
    }, 500)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    trackTouch: true,
    delta: { left: 180, right: 180 }
  })

  const handleSwipe = (direction: number) => {
    if (direction > 0) {
      if (selectedPageI === 0) {
        handleChangePage(layout.pages.length - 1)
      } else {
        handleChangePage(selectedPageI - 1)
      }
    } else if (direction < 0) {
      if (selectedPageI === layout.pages.length - 1) {
        handleChangePage(0)
      } else {
        handleChangePage(selectedPageI + 1)
      }
    }
  }

  return (
    <div>
      {multi === true && (
        <div id="layout-selector">
          <p>Multi Layout is ON</p>
          <p>Please choose one</p>
          <select onChange={(e) => handleLayoutSelect(parseInt(e.target.value))}>
            <option value="">Select</option>
            {multiLayouts.map((layout, index) => (
              <option key={index} value={index}>
                {layout.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {noSleepDiv && (
        <div id="nosleep">
          <div id="nosleepcontent">
            <p>NoSleep activated and requires manual confirmation</p>
            <div id="nosleepconfirm">
              <button onClick={() => handleNoSleep(true)}>Confirm</button>
              <button onClick={() => handleNoSleep(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {layout && selectedPage && (
        <div
          id="layoutdisplay"
          style={{
            backgroundRepeat: selectedPage.pageConfig.bgrepeat,
            backgroundPositionX: selectedPage.pageConfig.bgpos.x,
            backgroundPositionY: selectedPage.pageConfig.bgpos.y,
            backgroundSize: selectedPage.pageConfig.bgsize,
            backgroundImage: `url(images/${selectedPage.pageConfig.bgimg.replace(/\\/g, '/')})`
          }}
          {...handlers}
        >
          <div
            id="layoutdisplaybgcolor"
            style={{
              height: 'inherit'
            }}
          >
            <Tabs
              selectedIndex={selectedPageI}
              onSelect={(index) => handleChangePage(index)}
              style={{
                backgroundImage: `url("images/${selectedPage.pageListConfig.bgimg.replace(/\\/g, '/')}")`,
                backgroundRepeat: selectedPage.pageListConfig.bgrepeat,
                backgroundPositionX: selectedPage.pageListConfig.bgpos.x,
                backgroundPositionY: selectedPage.pageListConfig.bgpos.y,
                backgroundSize: selectedPage.pageListConfig.bgsize,
                padding: `${selectedPage.pageListConfig.padding}px`,
                justifyContent: selectedPage.pageListConfig.justifyitems
              }}
            >
              {layout.nonav === false && (
                <TabList
                  style={{
                    backgroundColor: selectedPage.pageListConfig.bgcolor
                  }}
                >
                  {layout.pages.map((page: any, index: number) => (
                    <Tab
                      {...handlers}
                      style={{
                        cursor: 'pointer',
                        backgroundImage: `url("images/${page.pageItemConfig.bgimg.replace(/\\/g, '/')}")`,
                        backgroundSize: page.pageItemConfig.bgsize,
                        backgroundColor:
                          activeTab === index
                            ? page.pageItemConfig.onclickbgcolor
                            : page.pageItemConfig.bgcolor,
                        backgroundRepeat: page.pageItemConfig.bgrepeat,
                        backgroundPositionX: page.pageItemConfig.bgpos.x,
                        backgroundPositionY: page.pageItemConfig.bgpos.y,
                        margin: `${page.pageItemConfig.margin}px`,
                        padding: `${page.pageItemConfig.padding}px`,
                        border: `${page.pageItemConfig.border}px solid ${activeTab === index ? page.pageItemConfig.onclickborder : page.pageItemConfig.borderColor}`,
                        borderRadius: page.pageItemConfig.borderRadius,
                        width: `${page.pageItemConfig.width}px`,
                        height: `${page.pageItemConfig.height}px`,
                        fontFamily: page.pageItemConfig.fontFamily,
                        fontWeight: page.pageItemConfig.fontWeight,
                        fontSize: `${page.pageItemConfig.fontSize}px`,
                        justifyContent: page.pageItemConfig.justifyitems,
                        color:
                          activeTab === index
                            ? page.pageItemConfig.onclickcolor
                            : page.pageItemConfig.color
                      }}
                      key={page.uid}
                    >
                      {page.name}
                    </Tab>
                  ))}
                </TabList>
              )}
              {layout.pages.map((page: any, index: number) => (
                <TabPanel key={index}>
                  <GridLayout
                    autoSize={true}
                    width={pageW}
                    cols={layout.cols}
                    rowHeight={layout.rowHeight}
                    preventCollision={true}
                    isBounded={false}
                  >
                    {page.items.map((item: any) => (
                      <div
                        className="btn"
                        onClick={(e) => handleSendKey(e, item.action)}
                        key={item.grid.i}
                        data-grid={{
                          x: item.grid.x,
                          y: item.grid.y,
                          w: item.grid.w,
                          h: item.grid.h,
                          static: true
                        }}
                        style={{
                          backgroundRepeat: item.bgrepeat,
                          backgroundPositionX: item.bgpos.x,
                          backgroundPositionY: item.bgpos.y,
                          backgroundSize: `${item.bgsize}`,
                          backgroundImage: `url("images/${item.bgimg.replace(/\\/g, '/')}")`,
                          borderRadius: `${item.borderRadius}px`,
                          backgroundBlendMode: 'overlay',
                          textShadow: item.textShadow ? '0 1px 2px black' : 'none',
                          boxShadow: item.boxShadow ? '0 0 10px black' : 'none'
                        }}
                      >
                        {item.type === 'img/text' && (
                          <div
                            className="btninn"
                            style={{
                              background: item.bgcolor,
                              borderRadius: `${item.borderRadius}px`,
                              color: item.color,
                              fontFamily: item.fontFamily,
                              fontWeight: `${item.fontWeight}px`,
                              fontSize: `${item.fontSize}px`,
                              border: `${item.border}px solid ${item.borderColor}`
                            }}
                          >
                            {item.name}
                          </div>
                        )}
                        {item.type === 'button' && (
                          <div
                            className="btninn"
                            style={{
                              background: item.bgcolor,
                              borderRadius: `${item.borderRadius}px`,
                              color: item.color,
                              fontFamily: item.fontFamily,
                              fontWeight: `${item.fontWeight}px`,
                              fontSize: `${item.fontSize}px`,
                              border: `${item.border}px solid ${item.borderColor}`
                            }}
                            onClick={(e) => handleClick(e, item)}
                          >
                            {item.name}
                          </div>
                        )}
                      </div>
                    ))}
                  </GridLayout>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
