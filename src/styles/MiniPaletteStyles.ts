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
    delete: {
      background: 'red',
      color: 'white',
      height: '20px',
      padding: '2px',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '20px',
      zIndex: 1,
    },
    emoji: {
      marginLeft: '0.5rem',
      fontSize: '1.5rem',
    },
    root: {
      flex: '0 1 30%',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '0 0.5rem 2% 0',
      minWidth: '200px',
      maxWidth: '30%',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      '& svg': {
        opacity: 0,
        transition: 'all .5s ease-in-out',
        '&:hover': {
          transform: 'scale(1.3)',
        },
      },
      '&:hover svg': {
        opacity: 1,
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
