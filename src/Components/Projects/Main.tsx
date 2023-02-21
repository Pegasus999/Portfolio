import React, { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ShowRoom from "./ShowRoom/ShowRoom";
import { Text, TextHolder } from "./ShowRoom/styles";
import {
  Footer,
  FooterWrapper,
  Link,
  ShowCase,
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
    if (!window.matchMedia("(max-width: 768px").matches) {
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
    } else {
      setFixed(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, []);

  function handleClick() {
    let talk = document.getElementById("AboutMe");
    if (talk) talk.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Wrapper id="projects">
      <NavBar scrolled={true} page={2} />
      {!window.matchMedia("(max-width: 768px").matches ? (
        <>
          {" "}
          {animate && (
            <TitleWrapper>
              <TitleContainer>
                <Title fixed={fixed}>Projects</Title>
              </TitleContainer>
            </TitleWrapper>
          )}
          {!animate && <ShowRoom />}
        </>
      ) : (
        <TitleWrapper>
          <TitleContainer>
            <ShowCase>
              <iframe
                width="70%"
                height="100%"
                src="https://www.youtube.com/embed/DuxmhoWIMOA"
                title="Project : PegaTv ShowCase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <TextHolder>
                <Text>A website to watch Movies/Tv Shows online</Text>
              </TextHolder>
            </ShowCase>
            <ShowCase>
              <iframe
                width="70%"
                height="100%"
                src="https://www.youtube.com/embed/VqXoUcxPv6A"
                title="Project : PegaTv App ShowCase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <TextHolder>
                <Text>An flutter app to watch Movies/Tv Shows online</Text>
              </TextHolder>
            </ShowCase>
            <ShowCase>
              <iframe
                width="70%"
                height="100%"
                src="https://www.youtube.com/embed/ZOFIxfhR2tc"
                title="Project : SellPoint inventory management"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <TextHolder>
                <Text>
                  A desktop app used in supermarkets and sell points in
                  checkouts
                </Text>
              </TextHolder>
            </ShowCase>
          </TitleContainer>
        </TitleWrapper>
      )}
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
