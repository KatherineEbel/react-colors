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
import styles from '../styles/NewPaletteFormNavStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

interface NewPaletteFormNavProps extends WithStyles<typeof styles> {
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
          </ValidatorForm>
          <div className={classes.navButtons}>
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
