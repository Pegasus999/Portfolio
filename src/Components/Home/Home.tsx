import React, { useState, useEffect } from "react";
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
  Toast,
  Wrapper,
} from "./styles";
import NavBar from "../NavBar/NavBar";
import About from "./About/About";
import Talk from "./Talk/Talk";
import Scroll from "../Scroll/Scroll";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";
interface toast {
  isError: boolean;
  message: string;
}
const Home: React.FC = () => {
  const [popUp, setPopUp] = useState(false);
  const [email, setEmail] = useState(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [toast, setToast] = useState<toast | null>(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = {
      subject,
      message: body,
      from,
    };
    if (process.env.REACT_APP_API_KEY)
      emailjs.init(process.env.REACT_APP_API_KEY);
    emailjs.send("porfolio", "template_hehe", params).then(
      function (response) {
        setToast({
          message:
            "Your message has been received! I look forward to connecting with you soon",
          isError: false,
        });
        emailHandler();
      },
      function (error) {
        setToast({ message: "error", isError: true });
      }
    );
  };

  useEffect(() => {
    if (toast)
      setTimeout(() => {
        setToast(null);
      }, 2000);
  }, [toast]);

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
        {toast && (
          <Toast color={toast.isError ? "red" : ""}>{toast.message}</Toast>
        )}
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
          <EmailFormContainer animate={animate} onSubmit={(e) => sendEmail(e)}>
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
              <Label>From :</Label>
              <Subject
                style={{ marginLeft: "46px" }}
                onChange={(e) => setFrom(e.target.value)}
                type="email"
                name="email"
                required
              />
            </SubjectHolder>
            <SubjectHolder>
              <Label>Subject :</Label>
              <Subject
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                name="name"
                required
              />
            </SubjectHolder>
            <BodyHolder>
              <Label>Message :</Label>
              <Body onChange={(e) => setBody(e.target.value)} required />
            </BodyHolder>
            <ButtonHolder>
              <Button type="submit">Send</Button>
            </ButtonHolder>
          </EmailFormContainer>
        </PopUpWrapper>
      )}
    </>
  );
};

export default Home;

// Add animation on the into text , from the website of animations
