import React from 'react';
import PressList from './PressList';
import NewsContent from './NewsContent';
import {ContentContainerFlex} from './styles/ContainerStyle'

const ContentContainer = () => {
  return (
    <ContentContainerFlex>
      <PressList />
      <NewsContent />
    </ContentContainerFlex>
  );
};

export default ContentContainer;