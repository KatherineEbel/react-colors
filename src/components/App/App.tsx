import React from 'react'
import seedPalettes from '../../utils/seedColors'
import { generatePalette, getShades } from '../../utils/colorHelpers'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router'
import Palette from '../Palette/Palette'
import PaletteList from '../PaletteList/PaletteList'
import ColorShadePalette from '../ColorShadePalette/ColorShadePalette'
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm'

type Params = {
  colorId?: string
  paletteId: string
}

const App: React.FC = () => {
  // TODO: make diff functions for Palette and ColorShadePalette?
  const matchPalette = (
    routeProps: RouteComponentProps<Params>,
  ): React.ReactElement => {
    const { params } = routeProps.match
    const { paletteId, colorId } = params
    const palette = seedPalettes.find(p => p.id === paletteId)
    let chromaPalette
    if (palette) {
      chromaPalette = generatePalette(palette)
    } else {
      return <Redirect to="/" />
    }
    if (colorId) {
      return <ColorShadePalette shades={getShades(chromaPalette, colorId)} />
    } else {
      return <Palette palette={chromaPalette} />
    }
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <PaletteList palettes={seedPalettes} history={history} />
        )}
      />
      <Route exact path="/palettes/new" render={() => <NewPaletteForm />} />
      <Route
        exact
        path="/palettes/:paletteId"
        render={routeProps => matchPalette(routeProps)}
      />
      <Route
        path="/palettes/:paletteId/:colorId"
        render={routeProps => matchPalette(routeProps)}
      />
    </Switch>
  )
}

export default App
