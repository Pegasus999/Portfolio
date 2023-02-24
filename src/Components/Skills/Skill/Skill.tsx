import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Image,
  ImageContainer,
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

        div.style.transform = `perspective(400px) rotateX(${
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
                  Creating user-friendly and visually stunning Front-end
                  experiences is my passion. I specialize in using modern
                  technologies such as ReactJS, JavaScript/TypeScript, and
                  Flutter to build custom solutions that exceed your
                  expectations. With experience in frameworks like React Native
                  and Electron, as well as platforms like WordPress, I have the
                  versatility to deliver the best solution for your business
                  needs
                </Paragraph>
              </>
            ) : (
              <>
                <Header>Back-end :</Header>
                <Paragraph>
                  As a Back-end developer, I take pride in building robust and
                  scalable systems that power your applications. I specialize in
                  using modern technologies like NodeJS, Postgresql/MySQL, and
                  PHP to create custom solutions that meet your specific needs.
                  With experience in ORM solutions like Prisma and Sequelize, I
                  ensure that your data is well-managed and secure.
                </Paragraph>
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
