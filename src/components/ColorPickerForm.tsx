import * as React from 'react'
import { Button } from '@material-ui/core'
import { ChromePicker, ColorResult } from 'react-color'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Color } from './NewPaletteForm/NewPaletteForm'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import styles from '../styles/ColorPickerFormStyles'

interface ColorPickerFormProps extends WithStyles<typeof styles> {
  currentColors: Color[]
  handleAddColor: (colorName: string, hexValue: string) => void
  paletteFull: boolean
}

interface ColorPickerFormState {
  colorName: string
  hexColor: string
}

class ColorPickerForm extends React.Component<
  ColorPickerFormProps,
  ColorPickerFormState
> {
  state: ColorPickerFormState = {
    colorName: '',
    hexColor: '#fff',
  }

  componentDidMount(): void {
    ValidatorForm.addValidationRule('isNameUnique', (value: string) => {
      const { currentColors } = this.props
      return currentColors.every(
        color => color.name.toLowerCase() !== value.toLowerCase(),
      )
    })

    ValidatorForm.addValidationRule('isColorUnique', () => {
      const { currentColors } = this.props
      const { hexColor } = this.state
      return currentColors.every(
        ({ hex }) => hex.toLowerCase() !== hexColor.toLowerCase(),
      )
    })
  }

  handleColorChange = (colorResult: ColorResult) => {
    const { hex, rgb } = colorResult
    const alphaVal = rgb.a ? Math.round(rgb.a * 255).toString(16) : ''
    this.setState({ hexColor: `${hex}${alphaVal}` })
  }

  handleAddColor = () => {
    const { colorName, hexColor } = this.state
    const { handleAddColor } = this.props
    handleAddColor(colorName, hexColor)
    this.setState({ colorName: '', hexColor: '#fff' })
  }

  render() {
    const { colorName, hexColor } = this.state
    const { classes, paletteFull } = this.props
    return (
      <div className={classes.root}>
        <ChromePicker
          color={hexColor}
          onChangeComplete={this.handleColorChange}
        />
        <ValidatorForm
          className={classes.colorNameForm}
          onSubmit={this.handleAddColor}
        >
          <TextValidator
            className={classes.colorNameInput}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ colorName: target.value })
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
          <Button
            color="primary"
            disabled={paletteFull}
            type="submit"
            variant="contained"
          >
            {paletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm)
