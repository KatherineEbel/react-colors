import * as React from 'react'
import Swatch from '../Swatch/Swatch'
import { ChromaPalette, IColor } from '../../utils/colorHelpers'
import './Palette.css'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PaletteFooter from '../PaletteFooter/PaletteFooter'

export type Props = {
  palette: ChromaPalette
}
export const Palette: React.FC<Props> = ({ palette }) => {
  const [format, setFormat]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState('hex')
  const [level, setLevel] = useState(500)
  const { colors, emoji, name } = palette
  const changeFormat = (value: string) => {
    setFormat(value)
  }
  const swatches = colors[level].map((c: IColor) => (
    <Swatch
      background={c[format]}
      name={c.name}
      key={c.id}
      moreURL={`/palettes/${palette.id}/${c.id}`}
    />
  ))
  return (
    <div className="Palette">
      <NavBar
        level={level}
        changeFormat={changeFormat}
        format={format}
        setLevel={setLevel}
      />
      <div className="Palette--colors">{swatches}</div>
      <PaletteFooter title={name} emoji={emoji} />
    </div>
  )
}
