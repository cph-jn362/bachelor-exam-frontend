import styled from "styled-components";

export const ModalLayout = styled.div`
  background: rgba(40, 40, 40, 0.8);
  position: fixed;
  width: 800px;
  height: 380px;
  border-radius: 25px 25px 0px 0px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(172, 172, 172, 0.8);
  padding: 0 2em;
  z-index: 3;
  font-family: Roboto;
`;
