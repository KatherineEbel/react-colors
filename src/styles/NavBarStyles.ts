import createStyles from '@material-ui/styles/createStyles'

export default () =>
  createStyles({
    NavBar: {
      alignItems: 'center',
      display: 'flex',
      height: '6vh',
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
      padding: '0 0.8rem',
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
      margin: '0 2vw',
      width: '20vw',
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
