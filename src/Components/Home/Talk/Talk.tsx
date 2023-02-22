import React, { useState } from "react";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import {
  BigCircle,
  CircleHolder,
  Container,
  SmallCircle,
  TextHolder,
  Wrapper,
} from "./styles";
// make variables where it stores LEFT(bottom : -15% , left:29%) TOP(top : 3% , left:50%) RIGHT(bottom : -15% , right:29%)
export interface position {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

export interface Icon {
  current_position: position;
  current: string;
  prev: position;
  next: position;
}

interface Props {
  popUp: Function;
  email: Function;
}
const Talk: React.FC<Props> = ({ popUp, email }) => {
  const top: position = { top: "-12.5%" };
  const right: position = { right: "-12.5%" };
  const left: position = { left: "-12.5%" };
  const bottom: position = { bottom: "-12.5%" };

  const layoutRight: Icon = {
    current: "right",
    current_position: right,
    prev: top,
    next: bottom,
  };
  const layoutLeft: Icon = {
    current: "left",
    current_position: left,
    prev: bottom,
    next: top,
  };
  const layoutBottom: Icon = {
    current: "bottom",
    current_position: bottom,
    prev: right,
    next: left,
  };
  const layoutTop: Icon = {
    current: "top",
    current_position: top,
    prev: left,
    next: right,
  };
  const [gmail, setGmail] = useState<Icon>(layoutTop);
  const [twitter, setTwitter] = useState<Icon>(layoutBottom);
  const [linkin, setLinkin] = useState<Icon>(layoutRight);
  const [whatsapp, setWhatsapp] = useState<Icon>(layoutLeft);
  const [caller, setCaller] = useState<string>(layoutLeft.current);
  const [animate, setAnimate] = useState<boolean>(false);

  function rotate(circle: Icon) {
    setCaller(circle.current);
    if (circle.current === "top") {
      if (whatsapp.current === circle.current) {
        popUp();
      } else if (twitter.current === circle.current) {
        window.open("https://twitter.com/Pegas_Dev", "_blank");
      } else if (linkin.current === circle.current) {
        window.open(
          "https://www.linkedin.com/in/adem-zoghmar-831064267/",
          "_blank"
        );
      } else if (gmail.current === circle.current) {
        email();
      }
    } else if (circle.current === "left") {
      moveRight();
    } else if (circle.current === "right") {
      moveLeft();
    }
  }
  function findPosition(icon: Icon, target: string): Icon {
    if (icon.current === "top" && target === "next") {
      return layoutRight;
    } else if (icon.current === "top" && target === "prev") {
      return layoutLeft;
    } else if (icon.current === "left" && target === "next") {
      return layoutTop;
    } else if (icon.current === "left" && target === "prev") {
      return layoutBottom;
    } else if (icon.current === "right" && target === "next") {
      return layoutBottom;
    } else if (icon.current === "right" && target === "prev") {
      return layoutTop;
    } else if (icon.current === "bottom" && target === "next") {
      return layoutLeft;
    } else if (icon.current === "bottom" && target === "prev") {
      return layoutRight;
    }
    return layoutTop;
  }
  function moveRight() {
    setAnimate(true);
    setTimeout(() => {
      setTwitter(findPosition(twitter, "next"));
      setGmail(findPosition(gmail, "next"));
      setLinkin(findPosition(linkin, "next"));
      setWhatsapp(findPosition(whatsapp, "next"));
      setAnimate(false);
    }, 950);
  }
  function moveLeft() {
    setAnimate(true);
    setTimeout(() => {
      setTwitter(findPosition(twitter, "prev"));
      setGmail(findPosition(gmail, "prev"));
      setLinkin(findPosition(linkin, "prev"));
      setWhatsapp(findPosition(whatsapp, "prev"));
      setAnimate(false);
    }, 950);
  }
  return (
    <Wrapper>
      <Container>
        <TextHolder align="end">Let's</TextHolder>
        <CircleHolder>
          <BigCircle>
            <SmallCircle
              current={twitter.current_position}
              caller={caller}
              animate={animate}
              onClick={() => rotate(twitter)}
            >
              <BsTwitter />
            </SmallCircle>
            <SmallCircle
              current={gmail.current_position}
              caller={caller}
              animate={animate}
              onClick={() => rotate(gmail)}
            >
              <SiGmail />
            </SmallCircle>
            <SmallCircle
              current={linkin.current_position}
              caller={caller}
              onClick={() => rotate(linkin)}
              animate={animate}
            >
              <AiFillLinkedin />
            </SmallCircle>
            <SmallCircle
              current={whatsapp.current_position}
              caller={caller}
              animate={animate}
              onClick={() => rotate(whatsapp)}
            >
              <AiOutlineWhatsApp />
            </SmallCircle>
          </BigCircle>
        </CircleHolder>
        <TextHolder align="start">Talk</TextHolder>
      </Container>
    </Wrapper>
  );
};

export default Talk;
