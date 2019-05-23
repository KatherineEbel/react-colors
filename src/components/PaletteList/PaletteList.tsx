import * as React from 'react'
import { History } from 'history'
import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { IPalette } from '../../utils/seedColors'
import MiniPalette from '../MiniPalette/MiniPalette'
import { Link } from 'react-router-dom'
import styles from '../../styles/PaletteListStyles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface IPaletteListProps extends WithStyles<typeof styles> {
  handleDelete: (id: string) => void
  history: History
  palettes: IPalette[]
}

const PaletteList: React.FC<IPaletteListProps> = ({
  classes,
  handleDelete,
  history,
  palettes,
}) => {
  const pushPalette = (id: string) => {
    history.push(`palettes/${id}`)
  }

  const { root, container, miniPalettes, nav } = classes
  const links = palettes.map(p => (
    <CSSTransition classNames="fade" key={p.id} timeout={500}>
      <MiniPalette
        key={p.id}
        {...p}
        goToPalette={pushPalette.bind(null, p.id)}
        handleDelete={handleDelete}
      />
    </CSSTransition>
  ))

  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>React Colors</h1>
          <Link to="/palettes/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={miniPalettes}>{links}</TransitionGroup>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
