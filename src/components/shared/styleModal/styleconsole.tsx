import StyleModal from "./stylemodal";
import StyleConsoleCSS from "./styleconsole.module.css";
import { useState } from "react";
import StyleIcon from "../../../media/style-icon.png"

const StyleConsole = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className={StyleConsoleCSS.toggle_button}
      >
        <img src={StyleIcon} alt="style icon" className={StyleConsoleCSS.icon} />
      </button>
      <StyleModal open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  );
};

export default StyleConsole;
