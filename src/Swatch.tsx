import * as React from 'react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Swatch.css'

export interface ISwatchProps {
  background: string
  name: string
}
export const Swatch: React.FC<ISwatchProps> = props => {
  const [copied, setCopied] = useState(false)
  const { background, name } = props
  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }
  return (
    <CopyToClipboard onCopy={ handleCopy } text={ background }>
      <div className="Swatch"
           style={{ background }}
      >
        <div style={{ background }}
             className={`Swatch--overlay ${copied ? 'show' : ''}`}
        />
        <div className="overlay--message">
          <h1>copied!</h1>
          <p>{ background }</p>
        </div>
        <div className="Swatch--container">
          <div className="Swatch--content">
            <span>{ name }</span>
          </div>
          <button className="Swatch--copy"
                  type="button"
          >
            Copy
          </button>
          <span className="Swatch--seeMore">More</span>
        </div>
      </div>
    </CopyToClipboard>
  )
}

