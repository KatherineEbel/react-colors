import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { DRAWER_WIDTH } from './index'

export default (theme: Theme) =>
  createStyles({
    actionButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1em',
      '& button:first-of-type': {
        marginRight: '.5rem',
      },
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: DRAWER_WIDTH,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -DRAWER_WIDTH,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    drawerMain: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: '90%',
    },
  })
