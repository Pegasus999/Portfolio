import styled from "styled-components";
import {
  blurIn,
  centerToLeft,
  centerToRight,
  leftIn,
  leftOut,
  leftToCenter,
  rightIn,
  rightOut,
  rightToCenter,
  textIn,
} from "./animation";
interface Props {
  focused: number;
  Id: number;
  animate: boolean;
  caller: number;
}

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
  overflow: hidden;
  animation: ${blurIn} 1s ease-in-out;
`;

export const TextHolder = styled.div`
  width: 100%;
  height: 20%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: ${blurIn} 1s ease-in-out;
`;

export const Text = styled.p`
  font-family: "Poppins", "sans serif";
  font-weight: 400;
  color: var(--white);
  font-size: 20px;
  animation: ${textIn} 1s ease-in-out;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function Scale(props: Props) {
  if (props.Id !== props.focused) return "Scale(70%)";
  return "none";
}
function rightPositioning(props: Props) {
  if (props.focused === props.Id) return "unset";
  else if (props.focused === props.Id - 1) return "-30%";
  else if (props.focused < props.Id) return "-200%";
}

function leftPositioning(props: Props) {
  if (props.focused === props.Id) return "unset";
  else if (props.focused === props.Id + 1) return "-30%";
  else if (props.focused > props.Id) return "-200%";
}

let way = "ease-in-out";
export const CarouselItem = styled.div<Props>`
  width: 50%;
  height: 70%;
  cursor: pointer;
  border-radius: 16px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${(props) => rightPositioning(props)};
  left: ${(props) => leftPositioning(props)};
  background-color: white;
  filter: ${(props) => (props.focused === props.Id ? "unset" : "blur(5px)")};
  transform: ${(props) => Scale(props)};
  animation: ${(props) => (props.animate ? handleAnimation(props) : "none")} 1s
    ${way};
`;

function handleAnimation(props: Props) {
  const position: string =
    props.focused === props.Id
      ? "center"
      : props.focused === props.Id + 1
      ? "left"
      : props.focused === props.Id - 1
      ? "right"
      : props.focused - props.Id > 0
      ? "OutLeft"
      : "OutRight";
  const caller: string =
    props.focused === props.caller + 1
      ? "left"
      : props.focused === props.caller - 1
      ? "right"
      : "center";

  console.log(props.Id, caller, position);

  if (position === "left" && caller === "left") {
    return leftToCenter;
  } else if (position === "right" && caller === "right") {
    way = "ease-in-out";
    return rightToCenter;
  } else if (position === "center" && caller === "right") {
    way = "ease-in-out";
    return centerToLeft;
  } else if (position === "right" && caller === "left") {
    way = "ease-in-out";
    return rightOut;
  } else if (position === "left" && caller === "right") {
    way = "ease-in-out";
    return leftOut;
  } else if (position === "OutLeft" && caller === "left") {
    way = "ease";
    return leftIn;
  } else if (position === "OutRight" && caller === "right") {
    way = "ease";
    return rightIn;
  } else if (position === "center" && caller === "left") {
    way = "ease-in-out";
    return centerToRight;
  }
  return "none";
}
