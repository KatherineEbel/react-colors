import * as React from 'react'
import { Swatch } from './Swatch'
import Slider from 'rc-slider'
import { ChromaPalette, IColor } from './colorHelpers'
import 'rc-slider/assets/index.css'
import './Palette.css'
import { useState } from 'react'

export type Props = {
  palette: ChromaPalette
}
export const Palette: React.FC<Props> = (props) => {
  const [level, setLevel] = useState(500)
  const { colors, name } = props.palette
  const swatches = colors[level].map((c: IColor) => (
    <Swatch background={ c.hex } name={ c.name } key={ c.hex}/>
  ))
  return (
    <div className="Palette">
      <div className="slider">
        <Slider className=""
                defaultValue={level}
                min={100} max={900}
                step={100}
                onAfterChange={(newLevel) => setLevel(newLevel)}
        />
      </div>
      <h1>{ name }</h1>
      {/*TODO: NavBar*/}
      <div className="Palette--colors">
        { swatches }
      </div>
      {/*TODO: Footer*/}
    </div>
  )
}
