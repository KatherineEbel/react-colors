import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { Swatch } from '../../utils/seedColors'
import { miniPaletteStyles } from '../../styles/MiniPaletteStyles'
import { Emoji, EmojiData } from 'emoji-mart'
import DeleteRounded from '@material-ui/icons/DeleteRounded'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { useState } from 'react'
import ListItemText from '@material-ui/core/ListItemText'

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
        <List>
          <ListItem button onClick={e => deletePalette(e, id)}>
            <ListItemAvatar className={classes.check}>
              <Avatar>
                <Check />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={toggleOpen}>
            <ListItemAvatar className={classes.close}>
              <Avatar>
                <Close />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Close" />
          </ListItem>
        </List>
      </Dialog>
      <div className={classes.colors}>{swatches}</div>
      <h5 className={classes.title}>
        {name}
        <span className={classes.emoji}>{emojiValue}</span>
      </h5>
    </div>
  )
}

export default withStyles(miniPaletteStyles, { withTheme: true })(MiniPalette)
