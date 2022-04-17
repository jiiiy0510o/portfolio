import styled from "styled-components";

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
const MainBox = styled.div`
  width: 50vw;
  height: 72vh;
  padding: 20px 32px;
  background-color: ${(props) => props.theme.bgColor};
  border: 3px solid #036df3;
`;

function Project() {
  return (
    <Wrapper>
      <SideAbout>
        <ProjectTitle>PROJECT</ProjectTitle>
        <ProjectTitle style={{ top: "16vh", opacity: "0.2", transform: "rotateX(180deg)" }}>PROJECT</ProjectTitle>
      </SideAbout>
      <MainBox></MainBox>
    </Wrapper>
  );
}

export default Project;
