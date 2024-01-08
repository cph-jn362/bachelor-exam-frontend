import FlatIllustration2 from "../../../media/flat-design/books-icon-2.svg";
import SkeuoIllustration2 from "../../../media/skeuomorphism/bookshelf-2.png";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

const BookIllustration2 = () => {
  const { theme } = useSelector((state: RootState) => state.style);
  const currentIllustration =
    theme === "flat" ? FlatIllustration2 : SkeuoIllustration2;
  return (
    <img
      src={currentIllustration}
      alt="illustration 2"
      style={{ width: "28em" }}
    />
  );
};

export default BookIllustration2;
