import styled from "styled-components";
import { position } from "./Talk";
import {
  bottomToLeft,
  bottomToRight,
  leftToBottom,
  leftToTop,
  rightToBottom,
  rightTotop,
  topToLeft,
  topToRight,
} from "./animation";
export const Wrapper = styled.div`
  width: 100%;
  height: 23%;
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
  display: flex;
  justify-content: center;
  position: relative;
  padding: 5px;
  overflow: hidden;
`;

export const BigCircle = styled.div`
  width: 300px;
  position: absolute;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -150px;
  border: 5px solid;
  border-radius: 50%;
`;
interface Props {
  current: position;
  caller: string;
  animate: boolean;
}
export const SmallCircle = styled.div<Props>`
  width: 80px;
  cursor: pointer;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: var(--yellow);
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  left: ${(props) => (props.current.left ? props.current.left : "unset")};
  top: ${(props) => (props.current.top ? props.current.top : "unset")};
  bottom: ${(props) => (props.current.bottom ? props.current.bottom : "unset")};
  right: ${(props) => (props.current.right ? props.current.right : "unset")};
  animation: ${(props) =>
      props.animate ? animation(props.current, props.caller) : "none"}
    1s ease-in-out;
`;

function animation(current: position, caller: string) {
  if (current.left && caller === "left") {
    return leftToTop;
  } else if (current.left && caller === "right") {
    return leftToBottom;
  } else if (current.right && caller === "right") {
    return rightTotop;
  } else if (current.right && caller === "left") {
    return rightToBottom;
  } else if (current.top && caller === "right") {
    return topToLeft;
  } else if (current.top && caller === "left") {
    return topToRight;
  } else if (current.bottom && caller === "right") {
    return bottomToRight;
  } else if (current.bottom && caller === "left") {
    return bottomToLeft;
  }
  return "none";
}
