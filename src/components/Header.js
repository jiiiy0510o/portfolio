import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { isBlueAtom } from "../atoms";
import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";

const Items = styled.ul`
  z-index: 99;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.accentColor};
  position: fixed;
  top: 0;
`;
const Item = styled.li`
  position: relative;
  padding: 0 20px;
  @media screen and (max-width: 800px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 500px) {
    right: -6%;
    padding: 0 12px;
  }
`;
const Button = styled.button`
  border: 3px double ${(props) => props.theme.accentColor};
  width: 15px;
  height: 15px;
  border-radius: 10px;
  margin: 0 10px;
  padding: 8px;
  background-color: transparent;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
  @media screen and (max-width: 500px) {
    display: block;
    margin-left: 26px;
  }
`;
const Contact = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 26px;
`;
const A = styled.a`
  display: flex;
  justify-content: center;
  &:hover {
    color: #036df3;
  }
`;
const LineBox = styled.div`
  margin-right: 20px;
  width: 6vw;
  height: 1px;
  background-color: ${(props) => props.theme.accentColor};
`;

function Header() {
  const setBlueAtom = useSetRecoilState(isBlueAtom);
  const toggleBlueAtom = () => {
    setBlueAtom((prev) => !prev);
  };
  return (
    <Items>
      <Item>
        <NavLink to="/" exact={true} style={({ isActive }) => ({ color: isActive ? "#036DF3" : null })}>
          Home
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "#036DF3" : null })}>
          About
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/project" style={({ isActive }) => ({ color: isActive ? "#036DF3" : null })}>
          Project
        </NavLink>
      </Item>
      <Item>
        <Contact>
          <LineBox></LineBox>
          <A href="https://jiiiy0510o.tistory.com/" target="_blank" rel="noreferrer">
            <BiBookAlt style={{ marginRight: "20px" }} />
          </A>
          <A href="https://github.com/jiiiy0510o" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </A>
        </Contact>
      </Item>
      <Button onClick={toggleBlueAtom} />
    </Items>
  );
}

export default Header;
