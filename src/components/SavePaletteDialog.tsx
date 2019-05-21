import * as React from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Button, WithStyles, createStyles, withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const styles = () =>
  createStyles({
    submit: {
      marginLeft: '1rem',
    },
  })

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
    const { classes } = this.props
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
          <DialogTitle id="form-dialog-title">Save New Palette</DialogTitle>
          <DialogContent>
            <ValidatorForm onSubmit={this.onSavePalette}>
              <TextValidator
                errorMessages={[
                  'Palette name is required',
                  'Palette names need to be unique',
                ]}
                name="paletteName"
                placeholder="Palette Name"
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ paletteName: target.value })
                }
                validators={['required', 'paletteNameUnique']}
                value={paletteName}
              />
              <Button
                className={classes.submit}
                color="primary"
                type="submit"
                variant="contained"
              >
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={this.toggleOpen}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(SavePaletteDialog)
