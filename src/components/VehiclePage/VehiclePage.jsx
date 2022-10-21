import React, { useState, useEffect } from "react";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import {
  Container,
  LeftButton,
  List,
  ListItem,
  MainText,
  Text,
  RightButton,
  Vehicle,
  Thumbnail,
  NavButtons,
  Previous,
  Next,
  PageNumber,
  LoadingText,
} from "./VehiclePage.styled";
import { VehicleStuff } from "./VehicleStuff";

export default function ShipLanding(props) {
  let { number, setNumber, page, setPage } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [vehicleData, setVehicleData] = useState([]);
  const [fetchURLs, setFetchURLs] = useState({ previous: "", next: "" });

  useEffect(() => {
    setNumber(page * 10 - 10);
  }, [page]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      .then((res) => {
        setVehicleData(res.results);
        setFetchURLs({ previous: res.previous, next: res.next });
        setIsLoading(false);
      });
  }, []);

  const nextItem = () => {
    setIndex((oldItem) => {
      if (oldItem + 1 >= VehicleStuff.length) {
        return VehicleStuff.length - 1;
      } else {
        return oldItem + 1;
      }
    });
  };

  const previousItem = () => {
    setIndex((oldItem) => {
      if (oldItem - 1 < 0) {
        return 0;
      } else {
        console.log(oldItem);
        return oldItem - 1;
      }
    });
  };

  const nextListSet = () => {
    if (fetchURLs.next == null) return;

    setIsLoading(true);
    setPage((old) => (old = old + 1));

    fetch(fetchURLs.next)
      .then((res) => res.json())
      .then((res) => {
        setFetchURLs({ previous: res.previous, next: res.next });
        setVehicleData(res.results);
        setIsLoading(false);
      })
      .catch((err) => {
        return console.error(err);
      });
  };

  const previousListSet = () => {
    if (fetchURLs.previous == null) return;

    setIsLoading(true);
    setPage((old) => (old = old - 1));

    fetch(fetchURLs.previous)
      .then((res) => res.json())
      .then((res) => {
        setVehicleData(res.results);
        setFetchURLs({ previous: res.previous, next: res.next });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <LeftButton onClick={previousItem}>
        <CgArrowLeftR />
      </LeftButton>
      <Vehicle src={VehicleStuff[index]} />
      <RightButton onClick={nextItem}>
        <CgArrowRightR />
      </RightButton>

      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <List>
          {vehicleData.map((item) => {
            let cost = item.cost_in_credits;

            if (cost == "unknown") cost = "Unknown";
            else cost = parseInt(item.cost_in_credits).toLocaleString() + " credits";

            return (
              <ListItem key={item.model}>
                <Thumbnail loading="lazy" src={VehicleStuff[number++]} />
                <MainText>
                  {number}. {item.name}
                </MainText>
                <Text>Model: {item.model}</Text>
                <Text>Manufacturer: {item.manufacturer}</Text>
                <Text>Crew: {item.crew}</Text>
                <Text>Cost: {cost}</Text>
              </ListItem>
            );
          })}
        </List>
      )}

      {!isLoading && (
        <NavButtons>
          <Previous onClick={previousListSet}>Prev</Previous>
          <PageNumber>{page}</PageNumber>
          <Next onClick={nextListSet}>Next</Next>
        </NavButtons>
      )}
    </Container>
  );
}
