import * as React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import styles from '../../styles/NavBarStyles'

interface Props extends WithStyles<typeof styles> {
  changeFormat: (value: string) => void
  format: string
  level?: number
  setLevel?: (newValue: number) => void
}

const NavBar: React.FC<Props> = props => {
  const [open, setOpen] = useState(false)
  const { changeFormat, classes, format, level, setLevel } = props
  const closeSnackBar = () => {
    setOpen(false)
  }
  const onFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeFormat(event.target.value)
    setOpen(true)
    setTimeout(() => setOpen(false), 3000)
  }
  return (
    <header className={classes.NavBar}>
      <div className={classes.logo}>
        <Link to="/">React Colors</Link>
      </div>
      {level && setLevel && (
        <div className={classes.slider}>
          <span>(Level: {level})</span>
          <Slider
            className=""
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={newLevel => setLevel(newLevel)}
          />
        </div>
      )}
      <div className={classes.select}>
        <Select onChange={onFormatChange} value={format}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            key="close"
            onClick={closeSnackBar}
          >
            <CloseIcon />
          </IconButton>
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={<span id="message-id">{`Format changed to ${format}`}</span>}
        onClose={closeSnackBar}
        open={open}
      />
    </header>
  )
}

export default withStyles(styles)(NavBar)
