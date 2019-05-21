import * as React from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Button, WithStyles, createStyles, withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const styles = () => createStyles({})

interface SavePaletteDialogProps extends WithStyles<typeof styles> {
  handleSave: (paletteName: string) => void
  paletteNames: string[]
}

interface SavePaletteDialogState {
  open: boolean
  paletteName: string
}

class SavePaletteDialog extends React.Component<
  SavePaletteDialogProps,
  SavePaletteDialogState
> {
  state: SavePaletteDialogState = {
    open: false,
    paletteName: '',
  }

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }))

  componentDidMount(): void {
    ValidatorForm.addValidationRule('paletteNameUnique', () => {
      const { paletteName } = this.state
      const { paletteNames } = this.props
      return !paletteNames.includes(paletteName)
    })
  }

  onSavePalette = () => {
    const { paletteName } = this.state
    const { handleSave } = this.props
    handleSave(paletteName)
    this.toggleOpen()
  }

  render() {
    const { open, paletteName } = this.state
    return (
      <div>
        <Button color="primary" onClick={this.toggleOpen} variant="contained">
          Save Palette
        </Button>
        <Dialog
          open={open}
          onClose={this.toggleOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Your Palette</DialogTitle>
          <ValidatorForm onSubmit={this.onSavePalette}>
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

export default withStyles(styles)(SavePaletteDialog)
