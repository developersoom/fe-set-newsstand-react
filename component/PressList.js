import React from "react";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";
import {PressContainer, PressItem} from './styles/PressListStyle'

const PressList = () => {
  const pressList = usePressStateCtx().data;
  const dispatch = usePressDispatchCtx();

  const onChange = (index) => dispatch({ type: "CHANGEPRESS", index });

  if (pressList.length > 0) {
    return (
      <PressContainer>
        {pressList.map((press, index) => (
          <PressItem onClick={() => { onChange(index) }} key={press.id}>{press.company}</PressItem>
        ))}
      </PressContainer>
    );
  }
  return <div>로딩중...</div>
};

export default PressList;
