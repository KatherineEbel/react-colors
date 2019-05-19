import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import createStyles from '@material-ui/styles/createStyles'

const styles = () =>
  createStyles({
    root: {
      cursor: 'pointer',
      display: 'inline-block',
      height: '25%',
      margin: '0 auto -3.8px auto',
      position: 'relative',
      width: '20%',
    },
  })

interface Props extends WithStyles<typeof styles> {
  color: string
  name: string
}
const DraggableSwatch: React.FC<Props> = ({ classes, color, name }) => {
  return (
    <li className={classes.root} style={{ background: color }}>
      {name}
    </li>
  )
}

export default withStyles(styles)(DraggableSwatch)
