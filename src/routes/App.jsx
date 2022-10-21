import React, { useState } from "react";
import { Container } from "./App.styled";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MainLanding from "../components/MainLanding/MainLanding";
import ShipLanding from "../components/ShipLanding/ShipLanding";
import VehicleLanding from "../components/VehicleLanding/VehicleLanding";
import MainNavbar from "../components/Navbar/MainNavbar";

function App() {
  return (
    <Container>
      <MainNavbar />
      <MainLanding />
      <ShipLanding />
      <VehicleLanding />
      <Footer />
    </Container>
  );
}

export default App;
