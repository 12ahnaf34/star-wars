import React, { useEffect, useState } from "react";
import { Container, Link, MenuIcon, MenuContainer, PlainLink } from "./Navbar.styled";

export default function Navbar() {
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
      <MenuIcon onClick={showHide} />
      {displayStatus && (
        <MenuContainer>
          <Link href="/"> HOME</Link>
          <Link href="ships"> SHIPS</Link>
          <Link href="vehicles"> VEHICLES</Link>
        </MenuContainer>
      )}
      <PlainLink href="/"> HOME</PlainLink>
      <PlainLink href="ships"> SHIPS</PlainLink>
      <PlainLink href="vehicles"> VEHICLES</PlainLink>
    </Container>
  );
}
