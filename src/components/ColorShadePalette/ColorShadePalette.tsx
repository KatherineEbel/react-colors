import * as React from "react";
import { IColor, IShadePalette } from "../../utils/colorHelpers";
import { Swatch } from "../Swatch/Swatch";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";

interface IProps {
  shades: IShadePalette;
}
const ColorShadePalette: React.FC<IProps> = ({ shades }) => {
  const [format, setFormat] = useState("hex");
  const { colors } = shades;
  const { name, emoji } = shades.palette;
  const swatches = Object.keys(colors).map(shade => {
    const { id, name, [format]: f }: IColor = colors[+shade];
    return <Swatch background={f} key={id} name={name} />;
  });
  return (
    <div className="Palette">
      <NavBar changeFormat={setFormat} format={format} />
      <div className="Palette--colors">{swatches}</div>
      <PaletteFooter title={name} emoji={emoji} />
    </div>
  );
};

export default ColorShadePalette;
