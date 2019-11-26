import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";


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
  const Btn = styled.div`
    width: 90px;
    height: 20px;
    cursor: pointer;
    padding: 0.5rem 0.3rem 0.3rem 0.3rem;
    font-size: 0.8rem;
    background-color: #ccc;
    margin: 0 1rem;
    text-align: center;
    border-radius: 2rem;
    color: black;
  `

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
