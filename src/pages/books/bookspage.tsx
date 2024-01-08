import BookFilters from "../../components/buttons/filters/bookFilters";
import SearchBar from "../../components/forms/searchBar/searchBar";
import BooksList from "../../components/lists/booksList";
import { BooksPageLayout, Layout, Content } from "./bookspage.styled";

const Bookspage = () => {
  return (
    <BooksPageLayout>
      <Layout>
        <Content>
          <div style={{ width: "25em" }}>
            <h1>Books</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              nisi accusamus ipsum, laboriosam, magnam optio ea sint sed commodi
              repellendus non magni quas cum deleniti temporibus?
            </p>
            <BookFilters />
          </div>
          <div style={{ width: "42em" }}>
            <SearchBar />
            <BooksList />
          </div>
        </Content>
      </Layout>
    </BooksPageLayout>
  );
};

export default Bookspage;
