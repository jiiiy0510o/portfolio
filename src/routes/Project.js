import styled from "styled-components";
import Absolut from "../images/absolut.png";
import KoKoa from "../images/kokoa.png";
import Chrome from "../images/chrome.png";
import ToDo from "../images/todo.jpg";
import Port from "../images/port.jpg";

const Wrapper = styled.div`
  position: relative;
  top: 7vh;
  height: 93vh;
  background: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SideAbout = styled.aside`
  top: 7vh;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const MainBox = styled.div`
  width: 60vw;
  height: 72vh;
  padding: 20px;
  background-color: #ffffff;
  border: 3px solid #036df3;
  overflow-y: auto;
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 12px;
    background-color: #79a7d0;
    border-radius: 6px;
  }
  @media screen and (max-width: 500px) {
    width: 92vw;
    height: 78vh;
  }
`;
const ProjectTitle = styled.div`
  position: absolute;
  left: 3vw;
  top: 3vh;
  height: 6.5vh;
  color: ${(props) => props.theme.accentColor};
  font-family: "BinggraeMelona-Bold";
  font-size: 5vw;
`;

const ProjectBox = styled.div`
  &:last-child {
    border-bottom: none;
  }
  border-bottom: 1px solid #bbb;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 22px 0;
  }
`;
const A = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Img = styled.img`
  width: 42%;
  height: 56%;
  padding: 16px 0;
  @media screen and (max-width: 500px) {
    padding: 0;
    margin-right: 12px;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  word-break: break-all;
  padding: 0 12px;
`;
const Title = styled.h4``;

const Text = styled.p`
  padding: 6px;
  font-size: 16px;
  @media screen and (max-width: 500px) {
    padding: 0;
    margin-top: 6px;
  }
`;

function Project() {
  return (
    <Wrapper>
      <SideAbout>
        <ProjectTitle>PROJECT</ProjectTitle>
        <ProjectTitle style={{ top: "16vh", opacity: "0.2", transform: "rotateX(180deg)" }}>PROJECT</ProjectTitle>
      </SideAbout>
      <MainBox>
        <ProjectBox>
          <A href="https://jiiiy0510o.github.io/Absolut/" target="_blank" rel="noreferrer">
            <Img src={Absolut} alt="thumbnail"></Img>
            <Description>
              <Title>앱솔루트</Title>
              <Text>HTML과 CSS를 이용하여 앱솔루트 홈페이지를 만들었습니다. 반응형 웹사이트입니다. </Text>
            </Description>
          </A>
        </ProjectBox>
        <ProjectBox>
          <A href="https://jiiiy0510o.github.io/kokoa-clone-2022/" target="_blank" rel="noreferrer">
            <Img src={KoKoa} alt="thumbnail"></Img>
            <Description>
              <Title>카카오톡 클론</Title>
              <Text>HTML과 CSS를 이용하여 카카오톡을 만들었습니다. </Text>
            </Description>
          </A>
        </ProjectBox>
        <ProjectBox>
          <A href="https://jiiiy0510o.github.io/chrome-2022/" target="_blank" rel="noreferrer">
            <Img src={Chrome} alt="thumbnail"></Img>
            <Description>
              <Title>크롬앱</Title>
              <Text> javascript로 시계, 위치와 날씨, 투두리스트 그리고 랜덤명언 등을 만들었습니다. </Text>
            </Description>
          </A>
        </ProjectBox>
        <ProjectBox>
          <A href="https://jiiiy0510o.github.io/chrome-2022/">
            <Img src={Port} alt="thumbnail"></Img>
            <Description>
              <Title>크롬앱</Title>
              <Text> javascript로 시계, 위치와 날씨, 투두리스트 그리고 랜덤명언 등을 만들었습니다. </Text>
            </Description>
          </A>
        </ProjectBox>
        <ProjectBox>
          <A href="https://jiiiy0510o.github.io/chrome-2022/">
            <Img src={Port} alt="thumbnail"></Img>
            <Description>
              <Title> 포트폴리오</Title>
              <Text> React, Styled-Components, framer-motion, Recoil을 이용해 포트폴리오를 만들었습니다. </Text>
            </Description>
          </A>
        </ProjectBox>
        <ProjectBox>
          <A href="https://expo.dev/@jiiiy0510o/simpletodo">
            <Img src={ToDo} alt="thumbnail"></Img>
            <Description>
              <Title>리액트 네이티브 ToDo</Title>
              <Text> Expo Go를 이용하여 ReactNative로 ToDo를 만들었고, 생성, 추가, 삭제, 저장이 가능합니다. </Text>
              <Text>QR코드로 이동하기</Text>
            </Description>
          </A>
        </ProjectBox>
      </MainBox>
    </Wrapper>
  );
}

export default Project;
