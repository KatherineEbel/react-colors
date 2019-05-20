import * as React from 'react'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import { CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import { ChromePicker, ColorResult } from 'react-color'
import Button from '@material-ui/core/Button'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { IPalette } from '../../utils/seedColors'
import { History } from 'history'
import DraggableSwatchList from '../DraggableSwatchList'
import arrayMove from 'array-move'
import { SortEndHandler } from 'react-sortable-hoc'

const drawerWidth = 320

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })

interface Props extends WithStyles<typeof styles> {
  history: History
  paletteNames: string[]
  savePalette: (palette: IPalette) => void
  theme: Theme
}

export type Color = {
  name: string
  hex: string
}

interface State {
  open: boolean
  hex: string
  colorName: string
  colors: Color[]
  paletteName: string
}

class NewPaletteForm extends React.Component<Props, State> {
  state: State = {
    colors: [],
    colorName: '',
    hex: '#0000FF',
    open: true,
    paletteName: '',
  }

  addColor = () => {
    const { colorName, hex } = this.state
    const newColor = { name: colorName, hex }
    this.setState(prevState => ({
      colorName: '',
      colors: [...prevState.colors, newColor],
    }))
  }

  handleChange = (target: HTMLInputElement) => {
    this.setState({ [target.name]: target.value } as Pick<State, any>)
  }

  handleColorChange = (colorResult: ColorResult) => {
    const { hex, rgb } = colorResult
    const alphaVal = rgb.a ? Math.round(rgb.a * 255).toString(16) : ''
    this.setState({ hex: `${hex}${alphaVal}` })
  }
  handleDelete = (colorName: string) => {
    this.setState({
      colors: this.state.colors.filter(({ name }) => name !== colorName),
    })
  }

  handleSave = () => {
    const { history, savePalette } = this.props
    const { colors } = this.state
    const { paletteName } = this.state
    const id = paletteName.toLowerCase().replace(/ /g, '-')
    const palette: IPalette = { id, emoji: '', name: paletteName, colors }
    savePalette(palette)
    history.push('/')
  }

  onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove<Color>(colors, oldIndex, newIndex),
    }))
  }
  toggleDrawer = () => this.setState(prevState => ({ open: !prevState.open }))

  componentDidMount(): void {
    ValidatorForm.addValidationRule('isNameUnique', (value: string) => {
      const { colors } = this.state
      return colors.every(
        color => color.name.toLowerCase() !== value.toLowerCase(),
      )
    })

    ValidatorForm.addValidationRule('isColorUnique', () => {
      const { hex: color, colors } = this.state
      return colors.every(({ hex }) => hex !== color)
    })

    ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
      const { paletteName } = this.state
      const { paletteNames } = this.props
      return !paletteNames.includes(paletteName)
    })
  }

  // componentDidMount() {
  //   const { colors } = this.state
  //   ValidatorForm.addValidationRule('isNameUnique', (value: string) => {
  //     return colors.every(
  //       color => color.name.toLowerCase() !== value.toLowerCase(),
  //     )
  //   })
  //
  //   ValidatorForm.addValidationRule('isColorUnique', () => {
  //     const { hex: color } = this.state
  //     return colors.every(({ hex }) => hex !== color)
  //   })
  //
  //   ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
  //     const { paletteName } = this.state
  //     const { paletteNames } = this.props
  //     return !paletteNames.includes(paletteName)
  //   })
  // }

  render() {
    const { classes, theme } = this.props
    const { colors, colorName, hex, open, paletteName } = this.state
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
              onClick={this.toggleDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSave}>
              <TextValidator
                errorMessages={[
                  'Palette name is required',
                  'Palette names need to be unique',
                ]}
                name="paletteName"
                placeholder="Palette Name"
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  this.handleChange(target)
                }
                validators={['required', 'isPaletteNameUnique']}
                value={paletteName}
              />
              <Button color="primary" type="submit" variant="contained">
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.toggleDrawer}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
          <ChromePicker color={hex} onChangeComplete={this.handleColorChange} />
          <ValidatorForm instantValidate={true} onSubmit={this.addColor}>
            <TextValidator
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                this.handleChange(target)
              }
              name="colorName"
              errorMessages={[
                'name is required',
                'names must be unique',
                'Color already exists',
              ]}
              placeholder="Color Name"
              validators={['required', 'isNameUnique', 'isColorUnique']}
              value={colorName}
            />
            <Button variant="contained" color="primary" type="submit">
              Add Color
            </Button>
          </ValidatorForm>
          <Divider />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableSwatchList
            axis="xy"
            colors={colors}
            handleDelete={this.handleDelete}
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
