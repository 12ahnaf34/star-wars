import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShipPage from "../components/ShipPage/ShipPage";
import { Container } from "./App.styled";

export default function Ships() {
  const [page, setPage] = useState(1);
  const [number, setNumber] = useState(0);

  return (
    <Container>
      <Navbar />
      <ShipPage page={page} setPage={setPage} number={number} setNumber={setNumber} />
      <Footer />
    </Container>
  );
}
