import styled from "styled-components";

export const ImageFrame = styled.img`
  padding: 1em;
  border: ${({ theme }) => theme.img_frame_border};
  background-image: url(${({ theme }) => theme.filters_container_bg});
  background-size: cover;
  width: 30em;
`;
