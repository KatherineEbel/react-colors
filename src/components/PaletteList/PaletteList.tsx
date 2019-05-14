import * as React from 'react'
import { IPalette } from '../../utils/seedColors'
import MiniPalette from '../MiniPalette/MiniPalette'
import createStyles from '@material-ui/core/styles/createStyles'
import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () =>
  createStyles({
    root: {
      alignItems: 'flex-start',
      backgroundColor: 'blue',
      display: 'flex',
      justifyContent: 'center'
    },
    container: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '50%',
    },
    miniPalettes: {
      boxSizing: 'border-box',
      display: 'grid',
      gridGap: '5%',
      gridTemplateColumns: 'repeat(3, 30%)',
      width: '100%',
    },
    nav: {
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
  })

interface IPaletteListProps extends WithStyles<typeof styles> {
  palettes: IPalette[]
}

const PaletteList: React.FC<IPaletteListProps> = ({ classes, palettes }) => {
  const { root, container, miniPalettes, nav } = classes
  const links = palettes.map(p => (
    <MiniPalette {...p}/>
  ))
  return (
    <div className={ root }>
      <div className={ container }>
        <nav className={ nav }>
          <h1>React Colors</h1>
        </nav>
        <div className={ miniPalettes }>
          { links }
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
