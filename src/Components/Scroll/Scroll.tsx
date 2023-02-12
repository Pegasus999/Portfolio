import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Container, Wrapper, Icon } from "./styles";

// ADD a little bounce animation for the scroll arrow
const Scroll: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Icon>
          <BsChevronDoubleDown
            style={{ width: "100%", fontSize: "40px", cursor: "pointer" }}
          />
        </Icon>
      </Container>
    </Wrapper>
  );
};

export default Scroll;
