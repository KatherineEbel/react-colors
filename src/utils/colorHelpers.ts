import chroma from "chroma-js";
import { IPalette, Swatch } from "./seedColors";

const LEVELS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export interface IColor {
  name: string;
  id: string;
  [value: string]: string;
}
export type ColorSet = { [n: number]: IColor[] };
export interface ChromaPalette {
  colors: ColorSet;
  emoji: string;
  id: string;
  name: string;
}

function generateScale(hexValue: string, colorCount: number) {
  return chroma
    .scale(getRange(hexValue))
    .mode("lab")
    .colors(colorCount);
}

function getRange(hexValue: string): [string, string, string] {
  const end = "#fff";
  return [
    chroma(hexValue)
      .darken(1.4)
      .hex(),
    hexValue,
    end
  ];
}

export function generatePalette(starterPalette: IPalette): ChromaPalette {
  let colors: ColorSet = LEVELS.reduce(
    (result: { [n: number]: string[] }, level) => {
      result[level] = [];
      return result;
    },
    {}
  );
  return starterPalette.colors.reduce(
    (palette: ChromaPalette, swatch: Swatch) => {
      const scale = generateScale(swatch.hexValue, 10).reverse();
      scale.forEach((color: string, i: number) => {
        palette.colors[LEVELS[i]].push({
          id: swatch.name.toLocaleLowerCase().replace(/ /g, "-"),
          name: `${swatch.name} ${LEVELS[i]}`,
          hex: scale[i],
          rgb: chroma(scale[i]).css(),
          rgba: chroma(scale[i])
            .css()
            .replace("rgb", "rgba")
            .replace(")", ",1.0)")
        });
      });
      return palette;
    },
    { ...starterPalette, colors }
  );
}

export interface IShadePalette {
  colors: { [n: number]: IColor };
  palette: {
    name: string;
    emoji: string;
  };
}
export const getShades = (
  palette: ChromaPalette,
  color: string
): IShadePalette => {
  const { name, emoji } = palette;
  const colors = palette.colors;
  const levels = Object.keys(colors);
  return levels.reduce(
    (shades: IShadePalette, level) => {
      const shade = colors[+level].find(c => c.id === color);
      if (shade) {
        shades.colors[+level] = shade;
      }
      return shades;
    },
    { palette: { name, emoji }, colors: {} }
  );
};
