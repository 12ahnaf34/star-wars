import React from "react";
import { Container, Vehicle, Button } from "./VehicleLanding.styled";

export default function VehicleLanding() {
  const goTo = () => {
    window.location = "vehicles";
  };
  return (
    <Container>
      <Vehicle src="/at-at.png" />
      <Button onClick={goTo}>Vehicles</Button>
    </Container>
  );
}
