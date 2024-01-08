import {
  PrimaryButton,
  SecondaryButton,
  Navbar,
  Logo,
  MenuLink,
} from "./header.styled";
import ShoppingCart from "../../misc/icons/cartIcon";
import { useState } from "react";
import SignupModal from "../signupModal/signupmodal";
import LoginModal from "../loginModal/loginmodal";

const Header = () => {
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);


  return (
    <Navbar>
      <Logo to="/">Booksy</Logo>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/books">books</MenuLink>
      <MenuLink to="/about">about us</MenuLink>
      <PrimaryButton onClick={() => setIsSignupOpen(true)}>sign up</PrimaryButton>
      <SecondaryButton onClick={() => setIsLoginOpen(true)}>Login</SecondaryButton>
      <ShoppingCart />
      <SignupModal open={isSignupOpen} onClose={() => setIsSignupOpen(false)}/>
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}/>
    </Navbar>
  );
};

export default Header;
