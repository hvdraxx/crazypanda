import React from "react";
import { Container } from "./Sliders.styled";

interface Props {
  red: number;
  green: number;
  blue: number;
  setRed(val: number): void;
  setGreen(val: number): void;
  setBlue(val: number): void;
}

export const Sliders = ({
  red,
  green,
  blue,
  setRed,
  setGreen,
  setBlue,
}: Props) => {
  return (
    <Container>
      <input
        type="range"
        value={red}
        min="0"
        max="255"
        onChange={(event) => setRed(parseInt(event.currentTarget.value))}
      ></input>
      <input
        type="range"
        value={green}
        min="0"
        max="255"
        onChange={(event) => setGreen(parseInt(event.currentTarget.value))}
      ></input>
      <input
        type="range"
        value={blue}
        min="0"
        max="255"
        onChange={(event) => setBlue(parseInt(event.currentTarget.value))}
      ></input>
    </Container>
  );
};
