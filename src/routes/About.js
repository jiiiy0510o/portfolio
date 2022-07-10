import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  top: 7vh;
  height: 93vh;
  background: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
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
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const LineBox = styled.div`
  position: relative;
  width: 68vw;
  height: 84vh;
  padding: 20px 32px;
  border: 1px solid ${(props) => props.theme.accentColor};
  margin: 55px 30px;
  border-radius: 46% 56% 36% 60%/ 46% 50% 42% 50%;
  &:hover {
    transition: all 5s;
    border-radius: 58% 52% 36% 60%/ 56% 42% 42% 50%;
  }
  @media screen and (max-width: 1000px) {
    width: 96vw;
    height: 68vh;
    margin: 0 auto;
    padding: 10px;
  }
  @media screen and (max-width: 500px) {
    height: 58vh;
    padding: 10px;
  }
`;
const TwoLineBox = styled.div`
  position: absolute;
  top: 3%;
  left: 0.8%;
  width: 98%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 46% 40% 42% 60%/46% 42% 41% 52%;
  &:hover {
    transition: all 5s;
    border-radius: 36% 56% 36% 60%/ 46% 46% 42% 60%;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const StoryBox = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 56% 58% 33% 60%/ 66% 50% 46% 54%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    transition: all 5s;
    border-radius: 56% 56% 36% 60%/ 52% 50% 42% 50%;
  }
  @media screen and (max-width: 500px) {
    border-radius: 56% 58% 36% 60%/ 66% 50% 46% 54%;
    width: 100%;
    height: 100%;
  }
`;
const AboutMe = styled.div`
  position: absolute;
  left: 3vw;
  top: 3vh;
  height: 6.5vh;
  color: ${(props) => props.theme.accentColor};
  font-family: "BinggraeMelona-Bold";
  font-size: 5vw;
  @media screen and (max-width: 1300px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const AboutMeReflect = styled.div`
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
const Text = styled.p`
  padding: 30px 120px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.bgColor};
  line-height: 1.68;
  @media screen and (max-width: 1200px) {
    padding: 30 36px;
    font-size: 1.18rem;
  }
  @media screen and (max-width: 660px) {
    padding: 0 38px;
    font-size: 1.06rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 40px;
    font-size: 0.96rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0 50px;
    font-size: 0.8rem;
  }
`;
function About() {
  return (
    <Wrapper>
      <SideAbout>
        <AboutMe>ABOUT ME</AboutMe>
        <AboutMeReflect>ABOUT ME</AboutMeReflect>
      </SideAbout>
      <LineBox>
        <StoryBox>
          <Text>
            안녕하세요. 하루하루 자라나는 개발자 박지영입니다. 친구의 제안으로
            신촌 그린컴퓨터아카데미에서 퍼블리셔 과정(Html, css, j-query)을
            수료하였습니다. 배우면서 다양한 이벤트에 따라 움직이는 것에 관심이
            생겨 이후 Vanilla Javascript, React 등을 공부하였습니다. 다양한
            사용자의 입장에서 좀 더 편하고 접근성과 표준성을 준수한 웹 페이지를
            그려낼 수 있도록 많이 고민하고 자기계발에 힘써 좋은 코드를 만들어낼
            수 있는 프론트엔드 개발자가 될 수 있도록 노력하겠습니다. 감사합니다.
          </Text>
        </StoryBox>
        <TwoLineBox></TwoLineBox>
      </LineBox>
    </Wrapper>
  );
}
export default About;
