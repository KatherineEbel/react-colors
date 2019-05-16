import { createStyles } from '@material-ui/styles'

export const styles = () =>
  createStyles({
    colors: {
      height: '90%',
      position: 'relative',
    },
    container: {
      cursor: 'pointer',
      display: 'inline-block',
      height: '50%',
      margin: '0 auto -4px auto',
      position: 'relative',
      width: '20%',
    },
    goBack: {
      background: 'rgba(255, 255, 255, 0.3)',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      display: 'block',
      fontSize: '1rem',
      height: '30px',
      left: '50%',
      lineHeight: '30px',
      margin: '-15px 0 0 -50px',
      outline: 'none',
      padding: '0.5rem',
      position: 'absolute',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
      top: '50%',
      transition: 'opacity 0.3s ease-in-out',
      width: '100px',
    },
    palette: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
  })
