import {
  Container,
  Image,
  ImageContainer,
  Intro,
  IntroContainer,
  Welcome,
  Wrapper,
} from "./styles";

const About: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <IntroContainer>
          <Welcome>Hi! I'm Adem</Welcome>
          <Intro>
            Hello there motherfuckers i'm just trying to make place holder text
            here over here so i can style the page properly
          </Intro>
        </IntroContainer>
        <ImageContainer>
          <Image src={require("../../../Assests/death.png")} />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};
export default About;
