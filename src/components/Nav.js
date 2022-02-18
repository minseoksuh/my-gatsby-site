import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { contentObject } from '../consts';

const Layout = ({ selectedContent, setSelectedContent }) => {
  return (
    <Wrapper>
      <NameOccupationInfo>
        Minseok Suh
        <OccupationSpan>Frontend Developer</OccupationSpan>
      </NameOccupationInfo>
      <ContentButton
        selected={selectedContent === contentObject.about}
        onClick={() => {
          setSelectedContent(contentObject.about);
        }}>
        About
      </ContentButton>
      <ContentButton
        selected={selectedContent === contentObject.passion}
        onClick={() => {
          setSelectedContent(contentObject.passion);
        }}>
        Passion
      </ContentButton>
      <ContentButton
        selected={selectedContent === contentObject.work}
        onClick={() => {
          setSelectedContent(contentObject.work);
        }}>
        Work
      </ContentButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: 17%;
  height: 100%;
  background-color: #113133;
  padding: 30px 0;
`;

const NameOccupationInfo = styled.div`
  margin-bottom: 50px;
  padding: 10px 20px;
  color: #fff;
`;

const OccupationSpan = styled.span`
  display: block;
  font-size: 14px;
  color: #f3a480;
`;

const ContentButton = styled.button`
  display: block;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    border-left: 5px solid rgba(255, 255, 255, 0.3);
  }

  ${({ selected }) =>
    selected &&
    css`
      border-left: 5px solid rgba(255, 255, 255, 0.3);
    `}
`;

export default Layout;
