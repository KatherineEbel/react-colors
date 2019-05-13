import * as React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './NavBar.css'
import { MenuItem, Select } from '@material-ui/core'

type Props = {
  changeFormat: (value: string) => void
  format: string
  level: number,
  setLevel: (newValue: number) => void
}
const NavBar: React.FC<Props> = (props) => {
  const { changeFormat, format, level, setLevel } = props
  const onFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeFormat(event.target.value)
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
    </header>
  )
}

export default NavBar
