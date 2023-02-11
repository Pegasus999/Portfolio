import { Link, LinksContainer, Logo, TitleContainer, Wrapper } from "./styles";

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Logo src={require("../../Assests/logo.png")} alt="logo" />
      </TitleContainer>
      <LinksContainer>
        <Link>Skills</Link>
        <Link>Projects</Link>
        <Link>About me</Link>
      </LinksContainer>
    </Wrapper>
  );
};

export default NavBar;
