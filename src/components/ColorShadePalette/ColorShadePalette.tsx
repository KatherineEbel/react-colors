import * as React from 'react'
import { IColor, IShadePalette } from '../../utils/colorHelpers'
import Swatch from '../Swatch/Swatch'
import { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import PaletteFooter from '../PaletteFooter/PaletteFooter'
import { Link } from 'react-router-dom'
import { withStyles, WithStyles } from '@material-ui/styles'
import { styles } from '../../styles/PaletteStyles'

interface Props extends WithStyles<typeof styles> {
  shades: IShadePalette
}

const ColorShadePalette: React.FC<Props> = ({ classes, shades }) => {
  const [format, setFormat] = useState('hex')
  const { colors } = shades
  const { name, emoji } = shades.palette
  const swatches = colors.map(shade => {
    const { id, name, [format]: f }: IColor = shade
    return <Swatch background={f} key={id} name={name} />
  })
  return (
    <div className={classes.palette}>
      <NavBar changeFormat={setFormat} format={format} />
      <div className={classes.colors}>
        {swatches}
        <div className={classes.container} style={{ background: '#333' }}>
          <Link
            className={classes.goBack}
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

export default withStyles(styles)(ColorShadePalette)
