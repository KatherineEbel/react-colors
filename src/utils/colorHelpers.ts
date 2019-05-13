import chroma from 'chroma-js'
import { IPalette, Swatch } from './seedColors'

export interface IColor {
  name: string
  id: string
  [value: string]: string
}
export type ColorSet = {[n:number]: IColor[]}
export interface ChromaPalette {
  colors: ColorSet
  emoji: string
  id: string
  name: string,
}


const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export function generatePalette (starterPalette: IPalette): ChromaPalette {
  let colors: ColorSet = levels.reduce((result: {[n: number]: string[]}, level) => {
  result[level] = []
  return result
},{})
  return starterPalette.colors.reduce((palette: ChromaPalette, swatch: Swatch) => {
    const scale = generateScale(swatch.hexValue, 10).reverse()
    scale.forEach((color: string, i: number) => {
      palette.colors[levels[i]].push({
        id: swatch.name.toLocaleLowerCase().replace(/ /g, '-'),
        name: `${swatch.name} ${levels[i]}`,
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
      })
    })
    return palette
  }, {...starterPalette, colors })
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
