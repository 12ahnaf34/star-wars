import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import VehiclePage from "../components/VehiclePage/VehiclePage";
import { Container } from "./App.styled";

export default function Vehicles() {
  const [page, setPage] = useState(1);
  const [number, setNumber] = useState(0);

  return (
    <Container>
      <Navbar />
      <VehiclePage number={number} setNumber={setNumber} page={page} setPage={setPage} />
      <Footer />
    </Container>
  );
}
