import * as React from 'react'
import './Swatch.css'

export interface ISwatchProps {
  background: string
  name: string
}
export const Swatch: React.FC<ISwatchProps> = props => {
  const { background, name } = props
  return (
    <div className="Swatch"
         style={{ background }}
    >
      <span>{ name }</span>
      <span>MORE</span>
    </div>
  )
}
