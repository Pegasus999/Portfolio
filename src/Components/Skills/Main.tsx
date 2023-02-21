import Scroll from "../Scroll/Scroll";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import Skill from "./Skill/Skill";
import {
  Header,
  ImageContainer,
  Img,
  List,
  ListItem,
  MobileContainer,
  MobileWrapper,
  Paragraph,
  TextContainer,
  Wrapper,
} from "./styles";
import { ListContainer, Title, TitleContainer } from "./Skill/styles";

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
                    when it comes to Front-end, apart from the will and ability
                    to learn anything here are some of the technologies i work
                    with:
                  </Paragraph>
                  <ListContainer>
                    <List>
                      <ListItem>ReactJS / native</ListItem>
                      <ListItem>Javascript/TypeScript</ListItem>
                      <ListItem>Electron</ListItem>
                      <ListItem>Flutter</ListItem>
                    </List>
                  </ListContainer>
                </>
              ) : (
                <>
                  <Header>Back-end :</Header>
                  <Paragraph>
                    when it comes to Back-end, apart from the will and ability
                    to learn anything here are some of the technologies i work
                    with:
                  </Paragraph>
                  <ListContainer>
                    <List>
                      <ListItem>NodeJs</ListItem>
                      <ListItem>Postgresql/MySQL</ListItem>
                      <ListItem>php</ListItem>
                      <ListItem>Prisma/Sequelize</ListItem>
                    </List>
                  </ListContainer>
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
