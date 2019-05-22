import * as React from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Picker from 'emoji-mart/dist-es/components/picker/picker'
import 'emoji-mart/css/emoji-mart.css'
import { EmojiData } from 'emoji-mart'

interface SavePaletteDialogProps {
  handleSave: (paletteName: string, emoji: EmojiData) => void
  paletteNames: string[]
}

interface SavePaletteDialogState {
  open: boolean
  paletteName: string
  pickerOpen: boolean
}

class SavePaletteDialog extends React.Component<
  SavePaletteDialogProps,
  SavePaletteDialogState
> {
  state: SavePaletteDialogState = {
    open: false,
    paletteName: '',
    pickerOpen: false,
  }

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }))

  componentDidMount(): void {
    ValidatorForm.addValidationRule('paletteNameUnique', () => {
      const { paletteName } = this.state
      const { paletteNames } = this.props
      return !paletteNames.includes(paletteName)
    })
  }

  toggleDialogs = () => {
    this.toggleOpen()
    this.togglePicker()
  }

  onSavePalette = (emoji: EmojiData) => {
    const { paletteName } = this.state
    const { handleSave } = this.props
    handleSave(paletteName, emoji)
  }

  togglePicker = () => {
    this.setState(({ pickerOpen }) => ({ pickerOpen: !pickerOpen }))
  }

  render() {
    const { open, paletteName, pickerOpen } = this.state
    return (
      <div>
        <Button color="primary" onClick={this.toggleOpen} variant="contained">
          Save Palette
        </Button>
        <Dialog
          aria-labelledby="emoji-dialog-title"
          open={pickerOpen}
          onClose={this.togglePicker}
        >
          <DialogTitle id="emoji-dialog-title">Choose an Emoji</DialogTitle>
          <Picker onSelect={this.onSavePalette} title="Add some flair" />
          <DialogActions>
            <Button color="secondary" onClick={this.togglePicker}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open}
          onClose={this.toggleOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Your Palette</DialogTitle>
          <ValidatorForm onSubmit={this.toggleDialogs}>
            <DialogContent>
              <TextValidator
                errorMessages={[
                  'Palette name is required',
                  'Palette names need to be unique',
                ]}
                fullWidth
                name="paletteName"
                placeholder="Unique Palette Name"
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ paletteName: target.value })
                }
                validators={['required', 'paletteNameUnique']}
                value={paletteName}
              />
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={this.toggleOpen}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    )
  }
}

export default SavePaletteDialog
