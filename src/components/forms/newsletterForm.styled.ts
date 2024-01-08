import styled from "styled-components";

export const NewsletterForm = styled.form`
  margin-right: 3em;
  P {
    color: ${({ theme }) => theme.text3};
    font-weight: 700;
    margin: 0px 0px 20px 0px;
  }
`;

export const EmailInput = styled.div`
display: flex;
input[type="text"] {
    border-radius: ${({ theme }) => theme.border_radius};
    border: ${({ theme }) => theme.secondary_btn_border};
    padding: 1em 2em;
    border: none;
    margin-right: 10px;
    background-image: ${({ theme }) => theme.input_bg};
  }
  input[type="text"]::placeholder{
    color:  ${({ theme }) => theme.text}; 
  }
  input:focus{
    outline: none;
    color:  ${({ theme }) => theme.text}; 
  }
`;

export const SecondaryButton = styled.button`
  background: ${({ theme }) => theme.secondary_btn_bg};
  font-family: ${({ theme }) => theme.paragraph_font};
  border-radius: ${({ theme }) => theme.border_radius};
  border: ${({ theme }) => theme.secondary_btn_border};
  text-transform: uppercase;
  padding: 1em 2em;
  color: ${({ theme }) => theme.text2};
  font-weight: 700;
  margin-right: 18px;
  box-shadow: ${({ theme }) => theme.btn_boxshadow};
  cursor: pointer;
`;
