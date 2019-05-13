import * as React from 'react'
import { Swatch } from './Swatch'
import { ChromaPalette, IColor } from './colorHelpers'
import './Palette.css'
import { useState } from 'react'
import NavBar from './NavBar'

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
      <NavBar level={ level } setLevel={ setLevel }/>
      <h1>{ name }</h1>
      {/*TODO: NavBar*/}
      <div className="Palette--colors">
        { swatches }
      </div>
      {/*TODO: Footer*/}
    </div>
  )
}
