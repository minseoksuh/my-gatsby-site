import React from 'react';
import styled from 'styled-components';
import { contentObject } from '../consts';
import About from '../contents/About';

const Content = ({ selectedContent }) => {
  let content;

  switch (selectedContent) {
    case contentObject.passion:
      content = null;
      break;
    case contentObject.work:
      content = null;
      break;
    case contentObject.about:
    default:
      content = <About />;
      break;
  }

  return <Wrapper>{content}</Wrapper>;
};

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;

export default Content;
