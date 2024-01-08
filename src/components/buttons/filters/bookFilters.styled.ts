import styled from "styled-components";

export const FiltersLayout = styled.div`
  background-image: url(${({ theme }) => theme.filters_container_bg});
  padding: 2em;
  border: ${({ theme }) => theme.filters_border};
  color: ${({ theme }) => theme.text2};
  border-radius: ${({ theme }) => theme.border_radius};
  margin-top: 30px;
  h2 {
    margin-top: 0px;
    font-weight: 700;
    color: ${({ theme }) => theme.filter_color};
  }
`;

export const DefaultFilter = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.filter_color};
  background-color: ${({ theme }) => theme.filters_bg};
  font-weight: 700;
  padding: ${({ theme }) => theme.filter_padding};
  text-decoration: none;
  border: ${({ theme }) => theme.secondary_btn_border};
  border-radius: ${({ theme }) => theme.border_radius};
  border-bottom: ${({ theme }) => theme.border_bottom}; 
  cursor: pointer;
  text-align: left;
  margin-bottom: 20px;
`;

export const ActiveFilter = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.text3};
  background-color: ${({ theme }) => theme.primary_btn_bg};
  font-weight: 700;
  padding: ${({ theme }) => theme.filter_padding};
  text-decoration: none;
  border: ${({ theme }) => theme.secondary_btn_border};
  border-radius: ${({ theme }) => theme.border_radius};
  border-bottom: ${({ theme }) => theme.border_bottom}; 
  cursor: pointer;
  text-align: left;
  margin-bottom: 20px;
`;

export const FilterContent = styled.div`
  align-items: center;
  display: flex;
  p {
    line-height: 0px;
    margin-left: ${({ theme }) => theme.filter_margin};
  }
  img {
    position: absolute;
    display: ${({ theme }) => theme.filter_icon};
  }
`;
