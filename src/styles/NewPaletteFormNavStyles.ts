import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import { DRAWER_WIDTH } from './index'

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      alignItems: 'center',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: '1vh',
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    navButtons: {
      display: 'flex',
      '& a': {
        marginLeft: '1rem',
        textDecoration: 'none',
      },
    },
    hide: {
      display: 'none',
    },
  })
