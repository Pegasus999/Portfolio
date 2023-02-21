import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    	margin: 0;
      padding: 0;
      scroll-behavior: smooth;
      
      font-family: 'Arvo', serif;
     ::-webkit-scrollbar {
    width: 1px;
    }

	  }
    body {
       overflow: hidden; 
      background-color: var(--night);
    }
    :root {
      --night: #090A0D;
      --white: #F3F3F3;
      --lessdark: #16181A;
      --yellow: #fbd87b;
    }
`;
