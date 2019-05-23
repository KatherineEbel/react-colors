import createStyles from '@material-ui/core/styles/createStyles'
import bg from './bg.svg'

export default () =>
  createStyles({
    '@global': {
      '.fade-exit': {
        opacity: 1,
      },
      '.fade-exit-active': {
        opacity: 0,
        transition: 'opacity 500ms ease-out',
      },
    },
    root: {
      alignItems: 'flex-start',
      backgroundColor: '#4833d4',
      backgroundImage: `url(${bg})`,
      /* background by SVGBackgrounds.com */
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: '0 1 85%',
    },
    miniPalettes: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      // justifyContent: 'center',
      justifyContent: 'flex-start',
    },
    nav: {
      alignItems: 'center',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      '& a': {
        color: 'white',
      },
    },
  })
