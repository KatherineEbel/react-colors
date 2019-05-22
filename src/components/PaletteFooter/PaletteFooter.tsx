import * as React from 'react'
import styles from '../../styles/PaletteFooterStyles'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import { Emoji, EmojiData } from 'emoji-mart'

interface Props extends WithStyles<typeof styles> {
  title: string
  emoji: string | EmojiData
}

const PaletteFooter: React.FC<Props> = ({ classes, emoji, title }) => {
  const emojiValue = (emoji as EmojiData).id ? (
    <Emoji emoji={emoji} size={16} />
  ) : (
    emoji
  )
  return (
    <footer className={classes.PaletteFooter}>
      {title}
      <span className={classes.emoji}>{emojiValue}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter)
