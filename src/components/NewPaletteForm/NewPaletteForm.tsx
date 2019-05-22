import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import { Theme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { IPalette } from '../../utils/seedColors'
import { History } from 'history'
import DraggableSwatchList from '../DraggableSwatchList'
import arrayMove from 'array-move'
import { SortEndHandler } from 'react-sortable-hoc'
import { getRandomHexString } from '../../utils/colorHelpers'
import NewPaletteFormNav from '../NewPaletteFormNav'
import ColorPickerForm from '../ColorPickerForm'
import { EmojiData } from 'emoji-mart'
import styles from '../../styles/NewPaletteFormStyles'

interface Props extends WithStyles<typeof styles> {
  history: History
  paletteNames: string[]
  savePalette: (palette: IPalette) => void
  theme: Theme
}

interface DefaultProps {
  maxColors: number
}

export type Color = {
  name: string
  hex: string
}

interface State {
  open: boolean
  colors: Color[]
}

class NewPaletteForm extends React.Component<Props & DefaultProps, State> {
  static defaultProps: DefaultProps = {
    maxColors: 20,
  }

  state: State = {
    colors: [],
    open: true,
  }

  addColor = (colorName: string, hexValue: string) => {
    const newColor = { name: colorName, hex: hexValue }
    this.setState(prevState => ({
      colors: [...prevState.colors, newColor],
    }))
  }

  clearColors = () => {
    this.setState({ colors: [] })
  }

  handleDelete = (colorName: string) => {
    this.setState({
      colors: this.state.colors.filter(({ name }) => name !== colorName),
    })
  }

  handleSave = (paletteName: string, emoji: EmojiData) => {
    const { history, savePalette } = this.props
    const { colors } = this.state
    const id = paletteName.toLowerCase().replace(/ /g, '-')
    const palette: IPalette = { id, emoji: emoji, name: paletteName, colors }
    savePalette(palette)
    history.push('/')
  }

  onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove<Color>(colors, oldIndex, newIndex),
    }))
  }

  pickRandomColor = () => {
    const names = this.state.colors.map(c => c.name)
    const { name, hex } = getRandomHexString()
    if (names.includes(name)) {
      this.pickRandomColor()
      return
    }
    this.setState(({ colors }) => ({ colors: [...colors, { name, hex }] }))
  }

  toggleDrawer = () => this.setState(prevState => ({ open: !prevState.open }))

  render() {
    const { classes, paletteNames, maxColors, theme } = this.props
    const { colors, open } = this.state
    const paletteFull = colors.length >= maxColors
    return (
      <div className={classes.root}>
        <NewPaletteFormNav
          handleSave={this.handleSave}
          paletteNames={paletteNames}
          open={open}
          toggleDrawer={this.toggleDrawer}
        />
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
          <div className={classes.drawerMain}>
            <Typography variant="h5" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.actionButtons}>
              <Button
                color="secondary"
                onClick={this.clearColors}
                variant="contained"
              >
                Clear Palette
              </Button>
              <Button
                color="primary"
                disabled={paletteFull}
                onClick={this.pickRandomColor}
                variant="contained"
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              currentColors={colors}
              handleAddColor={this.addColor}
              paletteFull={paletteFull}
            />
          </div>
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
