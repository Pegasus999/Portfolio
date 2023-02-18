import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const FooterWrapper = styled.div`
  width: 100%;
  height: 12%;
  padding: 16px 8px 0px 8px;
`;
export const Footer = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--lessdark);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;

  color: var(--yellow);
  &:hover {
    color: var(--white);
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 16px 8px 0px 8px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: var(--lessdark);
`;

const blurOut = keyframes`
  0% {

    opacity: 1;
    -webkit-filter: blur(0.01);
            filter: blur(0.01);
  }
  100% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px) opacity(0%);
            filter: blur(12px) opacity(0%);
  }
`;
interface Ani {
  fixed: boolean;
}
export const Title = styled.h1<Ani>`
  font-family: "Poppins", "sans serif";
  font-weight: bold;
  font-size: 100px;
  opacity: ${(props) => (props.fixed ? "0" : "1")};
  color: var(--yellow);
  animation: ${(props) => (props.fixed ? blurOut : "none")} 1s ease-in-out;
`;
