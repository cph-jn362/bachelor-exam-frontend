import SecondaryButtonCSS from "./secondaryButton.module.css"
import SearchIcon from "../../media/flat-design/search-icon-blue.svg"

const SearchButton = () => {
  return (
   <button className={SecondaryButtonCSS.secondary_flat} style={{display: "flex", alignItems: "center"}}>
    <img src={SearchIcon} alt="search icon" style={{marginRight: "10px"}}/>
        Search
    </button>
  )
}

export default SearchButton;