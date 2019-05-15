import * as React from 'react'
import { IColor, IShadePalette } from '../../utils/colorHelpers'
import { Swatch } from '../Swatch/Swatch'
import { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import PaletteFooter from '../PaletteFooter/PaletteFooter'
import { Link } from 'react-router-dom'

interface IProps {
  shades: IShadePalette
}
const ColorShadePalette: React.FC<IProps> = ({ shades }) => {
  const [format, setFormat] = useState('hex')
  const { colors } = shades
  const { name, emoji } = shades.palette
  const swatches = colors.map(shade => {
    const { id, name, [format]: f }: IColor = shade
    return <Swatch background={f} key={id} name={name} />
  })
  return (
    <div className="ColorShadePalette Palette">
      <NavBar changeFormat={setFormat} format={format} />
      <div className="Palette--colors">
        {swatches}
        <div className="Swatch" style={{ background: '#333' }}>
          <Link
            className="Swatch--back"
            style={{ background: swatches[5].props.background }}
            to={`/palettes/${shades.palette.id}`}
          >
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter title={name} emoji={emoji} />
    </div>
  )
}

export default ColorShadePalette
