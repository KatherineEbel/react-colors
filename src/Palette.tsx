import * as React from 'react'
import { IPalette } from './seedColors'

export type Props = {
  palette: IPalette
}
export const Palette: React.FC<Props> = (props) => {
  const { palette } = props
  return (
    <div className="Palette">
      {/*TODO: NavBar*/}
      <div className="Palette-colors">
        {/*TODO: Footer*/}
      </div>
      <h1>{palette.name}</h1>
    </div>
  )
}
