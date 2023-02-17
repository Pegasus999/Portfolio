import React from "react";
import { Wrapper } from "./styles";
import NavBar from "../NavBar/NavBar";
import About from "./About/About";
import Talk from "./Talk/Talk";
import Scroll from "./Scroll/Scroll";

const Home: React.FC = () => {
  return (
    <Wrapper id="AboutMe">
      <NavBar scrolled={false} />
      <About />
      <Talk />
      <Scroll page={1} />
    </Wrapper>
  );
};

export default Home;
