import * as React from 'react'
import { History } from 'history'
import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { IPalette } from '../../utils/seedColors'
import MiniPalette from '../MiniPalette/MiniPalette'
import { Link } from 'react-router-dom'
import styles from '../../styles/PaletteListStyles'

interface IPaletteListProps extends WithStyles<typeof styles> {
  history: History
  palettes: IPalette[]
}

const PaletteList: React.FC<IPaletteListProps> = ({
  classes,
  history,
  palettes,
}) => {
  const pushPalette = (id: string) => {
    history.push(`palettes/${id}`)
  }

  const { root, container, miniPalettes, nav } = classes
  const links = palettes.map(p => (
    <MiniPalette key={p.id} {...p} goToPalette={pushPalette.bind(null, p.id)} />
  ))

  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>React Colors</h1>
          <Link to="/palettes/new">Create Palette</Link>
        </nav>
        <div className={miniPalettes}>{links}</div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
