import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import {
  Circle,
  CircleHolder,
  Container,
  HalfCircle,
  TextHolder,
  Wrapper,
} from "./styles";
// make variables where it stores LEFT(bottom : -15% , left:29%) TOP(top : 3% , left:50%) RIGHT(bottom : -15% , right:29%)
interface position {
  right: string;
  left: string;
  top: string;
  bottom?: string;
}

const Talk: React.FC = () => {
  const right: position = { right: "29%", bottom: "-20%", top: "", left: "" };
  const left: position = { left: "29%", bottom: "-20%", top: "", right: "" };
  const top: position = { top: "3%", left: "50%", bottom: "", right: "" };
  const bottom: position = { bottom: "-45%", left: "50%", right: "", top: "" };

  const [gmail, setGmail] = useState<position>(top);
  const [github, setGithub] = useState<position>(left);
  const [linkin, setLinkin] = useState<position>(right);
  const [whatsapp, setWhatsapp] = useState<position>(bottom);

  function rotating(circle: position) {
    if (circle.top === top.top) {
      console.log("Called");
    } else {
      setGithub(nextPosition(github, circle));
      setGmail(nextPosition(gmail, circle));
      setLinkin(nextPosition(linkin, circle));
      setWhatsapp(nextPosition(whatsapp, circle));
    }
  }

  function nextPosition(current: position, caller: position): position {
    if (current.right === right.right && caller.left === left.left)
      return bottom;
    else if (current.top === top.top && caller.left === left.left) return right;
    else if (current.top === top.top && caller.right === right.right)
      return left;
    else if (current.left === left.left && caller.right === right.right)
      return bottom;
    else if (current.bottom === bottom.bottom && caller.left === left.left)
      return left;
    else if (current.bottom === bottom.bottom && caller.right === right.right)
      return right;
    else if (current.left === left.left && caller.left === left.left)
      return top;
    else if (current.right === right.right && caller.right === right.right)
      return top;
    return current;
  }

  return (
    <Wrapper>
      <Container>
        <TextHolder align="end">Let's</TextHolder>
        <CircleHolder>
          <HalfCircle></HalfCircle>
          <Circle
            bottom={github.bottom}
            left={github.left}
            right={github.right}
            top={github.top}
            onClick={() => rotating(github)}
          >
            <AiFillGithub style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
          <Circle
            bottom={gmail.bottom}
            left={gmail.left}
            right={gmail.right}
            top={gmail.top}
            onClick={() => rotating(gmail)}
          >
            <SiGmail style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
          <Circle
            bottom={linkin.bottom}
            left={linkin.left}
            right={linkin.right}
            top={linkin.top}
            onClick={() => rotating(linkin)}
          >
            <AiFillLinkedin style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
          <Circle
            bottom={whatsapp.bottom}
            left={whatsapp.left}
            right={whatsapp.right}
            top={whatsapp.top}
            onClick={() => rotating(whatsapp)}
          >
            <AiOutlineWhatsApp style={{ width: "100%", fontSize: "40px" }} />
          </Circle>
        </CircleHolder>
        <TextHolder align="start">Talk</TextHolder>
      </Container>
    </Wrapper>
  );
};

export default Talk;
