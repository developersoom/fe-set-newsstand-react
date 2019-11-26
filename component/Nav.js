import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import styled from "styled-components";

const Nav = () => {
  const NavContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid slategray;
    height: 15%;
    width: 100%;
    align-items: center;
    font-size: 1rem;
  `;
  const ArrowLi = styled.li`
    font-size: 1.7rem;
  `;
  
  const FlexDiv = styled.div`display: flex`

  return (
    <NavContainer>
      <FlexDiv>
        <span>뉴스스탠드 </span>
        <span>전체 언론사</span>
        <span>MY 뉴스</span>
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
