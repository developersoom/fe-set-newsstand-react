import React, { useEffect, useState } from "react";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";
import { FlexDiv, LogoContainer, LogoImg, LogoBtn } from './styles/PressContentStyle';

const PressContent = () => {
  const [data, setData] = useState("");
  const [companyList, setCompanyList] = useState("");
  const state = usePressStateCtx();
  const dispatch = usePressDispatchCtx();

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

  const subscribe = id => {
    dispatch({ type: "SUBSCRIBE", id });
  };

  return (
    companyList && (
      <FlexDiv>
        {companyList.map(company => (
          <LogoContainer key={company.id}>
            <LogoImg className="imgLogo" src={company.img} />
            <LogoBtn className="btnLogo" onClick={() => subscribe(company.id)}> 구독 </LogoBtn>
          </LogoContainer>
        ))}
      </FlexDiv>
    )
  );
};
export default PressContent;
