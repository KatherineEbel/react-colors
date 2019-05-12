import * as React from 'react'
import { IPalette } from './seedColors'
import { Swatch } from './Swatch'
import './Palette.css'

export type Props = {
  palette: IPalette
}
export const Palette: React.FC<Props> = (props) => {
  const { palette } = props
  const swatches = palette.colors.map(c => (
    <Swatch background={ c.color } name={ c.name } key={ c.color}/>
  ))
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
