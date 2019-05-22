import * as React from 'react'
import classNames from 'classnames'
import { CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styles from '../styles/NewPaletteFormNavStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import SavePaletteDialog from './SavePaletteDialog'
import { EmojiData } from 'emoji-mart'

interface NewPaletteFormNavProps extends WithStyles<typeof styles> {
  handleSave: (paletteName: string, emoji: EmojiData) => void
  open: boolean
  paletteNames: string[]
  toggleDrawer: () => void
}

class NewPaletteFormNav extends React.Component<NewPaletteFormNavProps> {
  onSavePalette = (paletteName: string, emoji: EmojiData) => {
    const { handleSave } = this.props
    handleSave(paletteName, emoji)
  }

  render() {
    const { classes, toggleDrawer, open, paletteNames } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          color="default"
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" variant="h6" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <SavePaletteDialog
              handleSave={this.onSavePalette}
              paletteNames={paletteNames}
            />
            <Link to="/">
              <Button color="secondary" variant="contained">
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNav)
