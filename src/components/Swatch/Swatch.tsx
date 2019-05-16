import * as React from 'react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import { Props, useStyles } from '../../styles/SwatchStyles'

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
