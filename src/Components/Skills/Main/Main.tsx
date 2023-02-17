import Scroll from "../../Home/Scroll/Scroll";
import NavBar from "../../NavBar/NavBar";
import Skill from "../Skill/Skill";
import { Wrapper } from "./styles";

const Main: React.FC = () => {
  return (
    <Wrapper id="skills">
      <NavBar scrolled={true} page={1}></NavBar>
      <Skill></Skill>
      <Scroll page={2} />
    </Wrapper>
  );
};

export default Main;
