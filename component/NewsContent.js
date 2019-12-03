import React from "react";
import { usePressStateCtx, usePressDispatchCtx } from "../PressContext";
import {Container, TopSection, LogoImg, BottomSection, ThumbSection, ThumbImg, ThumbCaption, NewsListSection} from './styles/NewsContentStyle'

const NewsContent = () => {
  const initialData = usePressStateCtx().data[5];
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
