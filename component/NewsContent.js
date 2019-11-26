import React from "react";
import styled from "styled-components";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";

const NewsContent = () => {
  const initialData = usePressStateCtx().data[5];

  const Container = styled.div`
    width: 85%;
    background-color: #ffdc34;
    display: flex;
    flex-flow: column;
    padding: 2rem;
    justify-content: space-around;
    color: #110133;
  `;

  const TopSection = styled.div`
    display: flex;
    height: 10%;
  `;

  const BottomSection = styled.div`
    display: flex;
    height: 80%;
  `;

  const LogoImg = styled.img`
    width: 100px;
  `;

  const ThumbSection = styled.div`
    width: 35%;
    position: relative;
  `;

  const ThumbImg = styled.img`
    width: 100%;
    padding-top: 1rem;
    height: 80%;
  `;

  const ThumbCaption = styled.p`
    position: absolute;
    width: 100%;
    bottom: 1rem;
    background-color: rgb(0, 0, 0, 0.7);
    color: white;
    text-align: center;
  `;
  const NewsListSection = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: left;
    padding-left: 1rem;
    height: 100%;
  `;

  const newsContent = usePressStateCtx().showData || initialData;

  return (
    <>
      <Container key={newsContent.id}>
        <TopSection>
          <LogoImg src={newsContent.logoImgUrl} />
        </TopSection>
        <BottomSection>
          <ThumbSection>
            <ThumbImg src={newsContent.thumbnews.imageUrl} />
            <ThumbCaption>{newsContent.thumbnews.text} </ThumbCaption>
          </ThumbSection>
          <NewsListSection>
            {newsContent.newslist.map((news, idx) => (
              <li key={idx}>{news}</li>
            ))}
          </NewsListSection>
        </BottomSection>
      </Container>
    </>
  );
};

export default NewsContent;
