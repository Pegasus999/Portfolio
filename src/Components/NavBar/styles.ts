import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 15%;
  padding: 0px 0.5rem 0.25rem 0.5rem;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: var(--lessdark);
  display: flex;
  justify-content: center;
  align-content: center;
`;
interface Props {
  stretch: boolean;
}
export const TitleContainer = styled.div<Props>`
  flex: ${(props) => (props.stretch ? "1" : "1.7")};
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 0.313rem;
  user-select: none;
`;

export const LinksContainer = styled.div`
  flex: 1;
  padding: 1.1rem;
  height: 100%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  user-select: none;
  margin-left: 3.438rem;
  padding: 0.625rem;
  scale: 0.7;
`;

export const Link = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: var(--yellow);
  &:hover {
    color: var(--white);
  }
`;
export const Bounce = keyframes`
from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -10px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -3px, 0) scaleY(1.02);
  }`;

export const Icon = styled.div`
  color: var(--yellow);
  &:hover {
    height: fit-content;
    width: fit-content;
    animation-name: ${Bounce};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;

export const IconContainer = styled.div`
  flex: 1;
  padding: 0.313rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
