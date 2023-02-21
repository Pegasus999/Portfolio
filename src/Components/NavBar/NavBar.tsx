import { useState } from "react";
import {
  Container,
  DropDown,
  Icon,
  IconContainer,
  Link,
  LinksContainer,
  Logo,
  MenuContainer,
  TitleContainer,
  Wrapper,
} from "./styles";
import { BsChevronDoubleUp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

interface props {
  scrolled: boolean;
  page?: number;
}
const NavBar: React.FC<props> = ({ scrolled, page }) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  function HandleScroll(id: string) {
    setDropdown(false);
    const Target = document.getElementById(id);
    if (Target) Target.scrollIntoView({ behavior: "smooth" });
  }
  function openDropDown() {
    setDropdown(!dropdown);
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
          {!window.matchMedia("(max-width: 768px").matches ? (
            <>
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
            </>
          ) : (
            <>
              <MenuContainer>
                <GiHamburgerMenu
                  onClick={() => openDropDown()}
                ></GiHamburgerMenu>
              </MenuContainer>
            </>
          )}
        </LinksContainer>
        {dropdown && (
          <DropDown>
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
          </DropDown>
        )}
      </Container>
    </Wrapper>
  );
};

export default NavBar;
