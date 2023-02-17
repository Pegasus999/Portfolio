import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 12%;
  padding: 16px 8px 0px 8px;
  /* background-color: red; */
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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--lessdark);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--yellow);
`;

export const Icon = styled.div`
  &:hover {
    height: fit-content;
    width: fit-content;
    animation-name: ${Bounce};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
