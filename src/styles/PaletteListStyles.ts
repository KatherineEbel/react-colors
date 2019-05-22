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
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      flex: '0 50%',
      // width: '50%',
    },
    miniPalettes: {
      alignContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flexGrow: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
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
