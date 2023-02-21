import styled from "styled-components";

export const MobileWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 0.25rem 0.5rem;
`;
export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  align-items: center;
  background-color: var(--lessdark);
`;

export const MobileImageContainer = styled.div`
  @media (min-width: 550) {
    width: 50%;
  }
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Img = styled.img`
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
