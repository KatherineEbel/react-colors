import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import { Swatch } from '../../utils/seedColors'
import { miniPaletteStyles } from '../../styles/MiniPaletteStyles'

interface Props extends WithStyles<typeof miniPaletteStyles> {
  colors: Swatch[]
  emoji: string
  goToPalette: (id: string) => void
  id: string
  name: string
}

const MiniPalette: React.FC<Props> = props => {
  const { classes, colors, goToPalette, id, name, emoji } = props
  const swatches = colors.map(c => (
    <div
      style={{ background: c.hexValue }}
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
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(miniPaletteStyles)(MiniPalette)
