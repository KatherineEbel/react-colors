import * as React from "react";
import "./PaletteFooter.css";

type Props = {
  title: string;
  emoji: string;
};
const PaletteFooter: React.FC<Props> = ({ emoji, title }) => {
  return (
    <footer className="PaletteFooter">
      {title}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
