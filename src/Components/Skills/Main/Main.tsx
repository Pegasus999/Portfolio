import NavBar from "../../NavBar/NavBar";
import { Wrapper } from "./styles";

const Main: React.FC = () => {
  return (
    <Wrapper id="skills">
      <NavBar scrolled={true} page={1}></NavBar>
    </Wrapper>
  );
};

export default Main;
