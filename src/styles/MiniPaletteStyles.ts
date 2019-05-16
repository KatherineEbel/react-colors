import createStyles from '@material-ui/styles/createStyles'

export const miniPaletteStyles = () =>
  createStyles({
    colors: {
      backgroundColor: '#dae1e4',
      borderRadius: '5px',
      height: '150px',
      overflow: 'hidden',
      width: '100%',
    },
    emoji: {
      marginLeft: '0.5rem',
      fontSize: '1.5rem',
    },
    root: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    swatch: {
      display: 'inline-block',
      height: '25%',
      marginBottom: '-4px',
      position: 'relative',
      width: '20%',
    },
    title: {
      alignItems: 'center',
      color: 'black',
      display: 'flex',
      fontSize: '1rem',
      justifyContent: 'space-between',
      margin: '0',
      paddingTop: '0.5rem',
      position: 'relative',
    },
  })
