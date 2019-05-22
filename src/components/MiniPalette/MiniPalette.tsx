import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import { Swatch } from '../../utils/seedColors'
import { miniPaletteStyles } from '../../styles/MiniPaletteStyles'
import { Emoji, EmojiData } from 'emoji-mart'
import DeleteRounded from '@material-ui/icons/DeleteRounded'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

interface Props extends WithStyles<typeof miniPaletteStyles> {
  colors: Swatch[]
  emoji: string | EmojiData
  handleDelete: (id: string) => void
  goToPalette: (id: string) => void
  id: string
  name: string
}

const MiniPalette: React.FC<Props> = props => {
  const [open, setOpen] = useState(false)
  const { classes, colors, handleDelete, goToPalette, id, name, emoji } = props
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

  const deletePalette = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    handleDelete(id)
  }

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(!open)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteRounded className={classes.delete} onClick={toggleOpen} />
      <Dialog
        aria-labelledby="delete-dialog-title"
        open={open}
        onClose={toggleOpen}
      >
        <DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={toggleOpen}>
            Cancel
          </Button>
          <Button color="secondary" onClick={e => deletePalette(e, id)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.colors}>{swatches}</div>
      <h5 className={classes.title}>
        {name}
        <span className={classes.emoji}>{emojiValue}</span>
      </h5>
    </div>
  )
}

export default withStyles(miniPaletteStyles)(MiniPalette)
