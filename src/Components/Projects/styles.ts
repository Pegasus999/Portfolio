import styled from "styled-components";

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
