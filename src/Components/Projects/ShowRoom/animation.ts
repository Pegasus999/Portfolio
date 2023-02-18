import { keyframes } from "styled-components";

export const centerToRight = keyframes`
  from{
  }
  to{
    transform: translate(110%) Scale(70%)
  }
`;
export const centerToLeft = keyframes`
  from{
  }
  to{
    transform: translate(-110%) Scale(70%)
  }
`;
export const rightToCenter = keyframes`
  from{
  }
  to{
    transform: translate(-110%) Scale(100%);
    filter: unset;
  }
`;
export const leftToCenter = keyframes`
  from{
  }
  to{
    transform: translate(110%) Scale(100%);
    filter: unset
  }
`;
export const leftOut = keyframes`
  from{}
  to{
    transform: translate(-60%) Scale(70%)
  }
`;
export const rightOut = keyframes`
  from{}
  to{
    transform: translate(60%) Scale(70%)
  }
`;
export const leftIn = keyframes`
  from{}
  to{
    transform: translate(340%) Scale(70%)
  }
`;
export const rightIn = keyframes`
  from{}
  to{
    transform: translate(-340%) Scale(70%)
  }
`;
export const blurIn = keyframes`
  0% {
    -webkit-transform: translateZ(80px);
            transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  
}
`;
export const textIn = keyframes`
0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;
