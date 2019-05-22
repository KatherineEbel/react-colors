import React, { useEffect, useState } from 'react'
import seedPalettes, { IPalette } from '../../utils/seedColors'
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
  const [palettes, setPalettes] = useState<IPalette[]>([])
  const matchPalette = (
    routeProps: RouteComponentProps<Params>,
  ): React.ReactElement => {
    const { params } = routeProps.match
    const { paletteId, colorId } = params
    const palette = palettes.find(p => p.id === paletteId)
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

  const savePalette = (palette: IPalette) => {
    console.log('savePalette()')
    setPalettes(palettes => [...palettes, palette])
  }

  function getPalettes(): IPalette[] {
    try {
      const storedPalettes = localStorage.getItem('reactColorPalettes')
      if (storedPalettes) {
        const data = JSON.parse(storedPalettes) as IPalette[]
        if (data[0].colors.length) {
          return data
        }
      }
      return seedPalettes
    } catch {
      return seedPalettes
    }
  }

  useEffect(() => {
    const palettes = getPalettes()
    setPalettes(palettes)
  }, [])

  useEffect(() => {
    localStorage.setItem('reactColorPalettes', JSON.stringify(palettes))
  }, [palettes])

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <PaletteList palettes={palettes} history={history} />
        )}
      />
      <Route
        exact
        path="/palettes/new"
        render={({ history }) => (
          <NewPaletteForm
            history={history}
            paletteNames={palettes.map(({ name }) => name)}
            savePalette={savePalette}
          />
        )}
      />
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
