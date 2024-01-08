import Header from "./components/shared/header/header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutpage";
import Bookspage from "./pages/books/bookspage";
import Footer from "./components/shared/footer/footer";
import Productpage from "./pages/product/productpage";
import StyleConsole from "./components/shared/styleModal/styleconsole";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { flatTheme, skeuoTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";

export default function App() {
  const { theme } = useSelector((state: RootState) => state.style);
  const currentTheme = theme === "flat" ? flatTheme : skeuoTheme;
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <StyleConsole />
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/books" element={<Bookspage />} />
          <Route path="/books/:id" element={<Productpage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
