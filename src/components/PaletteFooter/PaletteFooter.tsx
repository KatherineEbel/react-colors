import * as React from 'react'
import styles from '../../styles/PaletteFooterStyles'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'

interface Props extends WithStyles<typeof styles> {
  title: string
  emoji: string
}

const PaletteFooter: React.FC<Props> = ({ classes, emoji, title }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {title}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter)
