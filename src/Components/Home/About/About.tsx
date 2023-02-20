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
          <Welcome>Hi! i'm Adem</Welcome>
          <Intro>
            i'm a software engineer & full-stack developer, you request
            something and i build it
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
