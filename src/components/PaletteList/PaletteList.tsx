import * as React from 'react'
import { IPalette } from '../../utils/seedColors'
import { Link } from 'react-router-dom'
import './PaletteList.css'

interface IPaletteListProps {
  palettes: IPalette[]
}
const PaletteList: React.FC<IPaletteListProps> = ({ palettes }) => {
  const links = palettes.map(p => (
    <Link to={`/palette/${p.id}`}>{p.name}</Link>
  ))
  return (
    <div className="PaletteList">
      <h1>React Colors</h1>
      <div className="PaletteList--links">
        <h3>Available palettes:</h3>
        { links }
      </div>
    </div>
  )
}

export default PaletteList
