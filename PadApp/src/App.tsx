import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import GridLayout from 'react-grid-layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import NoSleep from '@uriopass/nosleep.js';
import './App.css';
import { DefaultLayouts } from './layoutsdefault'
import { useSwipeable } from 'react-swipeable';
import PowerTriangle from './Triangle'

function App() {
  const noSleep = new NoSleep();
  const [layout, setLayout] = useState<any>(null);
  const [selectedPage, setSelectedPage] = useState<any>(null);
  const [selectedPageI, setSelectedPageI] = useState<number>(0);
  const [pageW, setPageW] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<number>(selectedPageI);
  const [noSleepDiv, setNoSleepDiv] = useState<boolean>(false);
  const [blockBtn, setBlocBtn] = useState<boolean>(true);

  useEffect(() => {
    document.title = "PadToLan Remote";
    const fetchLayouts = async () => {
      try {
        const response = await fetch('/layout');
        console.log(response);

        if (response.ok) {
          const data = await response.json();
          console.log(data.layout);
          setLayout(data.layout)
          if (data.layout.nosleep === true) {
            setNoSleepDiv(data.layout.nosleep)
          }
        } else {
          throw new Error('Erreur lors de la récupération des layouts');
        }
      } catch (error) {
        console.error(error);
        fetchFakeLayouts()

      }
    };

    const fetchFakeLayouts = async () => {
      setLayout(DefaultLayouts[0])
      console.log(DefaultLayouts);
    };

    fetchLayouts()



    window.addEventListener('resize', () => {
      setPageW(window.innerWidth)
    });

  }, []);

  useEffect(() => {
    if (layout) {
      handleChangePage(0)
    }

  }, [layout]);


  const handleNoSleep = (status: boolean) => {
    if (status === true) {
      noSleep.enable();
    } else {
      noSleep.disable();
    }
    setNoSleepDiv(false)
  }

  const handleChangePage = (index: number) => {
    setSelectedPage(layout.pages[index])
    setSelectedPageI(index)
    setPageW(window.innerWidth)
    setActiveTab(index);
  }

  const handleBlockBtn = () => {
    setBlocBtn(false)
    setTimeout(() => {
      setBlocBtn(true)
    }, 300);
  }

  const handleSendKey = (e: any, uid: string) => {
    handleBlockBtn();
    e.preventDefault();
    if (blockBtn) {
      console.log(uid);
      fetch(`/key/${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };


  const handleClick = (_e: any, element: any) => {
    console.log(element.onclickcolor);
    console.log(_e.target.style.color);
    _e.target.style.color = element.onclickcolor
    _e.target.style.background = element.onclickbgcolor
    _e.target.style.border = element.onclickborder
    setTimeout(() => {
      _e.target.style.color = element.color
      _e.target.style.background = element.bgcolor
      _e.target.style.border = element.border
    }, 500);

  };
  const handlers = useSwipeable({
    onSwipedLeft: () => (
      handleSwipe(-1)
    ),
    onSwipedRight: () => (
      handleSwipe(1)
    ),
    trackTouch: true,
    delta: { left: 180, right: 180 }
  });

  const handleSwipe = (direction: number) => {
    console.log(direction);

    if (direction > 0) {
      console.log('left');
      if (selectedPageI === 0) {
        handleChangePage(layout.pages.length - 1);
      } else {
        handleChangePage(selectedPageI - 1);
      }
    } else if (direction < 0) {
      console.log('right');
      if (selectedPageI === layout.pages.length - 1) {
        handleChangePage(0);
      } else {
        handleChangePage(selectedPageI + 1);
      }
    }
  };


  return (
    <div>
      {noSleepDiv &&
        <div id='nosleep'>
          <div id='nosleepcontent'>
            <p>NoSleep activated and require a manual confirm</p>
            <div id='nosleepconfirm'>
              <button onClick={() => handleNoSleep(true)}>confirm</button>
              <button onClick={() => handleNoSleep(false)}>cancel</button>
            </div>
          </div>
        </div>
      }
      {layout && selectedPage &&
        <div id="layoutdisplay" style={{
          backgroundRepeat: selectedPage.pageConfig.bgrepeat,
          backgroundPositionX: selectedPage.pageConfig.bgpos.x,
          backgroundPositionY: selectedPage.pageConfig.bgpos.y,
          backgroundSize: selectedPage.pageConfig.bgsize,
          backgroundImage: `url("images/${selectedPage.pageConfig.bgimg}")`,
        }}
          {...handlers}
        >
          <div id='layoutdisplaybgcolor' style={{
            backgroundColor: selectedPage?.pageConfig.bgcolor,
            height: "inherit"
          }}>
            <Tabs selectedIndex={selectedPageI} onSelect={(index) => handleChangePage(index)}>
              <div style={{
                backgroundImage: `url("images/${selectedPage.pageListConfig.bgimg}")`,
                backgroundRepeat: selectedPage.pageListConfig.bgrepeat,
                backgroundPositionX: selectedPage.pageListConfig.bgpos.x,
                backgroundPositionY: selectedPage.pageListConfig.bgpos.y,
                backgroundSize: selectedPage.pageListConfig.bgsize,
              }}>
                <TabList style={{
                  backgroundColor: selectedPage.pageListConfig.bgcolor,
                  justifyContent: selectedPage.pageListConfig.justifyitems,
                  margin: selectedPage.pageListConfig.margin,
                  padding: selectedPage.pageListConfig.padding,
                  display: layout.nonav === true ? 'none' : ''
                }}
                >
                  {layout.pages.map((page: any, index: number) => (
                    <Tab {...handlers}
                      style={{
                        backgroundImage: `url("images/${page.pageItemConfig.bgimg}")`,
                        backgroundSize: page.pageItemConfig.bgsize,
                        backgroundColor: page.pageItemConfig.bgcolor,
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
                        color: activeTab === index ? page.pageItemConfig.onclickcolor : page.pageItemConfig.color
                      }}
                      key={page.uid}>
                      <div className='tabinn' style={{
                        background: activeTab === index ? page.pageItemConfig.onclickbgcolor : page.pageItemConfig.bgcolor,
                      }}>
                        {page.name}
                      </div>
                    </Tab>
                  ))}
                </TabList>
                {layout.pages.map((page: any, index: number) => (
                  <TabPanel key={index}>
                    <GridLayout
                      autoSize={true}
                      compactType={null}
                      width={pageW}
                      cols={12}
                      rowHeight={10}
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
                            backgroundSize: item.bgsize,
                            backgroundImage: `url("file:///../${item.bgimg}")`,
                            borderRadius: item.borderRadius,
                            textShadow: item.textShadow,
                            boxShadow: item.type === 'button' ? item.boxShadow : ''
                          }}
                        >
                          {item.type === "triangle" &&
                            <div className='btninn'>
                              tri
                              <PowerTriangle />
                            </div>
                          }

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
                                border: 'none'
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
                                border: 'none'
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
              </div>


            </Tabs>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
