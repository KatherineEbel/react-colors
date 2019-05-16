import { createStyles } from '@material-ui/styles'

export default () =>
  createStyles({
    PaletteFooter: {
      alignItems: 'center',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'flex-end',
      fontWeight: 'bold',
      height: '5vh',
    },
    emoji: {
      fontSize: '1.5rem',
      margin: '0 1rem',
    },
  })
