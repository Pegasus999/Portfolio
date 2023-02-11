import Reactc from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Container, Wrapper } from "./styles";

const Scroll: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <BsChevronDoubleDown
          style={{ width: "100%", fontSize: "40px", cursor: "pointer" }}
        />
      </Container>
    </Wrapper>
  );
};

export default Scroll;
