import styled from "styled-components";

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  padding: inherit;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.text};
  }
  p{
    margin: 0px;
    font-size: 12px;
    font-weight: 700;
  }
  h2{
    font-size: ${({ theme }) => theme.price_size};
  }
`;

export const PriceTag = styled.div`
  background: ${({ theme }) => theme.price_tag_bg};
  border: ${({ theme }) => theme.price_tag_border};
  margin-bottom: 40px;
  padding: 0.2em 0 0 0.4em;
`;

export const Discount = styled.p`
  width: 25px;
  background: ${({ theme }) => theme.discount_bg}; 
  border-radius: 100%;
  position: relative;
  padding: 1em;
  bottom: 45px;
  left: 160px;
  color: ${({ theme }) => theme.text3};
`