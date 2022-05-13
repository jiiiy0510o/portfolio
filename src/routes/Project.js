import styled from "styled-components";
import Absolut from "../images/absolut.png";
import KoKoa from "../images/kokoa.png";
import Chrome from "../images/chrome.png";
import ToDo from "../images/todo.jpg";
import Port from "../images/port.jpg";
import Paint from "../images/paint.png";

const Wrapper = styled.div`
  position: relative;
  top: 7vh;
  width: 100vw;
  height: 93vh;
  padding: 20px;
  margin: 0 auto;
  background: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SideAbout = styled.aside`
  top: 7vh;
  width: 32vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1300px) {
    width: 26vw;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const MainBox = styled.div`
  width: 68vw;
  height: 72vh;
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
    background-color: ${(props) => props.theme.accentColor};
    border-radius: 6px;
    border: 1px solid #333;
  }
  @media screen and (max-width: 1000px) {
    width: 94vw;
    height: 78vh;
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
  @media screen and (max-width: 1300px) {
    font-size: 4.5vw;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const ProjectTitleReflect = styled.div`
  position: absolute;
  left: 3vw;
  top: 16vh;
  opacity: 0.2;
  height: 6.5vh;
  color: ${(props) => props.theme.accentColor};
  font-family: "BinggraeMelona-Bold";
  font-size: 5vw;
  transform: rotateX(180deg);
  @media screen and (max-width: 1800px) {
    display: none;
  }
`;
const ProjectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
  border-bottom: 1px solid #bbb;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 12px 0;
  }
`;
const A = styled.a`
  padding: 16px 0;
  text-align: end;
  font-size: 1.2rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
  &:hover {
    color: #036df3;
  }
`;
const Img = styled.img`
  width: 44%;
  height: 56%;
  padding: 16px 0;
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
const Description = styled.div`
  width: 46%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  word-break: break-all;
  padding: 0 12px;
`;
const Title = styled.h3`
  padding: 10px 0;
  @media screen and (max-width: 1000px) {
    padding: 10px 0;
    margin-top: 6px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0;
    margin-top: 6px;
    font-size: 1.1rem;
  }
`;
const Text = styled.p`
  padding: 12px 0;
  font-size: 1.06rem;
  color: #666;
  line-height: 1.28;
  @media screen and (max-width: 1000px) {
    padding: 0;
    margin-top: 8px;
    font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0;
    margin-top: 10px;
    font-size: 0.96rem;
  }
`;

function Project() {
  return (
    <Wrapper>
      <SideAbout>
        <ProjectTitle>PROJECT</ProjectTitle>
        <ProjectTitleReflect>PROJECT</ProjectTitleReflect>
      </SideAbout>
      <MainBox>
        <ProjectBox>
          <Img src={Absolut} alt="thumbnail"></Img>
          <Description>
            <Title>앱솔루트</Title>
            <Text>
              HTML, CSS, J-Query를 이용하여 중복되는 기능 부분을 제외하고 앱솔루트 홈페이지를 만들었습니다.
              <br /> 반응형 웹사이트이고, 메인페이지 2개와 슬라이드, 메뉴탭 등을 구성하였습니다.
            </Text>
            <A href="https://jiiiy0510o.github.io/Absolut/" target="_blank" rel="noreferrer">
              이동하기
            </A>
          </Description>
        </ProjectBox>
        <ProjectBox>
          <Img src={KoKoa} alt="thumbnail"></Img>
          <Description>
            <Title>카카오톡 클론</Title>
            <Text> HTML과 CSS를 이용하여 클론 카카오톡을 만들었습니다. </Text>
            <A href="https://jiiiy0510o.github.io/kokoa-clone-2022/" target="_blank" rel="noreferrer">
              이동하기
            </A>
          </Description>
        </ProjectBox>
        <ProjectBox>
          <Img src={Chrome} alt="thumbnail"></Img>
          <Description>
            <Title>크롬앱</Title>
            <Text> Vanillajavascript로 시계, 위치와 날씨, 투두리스트, 랜덤 배경, 명언 등을 만들었습니다. </Text>
            <A href="https://jiiiy0510o.github.io/chrome-2022/" target="_blank" rel="noreferrer">
              이동하기
            </A>
          </Description>
        </ProjectBox>
        <ProjectBox>
          <Img src={Paint} alt="thumbnail"></Img>
          <Description>
            <Title>그림판</Title>
            <Text>javascript canvas를 이용하여 그림판을 만들었습니다. </Text>
            <A href="https://jiiiy0510o.github.io/paintjs/" target="_blank" rel="noreferrer">
              이동하기
            </A>
          </Description>
        </ProjectBox>
        <ProjectBox>
          <Img src={Port} alt="thumbnail"></Img>
          <Description>
            <Title>포트폴리오</Title>
            <Text>
              React, Styled-Components, framer-motion, Recoil 등을 이용해 반응형으로 포트폴리오 웹페이지를 만들었습니다.
            </Text>
            <A href="https://jiiiy0510o.github.io/portfolio/" target="_blank" rel="noreferrer">
              이동하기
            </A>
          </Description>
        </ProjectBox>
        <ProjectBox>
          <Img src={ToDo} alt="thumbnail"></Img>
          <Description>
            <Title>리액트 네이티브 ToDo</Title>
            <Text>Expo Go를 이용하여 ReactNative로 ToDo를 만들었고, 생성, 추가, 삭제, 저장이 가능합니다.</Text>
            <A href="https://expo.dev/@jiiiy0510o/simpletodo" target="_blank" rel="noreferrer">
              QR코드로 이동하기
            </A>
          </Description>
        </ProjectBox>
      </MainBox>
    </Wrapper>
  );
}

export default Project;
