import React from "react";
import { Container, Link } from "./Footer.styled";

export default function Footer() {
  return (
    <Container>
      <div>
        <Link href="https://www.flaticon.com/free-icons/star-wars" title="star wars icons">
          Star wars icons created by Freepik - Flaticon
        </Link>
        <br />
        <Link href="https://displate.com/star_wars/lightsabers">Lightsabers created by Displate</Link>
      </div>
    </Container>
  );
}
