import * as React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Swatch.css'

export interface ISwatchProps {
  background: string
  name: string
}
export const Swatch: React.FC<ISwatchProps> = props => {
  const { background, name } = props
  return (
    <CopyToClipboard text={ background }>
      <div className="Swatch"
           style={{ background }}
      >
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

