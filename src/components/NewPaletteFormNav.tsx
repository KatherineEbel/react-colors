import * as React from 'react'
import classNames from 'classnames'
import { CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'

interface NewPaletteFormNavProps {
  classes: Record<
    | 'root'
    | 'appBar'
    | 'appBarShift'
    | 'menuButton'
    | 'hide'
    | 'drawer'
    | 'drawerPaper'
    | 'drawerHeader'
    | 'content'
    | 'contentShift',
    string
  >
  handleSave: (paletteName: string) => void
  open: boolean
  paletteNames: string[]
  toggleDrawer: () => void
}

interface NewPaletteFormNavState {
  newPaletteName: string
}

class NewPaletteFormNav extends React.Component<
  NewPaletteFormNavProps,
  NewPaletteFormNavState
> {
  state: NewPaletteFormNavState = {
    newPaletteName: '',
  }

  componentDidMount(): void {
    ValidatorForm.addValidationRule('paletteNameUnique', () => {
      const { newPaletteName } = this.state
      const { paletteNames } = this.props
      return !paletteNames.includes(newPaletteName)
    })
  }

  onSavePalette = () => {
    const { handleSave } = this.props
    const { newPaletteName } = this.state
    handleSave(newPaletteName)
  }

  render() {
    const { classes, toggleDrawer, open } = this.props
    const { newPaletteName } = this.state
    return (
      <div className="NewPaletteFormNav">
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
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.onSavePalette}>
              <TextValidator
                errorMessages={[
                  'Palette name is required',
                  'Palette names need to be unique',
                ]}
                name="paletteName"
                placeholder="Palette Name"
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ newPaletteName: target.value })
                }
                validators={['required', 'paletteNameUnique']}
                value={newPaletteName}
              />
              <Button color="primary" type="submit" variant="contained">
                Save Palette
              </Button>
              <Link to="/">
                <Button color="secondary" variant="contained">
                  Go Back
                </Button>
              </Link>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NewPaletteFormNav
