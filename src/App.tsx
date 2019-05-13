import React from 'react';
import './App.css';
import seedPalettes from './seedColors'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router'

const App: React.FC = () => {
  const palette = seedPalettes.find(p => p.id === 'flat-ui-colors-aussie')
  return palette ? (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <h1>Individual palette goes here {`${routeProps.match.params.id}`}</h1>}/>
    </Switch>
  ) : (
    <div className="App--error">
      <h1>No Palate found!</h1>
    </div>
  )
}

export default App;
