import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import { Swatch } from '../../utils/seedColors'
import { miniPaletteStyles } from '../../styles/MiniPaletteStyles'
import { Emoji, EmojiData } from 'emoji-mart'

interface Props extends WithStyles<typeof miniPaletteStyles> {
  colors: Swatch[]
  emoji: string | EmojiData
  goToPalette: (id: string) => void
  id: string
  name: string
}

const MiniPalette: React.FC<Props> = props => {
  const { classes, colors, goToPalette, id, name, emoji } = props
  const emojiValue = (emoji as EmojiData).id ? (
    <Emoji emoji={emoji} size={24} />
  ) : (
    emoji
  )
  const swatches = colors.map(c => (
    <div
      style={{ background: c.hex }}
      className={classes.swatch}
      key={c.name}
    />
  ))

  const handleClick = () => {
    goToPalette(id)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{swatches}</div>
      <h5 className={classes.title}>
        {name}
        <span className={classes.emoji}>{emojiValue}</span>
      </h5>
    </div>
  )
}

export default withStyles(miniPaletteStyles)(MiniPalette)
