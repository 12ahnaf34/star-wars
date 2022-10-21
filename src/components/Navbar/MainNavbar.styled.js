import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { colors } from "../../routes/App.styled";

export const Container = styled.div`
  height: 5vh;
  display: grid;
  container-type: inline-container;
  z-index: 2;

  grid-template-columns: 1fr;
  justify-items: left;
  align-items: left;

  padding: 10px;
  background-color: ${colors.dark};
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 30px;
  font-family: Bahnschrift;
  font-weight: bold;
  color: ${colors.dark};
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`;

export const SpecialMenuIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  transition: all 0.4s ease;
  font-size: 40px;
  padding: 10px;
  color: ${colors.light};

  &:hover,
  &:active {
    transform: scale(1.4);
    margin: 5px;
  }

  @media (min-width: 800px) {
    font-size: 60px;
  }
`;

export const SpecialMenuContainer = styled.div`
  width: 250px;
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr;
  background-color: ${colors.light};
`;
