import * as React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './NavBar.css'

type Props = {
  level: number,
  setLevel: (newValue: number) => void
}
const NavBar: React.FC<Props> = (props) => {
  const { level, setLevel } = props
  return (
    <header className="NavBar">
      <div className="logo">
        <button type="button">React Colors</button>
      </div>
      <div className="slider">
        <span>(Level: {level})</span>
        <Slider className=""
                defaultValue={level}
                min={100} max={900}
                step={100}
                onAfterChange={(newLevel) => setLevel(newLevel)}
        />
      </div>
    </header>
  )
}

export default NavBar
