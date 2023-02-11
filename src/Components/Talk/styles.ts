import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 8px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: var(--lessdark);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
interface text {
  align: string;
}
export const TextHolder = styled.div<text>`
  flex: 1;
  text-align: ${(props) => props.align};
  font-size: 100px;
  font-weight: bold;
  font-family: "Poppins", "sans serif";
  color: rgba(243, 243, 243, 0.2);
  user-select: none;
`;

export const CircleHolder = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const HalfCircle = styled.div`
  width: 275px;
  height: 150px;
  border-radius: 150px 150px 0 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid var(--night);
  border-bottom: 0;
`;
interface Position {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}
const negative = "translateX(-50%)";
const positive = "translateX(50%)";
export const Circle = styled.div<Position>`
  width: 80px;
  cursor: pointer;
  height: 80px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1c1f29;
  position: absolute;
  background-color: var(--yellow);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: 0;
  transform: ${(props) => (props.right ? positive : negative)};
  &:hover {
    background-color: #f8bb18;
  }
`;
