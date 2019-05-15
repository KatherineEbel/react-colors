import * as React from 'react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Swatch.css'
import { Link } from 'react-router-dom'

export interface ISwatchProps {
  background: string
  moreURL: string
  name: string
}

export const Swatch: React.FC<ISwatchProps> = (
  {
    background,
    moreURL,
    name,
  }) => {
  const [ copied, setCopied ] = useState (false)
  const handleCopy = () => {
    setCopied (true)
    setTimeout (() => {
      setCopied (false)
    }, 1500)
  }
  return (
    <CopyToClipboard onCopy={handleCopy} text={background}>
      <div className="Swatch"
           style={{ background }}
      >
        <div style={{ background }}
             className={`Swatch--overlay ${copied ? 'show' : ''}`}
        />
        <div className="overlay--message">
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="Swatch--content">
          <span>{name}</span>
        </div>
        <button className="Swatch--copy"
                type="button"
        >
          Copy
        </button>
        <Link className='Swatch--seeMore'
              onClick={e => e.stopPropagation ()}
              to={ moreURL }
        >More</Link>
      </div>
    </CopyToClipboard>
  )
}

