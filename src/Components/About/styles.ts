import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  padding: 16px 8px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--lessdark);
  border-radius: 16px;
  display: flex;
`;

export const IntroContainer = styled.div`
  height: 100%;
  flex: 3;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;
export const ImageContainer = styled.div`
  height: 100%;
  flex: 2;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.div`
  font-size: 60px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: start;
  font-weight: 600;
  padding: 5px 40px;
  color: var(--yellow);
  font-family: "Poppins", sans-serif;
  flex: 1;
`;

export const Intro = styled.div`
  font-size: 20px;
  color: var(--white);
  width: 100%;
  flex: 1;
  /* background-color: blue; */
  padding: 15px 15px 15px 40px;
  display: flex;
  align-items: flex-start;
  text-align: start;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const Image = styled.img``;
