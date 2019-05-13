import * as React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './NavBar.css'
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'

type Props = {
  changeFormat: (value: string) => void
  format: string
  level: number,
  setLevel: (newValue: number) => void
}
const NavBar: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false)
  const { changeFormat, format, level, setLevel } = props
  const closeSnackBar = () => {
    setOpen(false)
  }
  const onFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeFormat(event.target.value)
    setOpen(true)
    setTimeout(() => setOpen(false), 3000)
  }
  return (
    <header className="NavBar">
      <div className="logo">
        <button type="button">React Colors</button>
      </div>
      <div className="slider">
        <span>(Level: {level})</span>
        <Slider className=""
                defaultValue={level}
                min={100} max={900}
                step={100}
                onAfterChange={(newLevel) => setLevel(newLevel)}
        />
      </div>
      <div className="select">
        <Select onChange={ onFormatChange }
                value={ format}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar action={<IconButton aria-label="close"
                                    color="inherit"
                                    key="close"
                                    onClick={ closeSnackBar }
      ><CloseIcon/></IconButton>}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
                ContentProps={{"aria-describedby": "message-id"}}
                message={<span id="message-id">{ `Format changed to ${format}`}</span>}
                onClose={ closeSnackBar }
                open={ open }
      />
    </header>
  )
}

export default NavBar
