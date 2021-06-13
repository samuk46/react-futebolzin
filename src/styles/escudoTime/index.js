import styled from "styled-components";

export const EscudoTime = styled.img`
  height: ${({ altura }) => altura || "220px"};
  width: ${({ largura }) => largura || "190px"};
  margin: 0 auto;
  display: block;
`;
