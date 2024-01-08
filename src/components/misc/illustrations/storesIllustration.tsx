import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import FlatStoresIllustration from "../../../media/flat-design/our-stores-icon.svg";
import SkeuoStoresIllustration from "../../../media/skeuomorphism/library.png";
import { ImageFrame } from "./storesIllustration.styled";

const StoresIllustration = () => {
  const { theme } = useSelector((state: RootState) => state.style);
  const currentIllustration = theme === "flat" ? FlatStoresIllustration : SkeuoStoresIllustration;
  
  return(
    <ImageFrame src={currentIllustration}/>

  );
};

export default StoresIllustration;
