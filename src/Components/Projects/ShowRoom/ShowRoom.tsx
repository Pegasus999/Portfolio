import React, { useState } from "react";
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
  const [focused, setFocused] = useState<number>(0);
  const [caller, setCaller] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  function handleClick(id: number) {
    setCaller(id);
    setAnimate(true);
    setTimeout(() => {
      setFocused(id);
      setAnimate(false);
    }, 950);
  }
  return (
    <Wrapper>
      <Container>
        <CarouselHolder>
          <Carousel>
            <CarouselItem
              Id={0}
              caller={caller}
              animate={animate}
              focused={focused}
              onClick={() => handleClick(0)}
            >
              1
            </CarouselItem>
            <CarouselItem
              Id={1}
              caller={caller}
              animate={animate}
              focused={focused}
              onClick={() => handleClick(1)}
            >
              2
            </CarouselItem>
            <CarouselItem
              Id={2}
              caller={caller}
              animate={animate}
              focused={focused}
              onClick={() => handleClick(2)}
            >
              3
            </CarouselItem>
            <CarouselItem
              Id={3}
              caller={caller}
              animate={animate}
              focused={focused}
              onClick={() => handleClick(3)}
            >
              4
            </CarouselItem>
          </Carousel>
        </CarouselHolder>
        <TextHolder>hehe</TextHolder>
      </Container>
    </Wrapper>
  );
};

export default ShowRoom;
