import * as React from "react";
import { IColor, IShadePalette } from "../../utils/colorHelpers";
import { Swatch } from "../Swatch/Swatch";

interface IProps {
  shades: IShadePalette;
}
const ColorShadePalette: React.FC<IProps> = ({ shades }) => {
  const { colors } = shades;
  const swatches = Object.keys(colors).map(shade => {
    const { id, name, hex }: IColor = colors[+shade];
    return <Swatch background={hex} key={id} name={name} />;
  });
  return (
    <div className="Palette">
      <h1>Color Shade Palette</h1>
      <div className="Palette--colors">{swatches}</div>
    </div>
  );
};

export default ColorShadePalette;
