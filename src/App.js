import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import About from "./routes/About";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { blueTheme, lightTheme } from "./theme/theme";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isBlueAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'DOSGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
}
  body {
    font-family: 'GangwonEdu_OTFBoldA';
    line-height: 1.2;
  }
  ol, ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
      cursor: pointer;
  }
`;

function App() {
  const isBlue = useRecoilValue(isBlueAtom);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={isBlue ? blueTheme : lightTheme}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
