import React, { useState } from 'react';
import Nav from '../components/Nav';
import 'normalize.css';
import { contentObject } from '../consts';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Content from '../components/Content';

const IndexPage = () => {
  const [selectedContent, setSelectedContent] = useState(contentObject.about);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Nav selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
        <Content selectedContent={selectedContent} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

export default IndexPage;
