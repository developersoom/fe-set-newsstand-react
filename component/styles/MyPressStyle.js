import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #00918e;
`;
export const LogoContainer = styled.div`
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

export const LogoImg = styled.img``;
export const LogoBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  display: none;
  cursor: pointer;
  padding-top: 6px;
`;
