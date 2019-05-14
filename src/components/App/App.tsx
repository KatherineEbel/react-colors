import React from 'react';
import './App.css';
import seedPalettes from '../../utils/seedColors'
import { generatePalette } from '../../utils/colorHelpers'
import { Redirect, Route, Switch } from 'react-router'
import { Palette } from '../Palette/Palette'
import PaletteList from '../PaletteList/PaletteList'

const App: React.FC = () => {
  const matchPalette = (id: string): React.ReactElement => {
    const palette = seedPalettes.find(p => p.id === id)
    if (palette) {
      const chromaPalette = generatePalette (palette)
      return <Palette palette={chromaPalette}/>
    }
    return <Redirect to="/" />
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={ seedPalettes }/>}/>
      <Route exact path="/palette/:id" render={(routeProps) => matchPalette(routeProps.match.params.id)}/>
    </Switch>
  )
}

export default App;
