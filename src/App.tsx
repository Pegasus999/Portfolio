import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Main";
import Main from "./Components/Skills/Main";
import { Wrapper } from "./globalStyles";

const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Home />
      </Wrapper>
      <Wrapper>
        <Main />
      </Wrapper>
      <Wrapper>
        <Projects />
      </Wrapper>
    </>
  );
};

export default App;
