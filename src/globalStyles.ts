import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    	margin: 0;
      padding: 0;
      scroll-behavior: smooth;
      font-family: 'Arvo', serif;
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #888;
      }
	  }
    body {
      background-color: var(--night);
    }
    :root {
      --night: #090A0D;
      --white: #F3F3F3;
      --lessdark: #16181A;
      --yellow: #fbd87b;
    }
`;
