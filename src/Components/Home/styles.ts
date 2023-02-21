import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const entrence = keyframes`
 0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    opacity: 1;
  }
`;
const exit = keyframes`
 0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    opacity: 1;
  }`;
export const PopUpWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(1, 1, 1, 0.7);
`;
interface popUp {
  animate: boolean;
}
export const PopUpContainer = styled.div<popUp>`
  width: 30%;
  height: 70%;
  background-color: var(--lessdark);
  border-radius: 6px;
  padding: 10px;
  animation: ${(props) => (props.animate ? exit : entrence)} 0.5s ease-in-out;
  z-index: 3;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconHolder = styled.div`
  width: 100%;
  flex: 0.25;
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;
`;
export const Title = styled.h1`
  color: var(--white);
  font-family: "Poppins", sans-serif;
  opacity: 0.3;
`;
export const Icon = styled.div`
  height: fit-content;
  font-weight: bold;
  font-size: 40px;
  color: var(--white);
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const NumberHolder = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: var(--yellow);
  align-items: flex-end;
`;

export const QrHolder = styled.div`
  width: 100%;
  height: 70%;
  flex: 1;
  display: flex;
  justify-content: center;
  scale: 0.7;
  align-items: center;
`;

export const Image = styled.img``;

export const EmailFormContainer = styled.form<popUp>`
  width: 50%;
  height: fit-content;
  background-color: var(--lessdark);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  padding: 10px;
  animation: ${(props) => (props.animate ? exit : entrence)} 0.5s ease-in-out;
`;

export const EmailHolder = styled.div`
  width: 100%;
  flex: 1;
  padding-left: 100px;
  padding-bottom: 6px;
  padding-top: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const Email = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  width: 72%;
  color: var(--white);
  opacity: 0.8;
  padding-left: 20px;
  margin-left: 64px;
`;
export const Label = styled.label`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: var(--yellow);
  opacity: 0.8;
`;
export const SubjectHolder = styled(EmailHolder)`
  justify-content: flex-start;
  align-items: center;
`;
export const Subject = styled.input`
  width: 72%;
  height: 50px;
  margin-left: 23px;
  border-radius: 16px;
  padding: 16px;
  background-color: var(--lessdark);
  color: rgba(136, 136, 136, 0.9);
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export const BodyHolder = styled(EmailHolder)`
  align-items: start;
  justify-content: flex-start;
  flex: 2;
`;
export const Body = styled.textarea`
  height: 300px;
  vertical-align: top;
  width: 72%;
  padding: 16px;
  border-radius: 16px;
  background-color: var(--lessdark);
  color: rgba(136, 136, 136, 0.9);
  margin-left: 10px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const ButtonHolder = styled(EmailHolder)`
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
`;
export const Button = styled.button`
  padding: 10px;
  margin-right: 10px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--yellow);
  color: var(--yellow);
  background-color: var(--lessdark);
  width: 80px;
  cursor: pointer;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  &:hover {
    background-color: var(--yellow);
    color: var(--lessdark);
  }
`;

const easeinanimation = keyframes`
  0%{
    left: -100px;
  }
  100%{
    left: 20px;
  }
`;
interface color {
  color?: string;
}
export const Toast = styled.div<color>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: fit-content;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? props.color : "var(--yellow)")};
  color: var(--lessdark);
  z-index: 30;
  animation: ${easeinanimation} 0.4s;
  cursor: default;
`;
