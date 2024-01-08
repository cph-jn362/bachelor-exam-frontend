import { Link } from "react-router-dom";
import PrimaryButtonCSS from "./primaryButton.module.css";

const BookstoreButton = () => {
  return (
    <Link to="/books" className={PrimaryButtonCSS.primary_flat}>
      See our books
    </Link>
  );
};

export default BookstoreButton;
