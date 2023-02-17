import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Image,
  ImageContainer,
  List,
  ListContainer,
  ListItem,
  Paragraph,
  SkillsContainer,
  TextContainer,
  Title,
  TitleContainer,
  Wrapper,
} from "./styles";

const Skill: React.FC = () => {
  const [end, setEnd] = useState<string>("front");
  const [flip, setFlip] = useState<boolean>(false);

  function handleFlip() {
    if (end === "front") {
      setFlip(true);

      setTimeout(() => {
        setEnd("end");
      }, 500);
      setTimeout(() => {
        setFlip(false);
      }, 1000);
    } else {
      setFlip(true);
      setTimeout(() => {
        setEnd("front");
      }, 500);
      setTimeout(() => {
        setFlip(false);
      }, 1000);
    }
  }
  useEffect(() => {
    function HandleMouseMovement(event: MouseEvent) {
      const div = document.getElementById("image");
      if (div) {
        const rect = div.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const percentX = deltaX / (rect.width / 2);
        const percentY = deltaY / (rect.height / 2);

        div.style.transform = `perspective(500px) rotateX(${
          -percentY * 20
        }deg) rotateY(${percentX * 20}deg)`;
      }
    }
    document.addEventListener("mousemove", HandleMouseMovement);
    return () => {
      document.removeEventListener("mousemove", HandleMouseMovement);
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>Skills</Title>
        </TitleContainer>
        <SkillsContainer>
          <TextContainer flip={flip}>
            {end === "front" ? (
              <>
                <Header>Front-end :</Header>
                <Paragraph>
                  so when it comes to front end apart from the obvious ability
                  that i'm willing to learn any language or framework, but i'm
                  most comfortable and knowledgable in javascript / Typescript,
                  so here are some of the technologies i worked with :
                </Paragraph>{" "}
                <ListContainer>
                  <List>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                  </List>
                </ListContainer>
              </>
            ) : (
              <>
                <Header>Back-end :</Header>
                <Paragraph>
                  so when it comes to front end apart from the obvious ability
                  that i'm willing to learn any language or framework, but i'm
                  most comfortable and knowledgable in javascript / Typescript,
                  so here are some of the technologies i worked with :
                </Paragraph>
                <ListContainer>
                  <List>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                    <ListItem>
                      Framework : some discreption for each thing
                    </ListItem>
                  </List>
                </ListContainer>
              </>
            )}
          </TextContainer>
          <ImageContainer flip={flip} id="image" onClick={() => handleFlip()}>
            {end === "front" ? (
              <Image src={require("../../../Assests/front_end.png")} />
            ) : (
              <Image src={require("../../../Assests/back_end.png")} />
            )}
          </ImageContainer>
        </SkillsContainer>
      </Container>
    </Wrapper>
  );
};

export default Skill;
