import createStyles from '@material-ui/core/styles/createStyles'

export default () =>
  createStyles({
    root: {
      alignItems: 'flex-start',
      backgroundColor: 'blue',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: '0 1 50%',
    },
    miniPalettes: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
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
