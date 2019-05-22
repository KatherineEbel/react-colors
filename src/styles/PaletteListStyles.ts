import createStyles from '@material-ui/core/styles/createStyles'

export default () =>
  createStyles({
    root: {
      alignItems: 'flex-start',
      backgroundColor: 'blue',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
    },
    container: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '50%',
    },
    miniPalettes: {
      boxSizing: 'border-box',
      display: 'grid',
      gridGap: '5%',
      gridTemplateColumns: 'repeat(3, 30%)',
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
