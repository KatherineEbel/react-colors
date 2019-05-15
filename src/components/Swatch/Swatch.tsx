import * as React from 'react'
import chroma from 'chroma-js'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Swatch.css'
import { Link } from 'react-router-dom'

export interface ISwatchProps {
  background: string
  moreURL?: string
  name: string
}

export const Swatch: React.FC<ISwatchProps> = ({
  background,
  moreURL,
  name
}) => {
  const [copied, setCopied] = useState(false)
  const luminance = chroma(background).luminance()
  const isDark = luminance <= 0.1
  const isLight = luminance >= 0.5
  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }
  return (
    <CopyToClipboard onCopy={handleCopy} text={background}>
      <div className="Swatch" style={{ background }}>
        <div
          style={{ background }}
          className={`Swatch--overlay ${copied ? 'show' : ''}`}
        />
        <div className="overlay--message">
          <h1>copied!</h1>
          <p className={`${isLight ? 'text-dark' : ''}`}>{background}</p>
        </div>
        <div className={`Swatch--content ${isDark ? 'text-light' : ''}`}>
          <span>{name}</span>
        </div>
        <button
          className={`Swatch--copy ${isLight ? 'text-dark' : ''}`}
          type="button"
        >
          Copy
        </button>
        {moreURL && (
          <Link
            className={`Swatch--seeMore ${isLight ? 'text-dark' : ''}`}
            onClick={e => e.stopPropagation()}
            to={moreURL}
          >
            More
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}
