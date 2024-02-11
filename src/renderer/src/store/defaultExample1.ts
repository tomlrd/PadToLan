import { Layout } from '@renderer/types/layouts'
import { generateUID, getBlankLayout } from './layoutsdefault'


const SM1 = {
    ...getBlankLayout(),
    name: 'Example Smartphone3',
    uid: '000001L1SCEx'
}
SM1.bindedKbList = 'SSC100000000'
SM1.width = 375
SM1.height = 800
SM1.nosleep = true
SM1.pages[0].name = 'Ship'
SM1.pages[0].uid = '000000P1SCEx'
SM1.pages[0].pageConfig.bgcolor = '#121212d1'
SM1.pages[0].pageConfig.bgimg = 'C:/Users/stylo/AppData/Local/Programs/padtolan/resources/PadApp/1.png'
SM1.pages[0].pageListConfig.bgcolor = '#4e454552'
SM1.pages[0].pageItemConfig.height = '35px'
SM1.pages[0].pageItemConfig.color = '#e1e7ed7a'
SM1.pages[0].pageItemConfig.bgcolor = 'transparent'
SM1.pages[0].pageItemConfig.onclickcolor = 'white'
SM1.pages[0].pageItemConfig.onclickbgcolor = '#e5434347'


SM1.pages[1].name = 'Combat'
SM1.pages[1].uid = '000000P2SCEx'
SM1.pages[1].pageConfig.bgcolor = '#121212d1'
SM1.pages[1].pageConfig.bgimg = 'C:/Users/stylo/AppData/Local/Programs/padtolan/resources/PadApp/1.png'
SM1.pages[1].pageListConfig.bgcolor = '#4e454552'
SM1.pages[1].pageItemConfig.height = '35px'
SM1.pages[1].pageItemConfig.color = '#e1e7ed7a'
SM1.pages[1].pageItemConfig.bgcolor = 'transparent'
SM1.pages[1].pageItemConfig.onclickcolor = 'white'
SM1.pages[1].pageItemConfig.onclickbgcolor = '#e5434347'


SM1.pages[2].name = 'Industrial'
SM1.pages[2].uid = '000000P3SCEx'
SM1.pages[2].pageConfig.bgcolor = '#121212d1'
SM1.pages[2].pageConfig.bgimg = 'C:/Users/stylo/AppData/Local/Programs/padtolan/resources/PadApp/1.png'
SM1.pages[2].pageListConfig.bgcolor = '#4e454552'
SM1.pages[2].pageItemConfig.height = '35px'
SM1.pages[2].pageItemConfig.color = '#e1e7ed7a'
SM1.pages[2].pageItemConfig.bgcolor = 'transparent'
SM1.pages[2].pageItemConfig.onclickcolor = 'white'
SM1.pages[2].pageItemConfig.onclickbgcolor = '#e5434347'




export const D2: Layout[] = [SM1]
