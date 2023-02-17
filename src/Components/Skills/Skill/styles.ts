import styled, { keyframes } from "styled-components";
interface Props {
  flip: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  max-height: 90%;
  padding: 16px 8px 0px 8px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: var(--lessdark);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  user-select: none;
  font-family: "Poppins", "sans-serif";
  color: rgba(243, 243, 243, 0.2);
`;

export const SkillsContainer = styled.div`
  height: 90%;

  width: 100%;
  display: flex;
`;
const fade = keyframes`
  0%{
    opacity:0;
    transform: translateX(-150px);
  }
  50%{
    opacity: 0;
    
  }
  100%{
    opacity:1;
    transform: translate(0px)
  }
`;
export const TextContainer = styled.div<Props>`
  width: 50%;
  height: 100%;
  padding: 16px 75px 16px 75px;
  animation: ${(props) => (props.flip ? fade : "none")} 1s ease-in;
  max-height: 100%;
`;

export const Header = styled.h1`
  color: var(--yellow);
  font-family: "Poppins", "sans-serif";
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  font-size: 20px;
  overflow: auto;
  color: var(--white);
`;

export const List = styled.ul`
  list-style-position: inside;

  max-height: 700px;
`;
export const ListItem = styled.li`
  font-size: 20px;
  padding: 10px 0;
  font-weight: 500;
  color: var(--white);
`;

export const ListContainer = styled.div`
  max-height: 60%;
  width: 100%;
  margin-top: 20px;
`;

const flip = keyframes`
  from{
   
  }
  
  to{
    transform: rotateY(180deg) scaleX(-1)
  }

`;

export const ImageContainer = styled.div<Props>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  animation: ${(props) => (props.flip ? flip : "none")} 1s ease-in-out;
`;

export const Image = styled.img`
  border-radius: 16px;
  user-select: none;
`;