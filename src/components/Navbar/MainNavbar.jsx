import React, { useState } from "react";
import { Container, Link, SpecialMenuIcon, SpecialMenuContainer } from "./MainNavbar.styled";

export default function MainNavbar() {
  const [displayStatus, setDisplayStatus] = useState(false);

  const showHide = () => {
    if (displayStatus) {
      setDisplayStatus(false);
    } else {
      setDisplayStatus(true);
    }
  };

  return (
    <Container>
      <SpecialMenuIcon onClick={showHide} />
      {displayStatus && (
        <SpecialMenuContainer>
          <Link href="/"> HOME</Link>
          <Link href="ships"> SHIPS</Link>
          <Link href="vehicles"> VEHICLES</Link>
        </SpecialMenuContainer>
      )}
    </Container>
  );
}
