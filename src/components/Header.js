import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBlueAtom } from "../atoms";
import { FaCloud } from "react-icons/fa";

const Items = styled.ul`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.accentColor};
`;
const Item = styled.li`
  display: block;
  position: relative;
  font-size: 20px;
  padding: 0 20px;
`;
const Dot = styled.span`
  position: absolute;
  left: 50%;
  top: 23px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.accentColor};
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
`;

function Header() {
  const setBlueAtom = useSetRecoilState(isBlueAtom);
  const toggleBlueAtom = () => {
    setBlueAtom((prev) => !prev);
  };
  return (
    <Items>
      <Item>
        <Link to="/">
          Home
          <Dot />
        </Link>
      </Item>
      <Item>
        <Link to="/about">
          About
          <Dot />
        </Link>
      </Item>
      <Item>
        <Link to="/project">
          Project
          <Dot />
        </Link>
      </Item>
      <Item>
        <Link to="/link">
          Line
          <Dot />
        </Link>
      </Item>
      <Button onClick={toggleBlueAtom}>
        <FaCloud />
      </Button>
    </Items>
  );
}

export default Header;
