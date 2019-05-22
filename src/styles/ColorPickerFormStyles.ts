import createStyles from '@material-ui/core/styles/createStyles'

export default () =>
  createStyles({
    colorNameForm: {
      '& button': {
        fontSize: '1.2rem',
        padding: '1rem',
        width: '100%',
      },
    },
    colorNameInput: {
      background: '#ccc',
      boxShadow: '1px 1px 1px #7a7676',
      color: '#4d4d4d',
      marginBottom: '1rem',
      padding: '1rem',
      width: '100%',
    },
    root: {
      '& .chrome-picker': {
        marginBottom: '1rem',
        width: '100% !important',
      },
    },
  })
