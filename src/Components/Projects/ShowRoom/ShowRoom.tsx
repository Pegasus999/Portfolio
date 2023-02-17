import React from "react";
import {
  Carousel,
  CarouselHolder,
  CarouselItem,
  TextHolder,
  Wrapper,
} from "./styles";
import { Container } from "./styles";
// make a state where u store the id of the item being focus , every item has an id obviously , if the id <= 1 then no left item , if id < 4 then there is left and right item blurred which are id - 1 and id + 1
// and when id is 4 there is no left item GOOD LUCK TMRW king
const ShowRoom: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <CarouselHolder>
          <Carousel>
            <CarouselItem></CarouselItem>
          </Carousel>
        </CarouselHolder>
        <TextHolder>hehe</TextHolder>
      </Container>
    </Wrapper>
  );
};

export default ShowRoom;
