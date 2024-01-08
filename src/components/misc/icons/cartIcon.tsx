import FlatShoppingCart from "../../../media/flat-design/shopping-cart-icon.svg";
import SkeuoShoppingCart from "../../../media/skeuomorphism/shopping-icon-gradient.svg";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const { theme } = useSelector((state: RootState) => state.style);
  const currentIcon = theme === "flat" ? FlatShoppingCart : SkeuoShoppingCart;
  return <img src={currentIcon} alt="shopping cart icon" />;
};

export default CartIcon;
