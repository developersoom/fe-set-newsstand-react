import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavContainer, FlexDiv, Btn, ArrowLi } from './styles/NavStyle'


const Nav = () => {
  return (
    <NavContainer>
      <FlexDiv>
        <Btn> <Link to="/">뉴스스탠드</Link> </Btn>
        <Btn> <Link to="/fullPressList"> 전체 언론사</Link></Btn>
        <Btn> <Link to="/myPressList">MY 뉴스</Link></Btn>
      </FlexDiv>

      <FlexDiv>
        <ArrowLi>
          <IoIosArrowDropleftCircle />
        </ArrowLi>
        <ArrowLi>
          <IoIosArrowDroprightCircle />
        </ArrowLi>
      </FlexDiv>
    </NavContainer>
  );
};

export default Nav;
