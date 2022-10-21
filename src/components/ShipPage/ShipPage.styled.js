import styled from "styled-components";
import { colors } from "../../routes/App.styled";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  container-type: inline-container;

  background-color: ${colors.dark};
  background-image: url("/background.png");
  background-repeat: none;
  background-size: cover;
  padding-bottom: 50px;

  grid-template-areas:
    "LeftButton Image  Image      Image RightButton"
    "LeftButton Image  Image      Image RightButton"
    "LeftButton Image  Image      Image RightButton"
    "List       List   List       List  List       "
    ".          .      NavButtons .     .          ";

  @media (max-width: 800px) {
    grid-template-areas:
      "Image       Image      Image       Image     "
      "  .         LeftButton RightButton   .       "
      "List        List       List        List      "
      "List        List       List        List      "
      "List        List       List        List      "
      "NavButtons  NavButtons NavButtons  NavButtons";
  }
`;

export const Ship = styled.img`
  width: 40cqi;
  grid-area: Image;
  justify-self: center;
  align-self: center;
  animation: MoveUpDown 4s ease-in-out infinite;
  margin-top: 200px;
  margin-bottom: 400px;

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
  }

  @media (max-width: 800px) {
    width: 80cqi;
    margin-top: 100px;
    margin-bottom: 100px;

    @keyframes MoveUpDown {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(15px);
      }
    }
  }
`;

export const LeftButton = styled.button`
  width: 10cqi;
  grid-area: LeftButton;
  margin: 5px;
  padding: 0;
  border: 0;

  margin-top: 20px;
  font-size: 5cqi;
  background-color: transparent;
  color: ${colors.light};
  cursor: pointer;

  &:hover {
    background-color: ${colors.light};
    color: ${colors.dark};
    opacity: 10%;
  }

  @media (max-width: 800px) {
    font-size: 15cqi;
  }
`;

export const RightButton = styled.button`
  grid-area: RightButton;
  margin: 5px;
  padding: 0;
  border: 0;

  margin-top: 20px;
  font-size: 5cqi;
  background-color: transparent;
  color: ${colors.light};
  cursor: pointer;

  &:hover {
    background-color: ${colors.light};
    color: ${colors.dark};
    opacity: 10%;
  }

  @media (max-width: 800px) {
    font-size: 15cqi;
  }
`;

export const LoadingText = styled.p`
  grid-area: List;
  min-height: 800px;

  margin-top: 200px;
  font-size: 40px;
  text-align: center;
  justify-self: center;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-area: List;

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

//blue -> #181e2b
export const ListItem = styled.div`
  display: grid;
  width: 90cqi;
  min-height: 40cqi;
  container-type: inline-container;

  font-family: Bahnschrift;
  box-shadow: 5px 5px 2px 2px ${colors.grey};
  border-radius: 10px;
  border: 5px solid ${colors.light};
  background-color: ${colors.dark};
  color: ${colors.light};

  @media (min-width: 1800px) {
    width: 45cqi;
  }
`;

export const Thumbnail = styled.img`
  max-width: 35cqi;
  height: 20cqi;
  margin: auto;
`;

export const MainText = styled.p`
  font-size: 5cqi;
  text-align: center;
  margin: ${({ margin }) => margin || "1px"};

  @media (min-width: 1800px) {
    font-size: 2cqi;
  }
`;

export const Text = styled.p`
  font-size: 5cqi;
  text-align: left;
  margin: ${({ margin }) => margin || "1px"};
  margin-left: 5px;

  @media (min-width: 1800px) {
    width: 40cqi;
    font-size: 1.5cqi;
  }
`;

export const NavButtons = styled.span`
  grid-area: NavButtons;
  justify-self: center;
`;

export const Previous = styled.button`
  grid-area: Previous;
  font-family: Bahnschrift;
  font-size: 7cqi;
  border-radius: 5px;
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
  grid-area: Next;
  font-family: Bahnschrift;
  font-size: 7cqi;
  border-radius: 5px;
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
  margin: 40px;
  font-size: 7cqi;

  @media (min-width: 1500px) {
    font-size: 3cqi;
  }
`;
