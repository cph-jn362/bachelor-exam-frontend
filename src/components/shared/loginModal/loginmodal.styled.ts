import styled from "styled-components";

export const Modal = styled.div`
  background: ${({ theme }) => theme.bg};
  background-image: url(${({ theme }) => theme.filters_container_bg});
  background-size: cover;
  position: fixed;
  width: 50%;
  padding: 2em;
  border: ${({ theme }) => theme.filters_border};
  border-radius: ${({ theme }) => theme.border_radius};
  z-index: 2;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  h2{
    font-weight: 700;
    color: ${({ theme }) => theme.filter_color}; 
  }
`;

export const LoginForm = styled.form`
  input[type="text"] {
    width: 100%;
    padding: ${({ theme }) => theme.filter_padding};
    border: ${({ theme }) => theme.secondary_btn_border};
    border-bottom: ${({ theme }) => theme.border_bottom};
    border-radius: ${({ theme }) => theme.border_radius};
    background-color: ${({ theme }) => theme.filters_bg};
    font-size: 16px;
    margin-top: 1em;
    box-sizing: border-box;
  }
  input[type="text"]::placeholder {
    color: ${({ theme }) => theme.filter_color};
  }
  input[type="text"]:focus{
    outline: none; 
  }
`;

export const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.primary_btn_bg};
  border: ${({ theme }) => theme.primary_btn_border};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  text-transform: uppercase;
  padding: 1.2em 2.5em;
  margin-top: 1em;
  font-weight: 700;
  margin-right: 24px;
  color: ${({ theme }) => theme.text3};
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`
