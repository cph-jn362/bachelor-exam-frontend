import AllBooksIcon from "../../../media/flat-design/all-books-icon.svg";
import HotPricesIcon from "../../../media/flat-design/hot-prices-icon.svg";
import BoxedSetIcon from "../../../media/flat-design/boxed-sets-icon.svg";
import NewReleasesIcon from "../../../media/flat-design/new-releases-icon.svg";
import { FiltersLayout, DefaultFilter, ActiveFilter, FilterContent } from "./bookFilters.styled";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { BookEntity } from "../../../state/books/BookEntity";

const BookFilters = () => {
  const books: BookEntity[] = useSelector(
    (state: RootState) => state.book.book
  );
  const {theme} = useSelector((state: RootState) => state.style);
  const {allBooks} = useSelector((state: RootState) => state.filter);
  const {hotPrices} = useSelector((state: RootState) => state.filter);
  const {boxedSets} = useSelector((state: RootState) => state.filter);
  const {newReleases} = useSelector((state: RootState) => state.filter);
  
  const AllBooksFilter = allBooks === true && theme === 'flat' ? ActiveFilter : DefaultFilter;
  const HotPricesFilter = hotPrices === true && theme === 'flat' ? ActiveFilter : DefaultFilter;
  const BoxedSetsFilter = boxedSets === true && theme === 'flat' ? ActiveFilter : DefaultFilter;
  const NewReleasesFilter = newReleases === true && theme === 'flat' ? ActiveFilter : DefaultFilter;


  return (
    <FiltersLayout>
      <h2>Lists</h2>
      <AllBooksFilter>
        <FilterContent>
          <img src={AllBooksIcon} alt="all books icon" width={"35px"}/>
          <p>All books {books.length}</p>
        </FilterContent>
      </AllBooksFilter>
      <HotPricesFilter>
        <FilterContent>
          <img src={HotPricesIcon} alt="hot prices icon" width={"30px"}/>
          <p>Hot prices</p>
        </FilterContent>
      </HotPricesFilter>
      <BoxedSetsFilter>
        <FilterContent>
          <img src={BoxedSetIcon} alt="boxed sets icon" width={"30px"}/>
          <p>Boxed sets</p>
        </FilterContent>
      </BoxedSetsFilter>
      <NewReleasesFilter>
        <FilterContent>
          <img src={NewReleasesIcon} alt="new releases icon" width={"35px"}/>
          <p>New releases</p>
        </FilterContent>
      </NewReleasesFilter>
    </FiltersLayout>
  );
};

export default BookFilters;
