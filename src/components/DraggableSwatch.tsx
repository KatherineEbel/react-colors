import * as React from 'react'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'
import createStyles from '@material-ui/styles/createStyles'
import { DeleteRounded } from '@material-ui/icons'
import { SortableElement } from 'react-sortable-hoc'

const styles = () =>
  createStyles({
    delete: {
      color: 'rgba(0,0,0,0.6)',
      float: 'right',
      transition: 'all 0.3s ease-in-out',
    },
    root: {
      cursor: 'pointer',
      display: 'inline-block',
      height: '25%',
      margin: '0 auto -3.8px auto',
      position: 'relative',
      width: '20%',
      '&:hover svg': {
        color: 'rgba(255,255,255, 0.8)',
        transform: 'scale(1.5)',
      },
    },
    swatchContent: {
      bottom: '0',
      color: '#000',
      fontSize: '0.7rem',
      padding: '0.7rem',
      position: 'absolute',
      left: 0,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      width: '100%',
    },
  })

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
