import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 2em 8em;
  background: ${({ theme }) => theme.header_bg};
`;

export const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.primary_btn_bg};
  border: ${({ theme }) => theme.primary_btn_border};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  text-transform: uppercase;
  padding: 1.2em 2.5em;
  font-weight: 700;
  color: ${({ theme }) => theme.text3};
  margin: 0px 24px;
  box-shadow: ${({ theme }) => theme.btn_boxshadow}; 
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  background: ${({ theme }) => theme.secondary_btn_bg};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  border: ${({ theme }) => theme.secondary_btn_border};
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.2em 2.5em;
  color: ${({ theme }) => theme.text2};
  font-weight: 700;
  margin-right: 18px;
  box-shadow: ${({ theme }) => theme.btn_boxshadow}; 
  cursor: pointer;
`;

export const Logo = styled(NavLink)`
  font-family: ${({ theme }) => theme.heading_font};
  color: ${({ theme }) => theme.text2};
  font-weight: 700;
  font-size: 2em;
  margin-right: auto;
`;

export const MenuLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.paragraph_font};
  color: ${({ theme }) => theme.text2};
  margin-left: 36px;
  font-weight: 700;
  font-size: 1em;
  text-transform: uppercase;
  text-decoration: none;
  &.active {
    text-decoration: underline;
    text-underline-offset: 8px;
  }
`;

