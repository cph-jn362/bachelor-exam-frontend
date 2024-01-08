import styled from "styled-components";

export const AboutPageLayout = styled.div`
  background: ${({ theme }) => theme.bg};
  padding-bottom: 100px;
`;

export const Layout = styled.div`
  margin: 0 11.5em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 90px;
`;

export const ImageFrame = styled.div`
  border: ${({ theme }) => theme.filters_border};
`;
