import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePageLayout = styled.div`
  background:  ${({ theme }) => theme.bg};
  padding-bottom: 100px;
`
export const PrimaryButton = styled(Link)`
  background: ${({ theme }) => theme.primary_btn_bg};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  text-transform: uppercase;
  padding: 1em 2.5em;
  font-weight: 700;
  color: ${({ theme }) => theme.text3};
  box-shadow: ${({ theme }) => theme.btn_boxshadow}; 
`;
