import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 50%;
  padding: 4px 8px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: var(--lessdark);
  border-radius: 16px;
  display: flex;
`;

export const IntroContainer = styled.div`
  height: 100%;
  flex: 3;
  padding: 25px;
  display: flex;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  align-items: center;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;
export const ImageContainer = styled.div`
  height: 100%;
  user-select: none;
  flex: 2;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.div`
  @media (min-width: 768px) {
    font-size: 3rem;
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
    user-select: none;
  }
  font-size: 2rem;
  font-weight: 600;
  color: var(--yellow);
  font-family: "Poppins", sans-serif;
`;

export const Intro = styled.div`
  @media (min-width: 768px) {
    font-size: 1rem;
    color: var(--white);
    width: 100%;
    flex: 1;
    /* background-color: blue; */
    padding: 15px 15px 15px 40px;
    display: flex;
    align-items: flex-start;
    text-align: start;
    font-weight: 400;
    user-select: none;
    font-family: "Poppins", sans-serif;
  }
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 400;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: var(--white);
`;

export const Image = styled.img`
  user-select: none;
  width: 15rem;
  min-width: 15rem;
`;
