import styled from "styled-components";
import { colors } from "../../routes/App.styled";

export const Container = styled.div`
  min-height: 200px;
  display: grid;
  container-type: inline-container;
  justify-items: center;
  padding: 10px;
  background-color: #000000;
`;

export const Link = styled.a`
  font-family: Calibri;
  width: fit-content;
  text-decoration: none;
  font-size: 15px;
  color: ${colors.light};
`;
