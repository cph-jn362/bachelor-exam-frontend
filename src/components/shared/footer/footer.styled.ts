import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterStyled = styled.div`
  background: ${({ theme }) => theme.bg2};
  align-items: top;
  display: flex;
  padding: 3em 8em 2em;
`;

export const Logo = styled(NavLink)`
  font-family: ${({ theme }) => theme.heading_font};
  color: ${({ theme }) => theme.text3};
  margin-right: auto;
  font-weight: 700;
  font-size: 2em;
`;

export const SomeIcon = styled.img`
  margin-left: 1em;
  cursor: pointer;
`;

export const Stores = styled.div`
  margin-right: 3em;
  p{
    margin: 0px;
    color: ${({ theme }) => theme.text3};
    font-weight: 700;
  }
  div{
    width: 380px;
    display: flex;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    padding: inherit;
    line-height: 28px;
    font-size: 24px;
  }
  li {
    margin-bottom: 20px;
    font-size: 16px;
    color: ${({ theme }) => theme.text3};
  }
`;
