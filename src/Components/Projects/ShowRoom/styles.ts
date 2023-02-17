import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 16px 8px 0px 8px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: var(--lessdark);
`;

export const CarouselHolder = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TextHolder = styled.div`
  width: 100%;
  height: 20%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselItem = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 16px;
  background-color: white;
`;
