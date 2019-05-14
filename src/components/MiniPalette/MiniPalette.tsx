import * as React from 'react'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { Swatch } from '../../utils/seedColors'


// parameter of type import { Theme } from '@material-ui/core/styles/createMuiTheme'
const styles = () =>
  createStyles({
    colors: {
      backgroundColor: '#dae1e4',
      borderRadius: '5px',
      height: '150px',
      overflow: 'hidden',
      width: '100%',
    },
    emoji: {
      marginLeft: '0.5rem',
      fontSize: '1.5rem'
    },
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
    swatch: {
      display: 'inline-block',
      height: '25%',
      marginBottom: '-4px',
      position: 'relative',
      width: '20%',
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
  })

interface Props extends WithStyles<typeof styles> {
  colors: Swatch[]
  emoji: string
  goToPalette: (id: string) => void
  id: string
  name: string
}

const MiniPalette: React.FC<Props> = (props) => {
  const { classes, colors, goToPalette, id, name, emoji } = props
  const swatches = colors.map(c => (
    <div style={{background: c.hexValue }}
         className={ classes.swatch }
         key={ c.name }
    />
  ))

  const handleClick = () => {
    goToPalette(id)
  }

  return (
    <div className={ classes.root }
         onClick={ handleClick }
    >
      <div className={ classes.colors }>
        { swatches }
      </div>
      <h5 className={ classes.title }>
        { name }
        <span className={ classes.emoji }>{ emoji }</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
