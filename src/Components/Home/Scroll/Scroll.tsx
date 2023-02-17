import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Container, Wrapper, Icon } from "./styles";

interface Props {
  page: number;
}
const Scroll: React.FC<Props> = ({ page }) => {
  function HandleScroll() {
    const Target = document.getElementById(page === 1 ? "skills" : "Projects");
    if (Target) Target.scrollIntoView({ behavior: "smooth" });
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
