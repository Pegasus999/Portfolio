import styled from "styled-components";
import { fade, flip, Props } from "./Skill/styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MobileWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 0.25rem 0.5rem;
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--lessdark);
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const TextContainer = styled.div<Props>`
  width: 100%;
  min-height: 50%;
  padding: 1rem;
  color: var(--white);
  animation: ${(props) => (props.flip ? fade : "none")} 1s ease-in;
`;
export const Header = styled.h1`
  font-family: "Poppins", sans-serif;
  color: var(--yellow);
`;
export const Paragraph = styled.p`
  font-size: 1rem;
`;
export const List = styled.ul`
  list-style-position: inside;
`;
export const ListItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
`;

export const ImageContainer = styled.div<Props>`
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => (props.flip ? flip : "none")} 1s ease-in-out;
`;
export const Img = styled.img`
  width: 50%;
`;
