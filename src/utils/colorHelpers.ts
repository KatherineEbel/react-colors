import chroma from 'chroma-js'
import { IPalette, Swatch } from './seedColors'
import colorNamer, { Color, Palette } from 'color-namer'

const LEVELS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export interface IColor {
  name: string
  id: string
  [value: string]: string
}
export type ColorSet = { [n: number]: IColor[] }
export interface ChromaPalette {
  colors: ColorSet
  emoji: string
  id: string
  name: string
}

function generateScale(hexValue: string, colorCount: number) {
  return chroma
    .scale(getRange(hexValue))
    .mode('lab')
    .colors(colorCount)
}

function getRange(hexValue: string): [string, string, string] {
  const end = '#fff'
  return [
    chroma(hexValue)
      .darken(1.4)
      .hex(),
    hexValue,
    end,
  ]
}

export function generatePalette(starterPalette: IPalette): ChromaPalette {
  let colors: ColorSet = LEVELS.reduce(
    (result: { [n: number]: string[] }, level) => {
      result[level] = []
      return result
    },
    {},
  )
  return starterPalette.colors.reduce(
    (palette: ChromaPalette, swatch: Swatch) => {
      const scale = generateScale(swatch.hex, 10).reverse()
      scale.forEach((color: string, i: number) => {
        palette.colors[LEVELS[i]].push({
          id: swatch.name.toLocaleLowerCase().replace(/ /g, '-'),
          name: `${swatch.name} ${LEVELS[i]}`,
          hex: scale[i],
          rgb: chroma(scale[i]).css(),
          rgba: chroma(scale[i])
            .css()
            .replace('rgb', 'rgba')
            .replace(')', ',1.0)'),
        })
      })
      return palette
    },
    { ...starterPalette, colors },
  )
}

export interface IShadePalette {
  colors: IColor[]
  palette: {
    emoji: string
    id: string
    name: string
  }
}
export const getShades = (
  palette: ChromaPalette,
  color: string,
): IShadePalette => {
  const { emoji, id, name } = palette
  const colors = palette.colors
  const levels = Object.keys(colors)
  return levels.reduce(
    (shades: IShadePalette, level) => {
      if (+level === 50) {
        return shades
      }
      const shade = colors[+level].find(c => c.id === color)
      if (shade) {
        shade.id = shade.id.concat(` ${level}`)
        shades.colors.push(shade)
      }
      return shades
    },
    { palette: { emoji, id, name }, colors: [] },
  )
}

// add index signature to access values by key
interface IndexedRecord extends Record<Palette, Color[]> {
  [key: string]: Color[]
}

export function getRandomHexString(): Color {
  const max = 1 << 24
  const hexString =
    '#' +
    (max + Math.floor(Math.random() * max))
      .toString(16)
      .slice(-6)
      .toUpperCase()
  const names = colorNamer(hexString) as IndexedRecord
  const color = Object.keys(names)
    .map(key => names[key][0])
    .sort((a, b) => {
      if (a.distance < b.distance) {
        return -1
      }
      if (a.distance > b.distance) {
        return 1
      }
      return 0
    })[0]
  if (!color.hex.startsWith('#')) {
    color.hex = '#' + color.hex
  }
  return color
}
