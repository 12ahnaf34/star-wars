import React, { useState } from "react";
import { Button, Container, Ship } from "./ShipLanding.styled";

export default function ShipLanding() {
  const goTo = () => {
    window.location = "ships";
  };

  return (
    <Container>
      <Ship src="/ship.png" />
      <Button onClick={goTo}>Ships</Button>
    </Container>
  );
}
