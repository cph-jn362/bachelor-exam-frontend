import { Link } from "react-router-dom";
import PrimaryButtonCSS from "./primaryButton.module.css";

const MessageButton = () => {
  return (
    <Link to="/" className={PrimaryButtonCSS.primary_flat}>
      SEND MESSAGE
    </Link>
  );
};

export default MessageButton;
