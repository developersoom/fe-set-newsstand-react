import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  background-color: #ffdc34;
  display: flex;
  flex-flow: column;
  padding: 2rem;
  justify-content: space-around;
  color: #110133;
`;

export const TopSection = styled.div`
  display: flex;
  height: 10%;
`;

export const BottomSection = styled.div`
  display: flex;
  height: 80%;
`;

export const LogoImg = styled.img`
  width: 100px;
`;

export const ThumbSection = styled.div`
  width: 35%;
  position: relative;
`;

export const ThumbImg = styled.img`
  width: 100%;
  padding-top: 1rem;
  height: 80%;
`;

export const ThumbCaption = styled.p`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  text-align: center;
`;
export const NewsListSection = styled.ul`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: left;
  padding-left: 1rem;
  height: 100%;
`;
