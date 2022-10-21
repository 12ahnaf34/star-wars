import React, { useState, useEffect } from "react";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import { shipStuff } from "./shipStuff";
import {
  Container,
  LeftButton,
  List,
  ListItem,
  RightButton,
  Ship,
  Text,
  MainText,
  Thumbnail,
  Previous,
  Next,
  NavButtons,
  PageNumber,
  LoadingText,
} from "./ShipPage.styled";
//P1 N0
//P2 N10
//P3 N20

export default function ShipPage(props) {
  let { page, setPage, number, setNumber } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [shipData, setShipData] = useState([]);
  const [fetchURLs, setFetchURLs] = useState({ previous: null, next: "" });

  useEffect(() => {
    setNumber(page * 10 - 10);
  }, [page]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((data) => data.json())
      .then((res) => {
        setFetchURLs({ previous: res.previous, next: res.next });
        setShipData(res.results);
        setIsLoading(false);
      });
  }, []);

  const nextItem = () => {
    setIndex((oldItem) => {
      if (oldItem + 1 > shipStuff.length - 1) {
        return shipStuff.length - 1;
      } else {
        return (oldItem = oldItem + 1);
      }
    });
  };

  const previousItem = () => {
    setIndex((oldItem) => {
      if (oldItem - 1 < 0) {
        return 0;
      } else {
        return (oldItem = oldItem - 1);
      }
    });
  };

  const nextListSet = () => {
    if (fetchURLs.next == null) return;

    setIsLoading(true);
    setPage((old) => old + 1);

    fetch(fetchURLs.next)
      .then((res) => res.json())
      .then((res) => {
        setFetchURLs({ previous: res.previous, next: res.next });
        setShipData(res.results);
        setIsLoading(false);
      })
      .catch((err) => {
        return console.error(err);
      });
  };

  const PreviousListSet = () => {
    if (fetchURLs.previous == null) return;

    setPage((old) => old - 1);
    setIsLoading(true);

    fetch(fetchURLs.previous)
      .then((res) => res.json())
      .then((res) => {
        setFetchURLs({ previous: res.previous, next: res.next });
        setShipData(res.results);
        setIsLoading(false);
      })
      .catch((err) => {
        return console.error(err);
      });
  };
  // console.log(fetchURLs);

  return (
    <Container>
      <LeftButton onClick={previousItem}>
        <CgArrowLeftR />
      </LeftButton>
      <Ship src={shipStuff[index]} />
      <RightButton onClick={nextItem}>
        <CgArrowRightR />
      </RightButton>

      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <List>
          {shipData.map((item) => {
            let cost = item.cost_in_credits;

            if (cost == "unknown") cost = "Unknown";
            else cost = parseInt(item.cost_in_credits).toLocaleString() + " credits";

            return (
              <ListItem key={item.name}>
                <Thumbnail loading="lazy" src={shipStuff[number++]} />
                <MainText margin="10px">
                  {number}. {item.name.toUpperCase()}
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
          <Previous onClick={PreviousListSet}>Prev</Previous>
          <PageNumber>{page}</PageNumber>
          <Next onClick={nextListSet}>Next</Next>
        </NavButtons>
      )}
    </Container>
  );
}
