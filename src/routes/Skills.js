import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiJqueryLogo, DiReact, DiSass } from "react-icons/di";

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 8%;
  padding-bottom: 90px;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 46% 40% 42% 60%/46% 42% 41% 52%;
  &:hover {
    transition: all 5s;
    border-radius: 36% 56% 36% 60%/ 46% 46% 42% 60%;
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
const SkillsWrap = styled.div`
  padding: 6px 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 12px;
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 6px;
    border: 1px solid #333;
  }
  @media screen and (max-width: 1500px) {
    height: 280px;
    overflow-y: scroll;
    width: 80%;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 1200px) {
    width: 78%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const SkillTitle = styled.div`
  letter-spacing: 3px;
  font-size: 2rem;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 3%;
`;
const Skill = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 26%;
  font-size: 1.6rem;
  margin: 1% 1%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.accentColor};
  @media screen and (max-width: 1700px) {
    width: 30%;
  }
  @media screen and (max-width: 1200px) {
    width: 34%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Lang = styled.span`
  font-size: 20px;
  padding-left: 12px;
`;
function Skills() {
  return (
    <Wrapper>
      <SideAbout>
        <AboutMe>SKILL</AboutMe>
        <AboutMeReflect>SKILL</AboutMeReflect>
      </SideAbout>
      <LineBox>
        <StoryBox>
          <TwoLineBox>
            <SkillTitle>Skills</SkillTitle>
            <SkillsWrap>
              <Skill>
                <AiFillHtml5 />
                <Lang>HTML</Lang>
              </Skill>
              <Skill>
                <DiCss3 />
                <Lang>CSS</Lang>
              </Skill>
              <Skill>
                <DiSass />
                <Lang>Sass</Lang>
              </Skill>
              <Skill>
                <SiJavascript />
                <Lang>Javascript</Lang>
              </Skill>
              <Skill>
                <DiJqueryLogo />
                <Lang>j-query</Lang>
              </Skill>
              <Skill>
                <SiTypescript />
                <Lang>Typescript</Lang>
              </Skill>
              <Skill>
                <DiReact />
                <Lang>React</Lang>
              </Skill>
              <Skill>
                <SiNextdotjs />
                <Lang>NextJs</Lang>
              </Skill>
              <Skill>
                <SiNodedotjs />
                <Lang>NodeJs</Lang>
              </Skill>
              <Skill>
                <SiNodedotjs />
                <Lang>GraphQL</Lang>
              </Skill>
              <Skill>
                <SiAdobephotoshop />
                <Lang>Photoshop</Lang>
              </Skill>
              <Skill>
                <SiAdobeillustrator />
                <Lang>Illustrator</Lang>
              </Skill>
            </SkillsWrap>
          </TwoLineBox>
        </StoryBox>
      </LineBox>
    </Wrapper>
  );
}
export default Skills;
