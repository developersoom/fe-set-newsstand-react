import React, { useEffect, useState } from "react";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";
import styled from "styled-components";

const PressContent = () => {
  const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #00918e;
  `;
  const LogoContainer = styled.div`
    width: 100px;
    height: 30px;
    text-align: center;
    margin: 0.5rem;
    background: white;
    cursor: pointer;
    &:hover .btnLogo{
      display: block;
    }
    &:hover .imgLogo{
      display: none;
    }
  `;

  const LogoImg = styled.img``;
  const LogoBtn = styled.button`
    width: 100%;
    font-size: 1rem;
    display: none;
    cursor: pointer;
    padding-top: 6px;
  `;

  const [data, setData] = useState("");
  const [companyList, setCompanyList] = useState("");
  const state = usePressStateCtx();

  useEffect(() => {
    setData(state.data);
  }, []);

  useEffect(() => {
    let arr = [];
    if (data) {
      data.forEach(press => {
        arr.push({
          name: press.company,
          id: press.id,
          img: press.logoImgUrl
        });
      });
    }

    if (arr.length > 0) setCompanyList(arr);
  }, [data]);

  return (
    companyList && (
      <FlexDiv>
        {companyList.map(company => (
          <LogoContainer key={company.id}>
            <LogoImg className="imgLogo" src={company.img} />
            <LogoBtn className="btnLogo"> 구독 </LogoBtn>
          </LogoContainer>
        ))}
      </FlexDiv>
    )
  );
};
export default PressContent;
