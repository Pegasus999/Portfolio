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
import {
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";
import {
  Circle,
  CircleHolder,
  ContactContainer,
  ContactWrapper,
  Img,
  MobileContainer,
  MobileImageContainer,
  MobileWrapper,
} from "./mobilestyles";
import { Intro, IntroContainer, Welcome } from "./About/styles";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

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

  function handleCopyClick() {
    const textToCopy = "(+213)556966758";
    navigator.clipboard.writeText(textToCopy);
  }

  function handleEmailClick() {
    window.location.href = `mailto:pegadev420@gmail.com`;
  }
  return (
    <>
      <Wrapper id="AboutMe">
        <NavBar scrolled={false} />

        {!window.matchMedia("(max-width: 768px").matches ? (
          <>
            <About />
            <Talk popUp={popUpHandler} email={emailing} />
            {toast && (
              <Toast color={toast.isError ? "red" : ""}>{toast.message}</Toast>
            )}

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
                <EmailFormContainer
                  animate={animate}
                  onSubmit={(e) => sendEmail(e)}
                >
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
        ) : (
          <>
            <MobileWrapper>
              <MobileContainer>
                <MobileImageContainer>
                  <Img src={require("../../Assests/death.png")} />
                </MobileImageContainer>
                <IntroContainer>
                  <Welcome>Hi! i'm Adem</Welcome>
                  <Intro>
                    i'm a software engineer & full-stack developer, you request
                    something and i build it
                  </Intro>
                </IntroContainer>
              </MobileContainer>
            </MobileWrapper>
            <ContactWrapper>
              <ContactContainer>
                <CircleHolder>
                  <Circle
                    onClick={() => {
                      handleEmailClick();
                    }}
                  >
                    <SiGmail />
                  </Circle>
                  <Circle
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/adem-zoghmar-831064267/",
                        "_blank"
                      )
                    }
                  >
                    <AiFillLinkedin />
                  </Circle>
                  <Circle onClick={() => handleCopyClick()}>
                    <AiOutlineWhatsApp />
                  </Circle>
                  <Circle
                    onClick={() =>
                      window.open("https://twitter.com/Pegas_Dev", "_blank")
                    }
                  >
                    <BsTwitter />
                  </Circle>
                </CircleHolder>
              </ContactContainer>
            </ContactWrapper>
          </>
        )}
        <Scroll page={1} />
      </Wrapper>
    </>
  );
};

export default Home;

// Add animation on the into text , from the website of animations
