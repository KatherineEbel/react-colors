import * as React from 'react'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { Swatch } from '../../utils/seedColors'


// parameter of type import { Theme } from '@material-ui/core/styles/createMuiTheme'
const styles = () =>
  createStyles({
    root: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    colors: {
      backgroundColor: 'grey'
    },
    title: {
      alignItems: 'center',
      color: 'black',
      display: 'flex',
      fontSize: '1rem',
      justifyContent: 'space-between',
      margin: '0',
      paddingTop: '0.5rem',
      position: 'relative',
    },
    emoji: {
      marginLeft: '0.5rem',
      fontSize: '1.5rem'
    }
  })

interface Props extends WithStyles<typeof styles> {
  name: string
  id: string
  emoji: string
  colors: Swatch[]
}

const MiniPalette: React.FC<Props> = (props) => {
  {/*<Link to={`/palette/${p.id}`}>{p.name}</Link>*/}
  const { classes, name, emoji } = props
  return (
    <div className={ classes.root }>
      <div className={ classes.colors }/>
      <h5 className={ classes.title }>
        { name }
        <span className={ classes.emoji }>{ emoji }</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
