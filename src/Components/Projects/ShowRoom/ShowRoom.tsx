import React, { useState } from "react";
import {
  Carousel,
  CarouselHolder,
  CarouselItem,
  PlaceHolder,
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
              {focused === 0 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DuxmhoWIMOA"
                  title="Project : PegaTv ShowCase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <PlaceHolder>Project 1</PlaceHolder>
              )}
            </CarouselItem>
            <CarouselItem
              Id={1}
              caller={caller}
              animate={animate}
              focused={focused}
              onClick={() => handleClick(1)}
            >
              {focused === 1 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VqXoUcxPv6A"
                  title="Project : PegaTv App ShowCase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <PlaceHolder>Project 2</PlaceHolder>
              )}
            </CarouselItem>
            <CarouselItem
              Id={2}
              caller={caller}
              animate={animate}
              focused={focused}
              onClick={() => handleClick(2)}
            >
              {focused === 2 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZOFIxfhR2tc"
                  title="Project : SellPoint inventory management"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <PlaceHolder>Project 3</PlaceHolder>
              )}
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
