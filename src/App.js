import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import About from "./routes/About";
import Project from "./routes/Project";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { blueTheme, lightTheme } from "./theme/theme";
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
    font-family: 'BinggraeMelona-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BinggraeMelona-Bold.woff') format('woff');
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
    font-size: 21px;
    cursor:url(https://img.icons8.com/ios-glyphs/30/000000/search--v1.png) 13 13,auto;
  }
  ol, ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor:url(https://img.icons8.com/small/32/000000/exclamation-mark.png) 13 13,auto;
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
            <Route path="/portfolio" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/project" element={<Project />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
