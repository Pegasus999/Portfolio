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
            I build custom websites and applications that deliver seamless user
            experiences and help businesses achieve their goals.
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
