import styled from "styled-components";

export const MobileWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 0.25rem 0.5rem;
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  border-radius: 1rem;
  background-color: var(--lessdark);
`;

export const MobileImageContainer = styled.div`
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IntroContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const Img = styled.img`
  @media (min-width: 550px) {
    max-width: 100%;
    height: auto;
  }
  max-width: 50%;
  object-fit: cover;
`;

export const ContactWrapper = styled.div`
  height: 20%;
  width: 100%;
  padding: 0.25rem 0.5rem;
`;
export const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lessdark);
  padding: 1rem;
  overflow-x: hidden;
`;
export const CircleHolder = styled.div`
  width: 100%;

  display: flex;
  padding: 0 2rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;
export const Circle = styled.div`
  min-width: 4rem;
  cursor: pointer;
  height: 4rem;
  display: flex;
  margin-left: 2.5rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: var(--yellow);
  border-radius: 50%;
  z-index: 1;
`;
