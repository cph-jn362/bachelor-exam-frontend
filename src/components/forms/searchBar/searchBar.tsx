import FlatSearchIcon from "../../../media/flat-design/search-icon-blue.svg";
import SkeuoSearchIcon from "../../../media/skeuomorphism/search-icon-white.svg";
import { Default, SecondaryButton } from "./searchBar.styled";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const {theme} = useSelector((state: RootState) => state.style);
  const currentIcon = theme === "flat" ? FlatSearchIcon : SkeuoSearchIcon;

  return (
    <Default>
      <input type="text" />
      <SecondaryButton>
        <img
          src={currentIcon}
          alt="search icon"
        />
        Search
      </SecondaryButton>
    </Default>
  );
};
export default SearchBar;
