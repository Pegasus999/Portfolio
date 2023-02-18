import React, { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ShowRoom from "./ShowRoom/ShowRoom";
import {
  Footer,
  FooterWrapper,
  Link,
  Title,
  TitleContainer,
  TitleWrapper,
  Wrapper,
} from "./styles";

const Projects: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(true);
  const [fixed, setFixed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFixed(true);
          setTimeout(() => {
            setAnimate(false);
          }, 1000);

          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  function handleClick() {
    let talk = document.getElementById("AboutMe");
    if (talk) talk.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Wrapper id="projects">
      <NavBar scrolled={true} page={2} />
      {animate && (
        <TitleWrapper>
          <TitleContainer>
            <Title fixed={fixed}>Projects</Title>
          </TitleContainer>
        </TitleWrapper>
      )}
      {!animate && <ShowRoom />}
      <FooterWrapper ref={ref}>
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
