import * as React from 'react'
import chroma from 'chroma-js'
import { createStyles, makeStyles } from '@material-ui/styles'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Swatch.css'
import { Link } from 'react-router-dom'

interface StyleProps {
  background: string
  moreURL?: string
}

const styles = () =>
  createStyles({
    Swatch: (props: StyleProps) => ({
      cursor: 'pointer',
      display: 'inline-block',
      height: props.moreURL ? '25%' : '50%',
      margin: '0 auto -4px auto',
      position: 'relative',
      width: '20%',
      '&:hover button': {
        opacity: 1
      }
    }),
    copyText: (props: StyleProps) => ({
      color: chroma(props.background).luminance() >= 0.7 ? '#444' : 'white'
    }),
    colorName: (props: StyleProps) => ({
      color: chroma(props.background).luminance() <= 0.1 ? 'white' : '#444'
    }),
    seeMore: (props: StyleProps) => ({
      background: 'rgba(255, 255, 255, 0.3)',
      border: 'none',
      bottom: '0',
      color: chroma(props.background).luminance() >= 0.7 ? '#444' : 'white',
      height: '30px',
      lineHeight: '30px',
      position: 'absolute',
      right: '0',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
      width: '60px'
    }),
    copyButton: (props: StyleProps) => ({
      background: 'rgba(255, 255, 255, 0.3)',
      border: 'none',
      color: chroma(props.background).luminance() >= 0.7 ? '#444' : 'white',
      cursor: 'pointer',
      display: 'block',
      fontSize: '1rem',
      height: '30px',
      left: '50%',
      lineHeight: '30px',
      margin: '-15px 0 0 -50px',
      opacity: 0,
      outline: 'none',
      position: 'absolute',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
      top: '50%',
      transition: 'opacity 0.3s ease-in-out',
      width: '100px',
      '&:hover': {
        opacity: 1
      }
    })
  })

const useStyles = makeStyles(styles)

interface Props extends StyleProps {
  name: string
}

const Swatch: React.FC<Props> = (props: Props) => {
  const { background, moreURL, name } = props
  const [copied, setCopied] = useState(false)
  const classes = useStyles(props)
  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }
  return (
    <CopyToClipboard onCopy={handleCopy} text={background}>
      <div className={classes.Swatch} style={{ background }}>
        <div
          style={{ background }}
          className={`Swatch--overlay ${copied ? 'show' : ''}`}
        />
        <div className="overlay--message">
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="Swatch--content">
          <span className={classes.colorName}>{name}</span>
        </div>
        <button className={classes.copyButton} type="button">
          Copy
        </button>
        {moreURL && (
          <Link onClick={e => e.stopPropagation()} to={moreURL}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default Swatch
