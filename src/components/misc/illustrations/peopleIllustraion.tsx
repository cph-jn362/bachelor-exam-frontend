import FlatPeopleIllustration from "../../../media/flat-design/people-icon.svg";
import SkeuoPeopleIllustration from "../../../media/skeuomorphism/people.png";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { ImageFrame } from "./peopleIllustration.styled";

const PeopleIllustraion = () => {
  const {theme} = useSelector((state: RootState) => state.style);  
  const currentIllustration = theme === "flat" ? FlatPeopleIllustration : SkeuoPeopleIllustration;  
  return(
    <ImageFrame src={currentIllustration}/>
  )
};

export default PeopleIllustraion; 
