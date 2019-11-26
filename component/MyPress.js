import React, { useEffect, useState } from "react";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";
import styled from "styled-components";

const MyPress = () => {
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
    &:hover .btnLogo {
      display: block;
    }
    &:hover .imgLogo {
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
  const dispatch = usePressDispatchCtx();

  useEffect(() => {
    setData(state.subscribeList);
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

  const unSubscribe = id => {
    dispatch({ type: "UNSUBSCRIBE", id });
  };

  return (
    companyList && (
      <FlexDiv>
        {companyList.map(company => (
          <LogoContainer key={company.id}>
            <LogoImg className="imgLogo" src={company.img} />
            <LogoBtn className="btnLogo" onClick={() => unSubscribe(company.id)}> 해지 </LogoBtn>
          </LogoContainer>
        ))}
      </FlexDiv>
    )
  );
};
export default MyPress;
