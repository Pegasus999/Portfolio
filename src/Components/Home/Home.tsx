import React, { useState } from "react";
import {
  Body,
  BodyHolder,
  Button,
  ButtonHolder,
  Email,
  EmailFormContainer,
  EmailHolder,
  Icon,
  IconHolder,
  Image,
  Label,
  NumberHolder,
  PopUpContainer,
  PopUpWrapper,
  QrHolder,
  Subject,
  SubjectHolder,
  Title,
  Wrapper,
} from "./styles";
import NavBar from "../NavBar/NavBar";
import About from "./About/About";
import Talk from "./Talk/Talk";
import Scroll from "../Scroll/Scroll";
import { AiOutlineClose } from "react-icons/ai";

const Home: React.FC = () => {
  const [popUp, setPopUp] = useState(false);
  const [email, setEmail] = useState(false);
  const [animate, setAnimate] = useState<boolean>(false);
  function popUpHandler() {
    setPopUp(true);
  }

  function emailing() {
    setEmail(true);
  }
  function handleClick() {
    setAnimate(true);
    setTimeout(() => {
      setPopUp(false);
      setAnimate(false);
    }, 500);
  }
  function emailHandler() {
    setAnimate(true);
    setTimeout(() => {
      setEmail(false);
      setAnimate(false);
    }, 500);
  }

  return (
    <>
      <Wrapper id="AboutMe">
        <NavBar scrolled={false} />
        <About />
        <Talk popUp={popUpHandler} email={emailing} />
        <Scroll page={1} />
      </Wrapper>
      {popUp && (
        <PopUpWrapper>
          <PopUpContainer animate={animate}>
            <IconHolder>
              <Title>WhatsApp</Title>
              <Icon>
                <AiOutlineClose onClick={() => handleClick()} />
              </Icon>
            </IconHolder>
            <NumberHolder>(+213) 556 99 67 58</NumberHolder>
            <QrHolder>
              <Image src={require("../../Assests/whatsapp.png")} />
            </QrHolder>
          </PopUpContainer>
        </PopUpWrapper>
      )}
      {email && (
        <PopUpWrapper>
          <EmailFormContainer animate={animate}>
            <IconHolder>
              <Title>Email</Title>
              <Icon>
                <AiOutlineClose onClick={() => emailHandler()} />
              </Icon>
            </IconHolder>
            <EmailHolder>
              <Label>To:</Label>
              <Email>pegadev420@gmail.com</Email>
            </EmailHolder>
            <SubjectHolder>
              <Label>Subject :</Label>
              <Subject />
            </SubjectHolder>
            <BodyHolder>
              <Label>Message :</Label>
              <Body />
            </BodyHolder>
            <ButtonHolder>
              <Button>Send</Button>
            </ButtonHolder>
          </EmailFormContainer>
        </PopUpWrapper>
      )}
    </>
  );
};

export default Home;

// Add animation on the into text , from the website of animations
