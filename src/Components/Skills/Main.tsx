import Scroll from "../Scroll/Scroll";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import Skill from "./Skill/Skill";
import {
  Header,
  ImageContainer,
  Img,
  MobileContainer,
  MobileWrapper,
  Paragraph,
  TextContainer,
  Wrapper,
} from "./styles";
import { Title, TitleContainer } from "./Skill/styles";

const Main: React.FC = () => {
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
  return (
    <Wrapper id="skills">
      <NavBar scrolled={true} page={1}></NavBar>
      {!window.matchMedia("(max-width: 768px").matches ? (
        <Skill />
      ) : (
        <MobileWrapper>
          <MobileContainer>
            <TitleContainer>
              <Title>Skills</Title>
            </TitleContainer>
            <TextContainer flip={flip}>
              {end === "front" ? (
                <>
                  <Header>Front-end :</Header>
                  <Paragraph>
                    Creating user-friendly and visually stunning Front-end
                    experiences is my passion. I specialize in using modern
                    technologies such as ReactJS, JavaScript/TypeScript, and
                    Flutter to build custom solutions that exceed your
                    expectations. With experience in frameworks like React
                    Native and Electron, as well as platforms like WordPress, I
                    have the versatility to deliver the best solution for your
                    business needs
                  </Paragraph>
                </>
              ) : (
                <>
                  <Header>Back-end :</Header>
                  <Paragraph>
                    As a Back-end developer, I take pride in building robust and
                    scalable systems that power your applications. I specialize
                    in using modern technologies like NodeJS, Postgresql/MySQL,
                    and PHP to create custom solutions that meet your specific
                    needs. With experience in ORM solutions like Prisma and
                    Sequelize, I ensure that your data is well-managed and
                    secure.
                  </Paragraph>
                </>
              )}
            </TextContainer>
            <ImageContainer flip={flip} onClick={() => handleFlip()}>
              {end === "front" ? (
                <Img src={require("../../Assests/front_end.png")} />
              ) : (
                <Img src={require("../../Assests/back_end.png")} />
              )}
            </ImageContainer>
          </MobileContainer>
        </MobileWrapper>
      )}
      <Scroll page={2} />
    </Wrapper>
  );
};

export default Main;
