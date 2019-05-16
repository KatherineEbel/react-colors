import * as React from 'react'
import { IColor, IShadePalette } from '../../utils/colorHelpers'
import Swatch from '../Swatch/Swatch'
import { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import PaletteFooter from '../PaletteFooter/PaletteFooter'
import { Link } from 'react-router-dom'
import { createStyles, withStyles, WithStyles } from '@material-ui/styles'

const styles = () =>
  createStyles({
    container: {
      cursor: 'pointer',
      display: 'inline-block',
      height: '50%',
      margin: '0 auto -4px auto',
      position: 'relative',
      width: '20%',
    },
    goBack: {
      background: 'rgba(255, 255, 255, 0.3)',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      display: 'block',
      fontSize: '1rem',
      height: '30px',
      left: '50%',
      lineHeight: '30px',
      margin: '-15px 0 0 -50px',
      outline: 'none',
      padding: '0.5rem',
      position: 'absolute',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
      top: '50%',
      transition: 'opacity 0.3s ease-in-out',
      width: '100px',
    },
  })
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
    <div className="ColorShadePalette Palette">
      <NavBar changeFormat={setFormat} format={format} />
      <div className="Palette--colors">
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
