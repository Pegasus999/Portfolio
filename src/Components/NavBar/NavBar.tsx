import {
  Container,
  Icon,
  IconContainer,
  Link,
  LinksContainer,
  Logo,
  TitleContainer,
  Wrapper,
} from "./styles";
import { BsChevronDoubleUp } from "react-icons/bs";
interface props {
  scrolled: boolean;
  page?: number;
}
const NavBar: React.FC<props> = ({ scrolled, page }) => {
  function HandleScroll(id: string) {
    const Target = document.getElementById(id);
    if (Target) Target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Wrapper>
      <Container>
        <TitleContainer stretch={scrolled}>
          <Logo src={require("../../Assests/logo.png")} alt="logo" />
        </TitleContainer>
        {scrolled && (
          <IconContainer
            onClick={() => {
              page === 1 ? HandleScroll("AboutMe") : HandleScroll("skills");
            }}
          >
            <Icon>
              <BsChevronDoubleUp
                style={{ width: "100%", fontSize: "40px", cursor: "pointer" }}
              />
            </Icon>
          </IconContainer>
        )}
        <LinksContainer>
          <Link
            onClick={() => {
              HandleScroll("projects");
            }}
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              HandleScroll("skills");
            }}
          >
            Skills
          </Link>
          <Link
            onClick={() => {
              HandleScroll("AboutMe");
            }}
          >
            About me
          </Link>
        </LinksContainer>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
