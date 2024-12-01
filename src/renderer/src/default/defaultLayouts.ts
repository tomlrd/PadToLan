import { Layout, Pos, BGRepeat } from '../types/layouts'
import { v4 as uuidv4 } from 'uuid'

export const getDefaultLayout = (): Layout => ({
  uid: uuidv4(),
  name: 'Default Layout',
  width: 375,
  height: 800,
  bindedKbList: null,
  nosleep: false,
  nonav: false,
  pages: [
    {
      uid: uuidv4(),
      name: 'Page 1',
      pageConfig: {
        bgcolor: '#007BFF', // Bleu par défaut
        bgimg: '',
        bgsize: 'cover',
        bgpos: { x: 'center', y: 'center' },
        bgrepeat: 'no-repeat'
      },
      items: [
        {
          grid: { i: uuidv4(), x: 0, y: 0, w: 3, h: 2 },
          name: 'Button 1',
          color: '#ffffff',
          bgcolor: '#28a745',
          type: 'button',
          bgimg: '',
          bgsize: '',
          bgpos: { x: 'center', y: 'center' },
          bgrepeat: 'no-repeat',
          border: '',
          borderRadius: '',
          action: '',
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
          onclickbgcolor: '',
          onclickcolor: '',
          onclickborder: '',
          textShadow: '',
          boxShadow: ''
        },
        {
          grid: { i: uuidv4(), x: 3, y: 0, w: 3, h: 2 },
          name: 'Button 2',
          color: '#ffffff',
          bgcolor: '#dc3545',
          type: 'button',
          bgimg: '',
          bgsize: '',
          bgpos: { x: 'center', y: 'center' },
          bgrepeat: 'no-repeat',
          border: '',
          borderRadius: '',
          action: '',
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
          onclickbgcolor: '',
          onclickcolor: '',
          onclickborder: '',
          textShadow: '',
          boxShadow: ''
        },
        {
          grid: { i: uuidv4(), x: 6, y: 0, w: 3, h: 2 },
          name: 'Button 3',
          color: '#ffffff',
          bgcolor: '#ffc107',
          type: 'button',
          bgimg: '',
          bgsize: '',
          bgpos: { x: 'center', y: 'center' },
          bgrepeat: 'no-repeat',
          border: '',
          borderRadius: '',
          action: '',
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
          onclickbgcolor: '',
          onclickcolor: '',
          onclickborder: '',
          textShadow: '',
          boxShadow: ''
        }
      ],
      pageListConfig: {
        bgcolor: '',
        bgimg: '',
        bgsize: '',
        bgpos: { x: 'center', y: 'center' },
        bgrepeat: 'no-repeat',
        margin: '',
        padding: '',
        justifyitems: 'center'
      },
      pageItemConfig: {
        color: '',
        bgcolor: '',
        bgimg: '',
        bgsize: '',
        bgpos: { x: 'center', y: 'center' },
        bgrepeat: 'no-repeat',
        border: '',
        borderRadius: '',
        margin: '',
        padding: '',
        height: '',
        width: '',
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        onclickbgcolor: '',
        onclickcolor: '',
        onclickborder: ''
      }
    }
  ]
})
