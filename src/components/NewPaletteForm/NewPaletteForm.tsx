import * as React from 'react'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
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
import DraggableSwatch from '../DraggableSwatch'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { IPalette } from '../../utils/seedColors'
import { History } from 'history'

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
    swatches: {
      height: '100vh',
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

const NewPaletteForm: React.FC<Props> = ({
  classes,
  history,
  paletteNames,
  savePalette,
  theme,
}) => {
  const [open, toggleOpen] = useState<boolean>(true)
  const [color, setColor] = useState<string>('blue')
  const [colorName, setColorName] = useState<string>('')
  const [colors, setColors] = useState<Color[]>([])
  const [paletteName, setPaletteName] = useState<string>('')

  const addColor = () => {
    const newColor = { name: colorName, hex: color }
    setColorName('')
    setColors([...colors, newColor])
  }
  const handleColorChange = ({ hex }: ColorResult) => setColor(hex)
  const handleDelete = (colorName: string) =>
    setColors(colors.filter(({ name }) => name !== colorName))
  const handleSave = () => {
    const id = paletteName.toLowerCase().replace(/ /g, '-')
    const palette: IPalette = { id, emoji: '', name: paletteName, colors }
    savePalette(palette)
    history.push('/')
  }
  const toggleDrawer = () => toggleOpen(!open)

  useEffect(() => {
    ValidatorForm.addValidationRule('isNameUnique', (value: string) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase(),
      )
    })

    ValidatorForm.addValidationRule('isColorUnique', () => {
      return colors.every(({ hex }) => hex !== color)
    })

    ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
      return !paletteNames.includes(paletteName)
    })
  }, [colors, color, paletteName, paletteNames])

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
          <Typography variant="h6" color="inherit" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSave}>
            <TextValidator
              errorMessages={[
                'Palette name is required',
                'Palette names need to be unique',
              ]}
              name="paletteName"
              placeholder="Palette Name"
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                setPaletteName(target.value)
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
          <IconButton onClick={toggleDrawer}>
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
        <ChromePicker color={color} onChangeComplete={handleColorChange} />
        <ValidatorForm instantValidate={true} onSubmit={addColor}>
          <TextValidator
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setColorName(target.value)
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
        {color}
        <ul className={classes.swatches}>
          {colors.map(({ hex, name }) => (
            <DraggableSwatch
              color={hex}
              handleDelete={handleDelete}
              name={name}
              key={name}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
