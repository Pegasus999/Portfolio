import React, { useState } from "react";
import {
  Carousel,
  CarouselHolder,
  CarouselItem,
  Text,
  TextHolder,
  Wrapper,
} from "./styles";
import { Container } from "./styles";

const ShowRoom: React.FC = () => {
  const [focused, setFocused] = useState<number>(0);
  const [caller, setCaller] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  const text = [
    "This is some random description used as a placeholder for the projects descriptions HEHE",
    "This is some random description used as a placeholder for the projects descriptions JIJI",
  ];
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
        <TextHolder>
          <Text>{text[focused]}</Text>
        </TextHolder>
      </Container>
    </Wrapper>
  );
};

export default ShowRoom;
