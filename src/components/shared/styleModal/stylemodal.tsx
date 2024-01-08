import React, { useState } from "react";
import ModalCSS from "./modal.module.css";
import { useDispatch } from "react-redux";
import { toggleFlat, toggleSkeuo} from "../../../state/style/styleSlice";

type propTypes = {
  open: boolean;
  onClose: () => void;
};

const StyleModal: React.FC<propTypes> = ({ open, onClose }) => {
  const [toggle, setToggle] = useState(1);
  const dispatch = useDispatch();

  function updateToggle(id: number) {
    setToggle(id);
  }

  const toggleThemeFlat= () => {
    dispatch(toggleFlat());
  }

  const toggleThemeSkeuo= () => {
    dispatch(toggleSkeuo());
  }

  if (!open) return null;
  return (
    <div className={ModalCSS.layout}>
      <button onClick={onClose} className={ModalCSS.close_button}>
        X
      </button>
      <div className={ModalCSS.button_layout}>
        <h2 className={ModalCSS.title}>Style console</h2>
        <ul className={ModalCSS.tab_layout}>
          <li
            className={
              toggle === 1 ? ModalCSS.active_tab : ModalCSS.inactive_tab
            }
            onClick={() => updateToggle(1)}
          >
            Visual aesthetics
          </li>
          <li
            className={
              toggle === 2 ? ModalCSS.active_tab : ModalCSS.inactive_tab
            }
            onClick={() => updateToggle(2)}
          >
            Singular components
          </li>
        </ul>
        <div
          className={
            toggle === 1 ? ModalCSS.show_content : ModalCSS.hide_content
          }
        >
          <div className={ModalCSS.button_layoyt1}>
            <button className={ModalCSS.button} onClick={toggleThemeFlat}>Flat design</button>
            <button className={ModalCSS.button} onClick={toggleThemeSkeuo}>Skeuomorphism</button>
          </div>
        </div>
        <div
          className={
            toggle === 2 ? ModalCSS.show_content : ModalCSS.hide_content
          }
        >
          <h2>Header</h2>
          <p>Background</p>
          <p>Logo</p>
          <p>Menu</p>
          <p>Login button</p>
          <p>Signup button</p>
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
};

export default StyleModal;
