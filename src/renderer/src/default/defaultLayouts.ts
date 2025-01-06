import { Layout, Page, GridItem } from '../types/layouts'
import { v4 as uuidv4 } from 'uuid'

export const getDefaultLayout = (): Layout => ({
  uid: uuidv4(),
  name: 'New Layout',
  width: 375,
  height: 800,
  bindedKbList: null,
  nosleep: false,
  nonav: false,
  cols: 12,
  rowHeight: 4,
  pages: [getDefaultPage()]
})

export const getDefaultPage = (): Page => ({
  uid: uuidv4(),
  name: 'New Page',
  pageConfig: {
    bgcolor: '#506173',
    bgimg: '',
    bgsize: 'cover',
    bgpos: { x: 'center', y: 'center' },
    bgrepeat: 'no-repeat'
  },
  items: [getDefaultItem()],
  pageListConfig: {
    bgcolor: '#3134346e',
    bgimg: '',
    bgsize: '',
    bgpos: { x: 'center', y: 'center' },
    bgrepeat: 'no-repeat',
    margin: 0,
    padding: 0,
    justifyitems: 'space-between'
  },
  pageItemConfig: {
    color: '#8a494985',
    bgcolor: '#2e2c2c03',
    bgimg: '',
    bgsize: '',
    bgpos: { x: 'center', y: 'center' },
    bgrepeat: 'no-repeat',
    border: 0,
    borderRadius: 0,
    margin: 0,
    padding: 2,
    height: '38',
    width: '128',
    fontFamily: 'Arial',
    fontWeight: '',
    fontSize: '15',
    onclickbgcolor: '#8a494985',
    onclickcolor: '#f3efef',
    onclickborder: '#18171703',
    borderColor: '#2e2c2c03',
    justifyitems: 'center'
  }
})

export const getDefaultItem = (): GridItem => ({
  grid: { i: uuidv4(), x: 0, y: 0, w: 4, h: 4 },
  name: 'Button 1',
  color: '#ffffff',
  bgcolor: '#28A745',
  type: 'button',
  bgimg: '',
  bgsize: '',
  bgpos: { x: 'center', y: 'center' },
  bgrepeat: 'no-repeat',
  border: 1,
  borderColor: '#F7F7F7',
  borderRadius: 3,
  action: '',
  fontFamily: 'Impact',
  fontWeight: '',
  fontSize: '17',
  onclickbgcolor: 'rgba(40, 167, 69, 0.59)',
  onclickcolor: '#FFFFFF',
  onclickbordercolor: '#FFFFFF',
  textShadow: true,
  boxShadow: true
})
