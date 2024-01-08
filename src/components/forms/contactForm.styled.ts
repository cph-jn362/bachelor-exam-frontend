import styled from "styled-components";

export const ContactForm = styled.form`
  width: 70%;
  margin: auto;
  padding-top: 90px;
  div {
    padding: 2em;
    border: ${({ theme }) => theme.filters_border};
    border-radius: ${({ theme }) => theme.border_radius};
    background-image: url(${({ theme }) => theme.filters_container_bg});
    background-size: cover;
  }
  div > input[type="text"] {
    width: 100%;
    padding: ${({ theme }) => theme.filter_padding};
    border: ${({ theme }) => theme.secondary_btn_border};
    background-color: ${({ theme }) => theme.filters_bg};
    border-radius: 8px;
    font-size: 16px;
    margin-top: 1em;
    box-sizing: border-box;
  }
  div > input[type="text"]::placeholder {
    color: ${({ theme }) => theme.filter_color};
  }
  div > input[type="text"]:focus, div > textarea:focus,{
    outline: none; 
  }
  > div > textarea {
    margin-top: 1em;
    border-radius: ${({ theme }) => theme.border_radius};
    width: 100%;
    padding: 1em;
    border: ${({ theme }) => theme.textarea_border};
    height: 320px;
    margin-bottom: 2em;
    resize: none;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.filters_bg};
  }
`;

export const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.primary_btn_bg};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  text-transform: uppercase;
  padding: 1em 2.5em;
  font-weight: 700;
  color: ${({ theme }) => theme.text3};
  box-shadow: ${({ theme }) => theme.btn_boxshadow};
  border: none;
  cursor: pointer;
`;
