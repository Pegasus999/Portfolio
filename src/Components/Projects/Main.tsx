import React from "react";
import NavBar from "../NavBar/NavBar";
import ShowRoom from "./ShowRoom/ShowRoom";
import { Footer, FooterWrapper, Link, Wrapper } from "./styles";

const Projects: React.FC = () => {
  function handleClick() {
    setTimeout(() => {
      let talk = document.getElementById("AboutMe");
      if (talk) talk.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }
  return (
    <Wrapper id="projects">
      <NavBar scrolled={true} page={2} />
      <ShowRoom />
      <FooterWrapper>
        <Footer>
          <Link
            onClick={() => {
              handleClick();
            }}
          >
            Let's Talk
          </Link>
        </Footer>
      </FooterWrapper>
    </Wrapper>
  );
};

export default Projects;
