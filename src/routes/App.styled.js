import styled from "styled-components";

export const colors = {
  dark: "#09090b",
  light: "#fbede7",
  grey: "#B2B2B2",
  red: "#e30404",
};

export const Container = styled.div`
  width: 100%;
  display: grid;
  background-color: ${colors.dark};
  color: ${colors.light};
  font-family: "Ethno";
`;
