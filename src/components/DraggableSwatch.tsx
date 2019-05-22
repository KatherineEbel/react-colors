import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import { DeleteRounded } from '@material-ui/icons'
import { SortableElement } from 'react-sortable-hoc'
import styles from '../styles/DraggableSwatchStyles'

interface Props extends WithStyles<typeof styles> {
  color: string
  handleDelete: (colorName: string) => void
  name: string
}
const Element: React.FC<Props> = ({ classes, color, handleDelete, name }) => {
  return (
    <li className={classes.root} style={{ background: color }}>
      <div className={classes.swatchContent}>
        <span> {name}</span>
        <DeleteRounded
          className={classes.delete}
          onClick={() => handleDelete(name)}
        />
      </div>
    </li>
  )
}

const DraggableSwatch = SortableElement(Element)
export default withStyles(styles)(DraggableSwatch)
