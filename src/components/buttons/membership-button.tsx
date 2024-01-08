import { Link } from "react-router-dom";
import PrimaryButtonCSS from "./primaryButton.module.css";

const MembershipButton = () => {
  return (
    <Link to="/" className={PrimaryButtonCSS.primary_flat}>
      Become a member
    </Link>
  );
};

export default MembershipButton;
