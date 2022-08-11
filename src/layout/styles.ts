import styled from "styled-components";

export const LayoutBg = styled.main`
  position: relative;
  background: linear-gradient(180deg, rgba(242, 201, 76, 0.2) 0%, rgba(242, 153, 74, 0.2) 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 32%, 0 64%);
  clip-path: polygon(0 0, 100% 0, 100% 32%, 0 64%);
  width: 100%;
  height: 100vh;
`;
