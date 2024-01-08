import flatFacebook from "../../../media/flat-design/facebook-logo-white.svg";
import skeuoFacebook from "../../../media/skeuomorphism/facebook-icon-gradient.svg";
import flatPinterest from "../../../media/flat-design/pinterest-logo-white.svg";
import skeuoPinterest from "../../../media/skeuomorphism/pinterest-icon-gradient.svg";
import flatInstagram from "../../../media/flat-design/instagram-logo-white.svg";
import skeuoInstagram from "../../../media/skeuomorphism/instagram-icon-gradient.svg";
import { SomeIconsLayout } from "./someicons.styled";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

const SomeIcons = () => {
  const { theme } = useSelector((state: RootState) => state.style);
  const currentFacebook = theme === "flat" ? flatFacebook : skeuoFacebook;
  const currentPinterest = theme === "flat" ? flatPinterest : skeuoPinterest;
  const currentInstagram = theme === "flat" ? flatInstagram : skeuoInstagram;
  return (
    <SomeIconsLayout>
      <img src={currentFacebook} alt="facebook icon" />
      <img src={currentPinterest} alt="pinterest icon" />
      <img src={currentInstagram} alt="instagram icon" />
    </SomeIconsLayout>
  );
};

export default SomeIcons;
