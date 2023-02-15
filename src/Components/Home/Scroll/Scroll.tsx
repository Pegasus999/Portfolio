import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Container, Wrapper, Icon } from "./styles";
const Scroll: React.FC = () => {
  function HandleScroll() {
    const skills = document.getElementById("skills");
    if (skills) skills.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Wrapper>
      <Container>
        <Icon onClick={() => HandleScroll()}>
          <BsChevronDoubleDown
            style={{ width: "100%", fontSize: "40px", cursor: "pointer" }}
          />
        </Icon>
      </Container>
    </Wrapper>
  );
};

export default Scroll;
