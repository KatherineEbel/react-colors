import createStyles from '@material-ui/styles/createStyles'

export default () =>
  createStyles({
    NavBar: {
      alignItems: 'center',
      display: 'flex',
      minHeight: '6vh',
      justifyContent: 'flex-start',
    },
    logo: {
      alignItems: 'center',
      backgroundColor: '#eceff1',
      display: 'flex',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.3rem',
      height: '100%',
      marginRight: '1rem',
      padding: '1.2rem 0.8rem',
      '& a': {
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '1.3rem',
        textDecoration: 'none',
        '&:visited': {
          color: '#222222',
        },
      },
    },
    select: {
      margin: '0 2vw 0 auto',
    },
    slider: {
      display: 'inline-block',
      flex: '1 1 20vw',
      margin: '0 2vw',
      minWidth: '15vw',
      '& .rc-slider-track': {
        backgroundColor: 'transparent',
      },
      '& .rc-slider-rail': {
        height: '8px',
      },
      '& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover': {
        backgroundColor: 'green',
        border: '2px solid green',
        boxShadow: 'none',
        height: '16px',
        marginTop: '-4px',
        width: '16px',
        outline: 'none',
      },
    },
  })
