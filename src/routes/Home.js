import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.bgColor};
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ControlBox = styled(motion.div)`
  position: relative;
  width: 90vw;
  height: 86vh;
  overflow: hidden;
  bottom: -3%;
  @media screen and (max-width: 800px) {
    margin-top: 4vh;
    width: 96vw;
  }
  @media screen and (max-width: 500px) {
    margin-top: 4vh;
    width: 98vw;
  }
`;
const Big = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 46%;
  width: 400px;
  height: 320px;
  background-color: #65c9e1;
  border-radius: 80% 30% 30% 70%/80% 40% 60% 46%;
  box-shadow: 6px 6px 1px #aaa;
  cursor: url(https://img.icons8.com/small/32/000000/exclamation-mark.png) 13 13, auto;
  @media screen and (max-width: 500px) {
    width: 360px;
    height: 266px;
  }
`;
const BorderBig = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
  width: 420px;
  height: 330px;
  border: 4px double ${(props) => props.theme.accentColor};
  border-radius: 70% 30% 30% 70%/60% 40% 60% 40%;
  &:hover {
    width: 410px;
    transition: 2s;
    border-radius: 66% 60% 30% 70%/76% 43% 70% 42%;
  }
  @media screen and (max-width: 500px) {
    width: 370px;
    height: 272px;
  }
  &:hover {
    width: 374px;
    transition: 2s;
    border-radius: 66% 60% 30% 70%/76% 43% 70% 42%;
  }
`;

const Medium = styled(motion.div)`
  position: absolute;
  top: 25%;
  left: 22%;
  width: 200px;
  height: 200px;
  background-color: #27aaaa;
  border-radius: 40% 70% 70% 30%/60% 40% 60% 40%;
  box-shadow: 3px 6px 2px #aaa;
  cursor: url(https://img.icons8.com/small/32/000000/exclamation-mark.png) 13 13, auto;
`;
const BorderMedium = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
  width: 200px;
  height: 200px;
  border: 4px double ${(props) => props.theme.accentColor};
  border-radius: 70% 30% 30% 70%/60% 40% 60% 40%;
  &:hover {
    width: 190px;
    height: 212px;
    transition: 2s;
    border-radius: 66% 60% 56% 70%/56% 52% 80% 68%;
  }
  @media screen and (max-width: 500px) {
    width: 196px;
    height: 192px;
  }
  &:hover {
    width: 200px;
    height: 182px;
    transition: 2s;
    border-radius: 66% 60% 30% 70%/76% 43% 70% 42%;
  }
`;
const Small = styled(motion.div)`
  position: absolute;
  z-index: 99;
  top: 40%;
  left: 70%;
  width: 150px;
  height: 156px;
  background-color: #e9e4e0;
  border-radius: 70% 40% 35% 60%/80% 60% 60% 40%;
  box-shadow: 6px 6px 1px #aaa;
  cursor: url(https://img.icons8.com/small/32/000000/exclamation-mark.png) 13 13, auto;
`;
const BorderSmall = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
  width: 160px;
  height: 150px;
  border: 4px double ${(props) => props.theme.accentColor};
  border-radius: 70% 30% 30% 70%/60% 40% 60% 40%;
  &:hover {
    width: 160px;
    height: 146px;
    transition: 2s;
    border-radius: 66% 60% 56% 40%/66% 43% 70% 42%;
  }
`;
const Welcome = styled.div`
  position: absolute;
  top: 0%;
  height: 22vh;
  font-family: "BinggraeMelona-Bold";
  font-size: 10vw;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.accentColor};
  color: transparent;
  @media screen and (max-width: 800px) {
    font-size: 15vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 14vw;
  }
`;
const To = styled.span`
  font-size: 5vw;
  @media screen and (max-width: 800px) {
    display: block;
    font-size: 10vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 10vw;
    display: block;
    text-align: end;
  }
`;
const Text = styled.span`
  position: absolute;
  right: 1%;
  bottom: 0%;
  font-family: "BinggraeMelona-Bold";
  font-size: 6vw;
  color: ${(props) => props.theme.accentColor};
  @media screen and (max-width: 800px) {
    text-align: end;
    font-size: 11vw;
  }
  @media screen and (max-width: 500px) {
    text-align: end;
    font-size: 13vw;
  }
`;

function Home() {
  const dragArea = useRef();
  return (
    <>
      <Wrapper>
        <ControlBox ref={dragArea}>
          <Welcome>
            WELCOME <To>To My Portfolio</To>
          </Welcome>
          <Big drag dragConstraints={dragArea}>
            <BorderBig />
          </Big>
          <Medium drag dragConstraints={dragArea}>
            <BorderMedium />
          </Medium>
          <Small drag dragConstraints={dragArea}>
            <BorderSmall />
          </Small>
          <Text>FRONTEND DEVELOPER</Text>
        </ControlBox>
      </Wrapper>
    </>
  );
}

export default Home;
