import styled from "styled-components";
import { colors } from "../../routes/App.styled";

export const Container = styled.div`
  min-height: 95vh;
  width: 100%;
  display: grid;
  container-type: inline-container;

  background-color: ${colors.dark};
  background-image: url("/scifi_landscape.jpg");
  background-repeat: no-repeat;
  background-size: contain;

  grid-template-areas:
    "LeftButton Image      Image      Image      RightButton"
    "LeftButton Image      Image      Image      RightButton"
    "LeftButton Image      Image      Image      RightButton"
    "List       List       List       List       List       "
    ".          .          NavButtons .          .          ";

  @media (max-width: 1500px) {
    grid-template-areas:
      "Image       Image      Image       Image     "
      "  .         LeftButton RightButton   .       "
      "List        List       List        List      "
      ".           NavButtons NavButtons  .         ";
  }
`;

export const Vehicle = styled.img`
  max-height: 40cqi;
  grid-area: Image;
  justify-self: center;
  align-self: center;
  margin-bottom: 15cqi;

  @media (max-width: 800px) {
    min-height: 40cqi;
  }
`;

export const LeftButton = styled.button`
  width: 10cqi;
  grid-area: LeftButton;

  justify-self: start;
  margin: 0;
  padding: 0;
  border: 0;

  opacity: 50%;
  font-size: 5cqi;
  background-color: transparent;
  color: ${colors.dark};
  cursor: pointer;

  &:hover {
    background-color: ${colors.dark};
    color: ${colors.light};
    opacity: 50%;
  }

  @media (max-width: 800px) {
    font-size: 10cqi;
    color: ${colors.light};
  }
`;

export const RightButton = styled.button`
  width: 10cqi;
  grid-area: RightButton;

  justify-self: right;
  margin: 0;
  padding: 0;
  border: 0;

  opacity: 50%;
  font-size: 5cqi;
  background-color: transparent;
  color: ${colors.dark};
  cursor: pointer;

  &:hover {
    background-color: ${colors.dark};
    color: ${colors.light};
    opacity: 50%;
  }

  @media (max-width: 800px) {
    font-size: 10cqi;
    color: ${colors.light};
  }
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-area: List;
  margin-top: 100px;

  gap: 50px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  padding: 0;

  font-family: Bahnschrift;

  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ListItem = styled.div`
  width: 90cqi;
  min-height: 40cqi;
  margin: 0;

  font-family: Bahnschrift;
  box-shadow: 5px 5px 2px 2px ${colors.grey};
  border-radius: 10px;
  border: 5px solid ${colors.light};
  background-color: ${colors.dark};
  color: ${colors.light};
  padding: 5px;

  @media (min-width: 1500px) {
    width: 45cqi;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
`;

export const MainText = styled.p`
  font-size: 6cqi;
  text-align: center;

  @media (min-width: 1500px) {
    font-size: 4cqi;
  }
`;

export const Text = styled.p`
  font-size: 5cqi;
  margin: 0;

  @media (min-width: 1500px) {
    font-size: 1.5cqi;
  }
`;

export const NavButtons = styled.span`
  grid-area: NavButtons;
  width: fit-content;
  margin: 100px 0;

  justify-self: center;

  background-color: ${colors.dark};
`;

export const Previous = styled.button`
  font-family: Bahnschrift;
  font-size: 4cqi;
  background-color: ${colors.light};
  color: ${colors.dark};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1500px) {
    font-size: 3cqi;
  }
`;

export const Next = styled.button`
  font-family: Bahnschrift;
  font-size: 4cqi;
  background-color: ${colors.light};
  color: ${colors.dark};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1500px) {
    font-size: 3cqi;
  }
`;

export const PageNumber = styled.span`
  font-family: Bahnschrift;
  font-size: 4cqi;
  margin: 0 20px;

  @media (min-width: 1500px) {
    font-size: 3cqi;
  }
`;

export const LoadingText = styled.p`
  grid-area: List;
  margin: auto;
  font-size: 5cqi;
  text-align: center;
`;
