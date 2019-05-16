import * as React from 'react'
import chroma from 'chroma-js'
import { createStyles, makeStyles } from '@material-ui/styles'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Swatch.css'
import { Link } from 'react-router-dom'

interface Props {
  background: string
  moreURL?: string
  name: string
}

const styles = () =>
  createStyles({
    Swatch: (props: Props) => ({
      cursor: 'pointer',
      display: 'inline-block',
      height: props.moreURL ? '25%' : '50%',
      margin: '0 auto -4px auto',
      position: 'relative',
      width: '20%',
      '&:hover button': {
        opacity: 1,
      },
    }),
    content: {
      bottom: '0',
      color: '#000',
      fontSize: '0.7rem',
      padding: '0.7rem',
      position: 'absolute',
      left: 0,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    copyText: (props: Props) => ({
      color: chroma(props.background).luminance() >= 0.7 ? '#444' : 'white',
    }),
    colorName: (props: Props) => ({
      color: chroma(props.background).luminance() <= 0.1 ? 'white' : '#444',
    }),
    overlay: {
      height: '100%',
      opacity: 0,
      transform: 'scale(0.1)',
      transition: 'transform 0.2s ease-in-out',
      width: '100%',
      zIndex: 0,
    },
    overlayMessage: {
      alignItems: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '4rem',
      height: '150px',
      justifyContent: 'center',
      left: 0,
      opacity: 0,
      overflow: 'visible',
      position: 'fixed',
      right: 0,
      top: '40%',
      transform: 'scale(0.1)',
      '& h1': {
        fontWeight: 400,
        marginBottom: 0,
        padding: '1rem',
        textAlign: 'center',
        textShadow: '1px 2px #454545',
        textTransform: 'uppercase',
      },
      '& p': {
        fontSize: '2rem',
        fontWeight: 100,
      },
    },
    overlayVisible: {
      opacity: 1,
      position: 'absolute',
      transform: 'scale(50)',
      zIndex: 10,
    },
    showMessage: {
      background: 'rgba(255, 255, 255, 0.3)',
      opacity: 1,
      transform: 'scale(1)',
      transition: 'all 0.3s ease-in-out 0.3s',
      width: '100%',
      zIndex: 25,
    },
    seeMore: (props: Props) => ({
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
      width: '60px',
    }),
    copyButton: (props: Props) => ({
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
        opacity: 1,
      },
    }),
  })

const useStyles = makeStyles(styles)

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
          className={`${classes.overlay} ${
            copied ? classes.overlayVisible : ''
          }`}
        />
        <div
          className={`${classes.overlayMessage} ${
            copied ? classes.showMessage : ''
          }`}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className={classes.content}>
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
