import React from 'react';
import './App.css';
import { Palette } from './Palette'
import seedPalettes from './seedColors'
import { generatePalette } from './colorHelpers'

const App: React.FC = () => {
  const palette = seedPalettes.find(p => p.id === 'flat-ui-colors-aussie')
  return palette ? (
    <div className="App">
      <h1>Colors App</h1>
      <Palette palette={generatePalette(seedPalettes[3])}/>
    </div>
  ) : (
    <div className="App--error">
      <h1>No Palate found!</h1>
    </div>
  )
}

export default App;
