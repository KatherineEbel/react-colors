import * as React from 'react'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'


// parameter of type import { Theme } from '@material-ui/core/styles/createMuiTheme'
const styles = () =>
  createStyles({
    main: {
      backgroundColor: 'purple',
      border: '3px solid teal',
      '& h1': {
        color: 'white'
      }
    }
  })

interface Props extends WithStyles<typeof styles> {

}
const MiniPalette: React.FC<Props> = (props) => {
  const { classes } = props
  return (
    <div className={ classes.main }>
      <h1>Mini Palette</h1>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
