import styled from "styled-components";

export const Default = styled.div`
  display: flex;
  input[type="text"] {
    width: 100%;
    padding: 1em;
    border: ${({ theme }) => theme.secondary_btn_border};
    border-radius: ${({ theme }) => theme.border_radius};
    font-size: 16px;
    margin-right: 1em;
    box-sizing: border-box;
    background: ${({ theme }) => theme.input_bg};
  }
  input:focus{
    outline: none;
    color: ${({ theme }) => theme.text};
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.secondary_btn_bg};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  border: ${({ theme }) => theme.secondary_btn_border};
  text-transform: uppercase;
  padding: 1em 2.5em;
  color: ${({ theme }) => theme.text2};
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.btn_boxshadow};
  img{
    margin-right: 10px;
  }
`;
