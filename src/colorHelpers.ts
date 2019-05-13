import chroma from 'chroma-js'
import { IPalette, Swatch } from './seedColors'

export type ColorSet = {[n:number]: {name: string, id: string, hex: string, rgb: string, rgba: string}[]}
export interface ChromaPalette {
  colors: ColorSet
  emoji: string
  id: string
  name: string,
}


const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export function generatePalette (starterPalette: IPalette) {

  let colors: ColorSet = levels.reduce((result: {[n: number]: string[]}, level) => {
  result[level] = []
  return result
},{})
  return starterPalette.colors.map((c:Swatch): ChromaPalette => {
      const scale = generateScale(c.hexValue, 10).reverse()
      return scale.reduce((chromaPalette: ChromaPalette, color, idx) => {
        colors[levels[idx]].push({
          id: c.name.toLowerCase().replace(/ /g, "-"),
          name: `${c.name} ${levels[idx]}`,
          hex: scale[idx],
          rgb: chroma(scale[idx]).css(),
          rgba: chroma(scale[idx]).css().replace("rgb", "rgba").replace(")", ",1.0)")
        })
        chromaPalette.colors = colors
        return chromaPalette
      },{...starterPalette, colors: {}})
  })
}

function generateScale (hexValue:string, colorCount: number) {
  return chroma
    .scale(getRange(hexValue))
    .mode('lab').colors(colorCount)
}

function getRange (hexValue: string): [string, string, string] {
  const end = "#fff"
  return [
    chroma(hexValue).darken(1.4).hex(),
    hexValue,
    end
  ]
}
