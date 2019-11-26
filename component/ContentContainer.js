import React from 'react';
import PressList from './PressList';
import NewsContent from './NewsContent';
import styled from 'styled-components'

const ContentContainer = () => {
  const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 85%;
  `;

  return (
    <ContentContainer>
      <PressList />
      <NewsContent />
    </ContentContainer>
  );
};

export default ContentContainer;