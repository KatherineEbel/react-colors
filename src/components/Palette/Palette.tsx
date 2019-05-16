import * as React from 'react'
import Swatch from '../Swatch/Swatch'
import { ChromaPalette, IColor } from '../../utils/colorHelpers'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PaletteFooter from '../PaletteFooter/PaletteFooter'
import { withStyles, WithStyles } from '@material-ui/styles'
import { styles } from '../../styles/PaletteStyles'

interface Props extends WithStyles<typeof styles> {
  palette: ChromaPalette
}

const Palette: React.FC<Props> = ({ classes, palette }) => {
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
    <div className={classes.palette}>
      <NavBar
        level={level}
        changeFormat={changeFormat}
        format={format}
        setLevel={setLevel}
      />
      <div className={classes.colors}>{swatches}</div>
      <PaletteFooter title={name} emoji={emoji} />
    </div>
  )
}

export default withStyles(styles)(Palette)
