import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        background: ${({theme}) => theme.bg};
        color: ${({theme}) => theme.text};
        font-family: ${({theme}) => theme.paragraph_font};
        line-height: 28px;
        background-image: url(${({theme}) => theme.bg_image});
    }
    h1{
        font-family: ${({theme}) => theme.heading_font};
        font-size: ${({theme}) => theme.h1_size};
        margin-bottom: 36px;
    }
    h2{
        font-family: ${({theme}) => theme.heading_font};
        font-size: ${({theme}) => theme.h2_size};
        font-weight: 400;
    }
    a{
        text-decoration: none;
    }
`;
