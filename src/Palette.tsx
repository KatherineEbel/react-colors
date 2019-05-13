import * as React from 'react'
import palettes, { IPalette } from './seedColors'
import { Swatch } from './Swatch'
import './Palette.css'
import { generatePalette } from './colorHelpers'

export type Props = {
  palette: IPalette
}
export const Palette: React.FC<Props> = (props) => {
  const { palette } = props
  const swatches = palette.colors.map(c => (
    <Swatch background={ c.hexValue } name={ c.name } key={ c.hexValue}/>
  ))
  console.log(generatePalette(palettes[0]))
  return (
    <div className="Palette">
      <h1>{palette.name}</h1>
      {/*TODO: NavBar*/}
      <div className="Palette--colors">
        { swatches }
      </div>
      {/*TODO: Footer*/}
    </div>
  )
}
