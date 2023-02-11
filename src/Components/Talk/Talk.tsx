import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import {
  Circle,
  CircleHolder,
  Container,
  HalfCircle,
  TextHolder,
  Wrapper,
} from "./styles";
// make variables where it stores LEFT(bottom : -15% , left:29%) TOP(top : 3% , left:50%) RIGHT(bottom : -15% , right:29%)
const Talk: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <TextHolder align="end">Let's</TextHolder>
        <CircleHolder>
          <HalfCircle></HalfCircle>
          <Circle bottom="-20%" left="29%">
            <AiFillInstagram style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
          <Circle top="3%" left="50%">
            <SiGmail style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
          <Circle bottom="-20%" right="29%">
            <AiFillLinkedin style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
        </CircleHolder>
        <TextHolder align="start">Talk</TextHolder>
      </Container>
    </Wrapper>
  );
};

export default Talk;
