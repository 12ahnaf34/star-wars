import styled from "styled-components";
import { colors } from "../../routes/App.styled";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  container-type: inline-container;
  background-color: ${colors.dark};
  background-image: url("/background.png");
  background-repeat: none;
  background-size: cover;
  grid-template-areas:
    "LeftButton Image Image Image  RightButton"
    "LeftButton Image Image Image  RightButton"
    "LeftButton Button Button Button RightButton";

  @media (max-width: 800px) {
    grid-template-areas:
      "Image Image Image Image"
      ". LeftButton RightButton ."
      ". Button Button ."
      ". Button Button ."
      ". Button Button .";
  }
`;

export const Ship = styled.img`
  width: 40cqi;
  grid-area: Image;
  justify-self: center;
  align-self: center;
  clip-path: polygon(55% 10%, 100% 15%, 100% 15%, 95% 70%, 1% 90.5%);
  animation: MoveUpDown 4s ease-in-out infinite;

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

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  grid-area: Button;
  align-self: top;
  justify-self: center;
  border-radius: 10px;
  border: 5px solid ${colors.light};
  font-size: 2cqi;
  font-family: "Ethno";
  color: ${colors.dark};
  background-color: ${colors.light};
  cursor: pointer;

  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.2);
    color: ${colors.dark};
    background-color: ${colors.light};
    border: 5px solid ${colors.light};
  }

  @media (max-width: 800px) {
    font-size: 7cqi;
  }
`;
