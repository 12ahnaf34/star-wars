import styled from "styled-components";
import { colors } from "../../routes/App.styled";

export const Container = styled.div`
  display: grid;
  min-height: 95vh;
  container-type: inline-container;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  background-color: ${colors.dark};
  align-self: center;
  justify-self: center;
  margin-bottom: 5px;

  @media (min-width: 800px) {
    grid-template-rows: 1fr;
  }
`;

export const Heading = styled.h1`
  position: fixed;
  opacity: 1%;
  z-index: 1;

  top: -2%;
  left: 50%;
  transform: translate(-50%, 0);

  text-align: center;
  color: ${colors.light};
  background-color: transparent;
  font-size: 10cqi;
  font-family: Rockstar;
  cursor: default;

  @media (min-width: 800px) {
    width: 100cqi;
    font-size: 10cqi;
  }
`;

export const MainImage = styled.img`
  background-color: ${colors.dark};
  margin: auto;
  width: 100%;

  @media (min-width: 2000px) {
    width: 90%;
  }
`;
