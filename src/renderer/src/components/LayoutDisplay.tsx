import { useEffect, useState } from 'react'
import { Page, GridItem } from '../types/layouts'
import { useLayoutsStore } from '../store'
import GridLayout from 'react-grid-layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
//import PowerTriangle from './Triangle'

function LayoutDisplay({ }: {}): JSX.Element {
  const { updateItem, selectedLayout, selectedPage, selectedItem, getPage, getItem } =
    useLayoutsStore()
  const [pageI, setPageI] = useState<number>(
    selectedLayout?.pages.findIndex((page) => page.uid === selectedPage?.uid) || 0
  )
  const [activeTab, setActiveTab] = useState<number>(pageI)
  const [devpath, setDevPath] = useState<string>("")

  const handleChangePage = (_event: any, index: number, _last: any) => {
    const selectedPageUid = selectedLayout?.pages[index].uid
    if (selectedPageUid) {
      setPageI(index)
      getPage(selectedPageUid)
      setActiveTab(index) 
    }
  }

  const handleClick = (_e, element: any) => {
    console.log(element.onclickcolor)
    console.log(_e.target.style.color)
    _e.target.style.color = element.onclickcolor
    _e.target.style.background = element.onclickbgcolor

    _e.target.style.border = element.onclickborder
    setTimeout(() => {
      _e.target.style.color = element.color
      _e.target.style.background = element.bgcolor
      _e.target.style.border = element.border
    }, 500)
  }
  useEffect(() => {
    const foundPageI = selectedLayout?.pages.findIndex((page) => page.uid === selectedPage?.uid)
    if (foundPageI === -1) {
      setPageI(0)
    } else {
      setPageI(foundPageI ? foundPageI : 0)
    }
  }, [selectedPage])


  useEffect(() => {
    // bad fix
    if (window.api.isdev === true) {
      console.log(selectedLayout);
      if (selectedLayout?.uid === "000001L1SCEx") {
        setDevPath(`url("file:///${window.api.localappdata}`);
      } else {
        setDevPath(`url("file:///`);
      }
    } else {
      if (selectedLayout?.uid === "000001L1SCEx") {
        setDevPath(`url("file:///${window.api.localappdata}`);
      } else {
        setDevPath(`url("file:///`);
      }
    }

  }, [selectedLayout])

  return (
    <div
      id="border"
      style={{
        width: selectedLayout ? selectedLayout?.width + 'px' : '350px',
        height: selectedLayout ? selectedLayout?.height + 'px' : '700px'
      }}
    >
      <div
        id="layoutdisplay"
        style={{
          backgroundImage: `${devpath}/${selectedPage?.pageConfig.bgimg}`,
          backgroundRepeat: selectedPage?.pageConfig.bgrepeat,
          backgroundPositionX: selectedPage?.pageConfig.bgpos.x,
          backgroundPositionY: selectedPage?.pageConfig.bgpos.y,
          backgroundSize: selectedPage?.pageConfig.bgsize
        }}
      >
        <div
          id="layoutdisplaybgcolor"
          style={{
            backgroundColor: selectedPage?.pageConfig.bgcolor,
            height: 'inherit'
          }}
        >
          <div id="faketop">
            <div id="fakeurl"></div>
            <div className="fakebtn"></div>
            <div className="fakebtn"></div>
          </div>
          <Tabs
            selectedIndex={pageI}
            onSelect={(index, last, event) => handleChangePage(event, index, last)}
          >
            <div
              style={{
                backgroundImage: `${devpath}/${selectedPage?.pageListConfig.bgimg}`,
                backgroundRepeat: selectedPage?.pageListConfig.bgrepeat,
                backgroundPositionX: selectedPage?.pageListConfig.bgpos.x,
                backgroundPositionY: selectedPage?.pageListConfig.bgpos.y,
                backgroundSize: selectedPage?.pageListConfig.bgsize,
                display: selectedLayout?.nonav === true ? 'none' : ''
              }}
            >
              <TabList
                style={{
                  background: selectedPage?.pageListConfig.bgcolor,
                  justifyContent: selectedPage?.pageListConfig.justifyitems,
                  margin: selectedPage?.pageListConfig.margin,
                  padding: selectedPage?.pageListConfig.padding
                }}
              >
                {selectedLayout?.pages.map((page: Page, index) => (
                  <Tab
                    style={{
                      backgroundImage: `${devpath}/${page.pageItemConfig.bgimg}`,
                      backgroundSize: page.pageItemConfig.bgsize,
                      backgroundRepeat: page.pageItemConfig.bgrepeat,
                      backgroundPositionX: page.pageItemConfig.bgpos.x,
                      backgroundPositionY: page.pageItemConfig.bgpos.y,
                      margin: page.pageItemConfig.margin,
                      padding: page.pageItemConfig.padding,
                      border: page.pageItemConfig.border,
                      borderRadius: page.pageItemConfig.borderRadius,
                      width: page.pageItemConfig.width,
                      height: page.pageItemConfig.height,
                      fontFamily: page.pageItemConfig.fontFamily,
                      fontWeight: page.pageItemConfig.fontWeight,
                      fontSize: page.pageItemConfig.fontSize,
                      color:
                        activeTab === index
                          ? page.pageItemConfig.onclickcolor
                          : page.pageItemConfig.color
                    }}
                    key={page.uid}
                  >
                    <div
                      className="tabinn"
                      style={{
                        background:
                          activeTab === index
                            ? page.pageItemConfig.onclickbgcolor
                            : page.pageItemConfig.bgcolor
                      }}
                    >
                      {page.name}
                    </div>
                  </Tab>
                ))}
              </TabList>
            </div>
            {selectedLayout?.pages.map((page: Page, index) => (
              <TabPanel key={index}>
                <GridLayout
                  compactType={null}
                  width={selectedLayout?.width}
                  cols={12}
                  rowHeight={10}
                  onLayoutChange={(layout) => updateItem('grid', layout)}
                  preventCollision={true}
                  resizeHandles={['se']}
                  isBounded={false}
                  autoSize={true}
                >
                  {page.items.map((item: GridItem) => (
                    <div
                      className="btn"
                      onClick={() => getItem(item.grid.i)}
                      key={item.grid.i}
                      data-grid={{
                        x: item.grid.x,
                        y: item.grid.y,
                        w: item.grid.w,
                        h: item.grid.h,
                        static: selectedItem?.grid.i === item.grid.i ? false : true
                      }}
                      style={{
                        backgroundRepeat: item.bgrepeat,
                        backgroundPositionX: item.bgpos.x,
                        backgroundPositionY: item.bgpos.y,
                        backgroundSize: item.bgsize,
                        backgroundImage: `${devpath}/${item.bgimg}`,
                        borderRadius: item.borderRadius,
                        textShadow: item.textShadow,
                        boxShadow: item.type === 'button' ? item.boxShadow : ''
                      }}
                    >
                      {/*                       {item.type === "triangle" &&
                        <div className='btninn'>
                          <PowerTriangle/>
                        </div>
                      } */}

                      {item.type === "img/text" &&
                        <div
                          className="btninn"
                          style={{
                            background: item.bgcolor,
                            borderRadius: item.borderRadius,
                            color: item.color,
                            fontFamily: item.fontFamily,
                            fontWeight: item.fontWeight,
                            fontSize: item.fontSize,
                            border:
                              selectedItem?.grid.i === item.grid.i ? '1px solid red' : item.border
                          }}
                          onClick={(e) => handleClick(e, item)}
                        >
                          {item.name}
                        </div>
                      }
                      {item.type === "button" &&
                        <div
                          className="btninn"
                          style={{
                            background: item.bgcolor,
                            borderRadius: item.borderRadius,
                            color: item.color,
                            fontFamily: item.fontFamily,
                            fontWeight: item.fontWeight,
                            fontSize: item.fontSize,
                            border:
                              selectedItem?.grid.i === item.grid.i ? '1px solid red' : item.border
                          }}
                          onClick={(e) => handleClick(e, item)}
                        >
                          {item.name}
                        </div>
                      }
                    </div>
                  ))}
                </GridLayout>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default LayoutDisplay
