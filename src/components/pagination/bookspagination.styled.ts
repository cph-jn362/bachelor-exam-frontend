import styled from "styled-components";

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  padding: inherit;
`;

export const PaginationButtons = styled.li`
  background: ${({ theme }) => theme.secondary_btn_bg};
  padding: 0.8em 1.3em;
  border: ${({ theme }) => theme.secondary_btn_border};
  border-radius: ${({ theme }) => theme.border_radius};
  cursor: pointer;
  margin-right: 14px;
  a{
    color: ${({ theme }) => theme.text2};
  }
`;
