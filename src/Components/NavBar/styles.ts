import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  background-color: var(--lessdark);
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 10px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const TitleContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 15px;
  margin-left: 45px;
`;

export const LinksContainer = styled.div`
  flex: 0.6;
  padding: 5px;
  height: 100%;
  display: flex;
  gap: 23px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img``;

export const Link = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: var(--yellow);
  &:hover {
    color: var(--white);
  }
`;
