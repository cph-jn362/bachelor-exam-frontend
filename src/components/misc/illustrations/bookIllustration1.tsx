import FlatIllustration1 from "../../../media/flat-design/books-icon-1.svg";
import SkeuoIllustration1 from "../../../media/skeuomorphism/bookshelf-1.png";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";


 const BookIllustration1 = () => {
  const {theme} = useSelector((state: RootState) => state.style);  
  const currentIllustration = theme === "flat" ? FlatIllustration1 : SkeuoIllustration1;  
  return (
    <img src={currentIllustration} alt="illustration 1" style={{width: "28em"}}/>
  )
}

export default BookIllustration1;