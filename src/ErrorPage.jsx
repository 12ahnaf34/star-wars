import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./routes/App.styled";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  align-items: center;
  background-color: ${colors.dark};
  font-family: Arial;
`;

const MessageContainer = styled.div`
  display: grid;
`;

const Heading = styled.h1`
  color: ${colors.light};
  text-align: center;
`;

const Text = styled.p`
  color: ${colors.light};
  text-align: center;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <MessageContainer>
        <Heading>Oops!</Heading>
        <Text>Sorry, an error has occurred.</Text>
        <Text>
          <i>{error.statusText || error.message}</i>
        </Text>
      </MessageContainer>
    </Container>
  );
}
