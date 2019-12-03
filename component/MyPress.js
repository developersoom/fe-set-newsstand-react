import React, { useEffect, useState } from "react";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";
import { FlexDiv, LogoContainer, LogoImg, LogoBtn } from './styles/MyPressStyle';

const MyPress = () => {
  const [myPress, setMyPress] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const pressState = usePressStateCtx();
  const dispatch = usePressDispatchCtx();

  useEffect(() => {
    setMyPress(pressState.subscribeList);
  }, []);

  useEffect(() => {
    let arr = [];
    if (myPress) {
      myPress.map(press => {
        arr.push({
          name: press.company,
          id: press.id,
          img: press.logoImgUrl
        });
      });
    }
    if (arr.length > 0) setCompanyList(arr);
  }, [myPress]);

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
